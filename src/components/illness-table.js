import React, { Component } from 'react';

class IllnessTable extends Component {
    render() {
        const link = `/painLevel/${this.props.name}`

        return (
            <tr>
                <td>
                   <a href={link}>{this.props.id}</a> 
                </td>
                <td>
                   <a href={link}>{this.props.name}</a> 
                </td>
            </tr>
        );
    }
}

export default IllnessTable;