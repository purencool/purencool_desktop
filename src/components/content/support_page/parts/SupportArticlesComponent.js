import React from 'react';
import RestRequest from "../../../../api/rest_calls/RestRequest";
//import DefaultCard from "../../../parts/DefaultCard";

/**
 *
 */
class SupportArticlesComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      loading : true,
      results : [],
      addClass : false
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
              function onclick(event){
                let idNumber = event.target.id.slice(-1)
                let targetDiv = document.getElementById("card-"+ idNumber)
                if(targetDiv.classList.contains("display") === false) {
                  targetDiv.classList.add("display")
                } else {
                  targetDiv.classList.remove("display")
                }
              }
              //let randomString = Math.random().toString(36).slice(2);
              let cardID = "card-"+idx;
              let cardTitleID = "card-title-"+idx;
              let cardCloseID = "card-close-"+idx;
              return (
                <div id={cardID} className="card-full-screen card-full-screen-c" key={idx} >
                  <span id={cardCloseID}  className=" card-close-a font-weight-bold card-close" onClick={onclick}>Close</span>
                  <div className="card-wrapper">
                   <div className="card" >
                     <span id={cardTitleID} className="card-title card-title-a font-weight-bold" onClick={onclick}>{d.title}</span>
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
