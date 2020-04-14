import React from 'react';
import logo from './logo.svg';
import AdminItems from "./AdminItems.js"

class FormPage extends React.Component {


    render (){
        // console.log("made it to form page", this.props)
        return (
            <div onClick={() => this.props.handleFormClick(this.props.form)}>
                <h1>{this.props.form.name}</h1>
            </div>
        );
    }
}

export default FormPage;
  