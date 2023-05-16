import { useEffect, useRef, useState } from "react";

export default function Card() {
  const [btnClicked, setBtnClicked] = useState(false);
  const [cardItems, setCardItems] = useState([]);
  const cardItem = useRef(null);
  function handleBtn() {
    setBtnClicked((btnClicked) => !btnClicked);
  }
  function handleBtnDelete(key) {
    setCardItems(cardItems.filter((item, id) => id !== key));
  }
  useEffect(() => {
    const newCardItem = cardItem.current.value;
    if (cardItem.current.value) {
      setCardItems((prevCardItems) => [...prevCardItems, newCardItem]);
    }
    cardItem.current.value = "";
  }, [btnClicked]);

  return (
    <div className="card">
      <h2>Gorecy Bud</h2>
      <div>
        <input type="text" ref={cardItem} />
        <button className="addBtn" onClick={handleBtn}>
          Add Item
        </button>
      </div>
      <ul>
        {cardItems.map((item, index) => {
          return (
            <li key={index}>
              <p>{item}</p>{" "}
              <button
                className="deleteBtn"
                onClick={() => {
                  handleBtnDelete(index);
                }}
              >
                delete
              </button>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
