import React from 'react';
import { useCustomCounter } from "C:/Users/Jamshed/OneDrive/Desktop/reactjs/ch1/src/hooks/useCustomCounter.jsx";

export const LearnCustomHook = () => {
    const { count, handleCounter, resetCount, decreaseCount } = useCustomCounter();

    return (
        <>
            <h1>Count: {count}</h1>
            <button onClick={handleCounter}>Inc</button>
            <button onClick={resetCount}>Reset</button>
            <button onClick={decreaseCount}>Dec</button>
        </>
    );
}
