import React, { Component } from 'react';

class HospitalTable extends Component {
    render() {
       

        return (
            <tr>
                <td>
                   <p>{this.props.id}</p> 
                </td>
                <td>
                   <p>{this.props.name}</p> 
                </td>
            </tr>
        );
    }
}

export default HospitalTable;