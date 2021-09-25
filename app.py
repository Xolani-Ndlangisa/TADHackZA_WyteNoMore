from flask import Flask, request, jsonify
import auth.auth as auth
app = Flask(__name__)

user = auth.Auth()
@app.route('/')
def hello_world():
    return "<h1>Hello World!</h1>"

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
    app.run(debug=False)

