import React from 'react';
import logo from './logo.svg';
// import AdminItemPage from "./AdminItemPage"


class AdminItemCard extends React.Component {


    render (){
       
        return (
            <div >
                <h2>{this.props.admin_item.item}</h2>
                 <h3>{this.props.admin_item.cost}</h3>
                    <h4>{this.props.admin_item.male_or_female}</h4>
            </div>
        );
    }
}

export default AdminItemCard;