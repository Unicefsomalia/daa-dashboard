import { SectionComponent, SectionComponentType, removeNullValuePreChartData } from '@sisitech/dashboard-builder';
import { appendClassName, attendanceMonthChartData, attendancePercentageCombinedPreChartData, preChartDataCard, rearrangeAttendance, reverseList } from "./pre_chard_data_functions"
import { attendanceOverviewCard, overviewCard, allGroupingsCardConfigs } from './cards_options';
import { allGroupingsGraphsConfigs, classEnrlloptions, dailyFeMaleAttendanceptions, dailyMaleAttendanceptions, genderEnrollmentPieChart, monthlyFeMaleAttendanceptions, monthlyMaleAttendanceptions, partnerAttendanceOptions, partnerAttendancePercentageOptions, partnerEnrlloptions } from './graphs_options';
export const mainComponents: SectionComponent[] = [
    {
        name: 'overviewCard',
        type: SectionComponentType.card,
        options: overviewCard,
        dataKey: 'stats',
        preChartDataFunctions: [preChartDataCard]
    },
    {
        name: 'enrollmentPieChart',
        type: SectionComponentType.pieChart,
        options: genderEnrollmentPieChart,
        dataKey: 'stats',
        preChartDataFunctions: [preChartDataCard]
    },
    {
        name: 'attendanceOverviewCard',
        type: SectionComponentType.card,
        options: attendanceOverviewCard,
        dataKey: 'all',
        preChartDataFunctions: []
    },
    
    {
        name: 'dailyMaleAttendanceGraph',
        type: SectionComponentType.barGraph,
        options: dailyMaleAttendanceptions,
        dataKey: 'att_daily',
        preChartDataFunctions: [rearrangeAttendance]
    },
    {
        name: 'dailyFemaleAttendanceGraph',
        type: SectionComponentType.barGraph,
        options: dailyFeMaleAttendanceptions,
        dataKey: 'att_daily',
        preChartDataFunctions: []
    },

    {
        name: 'monthlyFemaleAttendanceGraph',
        type: SectionComponentType.barGraph,
        options: monthlyFeMaleAttendanceptions,
        dataKey: 'att_monthly',
        preChartDataFunctions: [attendancePercentageCombinedPreChartData, reverseList, attendanceMonthChartData]
    },
    {
        name: 'monthlyMaleAttendanceGraph',
        type: SectionComponentType.barGraph,
        options: monthlyMaleAttendanceptions,
        dataKey: 'att_monthly',
        preChartDataFunctions: [attendancePercentageCombinedPreChartData, reverseList, attendanceMonthChartData]
    },
    {
        name: 'classEnrollmentGraph',
        type: SectionComponentType.barGraph,
        options: classEnrlloptions,
        dataKey: 'enr_class',
        preChartDataFunctions: [appendClassName]
    },
    
].concat([
    ...generateGroupingComponents("partner"),
    ...generateGroupingComponents("state"),
    ...generateGroupingComponents("region"),
    ...generateGroupingComponents("district"),
    ...generateGroupingComponents("village"),
    ...generateGroupingComponents("class"),
    ...generateGroupingComponents("special-need"),
    // ...generateGroupingComponents("school"),
])



function generateGroupingComponents(grouping){
    var grouping_cards = allGroupingsCardConfigs[grouping]
    var grouping_graphs = allGroupingsGraphsConfigs[grouping]
    return [
        {
            name: `${grouping}sOverviewCard`,
            type: SectionComponentType.card,
            options: grouping_cards.enrollment,
            dataKey: 'all',
            preChartDataFunctions: []
        },
        {
            name: `${grouping}sAttOverviewCard`,
            type: SectionComponentType.card,
            options: grouping_cards.attendance,
            dataKey: 'all',
            preChartDataFunctions: []
        },
        {
            name: `${grouping}EnrollmentGraph`,
            type: SectionComponentType.barGraph,
            options: grouping_graphs.total,
            dataKey: `${grouping}s_enrol_overview`,
            preChartDataFunctions: [...grouping_graphs.attPreChartDataFunctions]
        },
        {
            name: `${grouping}AttendanceGraph`,
            type: SectionComponentType.barGraph,
            options: grouping_graphs.school_attendance,
            dataKey: `${grouping}s_attendance_overview`,
            preChartDataFunctions: [attendancePercentageCombinedPreChartData, ...grouping_graphs.attPreChartDataFunctions]
        },
        {
            name: `${grouping}AttendancePercentageGraph`,
            type: SectionComponentType.barGraph,
            options: grouping_graphs.percentage_attendance ,
            dataKey: `${grouping}s_attendance_overview`,
            preChartDataFunctions: [attendancePercentageCombinedPreChartData, ...grouping_graphs.attPreChartDataFunctions]
        },


    ]
}


