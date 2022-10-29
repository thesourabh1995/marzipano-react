import React, { PureComponent } from 'react'

import Outlet2 from '../components/Outlets2/Outlet2';
import { data } from '../data/index';

class Mall extends PureComponent {
    static displayName = 'Mall';
    ref = React.createRef();

    constructor(props) {
        super(props);
        this.state = {
            scene: null,
            sceneId: null,
            outlet:"outlet1",
            previousHotspot: null
        };
    }

    moveToNextOutlet = (nextOutlet) => {
        console.log("outlet :: ", nextOutlet);
        // this.setState({...this.state, outlet:nextOutlet})
    }

    render() {
        return (
                <Outlet2 data={data} moveToNextOutlet={this.moveToNextOutlet}/>
        );
    }
};

export default Mall;