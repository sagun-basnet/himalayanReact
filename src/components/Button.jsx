import React from 'react'

const Button = ({ text, color }) => {
    // props = {
    //     text: "asdf",
    //     color: "asdfas"
    // }


    return (
        <>
            {
                props.type === "button" ?
                    <button style={{ backgroundColor: `${color}` }} className={`p-2 px-4 rounded-md`}>{text}</button>
                    :
                    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aliquid est molestias quae beatae odio quia suscipit nam eaque nobis enim?</p>

            }
        </>
    )
}

export default Button;