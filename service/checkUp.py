from iwin.sms import sendSMS

def checkUp(data):
    sendSMS(data["cell_number"],"Your check up request has been received")
    return