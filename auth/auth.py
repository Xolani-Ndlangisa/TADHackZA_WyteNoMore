from firebase.firebase import firebaseController,getUser
from iwin.sms import sendSMS
from twofa.otp import TwoFA

class Auth:
    otpObj =  TwoFA()
    def __init__(self):
        self.otpObj =  TwoFA()

    def login(self,data):
        status = getUser(data)
        return status

    def signup(self,data):
        otp = self.otpObj.generateOTP()
        data["otp"] = otp
        data["status"] = "false"
        status =firebaseController(data)
        if status == 201:
            sendSMS(data,"WytNoMO OTP {}".format(otp))
            sendSMS(data,"Hi {}, Welcome to WytNoMO, We looking forward to work with you.".format(data["name"]))
            return {"msg":"Thank you {} your account has been registered successfully".format(data["name"]), "status":status}
        else:
            return {"msg":"User with this email/cell number already exist".format(data["name"]), "status":status}
    def verify(self,otp):
        print(self.otpObj.verifyOTP(otp))
        # sendSMS(data,"Hi {}, Welcome to WytNoMO, We looking forward to work with you.".format(data["name"]))