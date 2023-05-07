from flask import Flask, send_file, jsonify, request
import redis
import io
from pathlib import Path

app = Flask(__name__)
r = redis.Redis(host='localhost', port=6379)

r.set('entry', 'hello 538\n')

file_path = Path.home() / 'file.bin' 
with open(file_path, 'rb') as f:
    content = f.read()
    r.set('my_file', content)

@app.route("/", methods = ['GET', 'POST'])
def hello_world():
    if request.method == 'GET':
        return jsonify(
            message='hello CS538\n'
        )
    
    if request.method == 'POST':
        data = request.form['message']
        return jsonify(
            message=f'POST request received, your message: {data}'
        )

@app.route("/download")
def file_request():
    filename = 'my_file'
    content = r.get(filename)

    if not content:
        return f"File {filename} not found in Redis"
    return send_file(io.BytesIO(content), as_attachment=True, attachment_filename=filename)
