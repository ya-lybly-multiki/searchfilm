import React, {useState} from 'react';
import s from './Error.module.scss'
import SuperButton from "../Utils/SuperButton/SuperButton";


export const Error = () => {

    const [open, setOpen] = useState(true)

    return (
        <>
        {open && <div className={s.ErrorWrapper}>
            <h1>Movie not founded ((</h1>
            <SuperButton  callBack={()=> {setOpen(false)}}>Close</SuperButton>
        </div>
        }
        </>
    );
};

export default Error;