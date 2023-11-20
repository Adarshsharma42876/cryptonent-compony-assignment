import React, { useState, useEffect } from "react";
import axios from "axios";

import "./Profilecard.css";

const Profilecard = () => {
  const [profile, setProfile] = useState({});

  useEffect(() => {
    async function fetchProfile() {
      const response = await axios.get(
        "https://randomuser.me/api/?page=1&results=1&seed=abc"
      );
      setProfile(response.data.results[0]);
    }

    fetchProfile();
  }, []);

  return (
    <div className="profile-card">
      <div className="profile-card-header">
        <img
          src={profile?.picture?.large}
          alt={profile.name?.first ?? "Loading..."}
        />
       
        {profile.name?.first ? (
          <h1>{profile.name.first + " " + profile.name.last}</h1>
        ) : (
          <p>Loading...</p>
          
        )}
        <p>Gender: {profile.gender}</p>
        <p>Phone: {profile.phone}</p>
      </div>
      
    </div>
  );
};

export default Profilecard;
