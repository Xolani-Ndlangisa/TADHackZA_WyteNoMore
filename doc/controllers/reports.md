# Reports

```python
reports_controller = client.reports
```

## Class Name

`ReportsController`

## Methods

* [Get All Reports](/doc/controllers/reports.md#get-all-reports)
* [Get a Report](/doc/controllers/reports.md#get-a-report)


# Get All Reports

`GET /iwin/api/v1/reports`

Get all your reports.

```python
def get_all_reports(self,
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

result = reports_controller.get_all_reports(accept)
```


# Get a Report

`GET /iwin/api/v1/reports/{id}`

Get a report's data.

The parameters for this request will be determined by the report's filters.

See the next section on how to view a report's filters.

If a filter was not passed in, the default value for the filter will be used.

```python
def get_a_report(self,
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

result = reports_controller.get_a_report(accept)
```

