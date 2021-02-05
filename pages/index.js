import DealerArea from '../components/dealer-area';
import Cards from '../components/cards';
import PlayerArea from '../components/player-area';

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
  const cardsURL = process.env.CARDS_API || 'https://svquizz.s3.eu-central-1.amazonaws.com/cards.json';
  const res = await fetch(cardsURL);
  const cardsPool = await res.json();
  return {
    props: { 
      cardsPool, 
    },
  };
}