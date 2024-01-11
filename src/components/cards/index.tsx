import React from "react";
import iconsEnvelope from "assets/icons/envelope.svg";
import iconsPhone from "assets/icons/phone.svg";
import iconsGlobe from "assets/icons/globe.svg";
import iconsHeart from "assets/icons/heart.svg";
import iconsEdit from "assets/icons/edit.svg";
import iconsRecycle from "assets/icons/recycle.svg";

interface AvatarCardProps {
  id: number;
  avatar: string;
  name: string;
  email: string;
  phone: string;
  portfolio: string;
  activeState: number;
  setActiveIndex: Function;
}

const Cards: React.FC<AvatarCardProps> = ({
  id,
  avatar,
  name,
  email,
  phone,
  portfolio,
  activeState,
  setActiveIndex,
}: AvatarCardProps) => {
  const handleLikes = (idx: number) => {
    setActiveIndex(idx);
  };
  const handleModal = () => {
    alert("Enter form details!");
  };
  const handleDelete = () => {
    alert("Delete card");
  };

  return (
    <div className="card" key={id}>
      <div className="card-avatar">
        <img src={avatar} alt="" />
      </div>
      <div className="card-detail">
        <h3>{name}</h3>
        <div className="cards-icons">
          <img src={iconsEnvelope} alt="" />
          <h4>{email}</h4>
        </div>
        <div className="cards-icons">
          <img src={iconsPhone} alt="" />
          <h4>{phone}</h4>
        </div>
        <div className="cards-icons">
          <img src={iconsGlobe} alt="" />
          <h4>{portfolio}</h4>
        </div>
      </div>

      <div className="bottom-navigation">
        <div>
          <button onClick={() => handleLikes(id)}>
            <svg
              className={`${activeState === id ? "active-likes" : "likes"}`}
              strokeWidth={2}
              viewBox="0 0 512 512"
              height="1em"
              width="1em"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                stroke="currentColor"
                d="M256 448a32 32 0 0 1-18-5.57c-78.59-53.35-112.62-89.93-131.39-112.8-40-48.75-59.15-98.8-58.61-153C48.63 114.52 98.46 64 159.08 64c44.08 0 74.61 24.83 92.39 45.51a6 6 0 0 0 9.06 0C278.31 88.81 308.84 64 352.92 64c60.62 0 110.45 50.52 111.08 112.64.54 54.21-18.63 104.26-58.61 153-18.77 22.87-52.8 59.45-131.39 112.8a32 32 0 0 1-18 5.56z"
              ></path>
            </svg>
          </button>
        </div>
        <div>
          <button onClick={handleModal}>
            <svg
              stroke="currentColor"
              fill="currentColor"
              stroke-width="0"
              viewBox="0 0 24 24"
              height="1em"
              width="1em"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M6.41421 15.89L16.5563 5.74786L15.1421 4.33365L5 14.4758V15.89H6.41421ZM7.24264 17.89H3V13.6474L14.435 2.21233C14.8256 1.8218 15.4587 1.8218 15.8492 2.21233L18.6777 5.04075C19.0682 5.43128 19.0682 6.06444 18.6777 6.45497L7.24264 17.89ZM3 19.89H21V21.89H3V19.89Z"></path>
            </svg>
          </button>
        </div>
        <div>
          <button onClick={handleDelete}>
            <svg
              stroke="currentColor"
              fill="currentColor"
              stroke-width="0"
              viewBox="0 0 24 24"
              height="1em"
              width="1em"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M7 6V3C7 2.44772 7.44772 2 8 2H16C16.5523 2 17 2.44772 17 3V6H22V8H20V21C20 21.5523 19.5523 22 19 22H5C4.44772 22 4 21.5523 4 21V8H2V6H7ZM9 4V6H15V4H9Z"></path>
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Cards;
