import React from 'react';
import RestRequest from "../../../../api/rest_calls/RestRequest";

/**
 *
 */
class SupportArticlesComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      loading : true,
      results : []
    }
  }

  /**
   *
   * @returns {Promise<void>}
   */
  async componentDidMount() {
    let response = await RestRequest.getData("",
        {"type" :"rest_support_articles", "get_variables": ""});
    if(response[0] === "success") {
      this.setState({results: response[1]});
      this.setState({loading: false});
    }
  }

  render() {
    return (
      <div className="col-sm-6 float-left pr-0 pl-0">
        <div className="single-lg-col">
          {
            this.state.results.map(function(d, idx){
              return (
                <div className="card-full-screen card-full-screen-c">
                  <div className="card-wrapper">
                   <div className="card" key={idx}>
                     <a href="#" className="card-title-a" ><span className="card-title">{d.title}</span></a>
                     <span className="card-body card-body-contents"  dangerouslySetInnerHTML={{ __html: d.body }} />
                   </div>
                  </div>
                </div>
              )
            })
          }
        </div>
      </div>
    );
  }
}

export default SupportArticlesComponent;
