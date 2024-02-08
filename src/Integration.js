
import React, { useEffect, useState } from 'react'
import axios from 'axios'

function Integration() {
  const [data, setData] = useState([])
  const [error, setError] = useState(null)

  const fetchdata = async () => {
    try {
      const response = await axios.get('http://172.17.15.64:7001/getemp')
      setData(response.data)
    }
    catch (error) {
      setError(error)
    }
  }
  useEffect(() => {
    fetchdata()
  }, [])
  return (
    <div>
 {error ? (
        <div>Error: {error.message}</div>
      ) : (
        <ul>
          {data.map((item) => (
            <li key={item._id}>
              <div>Name: {item.Name }</div>
              <div>ID: {item.Id }</div>
              <div>Address: {item.Address }</div>
              <div>Team: {item.Team }</div>
            </li>
          ))}
        </ul>
      )}
    </div>
  )
}

export default Integration
