import React from 'react';

type Iprops = {
    children:string
}


const SuperButton = ({children}:Iprops) => {
    return (
       <button>{children}</button>
    );
};

export default SuperButton;