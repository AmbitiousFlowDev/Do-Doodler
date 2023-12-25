import axios from "axios"
import { useEffect, useState } from "react"

const api = 'http://localhost:5000/tasks'


export default function Tasks () {

  const [result , setResult] = useState([]);

  useEffect(() => {
    async function getData() {
        const response = await axios.get(api)
        setResult(response.data)
    }
    getData()
  } , [])

  return <div className="overflow-x-auto">
  <table className="table table-zebra">
    {/* head */}
    <thead>
      <tr>  
        <th>ID</th>
        <th>Task</th>
        <th>Date Created</th>
        <th className="text-center">Actions</th>
      </tr>
    </thead>
    <tbody>
      {/* row 1 */}
      {
        result.map((item , index) => {
          return <tr key={index}>
            {
              item.map((sub , index) => {
                return <td key={index}>
                  {
                    sub
                  }
                </td>
              })
            }
            <td>
              <button className="btn btn-xs btn-outline btn-secondary">Complete</button>
            </td>
          </tr>
        })
      }
    </tbody>
  </table>
</div>
}