import React from 'react';
import TeamPage from "./TeamPage.js"
import Forms from "./Forms.js"
import { Button } from 'semantic-ui-react'
import { withRouter } from "react-router"



class Teams extends React.Component {

    state ={
        selectedTeam: null
    }

    handleSelectedTeam = (team) => {
        // console.log("handle selected team", team)
        this.setState({
          selectedTeam: team
        })


        this.props.history.push(`/teampage/${team.id}`)
    }



    render (){
        // console.log("history". this.props.history)
        return (
            <div>
               {this.state.selectedTeam 
                ?
                <div>
                    <h1>{this.state.selectedTeam.name}</h1>
                    <h2>{this.state.selectedTeam.loocation}</h2>
                    <Forms history={this.props.history} handleFormClick={this.props.handleFormClick} selectedForm={this.props.selectedForm} admin_items={this.props.admin_items} forms={this.props.forms} selectedTeam={this.state.selectedTeam}/>
                </div>
                :
                <div>
                    <Button>New Team</Button>
                {this.props.teams.map(team => {
                    return <TeamPage history={this.props.history} team={team} handleSelectedTeam={this.handleSelectedTeam}/>
                    })}
                </div>
               }

            </div>
                
    
        );
    }
}

export default Teams;