import { Fact } from "./Fact";
import { animalFacts } from "./data";

// destructuring facts from props.facts, could also just pass "props", but then we'd have to use dot notation farther down 
export default function FactsList({ favorite }) {
  // console.log(facts);

  return (
    <div className='factsList' data-testid='factsList'>
      {/* TO DO: The FactsList component should dynamically render an animal fact with a Fact component */}
      {/* looping thru facts array, rendering a fact component from each item in the array */}
      {animalFacts.map((card) => <Fact key={card.id} factCard={card} favoriteAnimal={favorite}/>)}
    </div>
  );
}
