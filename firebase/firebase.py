import pyrebase
from werkzeug.security import generate_password_hash, check_password_hash
firebaseConfig = {
  "apiKey": "AIzaSyBaAdm_AmdgGQLcdRCu1f103faXCYSajVs",
  "authDomain": "wytnomo.firebaseapp.com",
  "databaseURL": "https://wytnomo-default-rtdb.firebaseio.com",
  "projectId": "wytnomo",
  "storageBucket": "wytnomo.appspot.com",
  "messagingSenderId": "608851409860",
  "appId": "1:608851409860:web:dc039421499fcd2c1b8291",
  "measurementId": "G-ZR8EFT0GS4"
}

firebase=pyrebase.initialize_app(firebaseConfig)

db=firebase.database()


def firebaseController(data):
    if data["type"].lower() == "patients":
        return newPatient(data)
    elif data["type"].lower() == "driver":
        return newDriver(data)
    elif data["type"].lower() == "helper":
        return newHelper(data)


def newPatient(data):
    if db.child("Patients").child(data["cell_number"]).get().val() == None:
        data["password"] = generate_password_hash(data["password"], method='sha256')
        db.child("Patients").child(data["cell_number"]).set(data)
        return 201
    else :
        return 401

def newDriver(data):
    print(db.child("Driver").child(data["cell_number"]).get().val())
    if db.child("Driver").child(data["cell_number"]).get().val() == None:
        data["password"] = generate_password_hash(data["password"], method='sha256')
        db.child("Driver").child(data["cell_number"]).set(data)
        return 201
    else :
        return 401

def newHelper(data):
    if db.child("Helper").child(data["cell_number"]).get().val() == None:
        data["password"] = generate_password_hash(data["password"], method='sha256')
        db.child("Helper").child(data["cell_number"]).set(data)
        return 201
    else :
        return 401

def getUser(data):
    Types =["Helper","Driver","Patients"]
    for types in Types:
        if db.child(types).child(data["cell_number"]).get().val() != None:
            for key in db.child(types).child(data["cell_number"]).get().each():
                if key.key() == "password" and check_password_hash(key.val(),data["password"])  :
                    return {"msg":"ok"},201
        
    return {"msg":"Incorrect username or password"},401

