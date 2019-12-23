import React from 'react';
import ArcGISMap from 'esri/Map';
import MapView from 'esri/views/MapView';

export class WebMapComponent extends React.Component {
  constructor(props) {
    super(props);
    this.mapRef = React.createRef();
  }

  componentDidMount() {
    // create map
    const map = new ArcGISMap({
      basemap: 'topo-vector'
    });
    // load the map view at the ref's DOM node
    this.view = new MapView({
      container: this.mapRef.current,
      map: map,
      center: [-118, 34],
      zoom: 8
    });
  }

  componentWillUnmount() {
    if (this.view) {
      // destroy the map view
      this.view.container = null;
    }
  }

  render() {
    return (
      <div className="webmap" ref={this.mapRef} />
    );
  }
}
export default WebMapComponent;