from flask.wrappers import Response
from requests.models import HTTPError
from firebase.verify import verify
from flask import Flask, json, request, jsonify
import requests
import auth.auth as auth
from service.checkUp import checkUp
app = Flask(__name__)

user = auth.Auth()
@app.route('/')
def hello_world():
    return json.dumps({"result": "request API Documantation"})

@app.route('/api/otp')
def opt():
    userOTP = request.args.get('otp')
    return "userOTP"

@app.route('/api/checkup')
def checkUp():
    if request.method == "POST":
        data = request.json
        checkUp(data)
        return 201

@app.route('/api/auth', methods=['GET', 'POST'])
def login():
    if request.method == "POST":
        data = request.json
        status = user.login(data)
        return status

@app.route('/api/users', methods=['GET', 'POST'])
def signup():
    fields = ['name', "surname", "gender", "cell_number", "id", "password", "type", ]
    if request.method == "POST":
        data = request.json
        for each in fields:
            if not data.get(each):
                return json.dumps({"mssg":"Incomplete data"}), 401
            
        res = verify(data)
        if res != HTTPError:
            return user.signup(data)
        else:
            return json.dumps({"mssg": "Verification failed"}), 
        

        

if __name__ == '__main__':
    # Threaded option to enable multiple instances for multiple user access support
    app.run(threaded=True, port=5000)

