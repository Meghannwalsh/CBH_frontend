import React from 'react';
import logo from './logo.svg';
import AdminItemCard from "./AdminItemCard"


class AdminItems extends React.Component {

    render (){
        console.log("admin items", this.props.admin_items)
        return (
            <div >
                {this.props.admin_items.filter(admin_item => admin_item.order_form_id == this.props.selectedForm.id).map(admin_item => {
                    return <AdminItemCard admin_item={admin_item}/>
                })}
            </div>
        );
    }
}

export default AdminItems;