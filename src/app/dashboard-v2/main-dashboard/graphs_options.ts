
import { BarGraphOptions, defaultLineBarGraphOptions, getBarGraphOptions } from '@sisitech/dashboard-builder';
import { appendClassName } from './pre_chard_data_functions';


const present_color = "#2AACE2"
const absent_color = "#e91e1e"
const male_color = "#2AACE2"
const female_color = "#ff10f0"
const attendance_partner_color = "#009688"

export const dailyMaleAttendanceptions: BarGraphOptions = {
    xAxisLabel: 'Day',
    yAxisLabel: 'Number of Male Learners',
    xAxisField: 'day',
    yAxisFields: [
        getBarGraphOptions('present_males', present_color),
        getBarGraphOptions('absent_males', absent_color),
    ],
    title: "Male Daily Attendance (Last 5 days)",
    ...defaultLineBarGraphOptions
}

export const dailyFeMaleAttendanceptions: BarGraphOptions = {
    xAxisLabel: 'Day',
    yAxisLabel: 'Number of Female Learners',
    xAxisField: 'day',
    yAxisFields: [
        getBarGraphOptions('present_females', present_color),
        getBarGraphOptions('absent_females', absent_color),
    ],
    title: "Female Daily Attendance (Last 5 days)",
    ...defaultLineBarGraphOptions
}

export const monthlyFeMaleAttendanceptions: BarGraphOptions = {
    xAxisLabel: 'Month',
    yAxisLabel: 'Attendance %',
    xAxisField: 'month_name',
    yAxisFields: [
        getBarGraphOptions('females_present_percentage', present_color),
        getBarGraphOptions('females_absent_percentage', absent_color),
    ],
    title: "Female Monthly Attendance (Last 3 Months)",
    ...defaultLineBarGraphOptions
}

export const monthlyMaleAttendanceptions: BarGraphOptions = {
    xAxisLabel: 'Month',
    yAxisLabel: 'Attendance %',
    xAxisField: 'month_name',
    yAxisFields: [
        getBarGraphOptions('males_present_percentage', present_color),
        getBarGraphOptions('males_absent_percentage', absent_color),
    ],
    title: "Male Monthly Attendance (Last 3 Months)",
    ...defaultLineBarGraphOptions
}

export const classEnrlloptions: BarGraphOptions = {
    xAxisLabel: 'Class ',
    yAxisLabel: 'Number of Male Learners',
    xAxisField: 'full_class_name',
    yAxisFields: [
        getBarGraphOptions('males', male_color),
        getBarGraphOptions('females', female_color),
        // getBarGraphOptions('total_students', "green"),
    ],
    title: "Enrolment By Class",
    ...defaultLineBarGraphOptions
}

export const partnerEnrlloptions: BarGraphOptions = {
    xAxisLabel: 'Partner ',
    yAxisLabel: 'Number of Learners',
    xAxisField: 'name',
    yAxisFields: [
        getBarGraphOptions('males', male_color),
        getBarGraphOptions('females', female_color),
        // getBarGraphOptions('total_students', "green"),
    ],
    title: "Enrolment By Partner",
    ...defaultLineBarGraphOptions
}

export const genderEnrollmentPieChart: BarGraphOptions = {
    xAxisLabel: 'Partner ',
    yAxisLabel: 'Number of Learners',
    xAxisField: 'name',
    yAxisFields: [
        getBarGraphOptions('female_learners', male_color),
        getBarGraphOptions('male_learners', female_color),
        // getBarGraphOptions('total_students', "green"),
    ],
    title: "Enrolment By Gender",
    ...defaultLineBarGraphOptions
}

export const partnerAttendanceOptions: BarGraphOptions = {
    xAxisLabel: 'Partner ',
    yAxisLabel: 'Number of Schools',
    xAxisField: 'name',
    yAxisFields: [
        getBarGraphOptions('schools_that_marked', attendance_partner_color),
        // getBarGraphOptions('absent_percentage', female_color),
        // getBarGraphOptions('total_students', "green"),
    ],
    title: "Schools That Marked Attendance By Partner",
    ...defaultLineBarGraphOptions
}

export const partnerAttendancePercentageOptions: BarGraphOptions = {
    xAxisLabel: 'Partner ',
    yAxisLabel: 'Attendance %',
    xAxisField: 'name',
    yAxisFields: [
        // getBarGraphOptions('schools_that_marked', male_color),
        getBarGraphOptions('present_percentage', male_color),

        getBarGraphOptions('absent_percentage', "red"),
    ],
    title: "Attendance Percentage By Partner",
    ...defaultLineBarGraphOptions
}

export const allGroupingsGraphsConfigs = {
    ...generateGraphs("partner", "name", "schools_that_marked", "schools", "name", "total_students", "learners"),
    ...generateGraphs("state", "state_name", "schools_that_marked", "schools", "state_name", "total_students", "learners"),
    ...generateGraphs("region", "region_name", "schools_that_marked", "schools", "region_name", "total_students", "learners"),
    ...generateGraphs("district", "district_name", "schools_that_marked", "schools", "district_name", "total_students", "learners"),
    ...generateGraphs("village", "village_name", "schools_that_marked", "schools", "village_name", "total_students", "learners"),
    ...generateGraphs("class", "full_class_name", "schools_that_marked", "schools", "full_class_name", "total_students", "learners", [appendClassName], [appendClassName]),
    ...generateGraphs("special-need", "special_need_name", "schools_that_marked", "schools", "special_need_name", "total_students", "learners", ),
    // ...generateGraphs("school", "school_name", "schools_that_marked", "schools", "school_name", "total_students", "learners",),
}

function generateGraphs(grouping, att_display_name, att_display_value, att_display_label, enr_display_name, enr_display_value, enr_display_label, attPreChartDataFunctions=[], enrPreChartDataFunctions=[]) {
    const graphConfigs: any = {
    }
    graphConfigs[grouping] =
    {
        attPreChartDataFunctions: [...attPreChartDataFunctions],
        enrPreChartDataFunctions: [...enrPreChartDataFunctions],
        total: {
            xAxisLabel: `${grouping}`.capitalizeEachWord() ,
            yAxisLabel: `Number of ${enr_display_name}`.capitalizeEachWord(),
            xAxisField: enr_display_name,
            yAxisFields: [
            getBarGraphOptions('males', male_color),
            getBarGraphOptions('females', female_color),
            // getBarGraphOptions('total_students', "green"),
            ],
            title: `Enrolment By ${grouping.toPlural() }`.capitalizeEachWord(),
                ...defaultLineBarGraphOptions
        },
        school_attendance: {
            xAxisLabel: `${grouping}`.capitalizeEachWord(),
            yAxisLabel: `Number of ${att_display_label}`.capitalizeEachWord(),
            xAxisField: att_display_name,
            yAxisFields: [
                getBarGraphOptions('schools_that_marked', attendance_partner_color),
            ],
            title: `Schools That Marked Attendance By ${grouping.toPlural()}`.capitalizeEachWord(),
            ...defaultLineBarGraphOptions
        },
        percentage_attendance: {
            xAxisLabel: `${grouping}`.capitalizeEachWord(),
            yAxisLabel: 'Attendance %',
            xAxisField: att_display_name,
            yAxisFields: [
                // getBarGraphOptions('schools_that_marked', male_color),
                getBarGraphOptions('present_percentage', male_color),

                getBarGraphOptions('absent_percentage', "red"),
            ],
            title: `Attendance Percentage By ${grouping.toPlural() }`.capitalizeEachWord(),
            ...defaultLineBarGraphOptions
        }
            
    }
    return graphConfigs
}
