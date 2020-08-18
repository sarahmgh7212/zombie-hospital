import React, { Component } from 'react';
import axios from 'axios';
 import HospitalTable from './hospital-table';
import { withRouter } from 'react-router-dom';
import painLevel from './painLevel';
class Hospital extends Component {

    state = {
        hospitalData: []
    }
    componentDidMount(){
        
    axios.get('http://dmmw-api.australiaeast.cloudapp.azure.com:8080/hospitals')
    .then( (res)  => {
      // handle success
     const hospitals = res.data['_embedded']['hospitals'].map(element=>element);
      // console.log(hospitals);
     
       
    this.setState({ hospitalData: hospitals});
    })
    .catch(function (error) {
      // handle error
      console.log(error);
    })
    
}

 calcWaitingTime(painLevel,hospitalData){
    // const foundHospitals=[];
    //////
   return hospitalData.reduce((acc, hospital) => {
        const foundItem = hospitalData.waitingList.find(item => item.painLevel === painLevel);
        if(foundItem){
           const  {patientCount,avgProcessTime } = foundItem
            acc.push({
                waitTime: patientCount * avgProcessTime, //check variable types
                name: hospital.name
            })
        }
        return acc
    }, [])
}

    hospitalTable() {
        return this.state.hospitalData.map((element, i) => {
          
           return <HospitalTable name={element.name} key={i} id={element.id} />;
        });
      
    }
  
   
    render() {
        const painLevel = this.props.match.params.painLevel;
        //console.log(painLevel);
      
        return (
            <div className="wrapper-users">
                <div className="container">
                    <table className="table table-striped table-dark">
                        <thead className="thead-dark">
                            <tr>
                                <td>Hospital ID</td>
                                <td>Hospital Name</td>
                            </tr>
                        </thead>
                        <tbody>
                            {this.hospitalTable()}
                        </tbody>
                    </table>
                </div>
            </div>
        )
    }
}
export default withRouter(Hospital);