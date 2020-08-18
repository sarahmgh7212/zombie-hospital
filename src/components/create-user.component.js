// ** create-user.component.js ** //

import React, { Component } from 'react';
import axios from 'axios';

export default class CreateUser extends Component {

    constructor(props) {
        super(props)

        this.onChangeUserName = this.onChangeUserName.bind(this);
        this.onChangeUserIllness = this.onChangeUserIllness.bind(this);
        this.onChangeUserPainLevel=this.onChangeUserPainLevel.bind(this);
        this.onSubmit = this.onSubmit.bind(this);

        this.state = {
            name: '',
            illness: '',
            painLevel:''
        }
    }

    onChangeUserName(e) {
        this.setState({ name: e.target.value })
    }

    onChangeUserIllness(e) {
        this.setState({ illness: e.target.value })
    }
    
    onChangeUserPainLevel(e){
        this.setState({ painLevel: e.target.value })
    }
    onSubmit(e) {
        e.preventDefault()

        const userObject = {
            name: this.state.name,
            illness: this.state.illness,
            painLevel:this.state.painLevel
        };

        axios.post('http://localhost:4000/users/create', userObject)
            .then((res) => {
                console.log(res.data)
            }).catch((error) => {
                console.log(error)
            });

        this.setState({ name: '', illness: '', painLevel: '' })
    }


    render() {
        return (
            <div className="wrapper">
                <form onSubmit={this.onSubmit}>
                    <div className="form-group">
                        <label>Enter Patient Name</label>
                        <input type="text" value={this.state.name} onChange={this.onChangeUserName} className="form-control" />
                    </div>
                    <div className="form-group">
                        <label> Enter illness name</label>
                        <input type="text" value={this.state.illness} onChange={this.onChangeUserIllness} className="form-control" />
                    </div>
                    <div className="form-group">
                        <label>Enter pain level</label>
                        <input type="text" value={this.state.painLevel} onChange={this.onChangeUserPainLevel} className="form-control" />
                    </div>
                    <div className="form-group">
                        <input type="submit" value="Create User" className="btn btn-success btn-block" />
                    </div>
                </form>
            </div>
        )
    }
}