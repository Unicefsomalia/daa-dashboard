import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { LocalizationComponent } from '../../localization.component';

@Component({
    selector: 'app-view-locale',
    templateUrl: './view-locale-mytables.component.html',
    styleUrls: ['./view-locale-mytables.component.scss']
})
export class ViewLocaleMyTablesComponent extends LocalizationComponent {
    instance: any;
    id: any;
    providedInstance: any;
    routeParamSub?: Subscription;

    routeSub?: Subscription;
    hasInstance: boolean = false
    instanceUrl = "api/v1/translation-locales"


    // Table
    args: any = {}
    enableDelete: boolean = true
    enableExport: boolean = true
    enableEdit: boolean = true
    showNumbering = true
    pageSize: number = 10
    formFilters: any = { "paginator": "standard" }
    headers = ["original", "translated"];

    is_translated = false
    listUrl = "api/v1/locale-translation-texts/stats/id"
    // routeSegments: String[] = [];

    constructor(public override route: ActivatedRoute, public router: Router,) {
        super(route)
        if (this.router.getCurrentNavigation()?.extras.state) {
            const instance = this.router.getCurrentNavigation()?.extras.state;
            if (instance?.hasOwnProperty("id")) {
                this.providedInstance = instance;
            }
        }

        this.routeParamSub = this.route.queryParams.subscribe(params => {
            console.log(params)
            this.args = { ...this.args, ...params }
            if (params.hasOwnProperty("not_translated")) {
                this.is_translated = params["not_translated"] == 'true' ? false : true
                console.log(`This is trans ${this.is_translated}`)
            }
        });

        this.routeSub = this.route.params.subscribe(params => {
            console.log(params);
            this.id = params['id'];
            this.args.locale = this.id;
        });
    }
    exportTriggerd(event: any) {
        this.router.navigate(['../reports/downloads']);
    }
    async handleActions(action: any) {
        const data = action.data;

        if (action.name == "Edit") {
            // id and name are what the multiselect expects for update
            //   data.school = { id: data.school, name: data.school_name }
            // await this.route.navigate(['locales', 'add-locale'], { state: data });

            await this.router.navigate([this.parentSegments, 'update-locale-text'], { state: data });
        }
    }
    async onCheckboxChanged() {
        console.log(this.is_translated)
        console.log(this.route.snapshot)
        console.log(this.routeSegments)


        this.router.navigate([...this.parentSegments, ...this.routeSegments], { queryParams: { ...this.args, not_translated: !this.is_translated } });
    }




    setIntance(instance: any) {
        console.log("Got the insance as")
        this.instance = instance;
        this.hasInstance = true
    }
    onAddedUpdate(added: any) {
        window.location.reload();
    }
    override ngOnInit(): void {
        super.ngOnInit()
    }

    override ngOnDestroy(): void {
        super.ngOnDestroy()
        this.routeSub?.unsubscribe();
        this.routeParamSub?.unsubscribe();
    }

}
