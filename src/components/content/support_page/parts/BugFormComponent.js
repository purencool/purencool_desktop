import React from 'react';
import { Column, Row } from 'simple-flexbox';
import Form from "@rjsf/core";
import RestRequest from "../../../../api/rest_calls/RestRequest";

const postSchema = {
  type: "object",
  properties: {
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
    category: {
      type: "string",
      title: "Category",
      enum: [
        "Bug",
        "Request",
        "Testing"
      ]
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
    } else {
      console.error("FORM INVALID - DISPLAY ERROR MESSAGE");
    }
  }

    render() {
        return (
            <Column>
              <Row>
                <Form onSubmit={this.onSubmit} schema={postSchema} uiSchema={uiSchema} />
              </Row>
            </Column>
        );
    }
}

export default  BugFormComponent;
