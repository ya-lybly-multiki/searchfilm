import React from 'react';
import {Button} from "@mui/material";

type Iprops = {
    children:string
    callBack:()=>void
}


const SuperButton = ({children,callBack}:Iprops) => {
    return (
       <Button size={'large'} color={'inherit'} onClick={callBack}>{children}</Button>
    );
};

export default SuperButton;