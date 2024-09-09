
const filterOptions = {
    "name": "Learner Api",
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
            "report_type": {
                "type": "field",
                "required": true,
                "read_only": false,
                "label": "Type of Report",
                "default": "students",
                "choices": [
                    {
                        value: "attendances",
                        display_name: "Attendance Report"
                    },
                    {
                        value: "students",
                        display_name: "Students Report"
                    }
                ]
            },
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
                        display_name: "No Grouping",
                    },
                    {
                        value: "class",
                        display_name: "Class"
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
                        value: "shehiya",
                        display_name: "Shehiya"
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
                        display_name: "Age"
                    },
                    {
                        value: "month",
                        display_name: "Month"
                    },
                    {
                        value: "year",
                        display_name: "Year"
                    },
                    {
                        value: "day",
                        display_name: "Day"
                    },
                    {
                        value: "knwos-dob",
                        display_name: "Knows Date of Birth"
                    }
                ]
            },
            "first_name": {
                "type": "string",
                "required": false,
                "read_only": false,
                "label": "Search First Name"
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
            "region": {
                "type": "multifield",
                "required": false,
                "read_only": false,
                "label": "Filter by Region",
                "display_name": "name",
                "placeholder": "Search Region ..",
                "value_field": "id",
                "edit_source_field": "items_details",
                "multiple": true,
                "url": `api/v1/regions/`,
                "search_field": "name",
                "edit_display_name": "item_name",
                "res_value_field": "region"
            },
            "district": {
                "type": "multifield",
                "required": false,
                "read_only": false,
                "label": "Filter by District",
                "display_name": "name",
                "placeholder": "Search District ..",
                "value_field": "id",
                "edit_source_field": "items_details",
                "multiple": true,
                "url": `api/v1/districts/`,
                "search_field": "name",
                "edit_display_name": "item_name",
                "from_field": "region",
                "from_field_source": "region",
                "res_value_field": "region"
            },
            "school_sub_county": {
                "type": "multifield",
                "required": false,
                "read_only": false,
                "label": "Filter by Sub County",
                "display_name": "name",
                "placeholder": "Search Sub County Name ..",
                "value_field": "id",
                "edit_source_field": "items_details",
                "multiple": true,
                "url": `api/v1/sub-counties/`,
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
                "default": "cursor",
                "choices": [
                    { "value": "cursor", display_name: "Preview" },
                    { "value": "pa", display_name: "Detailed" },
                ]
            },
            "status": {
                "type": "field",
                "required": false,
                "read_only": false,
                "label": "Filter by Status",
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
                        "display_name": "Newly Enrolled"
                    },
                    {
                        "value": "PE",
                        "display_name": "Previously Enrolled"
                    }
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
            }

        }
    }
}

export {
    filterOptions
}