import axios from 'axios'
import React, { useEffect, useState } from 'react'

const ApiFetch = () => {
    const [value, setValue] = useState([])

    console.log(value, " :value ");



    useEffect(() => {
        fetchFun();
    }, [])




    const fetchFun = async () => {
        // try {
        //     const res = await axios.get('https://jsonplaceholder.typicode.com/posts');
        //     // console.log(res.data);

        //     setValue(res.data)

        // } catch (err) {
        //     console.log(err);
        // }

        await axios.get('https://jsonplaceholder.typicode.com/posts')
            .then((res) => {
                setValue(res.data);

            }).catch((err) => {
                console.log(err);
            })

    }


    return (
        <div className=''>
            {
                value.map((item, index) => {
                    return (
                        <div key={index} className='border-2 border-black p-2 m-2'>
                            <h1 className='text-2xl font-bold'>{item.title}</h1>
                            <p>{item.body}</p>
                        </div>
                    )
                })
            }
        </div>
    )
}

export default ApiFetch