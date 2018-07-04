import React, { Component } from 'react';
// import Job from './components/job/job';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      /*
        id
        title, company, location, date
        contact: name, email, phone
        phone_interview: date, time, follow_up, thanks
        skype_interview: date, time, follow_up, thanks
        onsite_interview: date, time, follow_up, thanks
        offer
        */ 
      jobs: [
        {
          id: 1,
          title: "",
          company: "",
          location: "",
          date: "",
          contact_name: "",
          contact_emal: "",
          contact_phone: "",
          phone_interview_date: "",
          phone_interview_time: "",
          phone_interview_follow: false,
          phone_interview_thanks: false,
          skype_interview_date: "",
          skype_interview_time: "",
          skype_interview_follow: false,
          skype_interview_thanks: false,
          onsite_interview_date: "",
          onsite_interview_time: "",
          onsite_interview_follow: false,
          onsite_interview_thanks: false,
          offer: ""
        },
      ],
      num_of_jobs: 1
    }

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(el) {
    let val = el.target.value;
    let el_class = el.target.className;
    let parent_id = el.target.parentNode.id;
    let prevState = this.state.jobs;
    
    for(let i=0; i<prevState.length; i++){
      if(Number(parent_id) === Number(prevState[i].id)){
        prevState[i][el_class] = val
      }
    }

    this.setState({
      jobs: prevState
    })
  } 

  render() {
    return (
      <div className="App">
        {this.state.jobs.map((job)=>{
          return (
            <div id={job.id} key={"job-" + job.id}>
                <input className="title" placeholder="Job Title" value={job.title} onChange={this.handleChange} /> <br/>
                <input className="company" placeholder="Company" value={job.company} onChange={this.handleChange} /> <br/>
                <input className="location" placeholder="Location" value={job.location} onChange={this.handleChange} /> <br/>
                <input className="date" placeholder="Date" value={job.date} onChange={this.handleChange} /> <br/>

            </div>
          )
        })}
      </div>
    );
  }
}

export default App;
