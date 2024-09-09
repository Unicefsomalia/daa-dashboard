import { loadDateTimePrototypes, loadStringPrototypes } from '@sisitech/utils'
loadStringPrototypes()
loadDateTimePrototypes()

const enrollment_base_url = "api/v1/students/stats"
const attendances_base_url = "api/v1/attendances/stats"
const dropout_base_url = "api/v1/students-delete-reasons/stats"
const default_args = {  "page_size": 30, "is_training_school": false }
const default_attendance_args = { "order_by": "total_days" }


export const durationsMap = [
    { value: 7, display_name: "1 Week Ago" },
    { value: 14, display_name: "2 Weeks Ago" },
    { value: 30, display_name: "1 Month Ago" },
    { value: 90, display_name: "3 Months Ago" },
    { value: 180, display_name: "6 Months Ago" },
    { value: 365, display_name: "1 Year Ago" },
]

export function getDateXDaysAgo(x) {
    const currentDate = new Date();
    const pastDate = new Date(currentDate);
    pastDate.setDate(currentDate.getDate() - x);
    // Format the date as "yyyy-mm-dd"
    const formattedDate = pastDate.toISOString().slice(0, 10);
    return formattedDate;
}

export function getDateFormatted(date){
    return new Date(date).toLocaleString().split(",")[0]
}

export function getDataMap(duration:number=180) {

    let start_date = getDateXDaysAgo(duration)
    let start_date_display = getDateFormatted(start_date) 

    console.log("********* DATE ************")
    console.log(start_date_display)

    let default_args = { "start_date": start_date, "page_size": 13, "is_training_school": false }

    return {
    // ...getSingleGroupingData("school"),
    "stats": {
        name: "stats",
        url: "api/v1/statistics",
        data: null,
        error: null,
        args: {},
        description: "Overal stats"
    },
    "att_gender": {
        name: "att_gender",
        url: `${attendances_base_url}/gender`,
        data: null,
        error: null,
        args: { ...default_args, "order_by": "schools_that_marked", "order": "DESC" },
        description: "Attendance data".interpolate({ start_date: start_date_display })
    },
    "top_att_state": {
        name: "top_att_state",
        url: `${attendances_base_url}/state`,
        data: null,
        error: null,
        args: { ...default_args, ...default_attendance_args, "order": "DESC" },
        description: "Attendance data since @start_date#".interpolate({ start_date: start_date_display })
    },
    "att_daily": {
        name: "top_att_state",
        url: `${attendances_base_url}/day`,
        data: null,
        error: null,
        args: { ...default_args, "order_by": "day", "order": "DESC", "page_size": 5 },
        description: "Attendance data ".interpolate({ start_date: start_date_display })
    },
    "att_monthly": {
        name: "att_monthly",
        url: `${attendances_base_url}/month`,
        data: null,
        error: null,
        args: { ...default_args, "order_by": "month", "order": "DESC", "page_size": 5 },
        description: "Attendance data".interpolate({ start_date: start_date_display })
    },
    "least_att_state": {
        name: "bottom_att_state",
        url: `${attendances_base_url}/state`,
        data: null,
        error: null,
        args: { ...default_args, ...default_attendance_args, "order": "ASC" },
        description: "Attendance data since @start_date#".interpolate({ start_date: start_date_display })
    },
    "drop_gender": { 
        name: "drop_gender",
        url: `${dropout_base_url}/gender`,
        data: null,
        error: null,
        args: { ...default_args, "order_by": "gender_name", "order": "ASC" },
        description: "Enrollment data since @start_date#".interpolate({ start_date: start_date_display })
    },
    "enr_class": {
        name: "enr_class",
        url: `${enrollment_base_url}/class`,
        data: null,
        error: null,
        args: { ...default_args, "order_by": "value", "order": "ASC" },
        description: "Enrollment data since @start_date#".interpolate({ start_date: start_date_display })
    },
        ...getSingleGroupingData("district", start_date),
        ...getSingleGroupingData("region", start_date),
        ...getSingleGroupingData("partner", start_date),
        ...getSingleGroupingData("class", start_date),
        ...getSingleGroupingData("village", start_date),
        ...getSingleGroupingData("special-need", start_date),
        ...getSingleGroupingData("state", start_date),
    }
}


function getSingleGroupingData(grouping, start_date=null){
    const leastName = `least_${grouping}s_attendance_overview`;
    const topName = `${grouping}s_attendance_overview`;

    let start_date_display = getDateFormatted(start_date) 

    const attendanceDescription = `${grouping} Attendance Data Since @start_date#`.interpolate({ start_date: start_date_display })
    let dateFilter={"start_date":start_date}
    let leastAttendanceArgs = { "order_by": "schools_that_marked", "order": "ASC", ...dateFilter }
    let topAttendanceArgs = { ...leastAttendanceArgs, "order": "DESC" }

    const leastEnrollName = `least_${grouping}s_enrol_overview`;
    const topEnrollName = `${grouping}s_enrol_overview`;
    const enrollDescription = `${grouping} Enrollment Data since @start_date#`.interpolate({ start_date: start_date_display })

    let leastEnrollArgs = { "order_by": "total_students", "order": "ASC" ,...dateFilter }
    let topEnrollArgs = { ...leastEnrollArgs, "order": "DESC" }

    return {
        ...getDataMapping(leastName, attendances_base_url, grouping, attendanceDescription, leastAttendanceArgs,),
        ...getDataMapping(topName, attendances_base_url, grouping, attendanceDescription, topAttendanceArgs,),

        ...getDataMapping(leastEnrollName, enrollment_base_url, grouping, enrollDescription, leastEnrollArgs,),
        ...getDataMapping(topEnrollName, enrollment_base_url, grouping, enrollDescription, topEnrollArgs,)
    }
}

function getDataMapping(name, base_url, grouping, description = "", args = {}, data = null,){
    var groupingMap:any= {
    }
    groupingMap[name] = {
        name: name,
        url: `${base_url}/${grouping}`,
        data: null,
        error: null,
        args: {...default_args,...args},
        description: description.capitalizeEachWord()
    }
    return groupingMap
}