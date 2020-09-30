import React from "react";
import './card.css'
import firebaseApi from "../firebase/firebaseApi";

const Card = ({name,email, setProfiles,profile, profiles}) => {
    const deleteHandler = () => {
        setProfiles(profiles.filter(el => el.id !== profile.id))
        let path = `profiles/${profile.id}`
        firebaseApi.deleteData(path)
        console.log(profiles)
    }
    return(

        <div className={'bg-light-green dib br3 pa3  grow bw2 shadow-5'}>
            <i onClick={deleteHandler} id='remove' className="icon fas fa-times"/>

           <img alt={'robot'} src={`https://robohash.org/${name}`}/>
           <h2>{name}</h2>
            <h4>{email}</h4>
        </div>
    )
}

export default Card
