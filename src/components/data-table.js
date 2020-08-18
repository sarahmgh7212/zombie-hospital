import React, { Component } from 'react';

class DataTable extends Component {
    render() {
        return (
            <tr>
                <td>
                    {this.props.obj._id}
                </td>
                <td>
                    {this.props.obj.name}
                </td>
                <td>
                    {this.props.obj.illness}
                </td>
                <td>
                    {this.props.obj.painLevel}
                </td>
            </tr>
        );
    }
}

export default DataTable;