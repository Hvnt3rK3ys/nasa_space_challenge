import React, { useState } from "react";
import styles from "../../styles/sHome/F_Location.module.scss";
import { TextField, Button } from "@mui/material";
import { Input } from "@nextui-org/react";

const Location = () => {
  const [location, setLocation] = useState("");
  const [coordinates, setCoordinates] = useState({ lat: "", long: "" });

  const handleLocationChange = (event) => {
    setLocation(event.target.value);
  };

  const handleCoordinatesChange = (event) => {
    const { name, value } = event.target;
    setCoordinates((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log("Location:", location);
    console.log("Coordinates:", coordinates);
  };

  return (
    <section className={styles.globalLocation}>
      <form onSubmit={handleSubmit} className="flex flex-col space-y-4">
        <TextField
          label="Write location"
          variant="outlined"
          value={location}
          onChange={handleLocationChange}
          fullWidth
        />
        <div className="flex space-x-4">
          <Input
            label="Latitude"
            name="lat"
            value={coordinates.lat}
            onChange={handleCoordinatesChange}
            fullWidth
          />
          <Input
            label="Longitude"
            name="long"
            value={coordinates.long}
            onChange={handleCoordinatesChange}
            fullWidth
          />
        </div>
        <Button type="submit" variant="contained" color="primary">
          Submit
        </Button>
      </form>
    </section>
  );
};

export default Location;
