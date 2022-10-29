import React from "react";
import {mannequin2, product1 } from "../../../images/images";
import "./Mannequin.scss";
class Mannequin extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            ...props
        };
    }

    componentDidMount() {
      console.log("props :: ", this.props);
    }

    selectHotspot = (e) => {
        const clickedHotspot = e.target.parentElement;
        const container = clickedHotspot.parentElement;
        
        // only include hotspots within same image to allow one open hotspot per image; change "container" to "document" to allow only one open hotspot for entire page:
        const hotspots = container.querySelectorAll(".lg-hotspot"); 
        hotspots.forEach(hotspot => {
          if (hotspot === clickedHotspot) {
            hotspot.classList.toggle("lg-hotspot--selected");
          } else {
            hotspot.classList.remove("lg-hotspot--selected");
          }
        });
      }

    // mouseEnterHandler = (e) => {
    //     console.log("Mouse entered");
    //     const clickedHotspot = e.target.parentElement;
    //     const container = clickedHotspot.parentElement;
        
    //     const hotspots = container.querySelectorAll(".lg-hotspot"); 
    //     hotspots.forEach(hotspot => {
    //       if (hotspot === clickedHotspot) {
    //         hotspot.classList.toggle("lg-hotspot--selected");
    //       } else {
    //         hotspot.classList.remove("lg-hotspot--selected");
    //       }
    //     });
    // }

    // mouseLeaveHandler = (e) => {
    //     console.log("Mouse leave");
    //     const clickedHotspot = e.target.parentElement;
    //     const container = clickedHotspot.parentElement;
        
    //     const hotspots = container.querySelectorAll(".lg-hotspot"); 
    //     hotspots.forEach(hotspot => {
    //         hotspot.classList.remove("lg-hotspot--selected");
    //     });
    // }

      
    render() {
        return (
            <div className="mannequin-container" id={this.props.hotspot.eleId+'-container'}>
                <img src={this.props.hotspot.image} width={this.props.hotspot.width} height={this.props.hotspot.height} alt="mannequin"/>
                <div className="lg-hotspot lg-hotspot--top-left marker-alignment info-alignment">
                    <div className="lg-hotspot__button" id={this.props.hotspot.eleId+'-button'} onClick={this.selectHotspot}></div>
                    <div className="lg-hotspot__label flex-alignment">
                        <div className="image-section">
                          <img src={product1} width="205px" height="260px" alt="product"/>
                        </div>
                        <div className="detail-section">
                          <div className="title-section padding-details">{this.props.hotspot.title}</div>
                          <div className="price-section padding-details"><b>{this.props.hotspot.price}</b></div>
                          <div className="padding-details">
                            <select>
                            {this.props.hotspot.size.map((option) => (
                                <option key={option.value} value={option.value}>{option.label}</option>
                           ))}
                            </select>
                          </div>
                          <div className="add-to-cart padding-details"><button className="add-to-cart-button">Add to Card</button></div>
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

export default Mannequin;