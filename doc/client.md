
# Client Class Documentation

The following parameters are configurable for the API Client:

| Parameter | Type | Description |
|  --- | --- | --- |
| `access_token` | `string` | The OAuth 2.0 Access Token to use for API requests. |
| `environment` | Environment | The API environment. <br> **Default: `Environment.PRODUCTION`** |
| `timeout` | `float` | The value to use for connection timeout. <br> **Default: 60** |
| `max_retries` | `int` | The number of times to retry an endpoint call if it fails. <br> **Default: 0** |
| `backoff_factor` | `float` | A backoff factor to apply between attempts after the second try. <br> **Default: 2** |
| `retry_statuses` | `Array of int` | The http statuses on which retry is to be done. <br> **Default: [408, 413, 429, 500, 502, 503, 504, 521, 522, 524]** |
| `retry_methods` | `Array of string` | The http methods on which retry is to be done. <br> **Default: ['GET', 'PUT']** |

The API client can be initialized as follows:

```python
from iwin.iwin_client import IwinClient
from iwin.configuration import Environment

client = IwinClient(
    access_token='AccessToken',
    environment=Environment.PRODUCTION,)
```

## Iwin Client

The gateway for the SDK. This class acts as a factory for the Controllers and also holds the configuration of the SDK.

## Controllers

| Name | Description |
|  --- | --- |
| messages | Gets MessagesController |
| sent_messages | Gets SentMessagesController |
| schedules | Gets SchedulesController |
| sent_schedules | Gets SentSchedulesController |
| sent_schedule_messages | Gets SentScheduleMessagesController |
| sent_schedule_replies | Gets SentScheduleRepliesController |
| phone_books | Gets PhoneBooksController |
| phone_books_entries | Gets PhoneBooksEntriesController |
| templates | Gets TemplatesController |
| account | Gets AccountController |
| balance | Gets BalanceController |
| reports | Gets ReportsController |
| report_filters | Gets ReportFiltersController |
| competitions | Gets CompetitionsController |
| categories | Gets CategoriesController |

