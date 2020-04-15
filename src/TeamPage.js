import React from 'react';
import logo from './logo.svg';
import { Card } from 'semantic-ui-react'
import Forms from "./Forms.js"
import {withRouter} from 'react-router-dom';


class TeamPage extends React.Component {


    render (){
        console.log("made it to team Page")
        return (
            <div>
                 <div>
                 <Card
                    link
                    header={this.props.selectedTeam.name}
                    meta={this.props.selectedTeam.location}
                />

                <Forms history={this.props.history} handleFormClick={this.props.handleFormClick} selectedForm={this.props.selectedForm} admin_items={this.props.admin_items} forms={this.props.forms} selectedTeam={this.props.selectedTeam}/>

            </div>
            </div>
        );
    }
}

export default withRouter(TeamPage)