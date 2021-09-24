
# Create a New Schedule Request

## Structure

`CreateANewScheduleRequest`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `name` | `string` | Required | - |
| `mtype` | `string` | Required | - |
| `start_date` | `string` | Required | - |
| `end_date` | `string` | Required | - |
| `phone_book_id` | `string` | Required | - |
| `template_id` | `string` | Required | - |
| `interval_type` | `string` | Required | - |
| `interval` | `int` | Required | - |

## Example (as JSON)

```json
{
  "name": "Soccer Practice Reminder",
  "type": "recurring",
  "start_date": "2015-11-08 14:00",
  "end_date": "2015-11-20 14:00",
  "phone_book_id": "59196",
  "template_id": "8465",
  "interval_type": "days",
  "interval": 30
}
```

