import { useState } from "react";
import "./card.css";

function Card({ user }) {
  const { isMale, followers } = user;
  const botGen = isMale ? "followMan" : "followWoman";
  const [followersCount, setfollowers] = useState(followers);
  function cengeFolow() {
    setfollowers((followersCount) => followersCount + 1);
  }
  /*
  Для більш корректної роботи треба додавати користувачу тіх 
  користувачів на якіх він підписаний, та робити перевірку якщо він вже
   підписаний прибирати підписку, оскільки такої задачи немає то залишаю як є 
   Ps: оскільки були ліньки верстати, довелося узяти таку людину 🤷‍♂️
  */
  return (
    <>
      <div className="immitationFullLoad">
        <article className="userCard">
          <div className="userUp">
            <img
              className="userImg"
              src="https://cdn.britannica.com/58/129958-004-C382F2CC/Adolf-Hitler-1933.jpg?s=1500x700&q=85"
              alt="Hitler Adolf"
            />
            <div className="userDivName">
              <p className="userName">Adolf Hitler</p>
              <a
                className="userLink"
                href="https://althistory.fandom.com/wiki/Hitler_The_Artist"
              >
                @PainterAdolf1889
              </a>
            </div>
          </div>
          <div className="userBottom">
            <button
              className={"follow " + botGen}
              onClick={cengeFolow}
            ></button>
            <div className="divInfoUser">
              <p className="textInfo">Tweets</p>
              <p className="countInfo">800</p>
            </div>
            <div className="divInfoUser">
              <p className="textInfo">Following</p>
              <p className="countInfo">455</p>
            </div>
            <div className="divInfoUser">
              <p className="textInfo">Followers</p>
              <p className="countInfo">{followersCount}</p>
            </div>
          </div>
        </article>
      </div>
    </>
  );
}

export default Card;
