const options = {
    "name": "List Create Oosc Partners Api",
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
                "max_length": 105
            },
            "email": {
                "type": "email",
                "required": true,
                "read_only": false,
                "label": "Email",
                "max_length": 100
            },
            "user": {
                "type": "field",
                "required": false,
                "read_only": true,
                "label": "User"
            },
            "schools": {
                "type": "multifield",
                "required": true,
                "read_only": false,
                "label": "Schools",
                "url": `api/v1/schools/`,
                "value_field": "id",
                "multiple": true,
                "search_field": "name",
                "placeholder": "Search School Name ..",
                "display_name": "name"
            }
        }
    }
}

export {
    options
}