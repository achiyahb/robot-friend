import React from "react";
import firebaseApi from "../firebase/firebaseApi";

const Form = ({profiles,setProfiles, inputEmail,setInputEmail,inputName,setInputName}) => {
    const inputEmailHandler = (e) => {
        setInputEmail(e.target.value)
    };
    const inputNameHandler = (e) => {
        setInputName(e.target.value)
    };
    const submitTodoHandler = (e) => {
        e.preventDefault()
        if (inputName === '') return
        let newProfile =  {name: inputName, email:inputEmail}
        newProfile.id = firebaseApi.writeData(newProfile,'profiles')
            .then(res => {
                newProfile.id = res
            })
        setProfiles([
            ...profiles , newProfile
        ])
        console.log(profiles)

        setInputName('')
        setInputEmail('')
    }
    return (
        <form>
            <input value={inputName} onChange={inputNameHandler} type="text" placeholder="הקלד/י את שמך" className="todo-input"/>
            <input value={inputEmail} onChange={inputEmailHandler} type="email" placeholder="email" className="todo-input"/>
            <button onClick={submitTodoHandler} className="todo-button" type="submit">
                <i className="fas fa-plus-square"/>
            </button>
        </form>
    );
}

export default Form
