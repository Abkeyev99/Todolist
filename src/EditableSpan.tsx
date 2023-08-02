import React, {ChangeEvent, useState} from "react";

type EditableSpanPropsType = {
    title:string
    onChange: (newValue:string)=>void
}

export function EditableSpan(props:EditableSpanPropsType){

    let [editMode, serEditeMode] = useState(false)
    let [title, serTitle] = useState('')

    const activateEditMode = () => {
        serEditeMode(true)
        serTitle(props.title)
    }
    const activateViewMode = () => {
        serEditeMode(false)
        props.onChange(title)
    }
    const onChangeHandler = (e:ChangeEvent<HTMLInputElement>) => serTitle(e.currentTarget.value)
    return editMode
        ? <input value={title} onChange={onChangeHandler} onBlur={activateViewMode} autoFocus/>
        : <span onDoubleClick={activateEditMode}>{props.title}</span>


}
