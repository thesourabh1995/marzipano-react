import React from "react";
import './navigation360.scss';

class Navigation360 extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            show: true,
            ...props
        };
    }

    render() {
        return (
            /*<div className="ag-arrow-block">
                <div className="ag-format-container">*/
            <div>
                {
                    this.state.position === 'top' &&
                    <div className="ag-arrow_box top-arrow">
                        <div className="button-up"></div>
                    </div>
                }
                {
                    this.state.position === 'left' &&
                    <div className="ag-arrow_box left-arrow">
                        <div className="button-left button-left-alighment"></div>
                    </div>
                }
                {
                    this.state.position === 'right' &&
                    <div className="ag-arrow_box right-arrow">
                        <div className="button-right button-right-alighment"></div>
                    </div>
                }
                {
                    this.state.position === 'bottom' &&
                    <div className="ag-arrow_box bottom-arrow">
                        <div className="button-down"></div>
                    </div>
                }
            </div>
            /*</div>
        </div>*/
        );
    }
}

export default Navigation360;