import React, { useEffect, useState } from 'react';
import axios from 'axios';

function PutAPI() {
    const [data, setData] = useState([]);
    const [error, setError] = useState(null);

    const fetchdata = async () => {
        try {
            const result = await axios.get('http://172.17.15.64:7001/getemp');
            setData(result.data);
        } catch (error) {
            setError(error);
        }
    };

    useEffect(() => {
        fetchdata();
    }, []);

    const handleUpdate = async (id, name, address, team) => {
        try {
            // Prepare the payload with the updated data
            const payload = {
                id: id,
                name: name,
                address: address,
                team: team
            };
    
            // Send a PUT request to update the employee data
            await axios.put(`http://172.17.15.64:7001/putemp`, payload);
    
            // Refresh data after update
            fetchdata();
        } catch (error) {
            console.error('Error updating employee:', error);
            // Handle error
        }
    };

    const handleDelete = async (id) => {
        try {
            // Send a DELETE request to delete the employee data
            await axios.delete(`http://172.17.15.64:7001/delemp`, { data: { id: id } });
    
            // Refresh data after delete
            fetchdata();
        } catch (error) {
            console.error('Error deleting employee:', error);
            // Handle error
        }
    };

    const handleInputChange = (id, fieldName, value) => {
        const updatedData = data.map(row => row.Id === id ? { ...row, [fieldName]: value } : row);
        setData(updatedData);
    };

    return (
        <div>
            {error ? (
                <div>Error: {error.message}</div>
            ) : (
                <table>
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>Id</th>
                            <th>Address</th>
                            <th>Team</th>
                            <th>Update</th>
                            <th>Delete</th>
                        </tr>
                    </thead>
                    <tbody>
                        {data.map((item) => (
                            <tr key={item._id}>
                                <td><input type="text" value={item.Name} onChange={(e) => handleInputChange(item.Id, 'Name', e.target.value)} /></td>
                                <td>{item.Id}</td>
                                <td><input type="text" value={item.Address} onChange={(e) => handleInputChange(item.Id, 'Address', e.target.value)} /></td>
                                <td><input type="text" value={item.Team} onChange={(e) => handleInputChange(item.Id, 'Team', e.target.value)} /></td>
                                <td><button onClick={() => handleUpdate(item.Id, item.Name, item.Address, item.Team)}>Update</button></td>
                                <td><button onClick={() => handleDelete(item.Id)}>Delete</button></td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            )}
        </div>
    );
}

export default PutAPI;
