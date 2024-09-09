import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { LocalizationComponent } from '../../localization.component';
import { options } from './options';
import { Location } from '@angular/common';

@Component({
    selector: 'app-add-locale-myform',
    templateUrl: './add-locale-myform.component.html',
    styleUrls: ['./add-locale-myform.component.scss']
})
export class AddLocaleMyformComponent extends LocalizationComponent {

    formItems: any = options;
    url: string = "api/v1/translation-locales/"
    extra_fields: any
    originalInstance: any

    //Required Fieds: name, country_code, language_code
    //Other fields: text_translations_details, translations, active
    formGroupOrder = [
        ["name"],
        ["country_code", "language_code"],
        ["active"]
    ]
    args = {}
    instance: any;

    constructor(public override route: ActivatedRoute, private router: Router,
        private location: Location) {
        super(route)

        this.route.queryParams.subscribe(params => {
            if (this.router.getCurrentNavigation()?.extras.state) {
                const instance = this.router.getCurrentNavigation()?.extras.state;
                if (instance?.hasOwnProperty("id")) {
                    this.instance = instance
                }
            }
        })
    }

    override ngOnInit() {
        super.ngOnInit()
    }

    preSendData(data: any) {
        data["HsPresave"] = true
        return data
    }

    onValidatedData(data: any) {
        console.log(data)
    }

    async onPostedData(data: any) {
        // Do something
        setTimeout(() => {
            // this.router.navigate([this.parentSegments, ''])
            this.location.back()
        }, 300)
    }


}
