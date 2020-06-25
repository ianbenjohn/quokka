import React, { useState } from "react";
import "./style.css";
import { List, ListItem } from "../List";
import API from "../../utils/API";

export function SearchResults(props) {
  const [plants, setPlants] = useState([])
  function loadPlants() {
    console.log('loadPlants fired')
    API.getPlants()
      .then(res => 
        setPlants(res.data)
      )
      .catch(err => console.log(err));
  };
  // console.log(props);
  return (
    <div className="list-overflow-container">
      <ul className="list-group">
        {props.searchResults.data && props.searchResults.data.map(result => <Result loadPlants={() => loadPlants} result={result} key={result.id} />)}
      </ul>
    </div>
  );
}

export function Result(props) {
  console.log(props.result.id)
  function savePlant(plantId) {
    API.plantDetails(plantId)
      .then(res => API.savePlant(res.data))
      .then(res => props.loadPlants())
      .catch(err => console.log(err))
  }

  return (
    <li className="list-group-item">
      <List>
        <ListItem>
          Scientific Name: {props.result.scientific_name}
        </ListItem>
        {props.result.common_name && <ListItem>Common Name: {props.result.common_name}</ListItem>}
      </List>
      <button onClick={() => { savePlant(props.result.id) }}>Save to Favorites</button>
      {/* {children} */}
    </li>
  );
}
