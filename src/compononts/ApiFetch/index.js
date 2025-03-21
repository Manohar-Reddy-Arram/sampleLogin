import React, { useState, useEffect } from 'react'
import axios from 'axios'

const ApiFetch = () => {
    const [data, setData] = useState([]);
    const [error, setError] = useState('');


    useEffect(() => {
        fetchData();
    } , []);

    const fetchData = () => {
        axios.get('https://jsonplaceholder.typicode.com/posts')
            .then(response => {
                setData(response.data);
                console.log(response.data);
            })
            .catch(error => {
                setError(error.message);
                console.log(error);
            });
    }

    return (
        <>
            <div>
                <h1>Api Fetch</h1>
                <button onClick={() => setData([])}>Clear Data</button>
                <br />
                {error && <p>Error: {error}</p>}
                <ol>
                    {data.map(item => (
                        <li key={item.id}>{item.title}</li>
                    ))}
                </ol>
                <button onClick={fetchData}>Fetch Data</button>
                <br />
            </div>
        </>
    )
}

export default ApiFetch