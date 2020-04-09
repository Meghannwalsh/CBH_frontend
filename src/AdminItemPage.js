import React from 'react';
import logo from './logo.svg';


class AdminItemPage extends React.Component {


    render (){
        
        return (
            <div >
                <h2>{this.props.admin_item.name}</h2>
            </div>
        );
    }
}

export default AdminItemPage;