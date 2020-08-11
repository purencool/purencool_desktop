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
        "Category",
        "Bug",
        "Request",
        "Testing"
      ],
      default: "Category"
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
    'ui:placeholder': 'Please spend some time, and be VERY descriptive about your request.',
    'ui:title': 'Issue',
    'ui:options': { rows: 5 }
  }
}


/**
 *
 */
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


  /**
   *
   * @param event
   * @returns {Promise<void>}
   */
  async onSubmit(event){
    if (event.formData) {
      console.log(event.formData);
      let response = await RestRequest.getData(event.formData,
        {"type" :"get_request", "get_variables": "/users/purencool"})
      console.log(response)
    }
  }

  /**
   *
   * @param event
   * @returns {Promise<void>}
   */
  async onChange(event) {
    if(event.formData.title !== undefined &&
      event.formData.title.length >= 4) {
      console.log(event.formData.title);
      console.log(event.formData.issue);
    }

  }

    render() {
        return (
          <div className="col-sm-6 float-left pl-0">
            <Form className="support-form" onSubmit={this.onSubmit} onChange={this.onChange} schema={postSchema} uiSchema={uiSchema} />
          </div>
        );
    }
}

export default  BugFormComponent;
