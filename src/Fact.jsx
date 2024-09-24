// TO DO: The fact component should render an animal fact from data.js
export function Fact({factCard}) {
  //factCard is an object that represents each individual index in the facts array (from FactsList)
// console.log(factCard);
const {animal, image, altText, fact} = factCard;

  return (
    <div className='factCard' data-testid='factCard'>
      <h1>{animal}</h1>
      {/* TODO: Clicking the favorite button should update the App state with the favorited animal name */}
      <button value={animal} name='faveBtn'>
        Click to favorite
      </button>
      <img src={image} width='600' height='400' alt={altText} />
      <h3>{fact}</h3>
    </div>
  );
}
