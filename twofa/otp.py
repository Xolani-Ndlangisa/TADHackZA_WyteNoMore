import pyotp
from pyotp import otp


class TwoFA:
   
    def __init__(self):
        self.totp = pyotp.TOTP("base32secret3232")
        self.otp =''

    def generateOTP(self):
        self.otp = self.totp.now()
        return self.otp

    def verifyOTP(self,userOTP):
        return self.totp.verify(userOTP)


# obj = TwoFA()

# print(obj.generateOTP())
# print(obj.verifyOTP("12345"))
