const options = {
    "name": "List Create Reset Password Dynamics Api",
    "description": "Group statistics by:\n`type` = id, sub-county, county",
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
            "username": {
                "type": "string",
                "required": false,
                "read_only": false,
                "label": "Username"
            },
            "new_password": {
                "type": "string",
                "required": false,
                "read_only": false,
                "label": "New Password"
            },
        }
    }
}

export {
    options
}