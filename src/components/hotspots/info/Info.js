import React from "react";
import {upDirection } from "../../../images/images";
import "./Info.scss";
class Info extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            ...props
        };
    }

    componentDidMount() {
      console.log("props :: ", this.props);
    }

    mouseEnterHandler = (e) => {
        console.log("Mouse entered");
        const clickedHotspot = e.target.parentElement;
        const container = clickedHotspot.parentElement;
        
        const hotspots = container.querySelectorAll(".lg-hotspot"); 
        hotspots.forEach(hotspot => {
          if (hotspot === clickedHotspot) {
            hotspot.classList.toggle("lg-hotspot--selected");
          } else {
            hotspot.classList.remove("lg-hotspot--selected");
          }
        });
    }

    mouseLeaveHandler = (e) => {
        console.log("Mouse leave");
        const clickedHotspot = e.target.parentElement;
        const container = clickedHotspot.parentElement;
        
        const hotspots = container.querySelectorAll(".lg-hotspot"); 
        hotspots.forEach(hotspot => {
            hotspot.classList.remove("lg-hotspot--selected");
        });
    }

      
    render() {
        return (
            <div className="marker-container" id={this.props.hotspot.eleId+'-container'}>
                <div className="alignment-container lg-hotspot lg-hotspot--top-right">
                    <div className="icon-navigation" onClick={this.props.moveToNextOutlet(this.props.nextOutlet)} onMouseEnter={this.mouseEnterHandler} onMouseLeave={this.mouseLeaveHandler}>
                        <img src={upDirection} width="50px" height="45px" alt="direction"/>
                    </div>
                    <div className="lg-hotspot__label info-panel">
                        <p>{this.props.hotspot.description}</p>
                    </div>
                </div>
            </div>
        );
    }

    exitToRoom = () => {
        this.props.history.push("/tour")
    }
}

export default Info;