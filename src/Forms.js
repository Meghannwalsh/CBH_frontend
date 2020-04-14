import React from 'react';
import FormPage from "./FormPage.js"
import AdminItems from "./AdminItems.js"


class Forms extends React.Component {


    render (){
        // console.log("made it to Form Page", this.props.admin_items)

        return (

            <div >
                {this.props.selectedForm
                    ?
                    <div>
                    <h1>{this.props.selectedForm.name}</h1>
                    <AdminItems selectedForm={this.props.selectedForm} admin_items={this.props.admin_items} />
                    </div>
                    :
                    <div>
                        {this.props.forms.filter(form => form.team_id === this.props.selectedTeam.id).map(form => {
                            return <FormPage handleFormClick={this.props.handleFormClick} admin_items={this.props.admin_items} form={form}/>
                            })}
                    </div>
                }

                
            </div>
        );
    }
}

export default Forms;