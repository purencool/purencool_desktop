import React from 'react';
import { Column, Row } from 'simple-flexbox';
import Form from "@rjsf/core";

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
    'ui:title': 'password'
  },
  title: {
    'ui:placeholder': 'title',
    'ui:title': 'title'
  },
  issue: { 'ui:widget': 'textarea', 'ui:options': { rows: 5 } }
}



class CardComponent extends React.Component {

  onSubmit = (event) => {
    this.setState({username: event.target.value});
  }

    render() {
        return (
            <Column flexGrow={1} >
                <Row horizontal="space-between">
                    <Column>
                        <Row>
                          <Form onSubmit={this.onSubmit} schema={postSchema} uiSchema={uiSchema} />
                        </Row>
                    </Column>
                </Row>
            </Column>
        );
    }
}

export default CardComponent;
