import { useEffect, useMemo, useState } from "react";
import "./App.css";
import Card from "./components/Card/Card";
import Container from "./components/Container/Container";
import Grid from "./components/Grid/Grid";
import { getShuffledCards } from "./lib/getShuffledCards/getShuffledCards";
import Modal from "./components/Modal/Modal";

function App() {
  const [cards, setCards] = useState(getShuffledCards());
  const [selectedCardIds, setSelectedCardIds] = useState<number[]>([]);
  const [correctCardIds, setCorrectCardIds] = useState<number[]>([]);
  const [isGameOver, setIsGameOver] = useState(false);

  const handleCardClick = (index: number) => {
    if (
      selectedCardIds.includes(index) ||
      correctCardIds.includes(index) ||
      selectedCardIds.length === 2
    ) {
      return;
    }

    setSelectedCardIds((prev) => [...prev, index]);
  };

  const handleRestartGame = () => {
    setSelectedCardIds([]);
    setCorrectCardIds([]);
    setIsGameOver(false);
    setCards(getShuffledCards());
  };

  useEffect(() => {
    let timeout: ReturnType<typeof setTimeout>;

    if (selectedCardIds.length === 2) {
      if (cards[selectedCardIds[0]].name === cards[selectedCardIds[1]].name) {
        setCorrectCardIds((prev) => [...prev, ...selectedCardIds]);
        setSelectedCardIds([]);
      } else {
        timeout = setTimeout(() => {
          setSelectedCardIds([]);
        }, 1000);
      }
    }

    () => clearTimeout(timeout);
  }, [selectedCardIds.length]);

  useEffect(() => {
    if (correctCardIds.length === cards.length) {
      setIsGameOver(true);
    }
  }, [correctCardIds.length]);

  return (
    <div className="App">
      <Container>
        <Grid>
          {cards.map((card, index) => (
            <Card
              key={index}
              isFlipped={
                selectedCardIds.includes(index) ||
                correctCardIds.includes(index)
              }
              icon={card.component}
              handleClick={() => handleCardClick(index)}
            />
          ))}
        </Grid>
      </Container>
      <Modal isVisible={isGameOver}>
        <h3>You've won the game!</h3>
        <button onClick={handleRestartGame}>Play again</button>
      </Modal>
    </div>
  );
}

export default App;
