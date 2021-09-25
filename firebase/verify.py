import requests
import json
def verify(data):
    url = "https://mtntadhack2021.contactable.co.za/api/validation"

    payload = json.dumps(data["id"])
    auth = ("mtn_tad_user", "ac4b87f2-1a0d-4906-9dc9-1c0c155a804c")
    headers = {
    'Content-Type': 'application/json'
    }
    response = requests.request("POST", url, auth=auth,headers=headers, data=payload, verify=False)
    result = response.json()
    if (result["Name"] == data["name"].upper() and result["Surname"] == data["surname"]):
        
        
        print(response.text)    