import styles from "./userList.module.css";

function ListItem({ user }) {
  const { imageSrc: image, userAbout: about, userName } = user;
  return (
    <li className={styles.userCard}>
      <img className={styles.imageCard} src={image} alt={userName + " image"} />
      <h2 className="name">{userName}</h2>
      <p className="about">{about}</p>
      <div className="bottomCard">
        <p></p>
        <p></p>
        <p></p>
      </div>
    </li>
  );
}

export default ListItem;
