from firebase.firebase import firebaseController,getUser
from iwin.sms import sendSMS

class Auth:

    def login(self,data):
        status = getUser(data)
        return status

    def signup(self,data):
        status =firebaseController(data)
        if status == 201:
            sendSMS(data,"Hi {}, Welcome to WytNoMO, We looking forward to work with you.".format(data["name"]))
            return {"msg":"Thank you {} your account has been registered successfully".format(data["name"]), "status":status}
        else:
            return {"msg":"User with this email/cell number already exist".format(data["name"]), "status":status}