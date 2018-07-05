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
          benefits: "",
          type: "",
          offer: "",
          notes: "",
          showNotes: false
        },
      ],
      num_of_jobs: 1
    }

    this.handleChange = this.handleChange.bind(this);
    this.addJob = this.addJob.bind(this);
    this.remJob = this.remJob.bind(this);
    this.handleCheckbox = this.handleCheckbox.bind(this);
    this.showNotes = this.showNotes.bind(this);
    this.hideNotes = this.hideNotes.bind(this);

  }

  showNotes(el){
    let parent_id = el.target.parentNode.id;
    let prevState = this.state.jobs;

    for(let i=0; i<prevState.length; i++) {
      if(Number(parent_id) === Number(prevState[i].id)) {
        if(prevState[i].showNotes === false) {
          prevState[i].showNotes = true
        } else {
          prevState[i].showNotes = false
        }
      }
    }
    this.setState({
      jobs: prevState
    })
  }
  hideNotes(el){
    let parent_id = el.target.parentNode.parentNode.id;
    let prevState = this.state.jobs;

    for(let i=0; i<prevState.length; i++) {
      if(Number(parent_id) === Number(prevState[i].id)) {
        if(prevState[i].showNotes === false) {
          prevState[i].showNotes = true
        } else {
          prevState[i].showNotes = false
        }
      }
    }
    this.setState({
      jobs: prevState
    })
  }

  handleChange(el) {
    let val = el.target.value;
    let el_class = el.target.className;
    let parent_id = el.target.parentNode.parentNode.id;
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
    let parent_id = el.target.parentNode.parentNode.parentNode.id;
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
      benefits: "",
      type: "",
      offer: "",
      notes: "",
      showNotes: false
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
        <div className="app-wrapper">
          {this.state.jobs.map((job)=>{
            return (
              <div className="job-main-container" id={job.id} key={"job-" + job.id}>
                  {/* Rem job */}
                  <div className={job.showNotes ? "fadeOut" :"rem-job"} onClick={this.remJob}> x </div>


                  {/* Job Info */}
                  <div className={job.showNotes ? "fadeOut" : "job-info-container card-shadow container"}>
                    <input className="title" placeholder="Job Title" value={job.title} onChange={this.handleChange} />
                    <input className="company" placeholder="Company" value={job.company} onChange={this.handleChange} />
                    <input className="location" placeholder="Location" value={job.location} onChange={this.handleChange} />
                  </div>


                  {/* Contact Info */}
                  <div className= {job.showNotes ? "fadeOut" : "contact-info-container card-shadow container"}>
                    <h3 className="field-title">Contact Info</h3>
                    <input className="contact_name" placeholder="Contact Name" value={job.contact_name} onChange={this.handleChange} /> <br/>
                    <input className="contact_email" placeholder="Contact Email" value={job.contact_email} onChange={this.handleChange} /> <br/>
                    <input className="contact_phone" placeholder="Contact Phone" value={job.contact_phone} onChange={this.handleChange} /> <br/>
                  </div>


                  {/* Phone Interview */}
                  <div className= {job.showNotes ? "fadeOut" : "phone-interview-container card-shadow container"}>
                    <h3 className="field-title">Phone Interview</h3>
                    <input className="phone_interview_date" placeholder="Date" value={job.phone_interview_date} onChange={this.handleChange} /> <br/>
                    <input className="phone_interview_time" placeholder="Time" value={job.phone_interview_time} onChange={this.handleChange} /> <br/>
                    <div className="checkbox-container">
                      <label>Follow Up Email</label>
                      <input type="checkbox" onChange={this.handleCheckbox} className="phone_interview_follow" checked = {job.phone_interview_follow ? "checked" : ""} /> <br/>
                    </div>
                    <div className="checkbox-container">
                      <label>Thanks Email</label>
                      <input type="checkbox" onChange={this.handleCheckbox} className="phone_interview_thanks" checked={job.phone_interview_thanks ? "checked" : ""} /> <br/>
                    </div>
                  </div>


                  {/* Skype Interview */}
                  <div className={job.showNotes ? "fadeOut" : "skype-interview-container card-shadow container"}>
                    <h3 className="field-title">Skype Interview</h3>
                    <input className="skype_interview_date" placeholder="Date" value={job.skype_interview_date} onChange={this.handleChange} /> <br/>
                    <input className="skype_interview_time" placeholder="Time" value={job.skype_interview_time} onChange={this.handleChange} /> <br/>
                    <div className="checkbox-container">
                      <label>Follow Up Email</label>
                      <input type="checkbox" onChange={this.handleCheckbox} className="skype_interview_follow" checked={job.skype_interview_follow ? "checked" : ""} /> <br/>
                    </div>
                    <div className="checkbox-container">
                      <label>Thanks Email</label>
                      <input type="checkbox" onChange={this.handleCheckbox} className="skype_interview_thanks" checked={job.skype_interview_thanks ? "checked" : ""} /> <br/>
                    </div>
                  </div>



                  {/* On Site Interview */}
                  <div className={job.showNotes ? "fadeOut" : "onsite-interview-container card-shadow container"}>
                    <h3 className="field-title">On Site Interview</h3>
                    <input className="onsite_interview_date" placeholder="Date" value={job.onsite_interview_date} onChange={this.handleChange} /> <br/>
                    <input className="onsite_interview_time" placeholder="Time" value={job.onsite_interview_time} onChange={this.handleChange} /> <br/>
                    <div className="checkbox-container">
                      <label>Follow Up Email</label>
                      <input type="checkbox" onChange={this.handleCheckbox} className="onsite_interview_follow" checked={job.onsite_interview_follow ? "checked" : ""} /> <br/>
                    </div>
                    <div className="checkbox-container">
                      <label>Thanks Email</label>
                      <input type="checkbox" onChange={this.handleCheckbox} className="onsite_interview_thanks" checked={job.onsite_interview_thanks ? "checked" : ""} /> <br/>
                    </div>
                  </div>
                  <br/>

                  {/* Benefits */}
                  <div className={job.showNotes ? "fadeOut" : "type-container card-shadow container"}>
                    <h3 className="field-title">Job Type</h3>
                    <input className="type" placeholder="Full-Time, Contract..." value={job.type} onChange={this.handleChange} /> <br/>
                  </div>  

                  {/* Benefits */}
                  <div className={job.showNotes ? "fadeOut" : "benefits-container card-shadow container"}>
                    <h3 className="field-title">Benefits</h3>
                    <input className="benefits" placeholder="PTO, Gym, Dental..." value={job.benefits} onChange={this.handleChange} /> <br/>
                  </div>                  

                  {/* Offer */}
                  <div className={job.showNotes ? "fadeOut" : "offer-container card-shadow container"}>
                    <h3 className="field-title">Offer</h3>
                    <input className="offer" placeholder="$96,000 - $50/h" value={job.offer} onChange={this.handleChange} /> <br/>
                  </div>

                  {/* Show Notes */}
                  <div className={job.showNotes? "fadeOut" : "show-notes-button"} onClick={this.showNotes}>  Notes » </div>

                  {/* Notes */}
                  <div className={job.showNotes ? "notes-container notes-modal container" : "hide-notes"}>
                    <div className={job.showNotes? "hide-notes-button" : ""} onClick={this.hideNotes}>«</div>
                    <h3 className="field-title">Notes</h3>
                    <textarea className="notes" placeholder="Notes" value={job.notes} onChange={this.handleChange} /> <br/>
                  </div>

              </div>
            )
          })}
          
          <div className="add-job" onClick={this.addJob}> + </div>
        </div>
      </div>
    );
  }
}

export default App;
