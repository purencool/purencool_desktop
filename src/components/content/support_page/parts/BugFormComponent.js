import React from 'react';
import { Column, Row } from 'simple-flexbox';
import Form from "@rjsf/core";

const postSchema = {
  type: "object",
  properties: {
    title: {
      title: "Title",
      type: "string",
      minLength: 10,
      maxLength: 140
    },
    slug: {
      title: "Slug",
      type: "string",
      pattern: "^[a-z0-9-]+$"
    },
    published: {
      title: "Published",
      type: "string",
      format: "date-time"
    },
    content: {
      title: "Content",
      type: "string"
    }
  },
  required: ["title", "slug", "published", "content"]
};




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
                          <Form onSubmit={this.onSubmit} schema={postSchema} />
                        </Row>
                    </Column>
                </Row>
            </Column>
        );
    }
}

export default CardComponent;
