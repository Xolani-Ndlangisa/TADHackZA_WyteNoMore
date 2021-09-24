# Phone Books

Phone books are groups of people that can be messaged at once.

```python
phone_books_controller = client.phone_books
```

## Class Name

`PhoneBooksController`

## Methods

* [Create a New Phone Book](/doc/controllers/phone-books.md#create-a-new-phone-book)
* [Get a Phone Book](/doc/controllers/phone-books.md#get-a-phone-book)
* [Get All Phone Books](/doc/controllers/phone-books.md#get-all-phone-books)
* [Delete a Phone Book](/doc/controllers/phone-books.md#delete-a-phone-book)
* [Update a Phone Book](/doc/controllers/phone-books.md#update-a-phone-book)


# Create a New Phone Book

`POST /iwin/api/v1/phonebooks`

Add a new phone book. A phone book and its phone book entries are created separately. The phone book attribute fields are fields
that can be named to send personalized messages. For example, if attribute_1 has a value of "ID", a token
called &lt;ID&gt; can be used in messages, and the phone book entry (recipient) detail will be replaced in the message.

```python
def create_a_new_phone_book(self,
                           content_type,
                           accept,
                           body)
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `content_type` | `string` | Header, Required | - |
| `accept` | `string` | Header, Required | - |
| `body` | [`CreateANewPhoneBookRequest`](/doc/models/create-a-new-phone-book-request.md) | Body, Required | - |

## Response Type

`void`

## Example Usage

```python
content_type = 'application/json'
accept = 'application/json'
body = CreateANewPhoneBookRequest()
body.name = 'Soccer Moms'
body.attribute_1 = 'ChildName'
body.attribute_2 = 'Team'
body.attribute_3 = 'AgeGroup'
body.attribute_4 = 'Position'
body.attribute_5 = 'ShirtSize'

result = phone_books_controller.create_a_new_phone_book(content_type, accept, body)
```


# Get a Phone Book

`GET /iwin/api/v1/phonebooks/{id}`

View a single phone book.

```python
def get_a_phone_book(self,
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

result = phone_books_controller.get_a_phone_book(accept, id)
```


# Get All Phone Books

`GET /iwin/api/v1/phonebooks`

Get a list of all the phone books.

```python
def get_all_phone_books(self,
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

result = phone_books_controller.get_all_phone_books(accept)
```


# Delete a Phone Book

`DELETE /iwin/api/v1/phonebooks/{id}`

Delete a phone book. Phone books already in use by a schedule cannot be deleted unless the schedule is also deleted.

```python
def delete_a_phone_book(self,
                       accept,
                       phone_book_id)
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `accept` | `string` | Header, Required | - |
| `phone_book_id` | `string` | Template, Required | - |

## Response Type

`void`

## Example Usage

```python
accept = 'application/json'
phone_book_id = 'phoneBookId2'

result = phone_books_controller.delete_a_phone_book(accept, phone_book_id)
```


# Update a Phone Book

`PUT /iwin/api/v1/phonebooks/{id}`

Update a phone book. Values not present in the request will not be updated.

```python
def update_a_phone_book(self,
                       content_type,
                       accept,
                       body)
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `content_type` | `string` | Header, Required | - |
| `accept` | `string` | Header, Required | - |
| `body` | [`UpdateAPhoneBookRequest`](/doc/models/update-a-phone-book-request.md) | Body, Required | - |

## Response Type

`void`

## Example Usage

```python
content_type = 'application/json'
accept = 'application/json'
body = UpdateAPhoneBookRequest()
body.name = 'Soccer Moms and Dads'
body.attribute_3 = 'ID'

result = phone_books_controller.update_a_phone_book(content_type, accept, body)
```

