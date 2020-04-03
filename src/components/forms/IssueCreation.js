import React, { Component } from 'react'

/**
 * I need a token for issue access
 */
class IssueCreation extends Component {
    constructor(props) {
        super(props);
        this.state = {
            username: '',
            password: '',
            key: '',
            title: '',
            body: ''
          }

          this.handleSubmit = this.handleSubmit.bind(this);
      }

    
      handleSubmit(event) {
        event.preventDefault();
        const jsonKeys = Object.keys(this.refs);
        let obj = jsonKeys.reduce(function(acc, curr) {
          acc[curr] = '';
          return acc;
        }, {});
        for (var p in obj) {
          if( obj.hasOwnProperty(p) ) {
            obj[p] = this.refs[p].value
          } 
        }  
        console.log(obj)
    
      
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


    'username=pnc&key=pnc&password=pnc&product=purencool_studio&title=api_callaa&body=complete this test'
    */


      };

      render() {
        return (
          <div id="IssueCreation" className="full-screen bg-color display1-none" >
            <form id="contact-form" onSubmit={this.handleSubmit}>
              <input type="hidden" id="product" value="purencool_studio"/>
              <div className="form-group">
                <label htmlFor="username">Username</label>
                <input type="text" id="username" className="form-control" ref="username" />
              </div>
              <div className="form-group">
                <label htmlFor="password">Password</label>
                <input type="text" id="password" className="form-control" ref="password" />
              </div>
              <div className="form-group">
                <label htmlFor="key">Key</label>
                <input type="text" id="key" className="form-control" ref="key" />
              </div>
              <div className="form-group">
                <label htmlFor="title">Title</label>
                <input type="text" id="title" className="form-control" ref="title" />
              </div>
              <div className="form-group">
                <label htmlFor="issue">Issue</label>
                <textarea id="body" className="form-control" rows="5" ref="body"></textarea>
              </div>
              <input type="submit" value="Submit" className="btn btn-primary" />
           </form>
        </div>
        );
      }
}

export default IssueCreation;
