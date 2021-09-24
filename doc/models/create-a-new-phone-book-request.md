
# Create a New Phone Book Request

## Structure

`CreateANewPhoneBookRequest`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `name` | `string` | Required | The name of the phone book (segment) |
| `attribute_1` | `string` | Optional | This specification allows you to specify a name for a first extensible attribute for the segment |
| `attribute_2` | `string` | Optional | This specification allows you to specify a name for a second extensible attribute for the segment |
| `attribute_3` | `string` | Optional | This specification allows you to specify a name for a third extensible attribute for the segment |
| `attribute_4` | `string` | Optional | This specification allows you to specify a name for a fourth extensible attribute for the segment |
| `attribute_5` | `string` | Optional | This specification allows you to specify a name for a fifth extensible attribute for the segment |

## Example (as JSON)

```json
{
  "name": "Soccer Moms",
  "attribute_1": "ChildName",
  "attribute_2": "Team"
}
```

