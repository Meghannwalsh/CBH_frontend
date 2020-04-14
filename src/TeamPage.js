import React from 'react';
import logo from './logo.svg';
import { Card } from 'semantic-ui-react'


class TeamPage extends React.Component {

    render (){
        // console.log("made it to Team Page", this.props)
        return (
            <div onClick={() => this.props.handleSelectedTeam(this.props.team)}>
                 <Card
                    link
                    header={this.props.team.name}
                    meta={this.props.team.location}
                    // description={[
                    // 'Rick is a genius scientist whose alcoholism and reckless,',
                    // ' nihilistic behavior are a source of concern for his family.',
                    // ].join('')}
                />
             
            </div>
        );
    }
}

export default TeamPage;