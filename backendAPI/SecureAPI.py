from flask import Flask, request, jsonify
from flask_limiter import Limiter
from flask_cors import CORS

app = Flask(__name__)
CORS(app)
limiter = Limiter(app, key_func=lambda: request.remote_addr, default_limits=["50 per minute"])

@app.route('/api/secure', methods=['POST'])
def secure():
    data = request.get_json()
    username = data.get('username')
    password = data.get('password')

    if not username or not password:
        return jsonify({'error': 'Missing fields'}), 400

    print(f"[SECURE] Login attempt by {username}")
    return jsonify({'success': True, 'message': 'Data accepted'})

if __name__ == '__main__':
    app.run(debug=True, port=5000)
