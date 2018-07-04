import React, {Component} from 'react';
import './job.css';

class Job extends Component {

    constructor(props){
        super(props);
        
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