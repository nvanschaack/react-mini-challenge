// Before jumping into coding, check out the README!
import FactsList from "./FactsList";
import { useEffect, useState } from "react";

// TODO: Create an App component which renders FactsList
export default function App() {

  // const [data, setData] = useState(animalFacts);
  const [favorite, setFavorite] = useState('');

  //TWO DIFFERENT KINDS OF USEEFFECTS BEING USED:
  useEffect(()=>{
    console.log('app.jsx mounted. This only happens once when app is first loaded');
  }, [])

  useEffect(()=>console.log('app.jsx is rendered'))

  function handleFavoriteClick(event) {
    // console.log(event.target.value);
    //setting state to the event of the button on fact.jsx
    setFavorite(event.target.value)
  }

  return (
    <div className='main'>
      <h1 className='heading'>Welcome to Animal Facts!</h1>
      {/* TODO: when the favorite button is clicked in a Fact component, the App state should update with the name of the animal that was favorited and be rendered in the h2 with className 'fave' */}
      <h2 className='fave' >My Favorite Animal: {favorite}</h2>
      {/* PROPS is an object...
      props.facts = data */}
      <FactsList favorite={handleFavoriteClick}/>
    </div>
  );
}
