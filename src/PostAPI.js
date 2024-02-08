import React, { useState } from 'react'
import axios from 'axios'

function PostAPI() {
    const [formData, setFormData] = useState({
        Name: '',
        Id: '',
        Address: '',
        Team: ''
    })
    const [responseData, setResponseData] = useState(null)
    const [error, setError] = useState(null)

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        })
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post('http://172.17.15.64:7001/postemp', formData); // Pass formData as the second argument
            setResponseData(response.data);
        }
        catch (error) {
            setError(error);
        }
    }
    

    return (
        <div>

<form onSubmit={handleSubmit}>
        <label>
          Name:
          <input type="text" name="Name" value={formData.Name} onChange={handleChange} />
        </label>
        <br />
        <label>
          ID:
          <input type="text" name="Id" value={formData.Id} onChange={handleChange} />
        </label>
        <br />
        <label>
          Address:
          <input type="text" name="Address" value={formData.Address} onChange={handleChange} />
        </label>
        <br />
        <label>
          Team:
          <input type="text" name="Team" value={formData.Team} onChange={handleChange} />
        </label>
        <br />
        <button type="submit">Submit</button>
      </form>
      
      {error && <div>Error: {error.message}</div>}
      
    
    </div>    )
}

export default PostAPI
