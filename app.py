from flask import Flask, json, request, jsonify
import auth.auth as auth
app = Flask(__name__)

user = auth.Auth()
@app.route('/')
def hello_world():
    return json.dumps({"result": "request API Documantation"})

@app.route('/api/otp')
def opt():
    userOTP = request.args.get('otp')
    return "userOTP"

@app.route('/api/auth', methods=['GET', 'POST'])
def login():
    if request.method == "POST":
        data = request.json
        status = user.login(data)
        return status

@app.route('/api/users', methods=['GET', 'POST'])
def signup():
    if request.method == "POST":
        data = request.json
        status =user.signup(data)
        return status

if __name__ == '__main__':
    # Threaded option to enable multiple instances for multiple user access support
    app.run(threaded=True, port=5000)

