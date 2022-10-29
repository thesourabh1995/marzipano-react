import React from "react";
import "./Marker.scss";
class QuickView extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            ...props
        };
    }

    componentDidMount() {

    }

    render() {
        return (
            <div id="quick-view-pop-up">
            <div className="quick-view-panel">
                <div className="quick-view-close"></div>
                <div className="quick-view-loading">
                    Quick View Loading... 
                </div>
                <div className="mini-carousel">
                    <ul className="mini-item">
                        <li><a href="#" title="Image1-Small"><img src="http://images.asos-media.com/inv/media/0/7/0/6/4176070/white/image1s.jpg" alt="Product"/></a></li>
                        <li><a href="#" title="Image2-Small"><img src="http://images.asos-media.com/inv/media/0/7/0/6/4176070/image2s.jpg" alt="image2-small"/></a></li>
                        <li><a href="#" title="Image3-Small"><img src="http://images.asos-media.com/inv/media/0/7/0/6/4176070/image3s.jpg" alt="image3-small"/></a></li>
                        <li><a href="#" title="Image4-Small"><img src="http://images.asos-media.com/inv/media/0/7/0/6/4176070/image4s.jpg" alt="image4-small"/></a></li>
                    </ul>
                </div>
                <div className="carousel">
                    <div className="btn-view-video"></div>
                    <div className="image-large">
                        <ul>
                            <li><img src="http://images.asos-media.com/inv/media/0/7/0/6/4176070/white/image1xl.jpg" alt="image1-large"/></li>
                            <li><img src="http://images.asos-media.com/inv/media/0/7/0/6/4176070/image2xl.jpg"/></li>
                            <li><img src="http://images.asos-media.com/inv/media/0/7/0/6/4176070/image3xl.jpg"/></li>
                            <li><img src="http://images.asos-media.com/inv/media/0/7/0/6/4176070/image4xl.jpg"/></li>
                        </ul>
                        <a href="#" className="prev">Previous</a>
                        <a href="#" className="next">Next</a>
                        <a href="#" className="quick-view-video">View Video</a>	
                    </div>
                    <div className="video-player">
                        <iframe width="290" height="290" src="https://www.youtube.com/embed/5dDDk-RY6Wc?list=PLwTBfJVVh8CWpDg9UiP9xpbQsNzEP88m0" frameborder="0" allowfullscreen></iframe>
                    </div>
                    
                </div>
                <div className="detail">
                    <div className="product-details">
                        <h3 className="product-name">ASOS Slim Fit T-Shirt With Crew Neck</h3>
                        <h2 className="product-price"><strong>$10.50</strong></h2>
                        <a href="#" className="view-more-detail">View More Details</a>	
                    </div>
                    <div >
                    <div className="option-dropdowns">
                        <select className="colour-dropdown" data-bind="visible: !hasColourSwatch(), options: sizeColours, optionsText: 'Text', value: selectedSizeColour, enable: colourDropDownEnabled" disabled=""><option value="">White</option></select><br/>
                        <div id="colourSwatchLabel" data-bind="if: hasColourSwatch()"></div>
                        <div id="quickViewSwatch" className="colour-swatch" data-swatchlabelselector="#colourSwatchLabel > span" data-bind="if: hasColourSwatch()"></div>
                        <div className="select-size-text" data-bind="if: hasColourSwatch() &amp;&amp; displaySizeDropDown"></div>
                        <select className="size-dropdown" data-bind="options: sizes, optionsText: 'Text', value: selectedSize, enable: sizeDropDownEnabled, visible: displaySizeDropDown" style=""><option value="">Select Size</option><option value="">XXXS - US Chest 30-32in (76-81cm)</option><option value="">XXS - Chest 32-34"</option><option value="">XS - Chest 34-36"</option><option value="">S - Chest 36-38"</option><option value="">M - Chest 38-40"</option><option value="">L - Chest 40-42"</option><option value="">XL - Chest 42-44"</option><option value="">XXL - Chest 44-46"</option><option value="">XXXL - Chest 46-48" </option></select>
                    </div>
                    <div className="buttons">
                        <div>
                            <a href="#add-to-bag" className="button orange add-to-bag" data-bind="event:{click: addToBag, touchstart:addToBag}"> Add to cart </a>
                        </div>
                        <div>
                            <a href="#save-for-later" className="button grey small save-for-later" data-bind="event:{click: saveForLater, touchstart:saveForLater}">
                                Save for later
                            </a>
                        </div>
                    </div>
                </div>
                </div>
            </div>
        </div>
        );
    }

    exitToRoom = () => {
        this.props.history.push("/tour")
    }
}

export default QuickView;