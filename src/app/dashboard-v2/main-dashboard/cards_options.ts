import { DataCardModel } from '@sisitech/charts';

export const cardDropoutOptions: DataCardModel[] = [
    { title: '@students.dropout_males# AIN', subtitle: "Dropout Male Learners", link: "", icon: "../../../../assets/images/male-dropout.svg", extraModalClasses: "dropout-male-class" },
    { title: '@students.dropout_females#', subtitle: "Dropout Female Learners", link: "", icon: "../../../../assets/images/female-dropout.svg", extraModalClasses: "dropout-female-class" },
]

export const cardStudentsOptions: DataCardModel[] = [
    { title: '@students.males#', subtitle: "Male Learners", link: "", icon: "../../../../assets/images/male.svg", extraModalClasses: "male-class" },
    { title: '@students.females#', subtitle: "Female Learners", link: "", icon: "../../../../assets/images/female.svg", extraModalClasses: "female-class" },
]


export const overviewCard: DataCardModel[] = [
    { title: '@active_schools#', subtitle: "Active Schools", link: "schools/view-schools", icon: "../../../assets/images/school.svg", extraModalClasses: "school-class" },
    { title: '@total_learners#', subtitle: "Total Students", link: "students/view-students", icon: "../../../assets/images/students.svg", extraModalClasses: "student-class" },
    ...cardStudentsOptions,
    ...cardDropoutOptions
]

export const attendanceOverviewCard: DataCardModel[] = [
    { title: '@att_gender.0.schools_that_marked#', subtitle: "Schools That Marked", link: "schools/view-schools", icon: "../../../assets/images/school.svg", extraModalClasses: "student-class" },
    { title: '@top_att_state.0.state_name#', subtitle: "Top Active State", link: "schools/view-schools", icon: "../../../assets/images/school.svg", extraModalClasses: "male-class" },
    { title: '@least_att_state.0.state_name#', subtitle: "Least Active State", link: "schools/view-schools", icon: "../../../assets/images/school.svg", extraModalClasses: "dropout-female-class" },
    // { title: '@total_learners#', subtitle: "Total Students", link: "students/view-students", icon: "../../../assets/images/students.svg", extraModalClasses: "student-class" },
]

// export const partnersOverviewCard: DataCardModel[] = [
//     { title: '@partners_enrol_overview.0.name#', subtitle: "Top Enrolment Partner (@partners_enrol_overview.0.total_students# learners)", link: "schools/view-schools", icon: "../../../assets/images/school.svg", extraModalClasses: "male-class" },
//     { title: '@least_partners_enrol_overview.0.name#', subtitle: "Least Enrolment Partner (@least_partners_enrol_overview.0.total_students# learners)", link: "schools/view-schools", icon: "../../../assets/images/school.svg", extraModalClasses: "dropout-female-class" },
// ]

// export const partnersAttOverviewCard: DataCardModel[] = [
//     { title: '@partners_attendance_overview.0.name#', subtitle: "Top Attendance Partner (@partners_attendance_overview.0.schools_that_marked# schools)", link: "schools/view-schools", icon: "../../../assets/images/school.svg", extraModalClasses: "student-class" },
//     { title: '@least_partners_attendance_overview.0.name#', subtitle: "Least Attendance Partner (@least_partners_attendance_overview.0.schools_that_marked# schools)", link: "schools/view-schools", icon: "../../../assets/images/school.svg", extraModalClasses: "dropout-female-class" },
// ]


// function generateCards
export const allGroupingsCardConfigs = {
    ...generateCards("partner", "name", "schools_that_marked", "schools", "name", "total_students", "learners"),
    ...generateCards("state", "state_name", "schools_that_marked", "schools", "state_name", "total_students", "learners"),
    ...generateCards("region", "region_name", "schools_that_marked", "schools", "region_name", "total_students", "learners"),
    ...generateCards("district", "district_name", "schools_that_marked", "schools", "district_name", "total_students", "learners"),
    ...generateCards("village", "village_name", "schools_that_marked", "schools", "village_name", "total_students", "learners"),
    ...generateCards("class", "class_name", "schools_that_marked", "schools", "class_name", "total_students", "learners"),
    ...generateCards("special-need", "special_need_name", "schools_that_marked", "schools", "special_need_name", "total_students", "learners"),
    // ...generateCards("school", "school_name", "schools_that_marked", "schools", "school_name", "total_students", "learners"),
}

function generateCards(grouping, att_display_name, att_display_value, att_display_label, enr_display_name, enr_display_value, enr_display_label) {
    const cardCongis: any = {
    }
    cardCongis[grouping] =
    {
        attendance: [
            { title: `@${grouping}s_attendance_overview.0.${att_display_name}#`, subtitle: `Top Attendance ${grouping.capitalizeEachWord()} (@${grouping}s_attendance_overview.0.${att_display_value}# ${att_display_label.capitalizeEachWord()})`, link: "schools/view-schools", icon: "../../../assets/images/school.svg", extraModalClasses: "student-class" },
            { title: `@least_${grouping}s_attendance_overview.0.${att_display_name}#`, subtitle: `Least Attendance ${grouping.capitalizeEachWord()} (@least_${grouping}s_attendance_overview.0.${att_display_value}# ${att_display_label.capitalizeEachWord()})`, link: "schools/view-schools", icon: "../../../assets/images/school.svg", extraModalClasses: "dropout-female-class" },
        ],
        enrollment:
            [
                { title: `@${grouping}s_enrol_overview.0.${enr_display_name}#`, subtitle: `Top Enrolment ${grouping.capitalizeEachWord()} (@${grouping}s_enrol_overview.0.${enr_display_value}# ${enr_display_label.capitalizeEachWord()})`, link: "schools/view-schools", icon: "../../../assets/images/school.svg", extraModalClasses: "student-class" },
                { title: `@least_${grouping}s_enrol_overview.0.${enr_display_name}#`, subtitle: `Least Enrolment ${grouping.capitalizeEachWord()} (@least_${grouping}s_enrol_overview.0.${enr_display_value}# ${enr_display_label.capitalizeEachWord()})`, link: "schools/view-schools", icon: "../../../assets/images/school.svg", extraModalClasses: "dropout-female-class" },
            ]
    }
    return cardCongis
} 