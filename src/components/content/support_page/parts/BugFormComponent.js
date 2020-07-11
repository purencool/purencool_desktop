import React from 'react';
import Form from "@rjsf/core";
import RestRequest from "../../../../api/rest_calls/RestRequest";

const postSchema = {
  type: "object",
  properties: {
    category: {
      type: "string",
      title: "Category",
      enum: [
        "Bug",
        "Request",
        "Testing"
      ]
    },
    username: {
      type: "string",
      minLength: 10,
      maxLength: 140
    },
    password: {
      type: "string",
      minLength: 10,
      maxLength: 140
    },
    title: {
      type: "string",
      minLength: 10,
      maxLength: 140
    },
    issue: {
      type: "string"
    }
  },
  required: ["title",  "issue"]
};

const uiSchema = {
  username: {
    'ui:autofocus': true,
    'ui:placeholder': 'username',
    'ui:title': 'Username'
  },
  password: {
    'ui:placeholder': 'password',
    'ui:title': 'Password'
  },
  title: {
    'ui:placeholder': 'title',
    'ui:title': 'Title'
  },
  issue: {
    'ui:widget': 'textarea',
    'ui:title': 'Issue',
    'ui:options': { rows: 5 }
  }
}



class BugFormComponent extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      firstName: null,
      lastName: null,
      email: null,
      password: null,
      formErrors: {
        firstName: "",
        lastName: "",
        email: "",
        password: ""
      }
    };
  }



  async onSubmit(event){
    if (event.formData) {
      let response = await RestRequest.getData(event.formData,
        {"type" :"get_request", "get_variables": "/users/purencool"})
      console.log(response)
    }
  }

  async onChange(event) {
    if(event.formData.title !== undefined && event.formData.title.length >= 4) {
      console.log(event.formData.title);
    }
  }

    render() {
        return (
             <div className="container pr-0 pl-0">
              <div className="col-sm-6 float-left pl-0">
                <div className="alert alert-primary response-text">
                  Do you have a feature request or a bug, let us know?
                </div>
                <div className="form-wrapper">
                  <Form onSubmit={this.onSubmit} onChange={this.onChange} schema={postSchema} uiSchema={uiSchema} />
                </div>
              </div>
               <div className="col-sm-6 float-left pr-0">
                 <h4>Current issues</h4>
               </div>
             </div>
        );
    }
}

export default  BugFormComponent;
