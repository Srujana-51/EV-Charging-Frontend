import React, { useEffect, useState } from 'react'
import VehicleInfo from './VehicleInfo'
import Profile from './Profile'
import Locations from './Locations'
import '../styles/Dashboard.css'
import axios from 'axios'

function Dashboard() {
  const [locationList, setLocationList] = useState([]);
  const [locationName, setLocationName] = useState("");
  const [message, setMessage] = useState({ data: "", port: "" });
  const [isCharging, setIsCharging] = useState({});
  const [available, setAvailable] = useState("");

  const fetchLocations = () => {
    axios.get('http://localhost:8082/station/totalStations').then((res) => {
      setLocationList(res.data)
    });
  }
  useEffect(() => {
    fetchLocations();
  }, []);

  useEffect(() => {
    let timer = null;
    if (message.data) {
      timer = setInterval(() => {
        setAvailable("Port is now available!");
        setMessage({ data: "", port: "" });
        setIsCharging({
          ...isCharging,
          [`port_${message.port}`]: !isCharging[`port_${message.port}`],
        });
      }, 20000);
    }
    return () => {
      if (timer) {
        clearInterval(timer);
      }
    };
  }, [message.data]);

  return (
    <div className="container">
      <Profile />
      <VehicleInfo locationList={locationList} setLocationName={setLocationName} />
      <Locations isCharging={isCharging} setIsCharging={setIsCharging} locationList={locationList} message={message} setMessage={setMessage} locationName={locationName} setLocationName={setLocationName} />
      {(message.data || available) && <div className='message'>
        <span>{message.data || available}</span>
      </div>}
    </div>
  )
}
export default Dashboard
