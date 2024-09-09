export const filterOptions = {
  "name": "List Create Translation Locales Api",
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
      "text_translations_details": {
        "type": "field",
        "required": false,
        "read_only": false,
        "label": "Text translations details",
        "child": {
          "type": "nested object",
          "required": false,
          "read_only": false,
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
        "max_length": 45
      },
      "country_code": {
        "type": "string",
        "required": true,
        "read_only": false,
        "label": "Country code",
        "max_length": 3
      },
      "language_code": {
        "type": "string",
        "required": true,
        "read_only": false,
        "label": "Language code",
        "max_length": 3
      },
      "translations": {
        "type": "field",
        "required": false,
        "read_only": false,
        "label": "Translations"
      },
      "version": {
        "type": "string",
        "required": false,
        "read_only": true,
        "label": "Version"
      },
      "active": {
        "type": "boolean",
        "required": false,
        "read_only": false,
        "label": "Active"
      }
    }
  }
}