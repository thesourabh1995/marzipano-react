import React, { PureComponent } from 'react'
import ReactDOM from "react-dom";
import PropTypes from 'prop-types';
import Marzipano from 'marzipano';
import settings from '../../TourSettings';
import './Outlet1.scss';
import Navigation360 from '../navigation360/Navigation360';
import Marker from '../hotspots/marker/Marker';
import Viewer from 'marzipano/src/Viewer';
import Info from '../hotspots/info/Info';

class Outlet1 extends PureComponent {
    static displayName = 'Outlet1';
    ref = React.createRef();

    constructor(props) {
        super(props);
        this.state = {
            scene: null,
            sceneId: null
        };
        this.viewLeftElement = null;
        this.viewRightElement = null;
        this.viewInElement = null;
        this.viewOutElement = null;
    }


    static propTypes = {
        data: PropTypes.object.isRequired,
    };

    componentDidMount() {
        this.viewLeftElement = document.querySelector('.left-arrow');
        this.viewRightElement = document.querySelector('.right-arrow');
        this.viewInElement = document.querySelector('.top-arrow');
        this.viewOutElement = document.querySelector('.bottom-arrow');
        this.loadInitialScene();
    }

    async loadInitialScene() {
        const defaultScene = settings.getSceneImage("Outlet2");
        const instance = new Marzipano.Viewer(this.pano, {});
        const geometry = new Marzipano.EquirectGeometry([{ width: 4000 }]);
        const limiter = Marzipano.RectilinearView.limit.traditional(1024, 100 * Math.PI / 180, 120 * Math.PI / 180);
        const view = new Marzipano.RectilinearView({}, limiter);
    
        // Creates scene
        const image = settings.getSceneImage("hugo2");
        const source = Marzipano.ImageUrlSource.fromString(image);
        const scene = instance.createScene({
          source, geometry, view
        });
        this.loadHotspots(scene, "scene");
        // Loads the scene
        scene.switchTo();
        var pano = document.getElementById("outlet");
        pano.addEventListener("click",  (e) => {
            console.log("I am here")
            var view = instance.view();
            var loc  = view.screenToCoordinates({x : e.clientX, y: e.clientY});
            var position = { yaw: loc.yaw, pitch: loc.pitch};
            console.log("position:: ", position);
        })
    }

    async loadHotspots(s, scene) {
        console.log("loaded hotspots :: ", this.props.data.scenes);
        const hotspots = this.getSceneHotspots("outlet1");
        hotspots.forEach((hotspot) => {
            let divHotspot = this.createHotspotElement(hotspot);
            // divHotspot = this.createHotspotEvent(divHotspot, hotspot);
            s.hotspotContainer()
              .createHotspot(divHotspot, {
                id: hotspot.id,
                yaw: hotspot.yaw,
                pitch: hotspot.pitch
              });
        });

    }

    createHotspotElement(hotspot) {
        let divHotspot = document.createElement("div");
        divHotspot.classList.add("hotspot");
        const type = hotspot.type;

        if (type === 'infoAnimation') {
            let divHotspotOut = document.createElement("div");
            divHotspotOut.classList.add("out");
            let divHotspotIn = document.createElement("div");
            divHotspotIn.classList.add("in");
            let imgHotspot = document.createElement("img");
            imgHotspot.classList.add("hotspot-icon");
            imgHotspot.src = settings.getHotspotImage(type);
            divHotspotIn.appendChild(imgHotspot);
            // divHotspot.appendChild(divHotspotOut);
            // divHotspot.appendChild(divHotspotIn);

            imgHotspot.addEventListener('click', (e) => {
                this.renderHotspotComponent(hotspot, divHotspot);
            })
        } else {
            this.renderHotspotComponent(hotspot, divHotspot);
        }

        return divHotspot;
    }

    createHotspotEvent(divHotspot, hotspot) {
        let callback = function () {
            const exception = this.state.previousHotspot;
            this.closeAllInfo(exception, hotspot.id);
            this.setState({ previousHotspot: hotspot.id });
            switch (hotspot.type) {
                case 'item':
                    this.pickupItem(hotspot);
                    break;
                case 'info':
                case 'video':
                    this.toggleInfo(hotspot);
                    break;
                case 'question':
                    this.loadQuestion(hotspot);
                    break;
                case 'link':
                    this.loadScene(hotspot.data.target);
                    break;
                default:
                    break;
            }
        }
        callback = callback.bind(this);
        divHotspot.addEventListener("click", callback);
        return divHotspot;
    }


    renderHotspotComponent(hotspot, divHotspot) {
        switch (hotspot.type) {
            case 'marker':
                divHotspot.append(ReactDOM.render(<div><Marker hotspot={hotspot}/></div>, divHotspot));
                break;
            case 'navigation':
                divHotspot.append(ReactDOM.render(<div><Info hotspot={hotspot}/></div>, divHotspot));
                break;
            default:
            break;
        }
    }

    getSceneHotspots(sceneName){
        let hotspots = [];
        if(sceneName){
            this.props.data.scenes.forEach((each) => {
                if(each.name === sceneName){
                    hotspots = each.infoHotspots;
                }
            })
        }
        return hotspots;
    }

    render() {
        return <div id="outlet" className="outlet-container" ref={pano => this.pano = pano} >
                    <div className="ag-arrow-block">
                        <div className="ag-format-container">
                            <Navigation360 position="top"></Navigation360>
                            <Navigation360 position="left"></Navigation360>
                            <Navigation360 position="right"></Navigation360>
                            <Navigation360 position="bottom"></Navigation360>
                        </div>
                    </div>
                </div>
    }
};

export default Outlet1;