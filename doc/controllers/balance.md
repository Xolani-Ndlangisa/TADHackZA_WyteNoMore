# Balance

```python
balance_controller = client.balance
```

## Class Name

`BalanceController`


# Get Balance

`GET /iwin/api/v1/balance`

Get your Iwin balance. Your balance is the number of messages that can be sent until your account balance is depleted.

```python
def get_balance(self,
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

result = balance_controller.get_balance(accept)
```

