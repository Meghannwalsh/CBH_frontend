import React from 'react';
import logo from './logo.svg';
import { Card } from 'semantic-ui-react'
import Forms from "./Forms.js"


class TeamItem extends React.Component {

    render (){
        return (
            <div onClick={() => this.props.handleSelectedTeam(this.props.team)}>
                 <Card
                    link
                    header={this.props.team.name}
                    meta={this.props.team.location}
                />
            </div>
        );
    }
}

export default TeamItem;