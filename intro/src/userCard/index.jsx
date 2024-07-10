import "./card.css";

function Card() {
  return (
    <>
      <article className="userCard">
        <div>
          <img className="userImg" src="" alt="" />
          <div className="">
            <p className="userName"></p>
            <p className="userLink"></p>
          </div>
        </div>
        <div>
          <button className="follow">+</button>
          <div>
            <p></p>
            <p></p>
          </div>
          <div>
            <p></p>
            <p></p>
          </div>
          <div>
            <p></p>
            <p></p>
          </div>
        </div>
      </article>
    </>
  );
}

export default Card;
