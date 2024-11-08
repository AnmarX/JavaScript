import React, { useEffect, useState } from 'react';

const useEffectCleanUp = () => {
    const [Width, setWindowWidth] = useState(window.innerWidth);
    const [height, setWindowheight] = useState(window.innerHeight);

    // Event listener to update width on window resize
    const handleResize = () => {
        setWindowWidth(window.innerWidth);
        setWindowheight(window.innerHeight)
    };

    useEffect(() => {

        window.addEventListener('resize', handleResize);
        console.log('Add event listener');

        // Cleanup function to remove the event listener
        return () => {
            console.log('Cleaning up the resize event listener');
            window.removeEventListener('resize', handleResize);
        };
    }, []); // Empty dependency array to add listener only on mount


    useEffect(() => {
        document.title = `width ${Width} height ${height}`
        // if count or color change the code will be excuted
    }, [Width, height])

    return <>
        <h2>Window Width: {Width}</h2>
        <h2>Window heigh: {height}</h2>
    </>
};

export default useEffectCleanUp;