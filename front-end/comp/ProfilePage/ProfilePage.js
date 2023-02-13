import { useState } from "react";

const ProfilePage = () =>{

    const  [count, setCount] = useState(0);

    const plusHandler = () =>{
        setCount(count == 0 ? count + 1 : count -1)
    }
    return(
        <>
        <button onClick={plusHandler}>+</button>
        <button>-</button>
        <p>{count}</p>
        </>
        );
};

export default ProfilePage