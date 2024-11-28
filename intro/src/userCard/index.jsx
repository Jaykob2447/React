import { useState } from "react";
import "./userCard.css";

function UserCard({
  user: { isMale, followers, tweetsCount, followingcount },
}) {
  const botGen = isMale ? "followMan" : "followWoman";
  const [followersCount, setfollowersCount] = useState(followers);
  function cengeFolow() {
    setfollowersCount((followersCount) => followersCount + 1);
  }
  const [isFullLoad, setFullLoad] = useState(false);
  /*
  Для більш корректної роботи треба додавати користувачу тіх 
  користувачів на якіх він підписаний, та робити перевірку якщо він вже
   підписаний прибирати підписку, оскільки такої задачи немає то залишаю як є 
   Ps: оскільки були ліньки верстати, довелося узяти таку людину 🤷‍♂️
  */
  return (
    <div className={isFullLoad ? "immitationFullLoad" : ""}>
      <article
        className="userCard"
        onClick={() => {
          setFullLoad(!isFullLoad);
        }}
      >
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
          <button className={"follow " + botGen} onClick={cengeFolow}></button>
          <div className="divInfoUser">
            <p className="textInfo">Tweets</p>
            <p className="countInfo">{tweetsCount}</p>
          </div>
          <div className="divInfoUser">
            <p className="textInfo">Following</p>
            <p className="countInfo">{tweetsCount}</p>
          </div>
          <div className="divInfoUser">
            <p className="textInfo">Followers</p>
            <p className="countInfo">{followersCount}</p>
          </div>
        </div>
      </article>
    </div>
  );
}

export default UserCard;
