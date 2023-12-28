import axios from "axios"
import { useEffect, useState } from "react"




export default function Tasks () {
  const api = 'http://localhost:5000/tasks'
  const [result , setResult] = useState([]);

  useEffect(() => {
    async function getData() {
        const response = await axios.get(api)
        setResult(response.data)
    }
    getData()
  } , [])


  function Complete(event) {
    const api = 'http://localhost:5000/complete_task'
    const data = {
      key : event.target.getAttribute('data-key')
    }
    axios.post(api , data).then(e => {window.location.reload(false)})
  }

  return <div className="overflow-x-auto">
  <table className="table table-zebra">

    <thead>
      <tr className="text-center">  
        <th>ID</th>
        <th>Task</th>
        <th>Date Created</th>
        <th>Actions</th>
      </tr>
    </thead>
    <tbody>
   
      {
        result.map((item , index) => {
          return <tr className="text-center" key={index}>

            <td>{item['_id']}</td>
            <td>{item['_task']}</td>
            <td>{item['_date']}</td>

            <td>
              <button 
              className="btn btn-xs btn-outline btn-secondary
              "
              data-key={item['_id']}

              onClick={Complete}
              >
                Complete
            </button>
            </td>
          </tr>
        })
      }
    </tbody>
  </table>
</div>
}