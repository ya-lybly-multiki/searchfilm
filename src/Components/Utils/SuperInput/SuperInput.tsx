import React, {ChangeEvent} from 'react';
import {TextField} from "@mui/material";
import {useDispatch, useSelector} from "react-redux";
import {IblobalStore} from "../../../Redux/Store";
import {setErrorStatusAC} from "../../../Redux/ErrorReducer";

type PropsType = {
    setTitleInput: (title: string) => void
    title: string
    callBack: () => void
}
const SuperInput = ({setTitleInput, title, callBack}: PropsType) => {

    const dispatch = useDispatch()
    const error = useSelector<IblobalStore, string | null>( (state)=> state.errorReducer.isError)

    const onchangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
        setTitleInput(e.currentTarget.value)
    }
    const clickHandler = (e: React.KeyboardEvent<HTMLInputElement>) => {
        if (error !== null) {
           dispatch(setErrorStatusAC(null))
        }
        if (e.key === 'Enter') {
            callBack()
            setTitleInput('')
        }
    }
    return (
        <TextField
            autoFocus
            value={title}
            onChange={onchangeHandler}
            helperText={error}
            label="Film"
            onKeyPress={clickHandler}
            error={!!error}
        />
    );
};

export default SuperInput;