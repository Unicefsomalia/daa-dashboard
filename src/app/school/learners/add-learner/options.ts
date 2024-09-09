const options = {
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
            "base_class": {
                "type": "string",
                "required": false,
                "read_only": true,
                "label": "Base class"
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
                "required": true,
                "read_only": false,
                "label": "Date Enrolled"
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
            "county": {
                "type": "field",
                "required": false,
                "read_only": true,
                "label": "County"
            },
            "guardian_county": {
                "type": "field",
                "required": false,
                "read_only": true,
                "label": "Guardian county"
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
            "shehiya_name": {
                "type": "field",
                "required": false,
                "read_only": true,
                "label": "Shehia name"
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
            "guardian_shehiya_name": {
                "type": "field",
                "required": false,
                "read_only": true,
                "label": "Guardian shehia name"
            },
            "guardian_status_display": {
                "type": "field",
                "required": false,
                "read_only": true,
                "label": "Guardian status display"
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
                "label": "Learner's name",
                "max_length": 200
            },
            "test_name": {
                "type": "string",
                "required": false,
                "read_only": false,
                "label": "Mlolongog's name",
                "max_length": 200
            },
            "middle_name": {
                "type": "string",
                "required": true,
                "read_only": false,
                "label": "Father's name",
                "max_length": 200
            },
            "is_over_age": {
                "type": "field",
                "required": true,
                "read_only": false,
                "label": "Is the learner over age?",
                "choices": [
                    { "value": true, "display_name": "Yes" },
                    { "value": false, "display_name": "No" },
                ]
            },
            "last_name": {
                "type": "string",
                "required": false,
                "read_only": false,
                "label": "Grandfather's name",
                "max_length": 200
            },
            "family_nick_name": {
                "type": "string",
                "required": false,
                "read_only": false,
                "label": "Nickname / Family name",
                "max_length": 200
            },
            "date_of_birth": {
                "type": "date",
                "required": true,
                "read_only": false,
                "label": "Date of Birth"
            },
            "admission_no": {
                "type": "string",
                "required": false,
                "read_only": false,
                "label": "Admission Number",
                "max_length": 50
            },
            "gender": {
                "type": "choice",
                "required": true,
                "read_only": false,
                "label": "Gender",
                "choices": [
                    {
                        "value": "M",
                        "display_name": "MALE"
                    },
                    {
                        "value": "F",
                        "display_name": "FEMALE"
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
                "label": "Distance from School",
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
            "guardian_name": {
                "type": "string",
                "required": true,
                "read_only": false,
                "label": "Guardian Name",
                "max_length": 50,
                "from_field": "live_with_parent",
                "show_only": false
            },
            "guardian_phone": {
                "type": "string",
                "required": true,
                "read_only": false,
                "label": "Guardian Phone Number",
                "max_length": 20,
                "from_field": "live_with_parent",
                "show_only": false
            },
            "guardian_status": {
                "type": "choice",
                "required": false,
                "read_only": false,
                "label": "Guardian Status",
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
                "label": "Guardian Relationship",
                "max_length": 30,
                "from_field": "live_with_parent",
                "show_only": false
            },
            "state": {
                "type": "field",
                "required": true,
                "read_only": false,
                "label": "State",
                "display_name": "name",
                "url": `api/v1/states/`,
            },
            "region": {
                "type": "field",
                "required": true,
                "read_only": false,
                "label": "Region",
                "display_name": "name",
                "url": `api/v1/regions/`,
            },
            "district": {
                "type": "field",
                "required": true,
                "read_only": false,
                "label": "District",
                "display_name": "name",
                "from_field_url": `api/v1/districts/`,
                "from_field_search_name": `region`,
                "from_field": "region"
            },
            "village": {
                "type": "field",
                "required": true,
                "read_only": false,
                "label": "Village",
                "display_name": "name",
                "from_field_url": `api/v1/villages/`,
                "from_field_search_name": `district`,
                "from_field": "district",
            },
            "guardian_region": {
                "type": "field",
                "required": true,
                "read_only": false,
                "label": "Guardian Region",
                "display_name": "name",
                "url": `api/v1/regions/`,
            },
            "guardian_district": {
                "type": "field",
                "required": false,
                "read_only": false,
                "label": "Guardian District",
                "display_name": "name",
                "from_field_url": `api/v1/districts/`,
                "from_field_search_name": `region`,
                "from_field": "guardian_region",
            },
            "guardian_shehiya": {
                "type": "field",
                "required": false,
                "read_only": false,
                "label": "Guardian Shehia",
                "display_name": "name",
                "url": `api/v1/districts/`,
                "from_field": "guardian_district",
                "from_field_source": "shehiyas_details",
            },
            "active": {
                "type": "boolean",
                "required": false,
                "read_only": false,
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
            "status": {
                "type": "choice",
                "required": true,
                "read_only": false,
                "label": "Learner Status",
                "choices": [
                    { "value": "NE", "display_name": "Newly Enrolled" },
                    { "value": "PE", "display_name": "Re Enrolled" }
                ]
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
            "pre_primary_attendend": {
                "type": "field",
                "required": true,
                "read_only": false,
                "label": "Which pre-primary education has the learner attended?",
                "choices": [
                    { "value": "N", "display_name": "None" },
                    { "value": "Q", "display_name": "Quranic Education" },
                    { "value": "F", "display_name": "Formal Education" }
                ]
            },
            "has_special_needs": {
                "type": "boolean",
                "required": true,
                "read_only": false,
                "label": "Does the Learner have any Special Needs?",
            },
            "house_number": {
                "type": "string",
                "required": false,
                "read_only": false,
                "label": "House Number",
                "max_length": 100
            },
            "street_name": {
                "type": "string",
                "required": false,
                "read_only": false,
                "label": "Street Name",
                "max_length": 50
            },
            "upi": {
                "type": "string",
                "required": false,
                "read_only": false,
                "label": "Upi",
                "help_text": "Unique Identification provided by the school",
                "max_length": 45
            },
            "school": {
                "type": "multifield",
                "required": true,
                "read_only": false,
                "label": "Assign School",
                "display_name": "name",
                "placeholder": "Search School Name ..",
                "value_field": "id",
                "edit_source_field": "items_details",
                "multiple": false,
                "url": `api/v1/schools/`,
                "search_field": "name",
                "edit_display_name": "item_name",
                "res_value_field": "item_config"
            },
            "stream": {
                "type": "field",
                "required": true,
                "multiple": false,
                "read_only": false,
                "label": "Class",
                "url": `api/v1/streams/`,
                "value_field": "id",
                "search_field": "school_name",
                // "placeholder": "Search by school name ..",
                "display_name": "full_class_name",
                "from_field_url": `api/v1/streams/`,
                "from_field_search_name": `school`,
                "from_field": "school"
            },
            "special_needs": {
                "type": "multifield",
                "required": true,
                "read_only": false,
                "multiple": true,
                "label": "Special Needs",
                "url": `api/v1/special-needs/`,
                "value_field": "id",
                "search_field": "name",
                // "placeholder": "Search by school name ..",
                "display_name": "name",
                "from_field": "has_special_needs",
                "show_only": true
            },
            "graduates_class": {
                "type": "field",
                "required": false,
                "read_only": false,
                "label": "Graduates class"
            },
            "father_name": {
                "type": "string",
                "required": true,
                "read_only": false,
                "label": "Father's Name",
                "max_length": 50
            },
            "mother_name": {
                "type": "string",
                "required": true,
                "read_only": false,
                "label": "Mother's Name",
                "max_length": 50
            },
            "father_phone": {
                "type": "string",
                "required": false,
                "read_only": false,
                "label": "Father's Phone Number",
                "max_length": 20
            },
            "mother_phone": {
                "type": "string",
                "required": false,
                "read_only": false,
                "label": "Mother's Phone Number",
                "max_length": 20
            },
            "father_status": {
                "type": "choice",
                "required": false,
                "read_only": false,
                "label": "Father's Status",
                "choices": [
                    {
                        "value": "A",
                        "display_name": "Alive"
                    },
                    {
                        "value": "D",
                        "display_name": "Deceased"
                    },
                ]
            },
            "mother_status": {
                "type": "choice",
                "required": false,
                "read_only": false,
                "label": "Mother's Status",
                "choices": [
                    {
                        "value": "A",
                        "display_name": "Alive"
                    },
                    {
                        "value": "D",
                        "display_name": "Deceased"
                    },
                ]
            },
            "live_with_parent": {
                "type": "boolean",
                "required": true,
                "read_only": false,
                "default": true,
                "label": "Do You Live With any of your Parent?"
            }

        }
    }
}

export {
    options
}