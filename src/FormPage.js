import React from 'react';
import logo from './logo.svg';
import AdminItems from "./AdminItems.js"

class FormPage extends React.Component {


    render (){
        return (
            <div onClick={() => this.props.handleFormClick(this.props.form)}>

                <h1>{this.props.form.name}</h1>
                {this.props.admin_items.filter(item => item.order_form_id === this.props.form.id).map(item =>{
                    return <AdminItems adminItem={item}/>
                })
}
            </div>
        );
    }
}

export default FormPage;
  