import React, {Component} from 'react';
import './job.css';

class Job extends Component {

    constructor(props){
        super(props);
        {/*
          title: "Front End Developer",
          company: "Apple",
          location: "Sunnivale",
          date: "12-13-13",
          contact: {
            name: "",
            email: "",
            phone: ""
          },
          phone_interview:{
            date:"",
            time:"",
            folow_up: false,
            thanks: false
          },
          skype_interview:{
            date:"",
            time:"",
            folow_up: false,
            thanks: false
          },
          onsite_interview:{
            date:"",
            time:"",
            folow_up: false,
            thanks: false
          },
          offer: ""
        }
        */} 
        this.state = {
            job: this.props.job
        }
    }

    render(){
        return(
            <div className="job-container">
                {this.state.job.title} <br/>
                {this.state.job.company} <br/>
                {this.state.job.location} <br/>
                {this.state.job.date} <br/>

            </div>
        )
    }
}

export default Job;