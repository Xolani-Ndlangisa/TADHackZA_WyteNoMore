# Sent Schedule Replies

A sent schedule can receive replies from message recipients. The replies can be read from this resource.
You can use this resource to act on replies in your application.

```python
sent_schedule_replies_controller = client.sent_schedule_replies
```

## Class Name

`SentScheduleRepliesController`


# Get All Sent Schedule Replies

`GET /iwin/api/v1/sentschedules/{id}/replies`

View all the replies that were sent as a response to a scheduled message.

```python
def get_all_sent_schedule_replies(self,
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

result = sent_schedule_replies_controller.get_all_sent_schedule_replies(accept, id)
```

