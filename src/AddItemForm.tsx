import React, {ChangeEvent, KeyboardEvent, useState} from "react";
import {IconButton, TextField} from "@mui/material";
import AddCircleIcon from '@mui/icons-material/AddCircle';

type AddItemFormPropsType = {
    addItem: (title: string) => void
}

export function AddItemForm(props: AddItemFormPropsType) {

    const [title, setTitle] = useState("")
    const [error, setError] = useState<string | null>(null)

    const onNewTitleChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
        setTitle(e.currentTarget.value)
    }

    const onKeyPressHandler = (e: KeyboardEvent<HTMLInputElement>) => {
        setError(null)
        if (e.charCode === 13) {
            addTask()
        }
    }

    const addTask = () => {
        if (title.trim() !== "") {
            props.addItem(title.trim())
            setTitle("")
        } else {
            setError("Title is required")
        }
    }

    return <div>
        <TextField
            variant={"outlined"}
            label={'Type value'}
            value={title}
            onChange={onNewTitleChangeHandler}
            onKeyPress={onKeyPressHandler}
            error={!!error }
            helperText={error}

        />
        <IconButton color={"primary"} onClick={addTask}>
            <AddCircleIcon/>
        </IconButton>
    </div>
}