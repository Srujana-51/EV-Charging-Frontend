import React, { useEffect, useState } from "react";
import "../styles/VehicleInfo.css";

const VehicleInfo = (props) => {
    const [filterLocations, setFilterLocations] = useState([]);
    const [locations, setLocations] = useState("");

    const storeData = (e) => {
        setLocations(e.target.value)
        setFilterLocations(props?.locationList?.filter((list) => list.locationName.toLowerCase().includes(e.target.value.toLowerCase())));
    }
    const handleClick = ((location) => {
        props.setLocationName(location);
        setFilterLocations([]);
    })

    useEffect(() => {
        if(!locations) setFilterLocations([]);
    }, [locations]);

    return (
        <div className="vehicleInfo-container">
            <div className="search-conatiner">
                <div className="search">
                    <input
                        type="text"
                        name='searchData'
                        onChange={(e) => storeData(e)}
                        placeholder="Search location..."
                    />
                </div>
                <div className="search-box">
                    {filterLocations.length >0 && filterLocations.map((list,index) => {
                        return (
                            <p key={index} className="search-result"
                                onClick={() => handleClick(list.locationName)}>
                                {list.locationName}
                            </p>
                        )
                    })}
                </div>
                <div className="vehicle">
                    <img className="car" src="https://shorturl.at/qX1QC" />
                </div>
            </div>
        </div>
    );
};
export default VehicleInfo;