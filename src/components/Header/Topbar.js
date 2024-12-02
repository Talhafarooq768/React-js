import React, { useEffect, useState } from 'react';
import dayjs from 'dayjs';

const Topbar = () => {
    const [currentTime, setCurrentTime] = useState("");
    
    useEffect(() => {
        setInterval(() => {
            setCurrentTime(dayjs().format("dddd, MMMM, YYYY, hh:mm:ss A"));
        }, 1000);
    }, []);

    return (
        <header className='py-1 bg-danger'>
            <div className="container">
                <div className="row">
                    <div className="col mb-0 text-center text-light">{currentTime}</div>
                </div>
            </div>
        </header>
    );
}

export default Topbar;
