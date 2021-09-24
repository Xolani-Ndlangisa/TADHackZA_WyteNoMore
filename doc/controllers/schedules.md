# Schedules

While messages are great for sending out some messages on an ad-hoc basis, schedules are more suited for
sending out messages to regular groups. Schedules are also very useful for personalised messages.
There are two types of schedules:

- `once off` - Once off schedules will be sent only once.

- `recurring` - Recurring schedules will be sent between the start and end date, on the interval specified.

```python
schedules_controller = client.schedules
```

## Class Name

`SchedulesController`

## Methods

* [Create a New Schedule](/doc/controllers/schedules.md#create-a-new-schedule)
* [Get a Schedule](/doc/controllers/schedules.md#get-a-schedule)
* [Update Activate a Schedule](/doc/controllers/schedules.md#update-activate-a-schedule)
* [Delete a Schedule](/doc/controllers/schedules.md#delete-a-schedule)
* [Update Suspend a Schedule](/doc/controllers/schedules.md#update-suspend-a-schedule)
* [Get All Schedules](/doc/controllers/schedules.md#get-all-schedules)


# Create a New Schedule

`POST /iwin/api/v1/schedules`

Create a new schedule.

```python
def create_a_new_schedule(self,
                         content_type,
                         accept,
                         body)
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `content_type` | `string` | Header, Required | - |
| `accept` | `string` | Header, Required | - |
| `body` | [`CreateANewScheduleRequest`](/doc/models/create-a-new-schedule-request.md) | Body, Required | - |

## Response Type

`void`

## Example Usage

```python
content_type = 'application/json'
accept = 'application/json'
body = CreateANewScheduleRequest()
body.name = 'Soccer Practice Reminder'
body.mtype = 'recurring'
body.start_date = '2015-11-08 14:00'
body.end_date = '2015-11-20 14:00'
body.phone_book_id = '59196'
body.template_id = '8465'
body.interval_type = 'days'
body.interval = 30

result = schedules_controller.create_a_new_schedule(content_type, accept, body)
```


# Get a Schedule

`GET /iwin/api/v1/schedules/{id}`

Get a single schedule.

```python
def get_a_schedule(self,
                  accept,
                  schedule_id)
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `accept` | `string` | Header, Required | - |
| `schedule_id` | `string` | Template, Required | - |

## Response Type

`void`

## Example Usage

```python
accept = 'application/json'
schedule_id = 'scheduleId2'

result = schedules_controller.get_a_schedule(accept, schedule_id)
```


# Update Activate a Schedule

`PUT /iwin/api/v1/schedules/{id}/activate`

It is only necessary to activate a schedule if it was suspended explicitly. After activation, the schedule status will be "active".

```python
def update_activate_a_schedule(self,
                              accept,
                              schedule_id)
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `accept` | `string` | Header, Required | - |
| `schedule_id` | `string` | Template, Required | - |

## Response Type

`void`

## Example Usage

```python
accept = 'application/json'
schedule_id = 'scheduleId2'

result = schedules_controller.update_activate_a_schedule(accept, schedule_id)
```


# Delete a Schedule

`DELETE /iwin/api/v1/schedules/{id}`

Only schedules in status "suspended" can be deleted. Call `PUT /iwin/api/v1/schedules/{id}/suspend` to suspend a schedule.

```python
def delete_a_schedule(self,
                     accept,
                     schedule_id)
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `accept` | `string` | Header, Required | - |
| `schedule_id` | `string` | Template, Required | - |

## Response Type

`void`

## Example Usage

```python
accept = 'application/json'
schedule_id = 'scheduleId2'

result = schedules_controller.delete_a_schedule(accept, schedule_id)
```


# Update Suspend a Schedule

`PUT /iwin/api/v1/schedules/{id}/suspend`

Suspending a schedule will temporary stop a scedule from running, until it is activated again. After suspending a schedule, the schedule status will be "suspended".

```python
def update_suspend_a_schedule(self,
                             accept,
                             schedule_id)
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `accept` | `string` | Header, Required | - |
| `schedule_id` | `string` | Template, Required | - |

## Response Type

`void`

## Example Usage

```python
accept = 'application/json'
schedule_id = 'scheduleId2'

result = schedules_controller.update_suspend_a_schedule(accept, schedule_id)
```


# Get All Schedules

`GET /iwin/api/v1/schedules`

Get all schedules, both active and suspended.

```python
def get_all_schedules(self,
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

result = schedules_controller.get_all_schedules(accept)
```

