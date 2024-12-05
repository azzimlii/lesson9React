import React, { useState } from 'react'

export default function Counter() {
    const [count, setCount] = useState(0);
    const [color, setColor] = useState('rgb(255, 0, 0)')
    const handlePlus = () => {
        if (count < 10) {
            setCount(count + 1);
            changeColor()
        }
    }
    const handleMinus = () => {
        if (count > -10) {
            setCount(count - 1);
            changeColor()
        }
    }
    const changeColor = () => {
        const number = Math.floor(Math.random() * 255) + 0;
        const number1 = Math.floor(Math.random() * 255) + 0;
        const number2 = Math.floor(Math.random() * 255) + 0;

        const rgb = `rgb(${number},${number1},${number2})`;
        setColor(rgb);
    }
    return (
        <>
            <div style={{ backgroundColor: color }}>
                <button onClick={handlePlus}>+</button>
                <p>{count}</p>
                <button onClick={handleMinus}>-</button>
            </div>
        </>
    )
}
