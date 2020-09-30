import React from "react";
import Card from "./card";
import "./ProfileCards.css"
import firebaseApi from "../firebase/firebaseApi";


class ProfileCards extends React.Component {
    constructor(props) {
        super(props);

        console.log(props)

    }
    componentWillMount() {
        let profilesList = firebaseApi.getData('profiles')
            .then(res => {
                profilesList = res
                console.log(profilesList)
                for (let profile in profilesList){
                    let thisProfile = profilesList[profile]
                    thisProfile.id = profile
                    this.props.setProfiles([
                        ...this.props.profiles , thisProfile
                    ])
                }
                console.log(this.props.profiles)
            })
    }

    render() {
        return (
            <div>
                <div className="profiles-container">
                    {this.props.profiles.map((profile) => (
                            <Card name={profile.name} email={profile.email} key={profile.id}
                                  profile={profile} setProfiles={this.props.setProfiles} profiles={this.props.profiles}/>
                        )
                    )}
                </div>
            </div>
        );
    }
}

export default ProfileCards
