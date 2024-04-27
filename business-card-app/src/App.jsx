import { useEffect, useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Card from "./components/Card";
import { CreateCard } from "./components/CreateCard";
import axios from "axios";

function App() {
  const [addCardModal, setAddCardModal] = useState(false);
  const [cardData, setCardData] = useState([]);

  const getCardData = async () => {
    const resp = await axios.get(`http://localhost:3000/cards`);
    setCardData(resp.data.cards);
  };

  useEffect(() => {
    if (addCardModal == false) {
      getCardData();
    }
  }, [addCardModal]);

  return (
    <>
      <div className="header">
        <h1 className="title">Business Cards</h1>
        <button
          className="add-card-btn"
          onClick={() => {
            setAddCardModal(true);
          }}
        >
          Add Card
        </button>
      </div>
      {addCardModal ? (
        <CreateCard
          addCardModal={addCardModal}
          setAddCardModal={setAddCardModal}
        />
      ) : null}
      <div className="card-section">
        {cardData.map((item, key) => {
          return <Card key={key} item={item} />;
        })}
      </div>
      {/* <Card /> */}
    </>
  );
}

export default App;
