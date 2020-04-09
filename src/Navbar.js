import React, { Component } from 'react'
import { Input, Menu, Segment } from 'semantic-ui-react'
  import Home from './Home.js'
  import Teams from './Teams.js'
  import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";

export default class NavBar extends Component {

  state = {
    teams: [],
    forms: [],
    admin_items: [],
    selectedForm: null
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
    const { activeItem } = this.state

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
          <Menu.Menu position='right'>
            <Menu.Item>
              <Input icon='search' placeholder='Search Teams...' />
            </Menu.Item>
          </Menu.Menu>
        </Menu>

        <Segment>
        <Switch>
          <Route path="/teams">
            {this.state.teams
            ?
            <Teams handleFormClick={this.handleFormClick} selectedForm={this.state.selectedForm} admin_items={this.state.admin_items} forms={this.state.forms} teams={this.state.teams} selectedTeam={this.state.selectedTeam} handleSelectedTeam={this.handleSelectedTeam}/>
            :
            null}
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
        </Segment>
      </div>
    )
  }
}




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
