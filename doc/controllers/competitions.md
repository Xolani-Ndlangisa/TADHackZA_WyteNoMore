# Competitions

```python
competitions_controller = client.competitions
```

## Class Name

`CompetitionsController`


# Get Competitions

`GET /iwin-competition/api/v1/competitions`

Get all your competitions (registered premium rated SMSes). To learn more about our Short Codes, go to http://www.iwin.co.za/shortcodes/.

```python
def get_competitions(self,
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

result = competitions_controller.get_competitions(accept)
```

