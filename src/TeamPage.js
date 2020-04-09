import React from 'react';
import logo from './logo.svg';


class TeamPage extends React.Component {

    render (){
        console.log("made it to Team Page")
        return (
            <div onClick={() => this.props.handleSelectedTeam(this.props.team)}>
               <h1>{this.props.team.name}</h1>
            </div>
        );
    }
}

export default TeamPage;