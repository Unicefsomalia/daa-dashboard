const filterOptions = {
    "name": "MOE Dash Api",
    "description": "",
    "renders": [
        "application/json",
        "text/html"
    ],
    "parses": [
        "application/json",
        "application/x-www-form-urlencoded",
        "multipart/form-data"
    ],
    "actions": {
        "POST": {
            "grouping": {
                "type": "field",
                "required": true,
                "read_only": false,
                "max_length": 45,
                "label": "Group By",
                "default": "id",
                "choices": [
                    {
                        value: "id",
                        display_name: "Attendance List (No Grouping)"
                    },
                    {
                        value: "class",
                        display_name: "Class"
                    },
                    {
                        value: "stream",
                        display_name: "Stream"
                    },
                    {
                        value: "student",
                        display_name: "Student"
                    },
                    {
                        value: "region",
                        display_name: "Region"
                    },
                    {
                        value: "district",
                        display_name: "District"
                    },
                    {
                        value: "village",
                        display_name: "Village"
                    },
                    {
                        value: "school",
                        display_name: "School"
                    },
                    {
                        value: "special-need",
                        display_name: "Special Needs"
                    },
                    {
                        value: "student-status",
                        display_name: "Status"
                    },
                    {
                        value: "gender",
                        display_name: "Gender"
                    },
                    {
                        value: "age",
                        display_name: "Learner's Age"
                    },
                    {
                        value: "month",
                        display_name: "Attendance Month"
                    },
                    {
                        value: "year",
                        display_name: "Attendance Year"
                    },
                    {
                        value: "day",
                        display_name: "Attendance Day"
                    },
                    {
                        value: "partner",
                        display_name: "Partner"
                    }
                ]
            },
            "first_name": {
                "type": "string",
                "required": false,
                "read_only": false,
                "label": "Search First Name"
            },
            "stream": {
                "type": "multifield",
                "required": false,
                "multiple": false,
                "read_only": false,
                "label": "Filter by Stream",
                "url": `api/v1/streams/`,
                "value_field": "id",
                "search_field": "school_name",
                "placeholder": "Search School Name ..",
                "display_name": "full_class_name"
            },
            "start_date": {
                "type": "date",
                "required": false,
                "read_only": false,
                "label": "Filter by Start Date",
                "placeholder": "Search Start Date .."
            },
            "end_date": {
                "type": "date",
                "required": false,
                "read_only": false,
                "label": "Filter by End Date",
                "placeholder": "Search End Date .."
            },
            "gender": {
                "type": "field",
                "required": false,
                "read_only": false,
                "label": "Filter by Gender",
                "choices": [
                    {
                        value: "M",
                        display_name: "Male"
                    },
                    {
                        value: "F",
                        display_name: "Female"
                    }
                ]
            },
            "leaner_status": {
                "type": "field",
                "required": false,
                "read_only": false,
                "label": "Filter by Learner Status",
                "display_name": "name",
                "value_field": "value",
                "placeholder": "Search Learner Status ..",
                "choices": [
                    {
                        "value": "AE",
                        "display_name": "Already Enrolled"
                    },
                    {
                        "value": "NE",
                        "display_name": "Never Enrolled"
                    },
                    {
                        "value": "PE",
                        "display_name": "Re Enrolled"
                    }
                ]
            },
            "status": {
                "type": "field",
                "required": false,
                "read_only": false,
                "label": "Filter By Attendance ",
                "choices": [
                    {
                        value: "1",
                        display_name: "Present"
                    },
                    {
                        value: "0",
                        display_name: "Absent"
                    }
                ]
            },
            "base_class": {
                "type": "field",
                "required": false,
                "read_only": false,
                "label": "Filter by Class",
                "default": "",
                "choices": [
                    {
                        value: "1",
                        display_name: "1"
                    },
                    {
                        value: "2",
                        display_name: "2"
                    },
                    {
                        value: "3",
                        display_name: "3"
                    },
                    {
                        value: "4",
                        display_name: "4"
                    },
                    {
                        value: "5",
                        display_name: "5"
                    },
                    {
                        value: "6",
                        display_name: "6"
                    },
                    {
                        value: "7",
                        display_name: "7"
                    },
                    {
                        value: "8",
                        display_name: "8"
                    },

                ],

            },
            "school_state": {
                "type": "multifield",
                "required": false,
                "read_only": false,
                "label": "Filter by State",
                "display_name": "name",
                "placeholder": "Search State Name ..",
                "value_field": "id",
                "edit_source_field": "items_details",
                "multiple": false,
                "url": `api/v1/states/`,
                "search_field": "name",
                "edit_display_name": "item_name",
            },
            "school_region": {
                "type": "multifield",
                "required": false,
                "read_only": false,
                "label": "Filter by Region",
                "display_name": "name",
                "placeholder": "Search Region Name ..",
                "value_field": "id",
                "edit_source_field": "items_details",
                "multiple": false,
                "url": `api/v1/regions/`,
                "search_field": "name",
                "edit_display_name": "item_name",
                "res_value_field": "county"
            },
            "school_district": {
                "type": "multifield",
                "required": false,
                "read_only": false,
                "label": "Filter by District",
                "display_name": "name",
                "placeholder": "Search District Name ..",
                "value_field": "id",
                "edit_source_field": "items_details",
                "multiple": false,
                "url": `api/v1/districts/`,
                "search_field": "name",
                "edit_display_name": "item_name"
            },
            "school_village": {
                "type": "multifield",
                "required": false,
                "read_only": false,
                "label": "Filter by Village",
                "display_name": "name",
                "placeholder": "Search Village Name ..",
                "value_field": "id",
                "edit_source_field": "items_details",
                "multiple": false,
                "url": `api/v1/villages/`,
                "search_field": "name",
                "edit_display_name": "item_name"
            },
            "search": {
                "type": "multifield",
                "required": false,
                "read_only": false,
                "label": "Search ",
                "display_name": "name",
                "placeholder": "Search county name..",
                "value_field": "id",
                "edit_source_field": "items_details",
                "multiple": true,
                "url": `api/v1/sub-counties/`,
                "search_field": "name",
                "edit_display_name": "item_name"
            },
            "paginator": {
                "type": "field",
                "required": false,
                "read_only": false,
                "label": "Mode",
                "default": "pa",
                "choices": [
                    { "value": "cursor", display_name: "Preview" },
                    { "value": "pa", display_name: "Detailed" },
                ]
            },
            "school": {
                "type": "multifield",
                "required": false,
                "read_only": false,
                "label": "Filter by School",
                "display_name": "name",
                "placeholder": "Search School Name ..",
                "value_field": "id",
                "edit_source_field": "items_details",
                "multiple": true,
                "url": `api/v1/schools/`,
                "search_field": "name",
                "edit_display_name": "item_name"
            },
            "special_needs": {
                "type": "multifield",
                "required": false,
                "read_only": false,
                "label": "Filter by Special Needs",
                "display_name": "name",
                "placeholder": "Search Special Need ..",
                "value_field": "id",
                "edit_source_field": "items_details",
                "multiple": true,
                "url": `api/v1/special-needs/`,
                "search_field": "name",
                "edit_display_name": "item_name"
            }
        }
    }
}

export {
    filterOptions
}