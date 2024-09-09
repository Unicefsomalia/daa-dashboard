
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
            "school": {
                "type": "multifield",
                "required": false,
                "read_only": false,
                "label": "School",
                "display_name": "name",
                "placeholder": "Search by School name ..",
                "value_field": "id",
                "edit_source_field": "items_details",
                "multiple": false,
                "url": `api/v1/schools/`,
                "search_field": "name",
                "edit_display_name": "item_name"
            },
            "state": {
                "type": "multifield",
                "required": false,
                "read_only": false,
                "label": "State",
                "display_name": "name",
                "placeholder": "Search by State name ..",
                "value_field": "id",
                "edit_source_field": "items_details",
                "multiple": false,
                "url": `api/v1/states/`,
                "search_field": "name",
                "edit_display_name": "item_name"
            },
            "region": {
                "type": "multifield",
                "required": false,
                "read_only": false,
                "label": "Region",
                "display_name": "name",
                "placeholder": "Search by Region name ..",
                "value_field": "id",
                "edit_source_field": "items_details",
                "multiple": false,
                "url": `api/v1/regions/`,
                "search_field": "name",
                "edit_display_name": "item_name"
            },
            "district": {
                "type": "multifield",
                "required": false,
                "read_only": false,
                "label": "District",
                "display_name": "name",
                "placeholder": "Search by District name ..",
                "value_field": "id",
                "edit_source_field": "items_details",
                "multiple": false,
                "url": `api/v1/districts/`,
                "search_field": "name",
                "edit_display_name": "item_name"
            },
            "shehiya": {
                "type": "multifield",
                "required": false,
                "read_only": false,
                "label": "Shehiya",
                "display_name": "name",
                "placeholder": "Search by Shehiya name..",
                "value_field": "id",
                "edit_source_field": "items_details",
                "multiple": false,
                "url": `api/v1/shehiyas/`,
                "search_field": "name",
                "edit_display_name": "item_name"
            },
            "emis_code": {
                "type": "string",
                "required": false,
                "read_only": false,
                "label": "School EMIS Code",
                "display_name": "name",
                "placeholder": "Search by EMIS Code ..",
            },
            "village": {
                "type": "multifield",
                "required": false,
                "read_only": false,
                "label": "Village",
                "display_name": "name",
                "placeholder": "Search by Village name..",
                "value_field": "id",
                "edit_source_field": "items_details",
                "multiple": false,
                "url": `api/v1/villages/`,
                "search_field": "name",
                "edit_display_name": "item_name"
            }

        }
    }
}

export {
    filterOptions
}