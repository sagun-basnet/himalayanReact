import React, { useState } from 'react'

const Signup = () => {
    const init = {
        name: "",
        phone: "",
        email: "",
        password: ""
    }
    const [value, setValue] = useState(
        init
    )

    const handleChange = (e) => {
        console.log(e, "Event");
        setValue({
            ...value,
            [e.target.name]: e.target.value
        })
        console.log(value);
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(value);
        setValue(init)
        // console.log(e);


    }

    return (
        <div className='w-full h-[100vh] flex justify-center items-center'>
            <form onSubmit={handleSubmit} className='h-[26rem] w-[22rem] flex flex-col justify-between p-8 shadow-2xl rounded-lg'>
                <h1 className='text-4xl font-bold'>Register</h1>
                <input onChange={handleChange} className='p-2 border-2 border-black w-full rounded-lg' type="text" name="name" id="" placeholder='Enter name' />
                <input onChange={handleChange} className='p-2 border-2 border-black w-full rounded-lg' type="number" name="phone" id="" placeholder='Enter Phone' />
                <input onChange={handleChange} className='p-2 border-2 border-black w-full rounded-lg' type="email" name="email" id="" placeholder='Enter Email' />
                <input onChange={handleChange} className='p-2 border-2 border-black w-full rounded-lg' type="password" name="password" id="" placeholder='Enter Password' />
                <input onChange={handleChange} className='bg-green-400 w-full rounded-md p-2' type="submit" value="Submit" />
            </form>
        </div>
    )
}

export default Signup