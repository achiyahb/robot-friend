import React, {useState} from 'react';
import './App.css';
import app from  './firebase'

import Form from "./components/Form";
import ProfileCards from "./components/ProfileCards";


function Home() {


    const [inputEmail,setInputEmail] = useState("");
    const [inputName,setInputName] = useState("");
    const [profiles, setProfiles ]= useState([])
    return (
        <div className="App" dir={'rtl'}>
            <button onClick={() => app.auth().signOut()}>Sign out</button>
            <p>
                הקלד שם ואימייל וקבל את הרובוט שלך!
            </p>
            <Form  profiles={profiles} setProfiles={setProfiles} inputEmail={inputEmail}
                   inputName={inputName} setInputEmail={setInputEmail} setInputName={setInputName}/>
            <ProfileCards profiles={profiles} setProfiles={setProfiles}/>
        </div>
    );
}

export default Home;
