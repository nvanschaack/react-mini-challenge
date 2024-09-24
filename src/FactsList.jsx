import { Fact } from "./Fact";

export default function FactsList({ facts }) {
  // console.log(facts);

  return (
    <div className='factsList' data-testid='factsList'>
      {/* TO DO: The FactsList component should dynamically render an animal fact with a Fact component */}
      {facts.map((card) => <Fact key={card.id} factCard={card}/>)}
    </div>
  );
}
