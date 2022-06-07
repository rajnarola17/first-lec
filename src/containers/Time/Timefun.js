import React, { useEffect, useState } from 'react'

const Timefun = () => {

    const [Time,  setTime] = useState(new Date());

    const tick = () => {
        setTime(new Date());
    }

    useEffect( () => {

        // componentDidmount, componentDidupdate
        const TimeI = setInterval( () => tick(), 1000);

        // componentwillunmount

        return () => {
            clearInterval(TimeI);
        },[Time];
    });

  return (
    <div>
       <p>{Time.toLocaleTimeString}</p>
    </div>
  );
}

export default Timefun
