import React from 'react';
/**
 *
 */
class DefaultCard extends React.Component {

  render() {
    return (
          <div className="card-full-screen card-full-screen-c">
            <a href="#" className="card-close-a font-weight-bold" ><span className="card-close">Close</span></a>
            <div className="card-wrapper">
              <div className="card" key={d.idx} >
                <a href="#" className="card-title-a font-weight-bold" ><span className="card-title">{d.title}</span></a>
                <span className="card-body card-body-contents"  dangerouslySetInnerHTML={{ __html: d.body }} />
              </div>
            </div>
          </div>
    );
  }
}

export default DefaultCard;
