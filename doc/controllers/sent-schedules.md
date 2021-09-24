# Sent Schedules

View schedules that have been sent. Each time a schedule is executed, a new sent schedule resource entry is added, which is viewable via the sentschedules resource.

For example, if a schedule is set up to run every 30 days, every 30 days an entry will be added to this resource. This enables you to view schedule that have been executed already.

```python
sent_schedules_controller = client.sent_schedules
```

## Class Name

`SentSchedulesController`

## Methods

* [Get All Sent Schedules](/doc/controllers/sent-schedules.md#get-all-sent-schedules)
* [Get a Sent Schedule](/doc/controllers/sent-schedules.md#get-a-sent-schedule)


# Get All Sent Schedules

`GET /iwin/api/v1/sentschedules`

Get a list of all the schedules that have been kicked off. The total messages sent by the schedule can be seen.

```python
def get_all_sent_schedules(self,
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

result = sent_schedules_controller.get_all_sent_schedules(accept)
```


# Get a Sent Schedule

`GET /iwin/api/v1/sentschedules/{id}`

Get a single sent schedule item. Extra information (successful, failed, delivered, pending and reply totals) can be seen from viewing a single sent schedule.

```python
def get_a_sent_schedule(self,
                       accept,
                       sent_schedule_id)
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `accept` | `string` | Header, Required | - |
| `sent_schedule_id` | `string` | Template, Required | - |

## Response Type

`void`

## Example Usage

```python
accept = 'application/json'
sent_schedule_id = 'sentScheduleId8'

result = sent_schedules_controller.get_a_sent_schedule(accept, sent_schedule_id)
```

