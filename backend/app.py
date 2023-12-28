from flask import Flask , request , jsonify
from flask_cors import CORS , cross_origin
from datetime import datetime

import sqlite3

app  = Flask(__name__)
CORS(app)

database = sqlite3.connect('main.db' , check_same_thread=False)
database.row_factory = sqlite3.Row

@app.route('/complete_task' , methods=["POST"])
def complete_task():
    if request.method == "POST":
        data = request.get_json()
        cur1 = database.cursor()
        id = data['key']

        cur1.execute("DELETE FROM Tasks WHERE _id = ?" , (id))

        database.commit()

        cur1.close()

        return jsonify({
            'status' : 'OK'
        })

@app.route('/new_task' , methods=["POST"])
def new_task():
    if request.method == "POST":

        data = request.get_json()
        cur1 = database.cursor()
        task = data['task']
       
        try:
            ts = datetime.today().replace(microsecond=0)
            cur1.execute(f'INSERT INTO Tasks(_id , _task , _date) VALUES(null , ? , ?)' , (task , ts))
            database.commit()

        except Exception as error:
            print(error)
        
        cur1.close()

        return jsonify({'status' : 'OK'})


@app.route('/tasks')
def tasks():

    Tasks : list[dict] = []

    cur1 = database.cursor()
    result = cur1.execute('SELECT * FROM Tasks').fetchall()


    for item in result:
        Tasks.append({k : item[k] for k in item.keys()})

    cur1.close()

    return Tasks


if __name__ == "__main__":
    app.run(debug=True)