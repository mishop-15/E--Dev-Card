import React, { useState } from "react";
import axios from "axios";
import "./CreateCard.css";

export const CreateCard = ({ addCardModal, setAddCardModal }) => {
  const [cardData, setCardData] = useState({
    title: "",
    description: "",
    interests: "",
    linkedin: "",
    twitter: "",
  });

  const addCard = async () => {
    await axios({
      method: "post",
      url: `http://localhost:3000/addCard`,
      headers: {
        "Content-Type": "application/json",
      },
      data: JSON.stringify(cardData),
    });
    setCardData({
      title: "",
      description: "",
      interest: "",
      linkedin: "",
      twitter: "",
    });
    setAddCardModal(false);
  };

  return (
    <div className="create-card-container">
      <span
        className="close"
        onClick={() => {
          setAddCardModal(false);
        }}
      >
        {" "}
        x
      </span>
      <h1 className="create-card-header">Enter Card Details</h1>

      <input
        placeholder="Enter Title"
        type="text"
        onChange={(e) => {
          setCardData({ ...cardData, title: e.target.value });
        }}
        value={cardData.title}
      />
      <input
        placeholder="Enter Description"
        type="text"
        value={cardData.description}
        onChange={(e) => {
          setCardData({ ...cardData, description: e.target.value });
        }}
      />
      <textarea
        placeholder="Enter Interests"
        value={cardData.interest}
        onChange={(e) => {
          const interestsArray = e.target.value
            .split(",")
            .map((interest) => interest.trim());
          setCardData({ ...cardData, interests: interestsArray });
        }}
      />
      <input
        placeholder="Enter Twitter Handle"
        value={cardData.twitter}
        onChange={(e) => {
          setCardData({ ...cardData, twitter: e.target.value });
        }}
      />
      <input
        placeholder="Enter LinkedIn Handle"
        type="text"
        value={cardData.linkedin}
        onChange={(e) => {
          setCardData({ ...cardData, linkedin: e.target.value });
        }}
      />
      <button className="create-card-btn" onClick={addCard}>
        Add Card
      </button>
    </div>
  );
};
