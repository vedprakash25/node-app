import Cards from "components/cards";
import cardsData from "static/cardsData";
import { useState } from "react";
import "./index.css";

function App() {
  const [activeIndex, setActiveIndex] = useState<number>(0);

  return (
    <div className="container ">
      <div className="cards-wrapper">
        {cardsData.map((item: any) => {
          const { avatar, email, name, phone, portfolio, id } = item;
          return (
            <Cards
              id={id}
              avatar={avatar}
              email={email}
              name={name}
              phone={phone}
              portfolio={portfolio}
              activeIndex={activeIndex}
              setActiveIndex={setActiveIndex}
            />
          );
        })}
      </div>
    </div>
  );
}

export default App;
