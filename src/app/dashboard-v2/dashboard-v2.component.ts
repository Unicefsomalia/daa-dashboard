import { Component, OnDestroy, OnInit } from '@angular/core';
import { getDataMap } from "./main-dashboard/data"
import { mainComponents } from './main-dashboard/components'
import { DashBoardBuilderOptions, SectionComponentType } from "@sisitech/dashboard-builder"
import { overviewCard } from './main-dashboard/cards_options';
import { preChartDataCard } from './main-dashboard/pre_chard_data_functions';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-dashboard-v2',
  templateUrl: './dashboard-v2.component.html',
  styleUrls: ['./dashboard-v2.component.scss']
})
export class DashboardV2Component implements OnInit, OnDestroy {
  defaultStats = 90;

  cardDetails = overviewCard;
  dataMap: any;
  statsDuration: any = this.defaultStats

  durationsMap = [
    { value: 7, display_name: "1 Week Ago" },
    { value: 14, display_name: "2 Weeks Ago" },
    { value: 30, display_name: "1 Month Ago" },
    { value: this.defaultStats, display_name: "3 Months Ago" },
    { value: 180, display_name: "6 Months Ago" },
    { value: 365, display_name: "1 Year Ago" },
  ]
  statsTotalFunction = preChartDataCard;

  dashboardBuilderOptions: DashBoardBuilderOptions = {
    name: 'main',
    page: {
      tabs: [
        // this.generateGroupintSection('school'),
        this.generateHomeSection(),
        this.generateGroupintSection('partner'),
        this.generateGroupintSection('class'),
        this.generateGroupintSection('state'),
        this.generateGroupintSection('region'),
        this.generateGroupintSection('district'),
        this.generateGroupintSection('special-need'),

        // this.generateGroupintSection('special-needs'),
      ],
      components: mainComponents
    }
  };

  querySub?: Subscription;

  constructor(private router: Router, private route: ActivatedRoute,) { }
  ngOnDestroy(): void {
    this.querySub?.unsubscribe()
  }

  ngOnInit(): void {
    this.checkDuration()
  }


  checkDuration() {
    console.log("Checking duration")
    this.querySub = this.route.queryParams.subscribe(queryParams => {
      if (queryParams.hasOwnProperty("stats_duration")) {
        console.log(queryParams)
        this.statsDuration = parseInt(queryParams.stats_duration)
        this.dataMap = getDataMap(this.statsDuration);
        const reload = localStorage.getItem("reload")
        console.log("Reload", reload)
        if (reload == "true") {
          localStorage.setItem("reload", "false")
          window.location.reload();
        }
      } else {
        this.dataMap = getDataMap(this.statsDuration);
      }
    })
  }

  routeToNewPage() {
    console.log("Routing to new page")
    localStorage.setItem("reload", "true")
    this.router.navigate(["/",], { queryParams: { stats_duration: this.statsDuration, } })
  }

  generateHomeSection() {
    return {
      name: 'Home',
      sections: [
        {
          title: "Attendance Overview",
          layout: [
            ['attendanceOverviewCard'],
          ]
        },
        {
          layout: [
            ["dailyMaleAttendanceGraph", "dailyFemaleAttendanceGraph"],
            ['monthlyFemaleAttendanceGraph', 'monthlyMaleAttendanceGraph'],
          ]
        },
        {
          title: "Enrolment Overview",
          layout: [
            ['classEnrollmentGraph', 'enrollmentPieChart',]
          ]
        }
      ],
    }
  }

  generateGroupintSection(grouping) {
    return {
      name: `${grouping.capitalizeEachWord().toPlural()}`,
      sections: [
        {
          title: `Attendance by ${grouping.capitalizeEachWord().toPlural()}`,
          layout: [
            [`${grouping}sAttOverviewCard`],
            [`${grouping}AttendanceGraph`],
            [`${grouping}AttendancePercentageGraph`]
          ]
        },
        {
          title: `Enrolment by ${grouping.capitalizeEachWord().toPlural()}`,
          layout: [
            [`${grouping}sOverviewCard`],
            [`${grouping}EnrollmentGraph`]
          ]
        },

      ]
    }
  }

}
