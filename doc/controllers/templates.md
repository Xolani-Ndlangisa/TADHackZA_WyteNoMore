# Templates

Message templates are stored messages that can be resent and reused. Tokens can be used to personalize messages. To use a token,
wrap the token name in <>, all uppercase. Tokens must be defined in the associated phone book's attributes 1 to 5.

```python
templates_controller = client.templates
```

## Class Name

`TemplatesController`

## Methods

* [Create a New Template](/doc/controllers/templates.md#create-a-new-template)
* [Delete a Template](/doc/controllers/templates.md#delete-a-template)
* [Get All Templates](/doc/controllers/templates.md#get-all-templates)
* [Get a Template](/doc/controllers/templates.md#get-a-template)
* [Update a Template](/doc/controllers/templates.md#update-a-template)


# Create a New Template

`POST /iwin/api/v1/templates`

Create a new template. A phone book ID can optionally be passed in, if you would like to use tokens in your messages.

```python
def create_a_new_template(self,
                         content_type,
                         accept,
                         body)
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `content_type` | `string` | Header, Required | - |
| `accept` | `string` | Header, Required | - |
| `body` | [`CreateANewTemplateRequest`](/doc/models/create-a-new-template-request.md) | Body, Required | - |

## Response Type

`void`

## Example Usage

```python
content_type = 'application/json'
accept = 'application/json'
body = CreateANewTemplateRequest()
body.name = 'Soccer Practice Reminder'
body.text = 'Reminder: There is soccer practice on Wednesday at 16:00.'
body.phone_book_id = '123'

result = templates_controller.create_a_new_template(content_type, accept, body)
```


# Delete a Template

`DELETE /iwin/api/v1/templates/{id}`

Delete a template. A template can only be deleted if it does not belong to a schedule.

```python
def delete_a_template(self,
                     accept,
                     template_id)
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `accept` | `string` | Header, Required | - |
| `template_id` | `string` | Template, Required | - |

## Response Type

`void`

## Example Usage

```python
accept = 'application/json'
template_id = 'templateId0'

result = templates_controller.delete_a_template(accept, template_id)
```


# Get All Templates

`GET /iwin/api/v1/templates`

Get all your message templates.

```python
def get_all_templates(self,
                     accept)
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `accept` | `string` | Header, Required | - |

## Response Type

`void`

## Example Usage

```python
accept = 'application/json'

result = templates_controller.get_all_templates(accept)
```


# Get a Template

`GET /iwin/api/v1/templates/{id}`

Get a template.

```python
def get_a_template(self,
                  accept,
                  template_id)
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `accept` | `string` | Header, Required | - |
| `template_id` | `string` | Template, Required | - |

## Response Type

`void`

## Example Usage

```python
accept = 'application/json'
template_id = 'templateId0'

result = templates_controller.get_a_template(accept, template_id)
```


# Update a Template

`PUT /iwin/api/v1/templates/{id}`

Update a template.

```python
def update_a_template(self,
                     content_type,
                     accept,
                     body,
                     template_id)
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `content_type` | `string` | Header, Required | - |
| `accept` | `string` | Header, Required | - |
| `body` | [`UpdateATemplateRequest`](/doc/models/update-a-template-request.md) | Body, Required | - |
| `template_id` | `string` | Template, Required | - |

## Response Type

`void`

## Example Usage

```python
content_type = 'application/json'
accept = 'application/json'
body = UpdateATemplateRequest()
body.name = 'Soccer Practice Reminder'
body.text = 'Reminder: There is soccer practice on Tuesday at 16:00.'
body.phone_book_id = '123'
template_id = 'templateId0'

result = templates_controller.update_a_template(content_type, accept, body, template_id)
```

