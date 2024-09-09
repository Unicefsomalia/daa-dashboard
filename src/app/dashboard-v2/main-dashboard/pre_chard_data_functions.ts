
export function preChartDataCard(data: any) {
    if (!data)
        return data;

    data.total_learners = data.students.males + data.students.females
    data.female_learners = data.students.females
    data.male_learners = data.students.males
    return data
}
export function validateArray(array){
    if (array == null || array == undefined){
        return false
    }
    if (!Array.isArray(array))
        return false;
    return true
}
export function rearrangeAttendance(data: any[]) {
    if (!validateArray(data))
        return data;

    return data.reverse()
}

export function attendancePercentageCombinedPreChartData(dataPoints: any[]) {
    if (!validateArray(dataPoints))
        return dataPoints;
    // console.log(dataPoints)
    dataPoints = dataPoints.map(dataPoint => {
        let total_present = dataPoint.present_females + dataPoint.present_males
        let total_absent = dataPoint.absent_females + dataPoint.absent_males

        let total_males = dataPoint.present_males + dataPoint.absent_males
        let total_females = dataPoint.present_females + dataPoint.absent_females

        let total = total_present + total_absent

        let present_percentage = Math.round(total_present * 100.0 / total)

        let males_present_percentage = Math.round(dataPoint.present_males * 100.0 / total_males)
        let females_present_percentage = Math.round(dataPoint.present_females * 100.0 / total_females)

        dataPoint.present_percentage = present_percentage
        dataPoint.absent_percentage = 100 - present_percentage

        dataPoint.males_present_percentage = males_present_percentage
        dataPoint.males_absent_percentage = 100 - males_present_percentage

        dataPoint.females_present_percentage = females_present_percentage
        dataPoint.females_absent_percentage = 100 - females_present_percentage
        // dataPoint.month_name=
        return dataPoint
    })
    return dataPoints
}

export function reverseList(dataPoints: any[]) {
    if (!validateArray(dataPoints))
        return dataPoints;
    return dataPoints.reverse()
}

export function attendanceMonthChartData(dataPoints: any[]) {
    if (!validateArray(dataPoints))
        return dataPoints;

    return dataPoints.map(month => {
        month.month_name = new Date(month.month).toLocaleString('default', { year: 'numeric', month: 'long' })
        return month
    })
}

export function appendClassName(dataPoints: any[]) {
    if (!validateArray(dataPoints))
        return dataPoints;
    
    return dataPoints.map(mainClass => {
        if (mainClass.class_name != "ECD") {
            mainClass.full_class_name = `Class ${mainClass.class_name}`
        } else {
            mainClass.full_class_name = mainClass.class_name
        }
        return mainClass
    })
}