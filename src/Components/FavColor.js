import React, { useState } from 'react'

export default function FavColor() {
    const [color, setColor] = useState("Red");
    return (
        <>
            <h1>My Favourite Color is: {color}</h1>
            <button type="button" className='red' onClick={() => setColor("Red")}>Red</button>
            <button type="button" className='blue' onClick={() => setColor("Blue")}>Blue</button>
            <button type="button" className='black' onClick={() => setColor("Black")}>Black</button>
            <button type="button" className='brown' onClick={() => setColor("Brown")}>Brown</button>
        </>
    )
}