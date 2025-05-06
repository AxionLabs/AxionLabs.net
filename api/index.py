# app.py or main.py (Flask side)
from flask import Flask, jsonify

app = Flask(__name__)

@app.route('/api/hello')
def hello():
    return jsonify(message="Hello from Flask!")

    
# Running app
if __name__ == '__main__':
    app.run(debug=True)