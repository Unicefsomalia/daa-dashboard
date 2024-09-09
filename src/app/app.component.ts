import { Component, HostListener, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { ConstantsService } from './common/services/constants.service';
import { SessionService } from './session/session.service';
import { CookieService } from './core/services/cookie.service';
import { Router } from '@angular/router';
import { MatIconRegistry } from '@angular/material/icon';
import { DomSanitizer } from "@angular/platform-browser";
import * as mixpanel from 'mixpanel-browser';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-root',
  template: '<router-outlet></router-outlet>'
})
export class AppComponent implements OnInit{
  constructor(translate: TranslateService, private _constant: ConstantsService, private session: SessionService,
    private cookieService: CookieService, private router: Router,
    private matIconRegistry: MatIconRegistry, private domSanitizer: DomSanitizer) {
    translate.addLangs(['en', 'fr']);
    translate.setDefaultLang('en');

    const browserLang: string = translate.getBrowserLang();
    translate.use(browserLang.match(/en|fr/) ? browserLang : 'en');

    const rememberMe = this._constant.rememberUser;
    const activeSession = JSON.parse(window.sessionStorage.getItem('activeSession'));

    if (!activeSession && !rememberMe) {
      // console.log('site logged out')
      this.cookieService.deleteCookie('current_user');
      window.localStorage.clear();
    }


    //custom icons
    this.matIconRegistry.addSvgIcon(
      `download`,
      this.domSanitizer.bypassSecurityTrustResourceUrl("../assets/icons/download.svg")
    );

    this.matIconRegistry.addSvgIcon(
      `arrow-down`,
      this.domSanitizer.bypassSecurityTrustResourceUrl("../assets/icons/arrow-down.svg")
    );

    this.matIconRegistry.addSvgIcon(
      `book`,
      this.domSanitizer.bypassSecurityTrustResourceUrl("../assets/icons/book.svg")
    );

    this.matIconRegistry.addSvgIcon(
      `cancel`,
      this.domSanitizer.bypassSecurityTrustResourceUrl("../assets/icons/cancel.svg")
    );

    this.matIconRegistry.addSvgIcon(
      `filter`,
      this.domSanitizer.bypassSecurityTrustResourceUrl("../assets/icons/filter.svg")
    );

    this.matIconRegistry.addSvgIcon(
      `reset`,
      this.domSanitizer.bypassSecurityTrustResourceUrl("../assets/icons/reset.svg")
    );

    this.matIconRegistry.addSvgIcon(
      `report`,
      this.domSanitizer.bypassSecurityTrustResourceUrl("../assets/icons/report.svg")
    );

    this.matIconRegistry.addSvgIcon(
      `group`,
      this.domSanitizer.bypassSecurityTrustResourceUrl("../assets/icons/group.svg")
    );

    this.matIconRegistry.addSvgIcon(
      `calendar`,
      this.domSanitizer.bypassSecurityTrustResourceUrl("../assets/icons/calendar.svg")
    );

  }

  ngOnInit() {
    mixpanel.init('ac6fc3df07c18a95fa386b80ecd4c897', { debug: false, ignore_dnt: true, track_pageview: false });

    // debug: false: When set to true, Mixpanel will log detailed debug information to the browser's console. Keeping it as false means that Mixpanel will not output debug logs.

   // ignore_dnt: true: "DNT" stands for "Do Not Track". Some browsers allow users to set a DNT flag, indicating they do not wish to be tracked. If ignore_dnt is set to true, Mixpanel will ignore these flags and continue tracking users who have set the DNT flag in their browser. If it's false, Mixpanel will respect the DNT flag and not track those users.

   // track_pageview: false: By default, Mixpanel tracks page views automatically. If this is set to false, automatic pageview tracking is disabled. This is useful if you want more control over when and how page views are tracked.

    const trackRoute = (route: any) => {
      mixpanel.track('Route Visited', {
        route: route,
      });
    };

    if (environment.production) {
      trackRoute(window.location.pathname); // To only track when the API being used is the one in production
    }
}
}
