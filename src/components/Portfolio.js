import React, { Component } from 'react'

class Portfolio extends Component {



    render() {
        return (
            <div className="container-fluid p-0">
                <div className="row no-gutters">
                    <div className="col-md-4 col-sm-6">
                        <div className="portfolio-box" href="https://api-react.herokuapp.com/">

                            <img className="img-fluid" data-aos="zoom-in" src="img/portfolio/thumbnails/React-API.jpg"
                                alt=""></img>

                            <div className="portfolio-box-caption">
                                <div className="portfolio-box-caption-content">
                                    <div className="project-category text-faded">
                                        Api
                  </div>
                                    <div className="project-name">
                                        {this.props.information}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>



        );
    }


}






export default Portfolio






