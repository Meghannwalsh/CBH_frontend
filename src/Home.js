import React from 'react';
import logo from './logo.svg';
import { Button, Icon } from 'semantic-ui-react'



class Navbar extends React.Component {

    render (){
        return (
            <div >
                <h1>California Beach Hut</h1>
                {/* <img src= /> */}
                <h3>21 Broadway, Denvil NJ</h3>
                <Button color='facebook'>
                    <Icon name='facebook' /> Facebook
                    {/* <a href="https://www.w3schools.com/html/"/> */}
                 </Button>

                 <a href='https://www.instagram.com/californiabeachhut/?hl=en'>
                 <Button color='instagram'  >
                      <Icon name='instagram' /> Instagram
                </Button>
                </a>
            </div>
        );
    }
}

export default Navbar;