# Phone Books Entries

A phone book has multiple phone book entries containing recipient's details. If you plan on using tokens in your
messages, it is advisable to store the additonal attribute details for each phone book entry.

```python
phone_books_entries_controller = client.phone_books_entries
```

## Class Name

`PhoneBooksEntriesController`

## Methods

* [Delete Phone Book Entry](/doc/controllers/phone-books-entries.md#delete-phone-book-entry)
* [Get a Phone Book Entry](/doc/controllers/phone-books-entries.md#get-a-phone-book-entry)
* [Create a New Phone Book Entry](/doc/controllers/phone-books-entries.md#create-a-new-phone-book-entry)
* [Update Phone Book Entry](/doc/controllers/phone-books-entries.md#update-phone-book-entry)
* [Get Phone Book Entries](/doc/controllers/phone-books-entries.md#get-phone-book-entries)


# Delete Phone Book Entry

`DELETE /iwin/api/v1/phonebooks/{id}/entries/{entry_id}`

Delete a phone book entry.

```python
def delete_phone_book_entry(self,
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

result = phone_books_entries_controller.delete_phone_book_entry(accept, id)
```


# Get a Phone Book Entry

`GET /iwin/api/v1/phonebooks/{id}/entries/{entry_id}`

Get a single phone book entry.

```python
def get_a_phone_book_entry(self,
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

result = phone_books_entries_controller.get_a_phone_book_entry(accept, id)
```


# Create a New Phone Book Entry

`POST /iwin/api/v1/phonebooks/{id}/entries`

Add a new phone book entry.

```python
def create_a_new_phone_book_entry(self,
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
| `body` | [`CreateANewPhoneBookEntryRequest`](/doc/models/create-a-new-phone-book-entry-request.md) | Body, Required | - |
| `id` | `string` | Template, Required | - |

## Response Type

`void`

## Example Usage

```python
content_type = 'application/json'
accept = 'application/json'
body = CreateANewPhoneBookEntryRequest()
body.mobile_number = 'mobile_number4'
body.title = 'title8'
body.first_name = 'first_name6'
body.last_name = 'last_name4'
body.attribute_1 = 'attribute_18'
body.attribute_2 = 'attribute_28'
body.attribute_3 = 'attribute_38'
body.attribute_4 = 'attribute_46'
body.attribute_5 = 'attribute_50'
id = 'id0'

result = phone_books_entries_controller.create_a_new_phone_book_entry(content_type, accept, body, id)
```


# Update Phone Book Entry

`PUT /iwin/api/v1/phonebooks/{id}/entries/{entry_id}`

Update a phone book entry. Only the values present in the request will be updated - the rest will be left unchanged.

```python
def update_phone_book_entry(self,
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
| `body` | [`UpdatePhoneBookEntryRequest`](/doc/models/update-phone-book-entry-request.md) | Body, Required | - |
| `id` | `string` | Template, Required | - |

## Response Type

`void`

## Example Usage

```python
content_type = 'application/json'
accept = 'application/json'
body = UpdatePhoneBookEntryRequest()
body.mobile_number = '821838384234'
body.title = 'Mrs'
body.first_name = 'Holly'
body.last_name = 'Hunter'
body.attribute_1 = 'Myron'
body.attribute_2 = 'Team B'
id = 'id0'

result = phone_books_entries_controller.update_phone_book_entry(content_type, accept, body, id)
```


# Get Phone Book Entries

`GET /iwin/api/v1/phonebooks/{id}/entries`

Get all the entries in a phone book.

```python
def get_phone_book_entries(self,
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

result = phone_books_entries_controller.get_phone_book_entries(accept, id)
```

