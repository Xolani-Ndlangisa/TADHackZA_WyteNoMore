# Sent Schedule Messages

View messages sent as part of a scheduled campaign. This would be all the messages that has been sent out as a sent schedule run.

```python
sent_schedule_messages_controller = client.sent_schedule_messages
```

## Class Name

`SentScheduleMessagesController`


# Get All Sent Schedule Messages

`GET /iwin/api/v1/sentschedules/{id}/messages`

View all the messages sent out as part of a scheduled message run.

```python
def get_all_sent_schedule_messages(self,
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

result = sent_schedule_messages_controller.get_all_sent_schedule_messages(accept, id)
```

