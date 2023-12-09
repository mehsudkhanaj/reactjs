import { useState } from 'react';

export const useCustomCounter = () => {
    const [count, setCount] = useState(0);

    const handleCounter = () => {
        setCount((prevCount) => prevCount + 1);
    }

    const resetCount = () => {
        setCount(0);
    }

    const decreaseCount = () => {
        setCount((prevCount) => prevCount - 1);
    }

    // Return values wrapped in an object
    return {
        count,
        handleCounter,
        resetCount,
        decreaseCount,
    };
}
