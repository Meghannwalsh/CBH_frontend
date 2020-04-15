import React from 'react';
import TeamItem from "./TeamItem.js"
import Forms from "./Forms.js"
import { Button } from 'semantic-ui-react'
import { withRouter } from "react-router"



class Teams extends React.Component {




    render (){
        return (
            <div>
                <div>
                    <Button>New Team</Button>
                {this.props.teams.map(team => {
                    return <TeamItem history={this.props.history} selectedTeam={this.props.selectedTeam} forms={this.props.forms} team={team} handleSelectedTeam={this.props.handleSelectedTeam}/>
                    })}
                </div>
               }

            </div>
                
    
        );
    }
}

export default Teams;