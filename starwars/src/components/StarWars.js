import React from 'react';
import './StarWars.css';

function Character(props) {
  return (
    <div className="character-card">
      <div className="charater-info">
        <h3>{props.character.name}</h3>
        <ul>
            <li><strong>Birth Year:</strong> {props.character.birth_year}</li>
            <li><strong>Eye Color:</strong> {props.character.eye_color}</li>
            <li><strong>Gender:</strong> {props.character.gender}</li>
            <li><strong>Hair Color:</strong> {props.character.hair_color}</li>
            <li><strong>Height:</strong> {props.character.height}</li>
            <li><strong>Skin Color:</strong> {props.character.skin_color}</li>
        </ul>
      </div>
    </div>
  );
}

export default Character;