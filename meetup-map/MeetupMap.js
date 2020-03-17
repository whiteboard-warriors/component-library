import React from 'react'
import californiaMap from './california-map.svg'
import location from './location-marker.svg'
import './MeetupMap.css'

class MeetupMap extends React.Component {
	constructor(props) {
		super(props)
		this.state = {}
	}

	render() {
		return (
			<div className="map-container">
				<img src={californiaMap} alt="California Map" />
				<div style={{ position: 'absolute', top: '50vh' }}>
					<img src={location} alt="Location Tag" />
				</div>
				<div style={{ position: 'absolute', top: '50px' }}>
					<img src={location} alt="Location Tag" />
				</div>
			</div>
		)
	}
}

export default MeetupMap
