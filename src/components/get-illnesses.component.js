import React, { Component } from 'react';
import axios from 'axios';
import IllnessTable from './illness-table';
import { withRouter } from 'react-router-dom';

class Illness extends Component {

    state = {
        illnessData: []
    }
    componentDidMount(){
        
    axios.get('http://dmmw-api.australiaeast.cloudapp.azure.com:8080/illnesses')
    .then( (res)  => {
      // handle success
      const illneses = res.data['_embedded']['illnesses'].map(({illness}) => illness);
       console.log(illneses);
     
       
    this.setState({ illnessData: illneses});
    })
    .catch(function (error) {
      // handle error
      console.log(error);
    })
    
}
 
    illnessTable() {
        return this.state.illnessData.map(({name, id}, i) => {
          
           return <IllnessTable name={name} key={i} id={id} />;
        });
      
    }
  
   
    render() {
        return (
            <div className="wrapper-users">
                <div className="container">
                    <table className="table table-striped table-dark">
                        <thead className="thead-dark">
                            <tr>
                                <td>Illness ID</td>
                                <td>Illness Name</td>
                            </tr>
                        </thead>
                        <tbody>
                            {this.illnessTable()}
                        </tbody>
                    </table>
                </div>
            </div>
        )
    }
}
export default withRouter(Illness)