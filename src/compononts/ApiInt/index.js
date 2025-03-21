import React from 'react'
import axios from 'axios'

function ApiInt() {
    const clickMe = () => {
        axios.get('https://jsonplaceholder.typicode.com/posts')
            .then((response) => {
                console.log(response.data);
            })
            .catch((error) => {
                console.log(error);
            })
    }

    return (
        <div>
            <button onClick={clickMe} className=' button'>Click Me</button>
        </div>
    )
}
export default ApiInt

