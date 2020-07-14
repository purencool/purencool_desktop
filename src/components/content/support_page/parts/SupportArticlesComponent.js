import React from 'react';
import RestRequest from "../../../../api/rest_calls/RestRequest";

/**
 *
 */
class SupportArticlesComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      articles : []
    };

  }

  /**
   *
   * @returns {Promise<void>}
   */
  async componentDidMount() {
    let response = await RestRequest.getData("",
        {"type" :"rest_support_articles", "get_variables": ""});
    this.setState({ articles: response });
  }

  render() {
    console.log(this.articles)
    return (
      <div className="col-sm-6 float-left pr-0 pl-0">

      </div>
    );
  }
}

export default SupportArticlesComponent;
