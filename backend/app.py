from flask import Flask , request , jsonify
from flask_cors import CORS , cross_origin

import sqlite3

app  = Flask(__name__)
CORS(app)

database = sqlite3.connect('main.db')


@app.route('/new_task')
def new_task():
    ...


@app.route('/tasks')
def tasks():
    cur1 = database.cursor()
    result = cur1.execute('SELECT * FROM Tasks').fetchall()

    return jsonify({
        'result' : result
    })
