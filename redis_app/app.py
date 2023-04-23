from flask import Flask, send_file
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

@app.route("/")
def hello_world():
    return r.get('entry')

@app.route("/download")
def file_request():
    filename = 'my_file'
    content = r.get(filename)

    if not content:
        return f"File {filename} not found in Redis"
    return send_file(io.BytesIO(content), as_attachment=True, attachment_filename=filename)
