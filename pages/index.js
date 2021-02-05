import DealerArea from './components/dealer-area';
import Cards from './components/cards';
import PlayerArea from './components/player-area';

const cardsURL = 'https://svquizz.s3.eu-central-1.amazonaws.com/cards.json';

export default function Home({ cardsPool }) {
  return (
    <>
      <PlayerArea/>
      <DealerArea>
        <Cards cardsPool={cardsPool}/>
      </DealerArea>
    </>
  );
}

export async function getStaticProps() {
  const res = await fetch(cardsURL);
  const cardsPool = await res.json();
  return {
    props: { 
      cardsPool, 
    },
  };
}