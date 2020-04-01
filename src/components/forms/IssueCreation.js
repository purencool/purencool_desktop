import React, { Component } from 'react'

/**
 * I need a token for issue access
 */
class IssueCreation extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: '',
            title: '',
            body: ''
          }
      }

      onNameChange(event) {
        this.setState({name: event.target.value})
      }
    
      onEmailChange(event) {
        this.setState({email: event.target.value})
      }
    
      onMessageChange(event) {
        this.setState({message: event.target.value})
      }


      
     
      handleSubmit(event) {
        event.preventDefault();
        console.log(event);
      
      //async (event) => {
      //  event.preventDefault();
       
       // const resp = await axios.get(`https://api.github.com/users/${this.state.companyName}`);
       // this.props.onSubmit(resp.data);
       // this.setState({ companyName: '' });
/*
       fetch('http://localhost:3002/send',{
        method: "POST",
        body: JSON.stringify(this.state),
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        },
      }).then(
    	(response) => (response.json())
       ).then((response)=>{
      if (response.status === 'success'){
        alert("Message Sent."); 
        this.resetForm()
      }else if(response.status === 'fail'){
        alert("Message failed to send.")
      }
    })
    */


      };

      render() {
        return (
          <div id="IssueCreation" className="full-screen bg-color display-none" >
            <form id="contact-form" onSubmit={this.handleSubmit.bind(this)} method="POST">
              <div className="form-group">
                <label htmlFor="name">Name</label>
                <input type="text" className="form-control" />
              </div>
              <div className="form-group">
                <label htmlFor="title">Title</label>
                <input type="text" className="form-control" aria-describedby="titleHelp" />
              </div>
              <div className="form-group">
                <label htmlFor="issue">Issue</label>
                <textarea className="form-control" rows="5"></textarea>
              </div>
              <button type="submit" className="btn btn-primary">Submit</button>
           </form>
        </div>
        );
      }
}

export default IssueCreation;
