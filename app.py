from flask import Flask
app = Flask(__name__)

@app.route('/')
def hello_world():
    return 'Hello, World!'

@app.route('/login', methods=['GET', 'POST'])
def login():
    return ''

@app.route('/signup', methods=['GET', 'POST'])
def signup():
    return ''

if __name__ == '__main__':
    app.run()