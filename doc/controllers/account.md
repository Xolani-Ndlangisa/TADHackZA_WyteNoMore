# Account

The account resource provides an interface to update your Iwin account.

```python
account_controller = client.account
```

## Class Name

`AccountController`

## Methods

* [Get Account](/doc/controllers/account.md#get-account)
* [Update Account](/doc/controllers/account.md#update-account)


# Get Account

`GET /iwin/api/v1/account`

See your account details.

```python
def get_account(self,
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

result = account_controller.get_account(accept)
```


# Update Account

`PUT /iwin/api/v1/account`

Update your account details.

```python
def update_account(self,
                  content_type,
                  accept,
                  body)
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `content_type` | `string` | Header, Required | - |
| `accept` | `string` | Header, Required | - |
| `body` | [`UpdateAccountRequest`](/doc/models/update-account-request.md) | Body, Required | - |

## Response Type

`void`

## Example Usage

```python
content_type = 'application/json'
accept = 'application/json'
body = UpdateAccountRequest()
body.first_name = 'Holly'
body.last_name = 'Soccer practice will be on the 7th at 6.'
body.email = 'holly.hunter@company.com'
body.mobile_number = '5557756235'
body.password = 'hunter'

result = account_controller.update_account(content_type, accept, body)
```

