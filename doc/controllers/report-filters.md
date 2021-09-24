# Report Filters

```python
report_filters_controller = client.report_filters
```

## Class Name

`ReportFiltersController`


# Get a Report S Filters

`GET /iwin/api/v1/reports/{id}/filters`

Get a report's filters.

```python
def get_a_report_s_filters(self,
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

result = report_filters_controller.get_a_report_s_filters(accept, id)
```

