const filterOptions = {
    "name": "List Create Students Api",
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
            "id": {
                "type": "integer",
                "required": false,
                "read_only": true,
                "label": "ID"
            },
            "school_name": {
                "type": "string",
                "required": false,
                "read_only": true,
                "label": "School name"
            },
            "stream_name": {
                "type": "string",
                "required": false,
                "read_only": true,
                "label": "Stream name"
            },
            "class_name": {
                "type": "string",
                "required": false,
                "read_only": true,
                "label": "Class name"
            },
            "full_name": {
                "type": "field",
                "required": false,
                "read_only": true,
                "label": "Full name"
            },
            "student_id": {
                "type": "field",
                "required": false,
                "read_only": true,
                "label": "Student id"
            },
            "date_enrolled": {
                "type": "date",
                "required": false,
                "read_only": false,
                "label": "Date enrolled"
            },
            "special_needs_details": {
                "type": "field",
                "required": false,
                "read_only": true,
                "label": "Special needs details",
                "child": {
                    "type": "nested object",
                    "required": false,
                    "read_only": true,
                    "children": {
                        "id": {
                            "type": "integer",
                            "required": false,
                            "read_only": true,
                            "label": "ID"
                        },
                        "created": {
                            "type": "datetime",
                            "required": false,
                            "read_only": true,
                            "label": "Created"
                        },
                        "modified": {
                            "type": "datetime",
                            "required": false,
                            "read_only": true,
                            "label": "Modified"
                        },
                        "name": {
                            "type": "string",
                            "required": true,
                            "read_only": false,
                            "label": "Name",
                            "max_length": 100
                        },
                        "abbreviation": {
                            "type": "string",
                            "required": false,
                            "read_only": false,
                            "label": "Abbreviation",
                            "max_length": 10
                        }
                    }
                }
            },
            "state": {
                "type": "field",
                "required": false,
                "read_only": true,
                "label": "State"
            },
            "region": {
                "type": "field",
                "required": false,
                "read_only": true,
                "label": "Region"
            },
            "district": {
                "type": "field",
                "required": false,
                "read_only": true,
                "label": "District"
            },
            "age": {
                "type": "field",
                "required": false,
                "read_only": true,
                "label": "Age"
            },
            "status_display": {
                "type": "field",
                "required": false,
                "read_only": true,
                "label": "Status display"
            },
            "gender_display": {
                "type": "field",
                "required": false,
                "read_only": true,
                "label": "Gender display"
            },
            "region_name": {
                "type": "field",
                "required": false,
                "read_only": true,
                "label": "Region name"
            },
            "district_name": {
                "type": "field",
                "required": false,
                "read_only": true,
                "label": "District name"
            },
            "village_name": {
                "type": "field",
                "required": false,
                "read_only": true,
                "label": "Village name"
            },
            "current_guardian_name": {
                "type": "field",
                "required": false,
                "read_only": true,
                "label": "Current guardian name"
            },
            "current_guardian_phone": {
                "type": "field",
                "required": false,
                "read_only": true,
                "label": "Current guardian phone"
            },
            "father_status_display": {
                "type": "field",
                "required": false,
                "read_only": true,
                "label": "Father status display"
            },
            "mother_status_display": {
                "type": "field",
                "required": false,
                "read_only": true,
                "label": "Mother status display"
            },
            "guardian_region_name": {
                "type": "field",
                "required": false,
                "read_only": true,
                "label": "Guardian region name"
            },
            "guardian_district_name": {
                "type": "field",
                "required": false,
                "read_only": true,
                "label": "Guardian district name"
            },
            "guardian_village_name": {
                "type": "field",
                "required": false,
                "read_only": true,
                "label": "Guardian village name"
            },
            "guardian_status_display": {
                "type": "field",
                "required": false,
                "read_only": true,
                "label": "Guardian status display"
            },
            "guardian_region": {
                "type": "field",
                "required": false,
                "read_only": true,
                "label": "Guardian region"
            },
            "guardian_district": {
                "type": "field",
                "required": false,
                "read_only": true,
                "label": "Guardian district"
            },
            "created": {
                "type": "datetime",
                "required": false,
                "read_only": true,
                "label": "Created"
            },
            "modified": {
                "type": "datetime",
                "required": false,
                "read_only": true,
                "label": "Modified"
            },
            "emis_code": {
                "type": "integer",
                "required": false,
                "read_only": false,
                "label": "Emis code",
                "min_value": -9223372036854775808,
                "max_value": 9223372036854775807
            },
            "first_name": {
                "type": "string",
                "required": true,
                "read_only": false,
                "label": "First name",
                "max_length": 200
            },
            "middle_name": {
                "type": "string",
                "required": false,
                "read_only": false,
                "label": "Middle name",
                "max_length": 200
            },
            "last_name": {
                "type": "string",
                "required": false,
                "read_only": false,
                "label": "Last name",
                "max_length": 200
            },
            "date_of_birth": {
                "type": "date",
                "required": false,
                "read_only": false,
                "label": "Date of birth"
            },
            "admission_no": {
                "type": "string",
                "required": false,
                "read_only": false,
                "label": "Admission no",
                "max_length": 50
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
            "previous_class": {
                "type": "integer",
                "required": false,
                "read_only": false,
                "label": "Previous class",
                "min_value": -2147483648,
                "max_value": 2147483647
            },
            "mode_of_transport": {
                "type": "choice",
                "required": false,
                "read_only": false,
                "label": "Mode of transport",
                "choices": [
                    {
                        "value": "PERSONAL",
                        "display_name": "Personal Vehicle"
                    },
                    {
                        "value": "BUS",
                        "display_name": "School Bus"
                    },
                    {
                        "value": "FOOT",
                        "display_name": "By Foot"
                    },
                    {
                        "value": "NS",
                        "display_name": "Not Set"
                    }
                ]
            },
            "time_to_school": {
                "type": "choice",
                "required": false,
                "read_only": false,
                "label": "Time to school",
                "choices": [
                    {
                        "value": "1HR",
                        "display_name": "One Hour"
                    },
                    {
                        "value": "-0.5HR",
                        "display_name": "Less than 1/2 Hour"
                    },
                    {
                        "value": "+1HR",
                        "display_name": "More than one hour."
                    },
                    {
                        "value": "NS",
                        "display_name": "Not Set"
                    }
                ]
            },
            "distance_from_school": {
                "type": "integer",
                "required": false,
                "read_only": false,
                "label": "Distance from school",
                "min_value": -2147483648,
                "max_value": 2147483647
            },
            "household": {
                "type": "integer",
                "required": false,
                "read_only": false,
                "label": "Household",
                "min_value": -2147483648,
                "max_value": 2147483647
            },
            "meals_per_day": {
                "type": "integer",
                "required": false,
                "read_only": false,
                "label": "Meals per day",
                "min_value": -2147483648,
                "max_value": 2147483647
            },
            "not_in_school_before": {
                "type": "boolean",
                "required": false,
                "read_only": false,
                "label": "Not in school before"
            },
            "emis_code_histories": {
                "type": "string",
                "required": false,
                "read_only": false,
                "label": "Emis code histories",
                "max_length": 200
            },
            "total_attendance": {
                "type": "integer",
                "required": false,
                "read_only": false,
                "label": "Total attendance",
                "min_value": -2147483648,
                "max_value": 2147483647
            },
            "total_absents": {
                "type": "integer",
                "required": false,
                "read_only": false,
                "label": "Total absents",
                "min_value": -2147483648,
                "max_value": 2147483647
            },
            "last_attendance": {
                "type": "date",
                "required": false,
                "read_only": false,
                "label": "Last attendance"
            },
            "knows_dob": {
                "type": "boolean",
                "required": false,
                "read_only": false,
                "label": "Knows dob"
            },
            "father_name": {
                "type": "string",
                "required": false,
                "read_only": false,
                "label": "Father name",
                "max_length": 50
            },
            "father_phone": {
                "type": "string",
                "required": false,
                "read_only": false,
                "label": "Father phone",
                "max_length": 20
            },
            "father_status": {
                "type": "choice",
                "required": false,
                "read_only": false,
                "label": "Father status",
                "choices": [
                    {
                        "value": "A",
                        "display_name": "Alive"
                    },
                    {
                        "value": "D",
                        "display_name": "Deceased"
                    }
                ]
            },
            "mother_name": {
                "type": "string",
                "required": false,
                "read_only": false,
                "label": "Mother name",
                "max_length": 50
            },
            "mother_phone": {
                "type": "string",
                "required": false,
                "read_only": false,
                "label": "Mother phone",
                "max_length": 20
            },
            "mother_status": {
                "type": "choice",
                "required": false,
                "read_only": false,
                "label": "Mother status",
                "choices": [
                    {
                        "value": "A",
                        "display_name": "Alive"
                    },
                    {
                        "value": "D",
                        "display_name": "Deceased"
                    }
                ]
            },
            "live_with_parent": {
                "type": "boolean",
                "required": false,
                "read_only": false,
                "label": "Live with parent"
            },
            "guardian_name": {
                "type": "string",
                "required": false,
                "read_only": false,
                "label": "Guardian name",
                "max_length": 50
            },
            "guardian_phone": {
                "type": "string",
                "required": false,
                "read_only": false,
                "label": "Guardian phone",
                "max_length": 20
            },
            "guardian_status": {
                "type": "choice",
                "required": false,
                "read_only": false,
                "label": "Guardian status",
                "choices": [
                    {
                        "value": "B",
                        "display_name": "Both Parents"
                    },
                    {
                        "value": "S",
                        "display_name": "Single Parent"
                    },
                    {
                        "value": "N",
                        "display_name": "None"
                    },
                    {
                        "value": "NS",
                        "display_name": "Not Set"
                    }
                ]
            },
            "guardian_relationship": {
                "type": "string",
                "required": false,
                "read_only": false,
                "label": "Guardian relationship",
                "max_length": 45
            },
            "has_special_needs": {
                "type": "boolean",
                "required": false,
                "read_only": false,
                "label": "Has special needs"
            },
            "active": {
                "type": "boolean",
                "required": false,
                "read_only": true,
                "label": "Active"
            },
            "graduated": {
                "type": "boolean",
                "required": false,
                "read_only": false,
                "label": "Graduated"
            },
            "dropout_reason": {
                "type": "string",
                "required": false,
                "read_only": false,
                "label": "Dropout reason",
                "max_length": 200
            },
            "offline_id": {
                "type": "string",
                "required": false,
                "read_only": false,
                "label": "Offline id",
                "max_length": 20
            },
            "moe_id": {
                "type": "string",
                "required": false,
                "read_only": false,
                "label": "Moe id",
                "max_length": 50
            },
            "moe_unique_id": {
                "type": "string",
                "required": false,
                "read_only": false,
                "label": "Moe unique id",
                "max_length": 45
            },
            "moe_extra_info": {
                "type": "field",
                "required": false,
                "read_only": false,
                "label": "Moe extra info"
            },
            "has_attended_pre_primary": {
                "type": "boolean",
                "required": false,
                "read_only": false,
                "label": "Has attended pre primary"
            },
            "house_number": {
                "type": "string",
                "required": false,
                "read_only": false,
                "label": "House number",
                "max_length": 100
            },
            "street_name": {
                "type": "string",
                "required": false,
                "read_only": false,
                "label": "Street name",
                "max_length": 100
            },
            "upi": {
                "type": "string",
                "required": false,
                "read_only": false,
                "label": "Upi",
                "help_text": "Unique Identification provided by the school",
                "max_length": 45
            },
            "stream": {
                "type": "field",
                "required": false,
                "read_only": false,
                "label": "Stream"
            },
            "village": {
                "type": "field",
                "required": false,
                "read_only": false,
                "label": "Village"
            },
            "guardian_village": {
                "type": "field",
                "required": false,
                "read_only": false,
                "label": "Guardian village"
            },
            "graduates_class": {
                "type": "field",
                "required": false,
                "read_only": false,
                "label": "Graduates class"
            },
            "special_needs": {
                "type": "multifield",
                "required": false,
                "read_only": false,
                "label": "Filter by Special Needs",
                "display_name": "name",
                "placeholder": "Search Special Needs ..",
                "value_field": "id",
                "edit_source_field": "items_details",
                "multiple": true,
                "url": `api/v1/special-needs/`,
                "search_field": "name",
                "edit_display_name": "item_name"
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
            "status": {
                "type": "choice",
                "required": false,
                "read_only": false,
                "label": "Filter by Status",
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
        }
    }
}

export {
    filterOptions
}