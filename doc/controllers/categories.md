# Categories

```python
categories_controller = client.categories
```

## Class Name

`CategoriesController`

## Methods

* [Get Competition Categories](/doc/controllers/categories.md#get-competition-categories)
* [Create Competition Category](/doc/controllers/categories.md#create-competition-category)
* [Delete Competition Category](/doc/controllers/categories.md#delete-competition-category)


# Get Competition Categories

`GET /iwin-competition/api/v1/competitions/{id}/categories`

Get all the categories (e.g. entrants) for a competition.

```python
def get_competition_categories(self,
                              accept,
                              id)
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `accept` | `string` | Header, Required | - |
| `id` | `string` | Template, Required | - |

## Response Type

`void`

## Example Usage

```python
accept = 'application/json'
id = 'id0'

result = categories_controller.get_competition_categories(accept, id)
```


# Create Competition Category

`POST /iwin-competition/api/v1/competitions/{id}/categories`

Create a new compeition category. Note that you can add the same category to multiple competitions at the same time by comma separating the competition IDs, e.g.
`/iwin-competition/api/v1/competitions/2334,2322/categories`, where `2334` and `2322` are the respective competition IDs.
This is useful for situations where you have more than one short code, e.g. a R2 short code and R30 short code for the same competition, but would like entrants to use either.

Important: Categories refresh every evening at 00:00. If you add a category at 15:00, the category will only be recognised at 00:00.

```python
def create_competition_category(self,
                               content_type,
                               accept,
                               body,
                               id)
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `content_type` | `string` | Header, Required | - |
| `accept` | `string` | Header, Required | - |
| `body` | [`CreateCompetitionCategoryRequest`](/doc/models/create-competition-category-request.md) | Body, Required | - |
| `id` | `string` | Template, Required | - |

## Response Type

`void`

## Example Usage

```python
content_type = 'application/json'
accept = 'application/json'
body = CreateCompetitionCategoryRequest()
body.name = 'Soccer Practice Reminder'
body.text = 'Reminder: There is soccer practice on Wednesday at 16:00.'
body.create_date = '2015-12-08 16:47:45'
id = 'id0'

result = categories_controller.create_competition_category(content_type, accept, body, id)
```


# Delete Competition Category

`DELETE /iwin-competition/api/v1/competitions/{id}/categories/{code}`

Delete a category. You can also delete the same category from different competitions in the same call by comma separating the competition IDs.

Important: Categories refresh every evening at 00:00. If you delete a category at 15:00, the category will only be recognised as deleted at 00:00.

```python
def delete_competition_category(self,
                               accept,
                               id)
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `accept` | `string` | Header, Required | - |
| `id` | `string` | Template, Required | - |

## Response Type

`void`

## Example Usage

```python
accept = 'application/json'
id = 'id0'

result = categories_controller.delete_competition_category(accept, id)
```

