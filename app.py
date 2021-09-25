from flask import Flask, request, jsonify
import auth.auth as auth
app = Flask(__name__)

user = auth.Auth()

@app.route('/')
def hello_world():
    return 'Hello, World'

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
    app.run(debug=True)

# https://www.atinkanews.net/2021/09/24/blood-and-water-season-2-full-hd-available-for-free-download/