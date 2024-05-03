import "./index.css";
import "leaflet/dist/leaflet.css";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import MarkerClusterGroup from "react-leaflet-cluster";

import { Icon, divIcon, point } from "leaflet";

// create custom icon
const customIcon = new Icon({
  iconUrl: "https://i.ibb.co/n8wq3qJ/user.png",
  iconSize: [38, 38] // size of the icon
});

// custom cluster icon
const createClusterCustomIcon = function (cluster) {
  return new divIcon({
    html: `<span class="cluster-icon">${cluster.getChildCount()}</span>`,
    className: "custom-marker-cluster",
    iconSize: point(33, 33, true)
  });
};

const handleDownload = () => {
  const videoUrl = 'http://localhost:3000/miro.mp4';

  // Create a temporary anchor element
  const link = document.createElement('a');
  link.href = videoUrl;
  link.download = 'Training Content.mp4'; 
  link.target = '_blank'; 
  link.rel = 'noopener noreferrer'; 

  // Trigger the download
  link.click();
};
// markers
const markers = [
  {
    geocode: [19.198, 72.853],
    popUp: `<div class="learner-details">
    <h3>Learner Details</h3>
    <p><strong>Name:</strong> John Doe</p>
    <p><strong>Location:</strong> Maharashtra, India</p>
    <p><strong>Course Completed:</strong> Water Management Basics</p>
    <p><strong>Program Registered:</strong> Community Water Management</p>
    <p><strong>Rating:</strong> 4.5/5</p>
  </div>
  `
  },
  {
    geocode: [19.245, 72.849],
    popUp: `<div class="learner-details">
    <h3>Learner Details</h3>
    <p><strong>Name:</strong> Jane Doe</p>
    <p><strong>Location:</strong> Maharashtra, India</p>
    <p><strong>Course Completed:</strong> Water Management Basics</p>
    <p><strong>Program Registered:</strong> Community Water Management</p>
    <p><strong>Rating:</strong> 4/5</p>
  </div>
  `
  },
  {
    geocode: [28.632, 77.212],
    popUp: `<div class="learner-details">
    <h3>Learner Details</h3>
    <p><strong>Name:</strong> Santosh</p>
    <p><strong>Location:</strong> New Delhi, India</p>
    <p><strong>Course Completed:</strong> Water Management Basics</p>
    <p><strong>Program Registered:</strong> Community Water Management</p>
    <p><strong>Rating:</strong> 4.5/5</p>
  </div>
  `
  },
  {
    geocode: [28.653, 77.221],
    popUp: `<div class="learner-details">
    <h3>Learner Details</h3>
    <p><strong>Name:</strong> Raj Kumar</p>
    <p><strong>Location:</strong> New Delhi, India</p>
    <p><strong>Course Completed:</strong> Water Management Basics</p>
    <p><strong>Program Registered:</strong> Community Water Management</p>
    <p><strong>Rating:</strong> 4.5/5</p>
  </div>
  `
  },
  {
    geocode: [28.637, 77.22],
    popUp: `<div class="learner-details">
    <h3>Learner Details</h3>
    <p><strong>Name:</strong> Sunita</p>
    <p><strong>Location:</strong> New Delhi, India</p>
    <p><strong>Course Completed:</strong> Water Harvesting Basics</p>
    <p><strong>Program Registered:</strong> Community Water Management</p>
    <p><strong>Rating:</strong> 4.1/5</p>
  </div>
  `
  }
];

export default function App() {
  return (
    <>
<h2 style={{color: 'blue', fontSize: '24px', marginTop:'2rem'}}>Program: Community Water Management</h2>

    <MapContainer center={[22.011, 77.142]} zoom={5}>
      {/* OPEN STREEN MAPS TILES */}
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />

      <MarkerClusterGroup
        chunkedLoading
        iconCreateFunction={createClusterCustomIcon}
      >
        {/* Mapping through the markers */}
        {markers.map((marker) => (
          <Marker position={marker.geocode} icon={customIcon}>
            <Popup>  <div dangerouslySetInnerHTML={{ __html: marker.popUp }} /></Popup>
          </Marker>
        ))}

  
      </MarkerClusterGroup>
    </MapContainer>
    <div style={{display:'flex'}}>
            <h3 style={{margin:'1rem'}}>Training Content for Community Water Management</h3>
            <button onClick={handleDownload} style={{ backgroundColor: 'blue', color: 'white', padding: '10px 20px', border: 'none', borderRadius: '5px', cursor: 'pointer' }}>Download</button>

        </div>
    </>
  );
}
