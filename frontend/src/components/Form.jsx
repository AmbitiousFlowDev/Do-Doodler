import axios from 'axios'
import { useState } from 'react';

const api = 'http://localhost:5000/new_task'

function HandleSubmit (e) {
    e.preventDefault();
}

export default function Form () {
    const [task , setTask] = useState('')

    function SetTask(e) {
      setTask(e.target.value)
    }

    function Submit() {

      if (task == "") {
        return;
      }

      const data = {
        task : task
      }
      axios.post(api , data).then(e => {window.location.reload(false)})
    }

    return <form onSubmit={HandleSubmit} method="POST">
      <section className="grid grid-rows-3 gap-2">
        <h2 className="p-2 col-span-2 text-center text-lg">Add Task</h2>
        <input type="text" placeholder="Type here" onChange={SetTask} className="input input-bordered w-full max-w-xs" required/>
        <button onClick={Submit} className="btn w-89 btn-secondary">
          Add
        </button>
      </section>
    </form>
  }