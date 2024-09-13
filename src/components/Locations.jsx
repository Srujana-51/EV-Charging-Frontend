import React, { useEffect, useRef, useState } from 'react'
import '../styles/Locations.css'
import axios from 'axios';

const Locations = ({ isCharging, setIsCharging, locationList, locationName, setLocationName, message, setMessage }) => {
    const [stationInfo, setStationInfo] = useState({});
    const userName = localStorage.getItem("username");
    const driverId = localStorage.getItem("driverid");
    console.log(userName);
    const startChargingSession = (port) => {
        if (!isCharging[`{port_${port.portId}`]) {
            axios.post("http://localhost:8083/session/sessionCreation", {
                stationId: stationInfo.stationId,
                portId: port.portId,
                driverId: driverId
            }).then((res) => {
                setMessage({
                    data: res.data,
                    port: port.portId
                })
                setIsCharging({
                    ...isCharging,
                    [`port_${port.portId}`]: !isCharging[`port_${port.portId}`],
                })
            }).catch((err) => console.log(err));

        }
    }

    console.log("Station Info=", stationInfo);
    console.log("isCharging_2:=", isCharging);

    return (
        <div className='locations-container'>
            <div className='list-container'>
                <div className='title'>
                    <p>{Object.keys(stationInfo)?.length ? `${stationInfo.locationName}` : "List of all stations"}</p>
                    <p onClick={() => {
                        setStationInfo({});
                        setLocationName("")
                    }}>See all</p>
                </div>
                <div className='all-list'>
                    {stationInfo.ports?.length > 0 ? stationInfo.ports.map((port) => <div className='portList'>
                        <p>{port.portName}</p>
                        <p>{port.portPower}</p>
                        <p>{port.status}</p>
                        <button className={!isCharging?.[`port_${port.portId}`] ? "start-btn" : "stop-btn"} onClick={() => startChargingSession(port)}>{!isCharging?.[`port_${port.portId}`] ? "Start" : "Stop"}</button>
                    </div>)
                        : locationList.filter((info) => locationName ? info.locationName === locationName : true).map((info, index) => {
                            return (
                                <p key={index} className="list" onClick={() => setStationInfo(info)}>{info?.locationName}<br/>Station: {info?.stationName}
                                </p>
                            )
                        })}
                </div>
            </div>
        </div>
    )
}

export default Locations

