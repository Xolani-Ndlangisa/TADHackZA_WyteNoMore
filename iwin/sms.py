import requests
import json
from  requests.exceptions import HTTPError


def sendSMS(data,msg):
    data ={
    "mobile_numbers": data["cell_number"],
    "message": msg
    }
    response = requests.post(
        'https://api.iwin.co.za/iwin/api/v1/messages',
        data =data,
        headers= {'Authorization' : 'bearer 679fc77f7336456aa1b5bccb30b2a6ff' }
    )
    return response

# https://www.atinkanews.net/2021/09/24/blood-and-water-season-2-full-hd-available-for-free-download/