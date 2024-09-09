import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { options } from './options';
import { Location } from '@angular/common';

@Component({
    selector: 'app-add-localetext-myform',
    templateUrl: './add-localetext-myform.component.html',
    styleUrls: ['./add-localetext-myform.component.scss']
})
export class AddLocaletextMyformComponent implements OnInit {

    formItems: any = options;
    url: string = "api/v1/locale-translation-texts/"
    extra_fields: any
    originalInstance: any
    //Required Fieds: locale, text
    //Other fields: translated_text
    formGroupOrder = [
        // ["locale", "text"],
        ["translated_text"]
    ]
    args = {}
    instance: any;

    constructor(private route: ActivatedRoute, private router: Router, private location: Location) {
        this.route.queryParams.subscribe(params => {
            if (this.router.getCurrentNavigation()?.extras.state) {
                const instance = this.router.getCurrentNavigation()?.extras.state;
                console.log(instance)
                if (instance?.hasOwnProperty("id")) {
                    this.instance = {
                        ...instance,
                        "translated_text": instance["translated"]
                    }
                }
            }
        })
    }

    ngOnInit() {

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
            this.location.back()
        }, 300)
    }


}
