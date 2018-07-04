import React, { Component } from 'react';
// import Job from './components/job/job';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      jobs: [
        {
          id: 1,
          title: "",
          company: "",
          location: "",
          date: "",
          contact_name: "",
          contact_email: "",
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
    this.addJob = this.addJob.bind(this);
    this.remJob = this.remJob.bind(this);
    this.handleCheckbox = this.handleCheckbox.bind(this);
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

  handleCheckbox(el){
    let el_class = el.target.className;
    let parent_id = el.target.parentNode.parentNode.id;
    let prevState = this.state.jobs;
    
    for(let i=0; i<prevState.length; i++){
      if(Number(parent_id) === Number(prevState[i].id)){
        if(prevState[i][el_class] === true){
          prevState[i][el_class] = false
        } else {
          prevState[i][el_class] = true
        }
      }
    }

    this.setState({
      jobs: prevState
    })
  }

  addJob(){
    let prevState = this.state.jobs;
    let num_of_jobs = this.state.num_of_jobs;
    num_of_jobs = num_of_jobs + 1;
    let job_template = {
      id: num_of_jobs,
      title: "",
      company: "",
      location: "",
      date: "",
      contact_name: "",
      contact_email: "",
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
    }

    prevState.push(job_template);
    this.setState({
      jobs: prevState,
      num_of_jobs: num_of_jobs
    })
  }

  remJob(el){
    let parent_id = el.target.parentNode.id;
    let prevState = this.state.jobs;
    console.log(parent_id);

    for(let i=0; i<prevState.length; i++) {
      if(Number(prevState[i].id) === Number(parent_id)) {
        prevState.splice(i, 1);
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
                {/* Rem job */}
                <div onClick={this.remJob}> X </div>
                {/* Job Info */}
                <input className="title" placeholder="Job Title" value={job.title} onChange={this.handleChange} /> <br/>
                <input className="company" placeholder="Company" value={job.company} onChange={this.handleChange} /> <br/>
                <input className="location" placeholder="Location" value={job.location} onChange={this.handleChange} /> <br/>
                {/* Contact Info */}
                <input className="contact_name" placeholder="Contact Name" value={job.contact_name} onChange={this.handleChange} /> <br/>
                <input className="contact_email" placeholder="Contact Email" value={job.contact_email} onChange={this.handleChange} /> <br/>
                <input className="contact_phone" placeholder="Contact Phone" value={job.contact_phone} onChange={this.handleChange} /> <br/>
                {/* Phone Interview */}
                <input className="phone_interview_date" placeholder="Phone Interview Date" value={job.phone_interview_date} onChange={this.handleChange} /> <br/>
                <input className="phone_interview_time" placeholder="Phone Interview Time" value={job.phone_interview_time} onChange={this.handleChange} /> <br/>
                <div>
                  <label>Interview Follow Up</label>
                  <input type="checkbox" onChange={this.handleCheckbox} className="phone_interview_follow" checked = {job.phone_interview_follow ? "checked" : ""} /> <br/>
                </div>
                <div>
                  <label>Thanks Email</label>
                  <input type="checkbox" onChange={this.handleCheckbox} className="phone_interview_thanks" checked={job.phone_interview_thanks ? "checked" : ""} /> <br/>
                </div>
                {/* Skype Interview */}
                <input className="skype_interview_date" placeholder="Skype Interview Date" value={job.skype_interview_date} onChange={this.handleChange} /> <br/>
                <input className="skype_interview_time" placeholder="Skype Interview Time" value={job.skype_interview_time} onChange={this.handleChange} /> <br/>
                <div>
                  <label>Interview Follow Up</label>
                  <input type="checkbox" onChange={this.handleCheckbox} className="skype_interview_follow" checked={job.skype_interview_follow ? "checked" : ""} /> <br/>
                </div>
                <div>
                  <label>Thanks Email</label>
                  <input type="checkbox" onChange={this.handleCheckbox} className="skype_interview_thanks" checked={job.skype_interview_thanks ? "checked" : ""} /> <br/>
                </div>
                {/* Skype Interview */}
                <input className="onsite_interview_date" placeholder="Onsite Interview Date" value={job.onsite_interview_date} onChange={this.handleChange} /> <br/>
                <input className="onsite_interview_time" placeholder="Onsite Interview Time" value={job.onsite_interview_time} onChange={this.handleChange} /> <br/>
                <div>
                  <label>Interview Follow Up</label>
                  <input type="checkbox" onChange={this.handleCheckbox} className="onsite_interview_follow" checked={job.onsite_interview_follow ? "checked" : ""} /> <br/>
                </div>
                <div>
                  <label>Thanks Email</label>
                  <input type="checkbox" onChange={this.handleCheckbox} className="onsite_interview_thanks" checked={job.onsite_interview_thanks ? "checked" : ""} /> <br/>
                </div>
                <br/><br/><br/>
            </div>
          )
        })}
        
        <div className="add-job" onClick={this.addJob}> + </div>
      </div>
    );
  }
}

export default App;
