import React, { Component } from 'react'
import { Input, Menu, Segment } from 'semantic-ui-react'
  import Home from './Home.js'
  import Teams from './Teams.js'
  import TeamPage from "./TeamPage"
  import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    withRouter
  } from "react-router-dom";

class NavBar extends Component {

  state = {
    teams: [],
    forms: [],
    admin_items: [],
    selectedForm: null,
    selectedTeam: null
  }


  handleSelectedTeam = (team) => {
    console.log("handle selected team", team)
    this.setState({
      selectedTeam: team
    },  this.props.history.push('/teampage') )

  //  return <Redirect to={`/teampage`} />
  // //  this.props.history.push(`/teampage`)
}

componentDidMount(){
  fetch('http://localhost:3000/teams')
  .then(resp => resp.json())
  .then(data => {
    this.setState({
      teams: data
    })
  })

  fetch("http://localhost:3000/order_forms")
  .then(resp => resp.json())
  .then(data => {
    this.setState({
      forms: data
    })
  })

  fetch("http://localhost:3000/admin_items")
  .then(resp => resp.json())
  .then(data => {
    this.setState({
      admin_items: data
    })
  })
}


handleFormClick = (form) => {
  this.setState({
    selectedForm: form
  })
}

  render() {
    // console.log(this.props.history)
    return (
      <div>
        <Menu pointing>

        <Menu.Item
            as={ Link } name='Home' to='/'
          >
        </Menu.Item>

          <Menu.Item
            as={ Link } name='Teams' to='/teams'
          >
        </Menu.Item>

        <Menu.Item
            as={ Link } name='Login'
          >

        </Menu.Item>

          <Menu.Menu position='right'>
            <Menu.Item>
              <Input icon='search' placeholder='Search Teams...' />
            </Menu.Item>
          </Menu.Menu>
        </Menu>

        <Segment>
        <Switch>
          <Route exact path="/teams"> 
            {this.state.teams
            ?
            <Teams handleSelectedTeam={this.handleSelectedTeam} selectedTeam={this.state.selectedTeam} handleFormClick={this.handleFormClick} selectedForm={this.state.selectedForm} admin_items={this.state.admin_items} forms={this.state.forms} teams={this.state.teams} selectedTeam={this.state.selectedTeam} handleSelectedTeam={this.handleSelectedTeam}/>
            :
            null}
          </Route>
          <Route exact path="/">
            <Home />
          </Route>

          <Route exact path="/teampage">
              <TeamPage  handleSelectedTeam={this.handleSelectedTeam} selectedTeam={this.state.selectedTeam} handleFormClick={this.handleFormClick} selectedForm={this.state.selectedForm} admin_items={this.state.admin_items} forms={this.state.forms} teams={this.state.teams} selectedTeam={this.state.selectedTeam} handleSelectedTeam={this.handleSelectedTeam}/>
          </Route>

        </Switch>
        </Segment>
      </div>
    )
  }
}

export default withRouter(NavBar)



            // <div >
            //       <nav>
            //             <ul>
            //                 <li>
            //                 <Link to="/">Home</Link>
            //                 </li>
            //                 <li>
            //                 <Link to="/teams">Teams</Link>
            //                 </li>
            //                 {/* <li>
            //                 <Link to="/users">Users</Link>
            //                 </li> */}
            //             </ul>
            //         </nav>
            // </div>
