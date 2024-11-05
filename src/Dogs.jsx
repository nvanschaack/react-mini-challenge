import React from 'react';
import { useState, useEffect } from 'react';

export default function Dogs() {
  const [selectedBreed, setSelectedBreed] = useState('labrador');
  const [imgUrl, setImgUrl] = useState('');

  //only do whats in the useEffect if the dependency changes
  useEffect(() => {
    console.log(selectedBreed);
  }, [selectedBreed]);

  async function apiCall() {
    //try/catch is promises under the hood (asynchronous)
    try {
      const response = await fetch(`https://dog.ceo/api/breed/${selectedBreed}/images`);
      const json = await response.json()
      setImgUrl(json.message[0])
      console.log(json);
    } catch (error) {
      console.error(error);
    }
  }

  //call the API on page load
  useEffect(() => {
    apiCall();
  }, []);

  const handleSubmit = (event) => {
    event.preventDefault();

    apiCall();
  };

  //setState is fast, but it's not immediate. This explains why the console log is executing before setSelectedBreed is done updating
  const handleChange = (event) => {
    setSelectedBreed(event.target.value);
  };

  return (
    <div>
      {/* create a form with a dropdown for dog breeds */}
      {/* user can click the dropdown to select a dog breed */}
      <form onSubmit={handleSubmit}>
        <label htmlFor='dogbreeds'>Choose a Breed:</label>
        <select name='dogbreeds' id='dogbreeds' value={selectedBreed} onChange={handleChange}>
          <option value='australian'>Australian</option>
          <option value='corgi'>Corgi</option>
          <option value='chow'>Chow</option>
          <option value='labrador'>Labrador</option>
        </select>
        <input type='submit' />
      </form>
      <img src={imgUrl} alt="breed image" />
      {/* when the user submits form, the dog api should return a dog image */}
    </div>
  );
}
