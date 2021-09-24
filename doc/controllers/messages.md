# Messages

Messages are a quick way of sending out an SMS to a single or multiple recipients. The number of messages
sent out in one call is limited to 100 recipients at a time.
If you need to send out messages to more than a 100 recipients, rather create a once off schedule.

A standard SMS's length is 160 characters, so if you go over that, your message will be broken up into parts, and you will be charged per SMS part. Also note that if your message length is above 160 characters, the message is segmented into 150 character segments to enable successful reconstruction of the multi-part message on most handsets.

```python
messages_controller = client.messages
```

## Class Name

`MessagesController`

## Methods

* [Create Send Messages](/doc/controllers/messages.md#create-send-messages)
* [Get Messages](/doc/controllers/messages.md#get-messages)


# Create Send Messages

`POST /iwin/api/v1/messages`

Send a message to one or more recipients.

```python
def create_send_messages(self,
                        content_type,
                        accept,
                        body)
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `content_type` | `string` | Header, Required | - |
| `accept` | `string` | Header, Required | - |
| `body` | [`SendMessagesRequest`](/doc/models/send-messages-request.md) | Body, Required | - |

## Response Type

`void`

## Example Usage

```python
content_type = 'application/json'
accept = 'application/json'
body = SendMessagesRequest()
body.mobile_numbers = '5558328328,55553942432'
body.message = 'Soccer practice will be on the 7th at 6.'

result = messages_controller.create_send_messages(content_type, accept, body)
```


# Get Messages

`GET /iwin-competition/api/v1/competitions/messages`

Get all the messages received for all your short codes, with their categories. If you run a competition, the messages will contain the votes per category, per short code.
The short code is your premium rate SMS number. The short code and competition ID is linked together. The total field contains the amount of messages received for this competition and category.

```python
def get_messages(self,
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

result = messages_controller.get_messages(accept)
```

