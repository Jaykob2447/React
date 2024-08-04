import styles from "./ImageList.module.sass";

function ImageList({ id, src, alt, page }) {
  return (
    <img src={src} alt={alt} hidden={id === page} className={styles.image} />
  );
}

export default ImageList;
