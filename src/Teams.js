import React from 'react';
import TeamPage from "./TeamPage.js"
import Forms from "./Forms.js"


class Teams extends React.Component {

    state ={
        selectedTeam: null
    }

    handleSelectedTeam = (team) => {
        this.setState({
          selectedTeam: team
        })
    }

    render (){
        return (
            <div>
            
               { this.props.selectedTeam !== null
                ?
                <div>
                    <h1>{this.props.selectedTeam.name}</h1>
                    <h2>{this.props.selectedTeam.loocation}</h2>
                    <Forms handleFormClick={this.props.handleFormClick} selectedForm={this.props.selectedForm} admin_items={this.props.admin_items} forms={this.props.forms} selectedTeam={this.props.selectedTeam}/>
                </div>
                :
                <div>
                {this.props.teams.map(team => {
                    return <TeamPage team={team} handleSelectedTeam={this.state.handleSelectedTeam}/>
                    })}
                </div>
               }

            </div>
                
    
        );
    }
}

export default Teams;