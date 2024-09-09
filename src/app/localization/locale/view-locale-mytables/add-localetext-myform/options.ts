export const options = {
  "name": "List Create Locale Translation Texts Api",
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
      "translated_text": {
        "type": "string",
        "required": false,
        "read_only": false,
        "label": "Translated text",
        "max_length": 600
      },
      "locale": {
        "type": "field",
        "required": true,
        "read_only": false,
        "label": "Locale"
      },
      "text": {
        "type": "field",
        "required": true,
        "read_only": false,
        "label": "Text"
      }
    }
  }
}

