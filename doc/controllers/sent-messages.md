# Sent Messages

View messages that have been sent. Sent messages can be used to monitor delivery status.

```python
sent_messages_controller = client.sent_messages
```

## Class Name

`SentMessagesController`


# Get View Sent Messages

`GET /iwin/api/v1/sentmessages`

View all the sent messages.

```python
def get_view_sent_messages(self,
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

result = sent_messages_controller.get_view_sent_messages(accept)
```

