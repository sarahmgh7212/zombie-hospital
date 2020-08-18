import { withRouter } from "react-router-dom"

import React, {Component} from 'react';
import axios from 'axios';
import { BrowserRouter as  Link } from "react-router-dom";
import img0 from '../public/images/img0.jpg'; 
import img1 from '../public/images/img1.jpg'; 
import img2 from '../public/images/img2.png'; 
import img3 from '../public/images/img3.jpg'; 
import img4 from '../public/images/img4.jpg'; 
import HospitalTable from './hospital-table';
class PainLevel extends Component {
    constructor(props){
        super(props);
        this.state={
            painLevel:'2'
           
        }
        // this.onClickUserPainLevel=this.onClickUserPainLevel.bind(this);
       // this.onSubmit = this.onSubmit.bind(this);
    }

    onClickUserPainLevel(e){
        this.setState({ painLevel: e.target.value })
    }
    // onSubmit(e) {
    //     e.preventDefault()

    //     const painObject = {
          
    //         painLevel:this.state.painLevel
    //     };

    //     axios.post('http://localhost:4000/hospital', painObject)
    //         .then((res) => {
    //             console.log(res.data)
    //         }).catch((error) => {
    //             console.log(error)
    //         });

    //     this.setState({   painLevel: '' })
    // }
    illnessTable() {
        return this.state.painLevel.map((painLevel, i) => {
          
           return <HospitalTable painLevel={painLevel} key={i}  />;
        });
      
    }
  
    render(){
        const title = this.props.match.params.illness;
        console.log(title)
       const link = `/hospital/${this.props.painLevel}`

        return (
            
            <div className="container ">
                  <h1>Illness Name is:{title}</h1>
                <p>Please choose your pain level:</p>
                <div className="d-flex align-items-center">
                     <div className="col-sm">
                        
                        <a  href={link} title="level 0" value="0" onClick={this.onClickUserPainLevel} ><img src={img0} alt="level 0" /></a> 
                     </div>
                     <div className="col-sm">
                   
                     <a  href={link} title="level 1" value="1" onClick={this.onClickUserPainLevel} ><img src={img1} alt="level 1" /></a> 
                    </div>
                    <div className="col-sm">
                         
                    <a  href={link} title="level 2" value="2" onClick={this.onClickUserPainLevel} ><img src={img2} alt="level 2" /></a>
                    </div>
                    <div className="col-sm">
                        
                    <a  href={link} title="level 3" value="3" onClick={this.onClickUserPainLevel} ><img src={img3} alt="level 3" /></a>
                     </div>
                     <div className="col-sm">
                        
                     <a  href={link} title="level 4" value="4" onClick={this.onClickUserPainLevel} ><img src={img4} alt="level 4" /></a>
                    </div>
                </div>
            </div>

        )
    }

}
export default withRouter(PainLevel)