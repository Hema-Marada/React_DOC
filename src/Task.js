
import React, { useState } from 'react';
import axios from 'axios';

const EmployeeForm = () => {
  const [formData, setFormData] = useState({
    Primary: {
      data1: '',
      data2: ''
    },
    Name: '',
    ID: '',
    Team: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post('/http://172.17.15.64:7001/postdata', formData);
      console.log('Employee data submitted successfully');
      // Optionally reset form fields after submission
      setFormData({
        Primary: {
          data1: '',
          data2: ''
        },
        Name: '',
        ID: '',
        Team: ''
      });
    } catch (error) {
      console.error('Error submitting employee data:', error);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>
          Name:
          <input type="text" name="Name" value={formData.Name} onChange={handleChange} required />
        </label>
      </div>
      <div>
        <label>
          ID:
          <input type="text" name="ID" value={formData.ID} onChange={handleChange} required />
        </label>
      </div>
      <div>
        <label>
          Team:
          <input type="text" name="Team" value={formData.Team} onChange={handleChange} required />
        </label>
      </div>
      <div>
        <label>
          Data 1:
          <input type="text" name="Primary.data1" value={formData.Primary.data1} onChange={handleChange} required />
        </label>
      </div>
      <div>
        <label>
          Data 2:
          <input type="text" name="Primary.data2" value={formData.Primary.data2} onChange={handleChange} required />
        </label>
      </div>
      <button type="submit">Submit</button>
    </form>
  );
};

export default EmployeeForm;
