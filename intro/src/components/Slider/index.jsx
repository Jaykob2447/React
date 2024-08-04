import styles from "./Slider.module.sass";
import ImageList from "./ImageList";
import { useState } from "react";

function Slider() {
  const [page, setPage] = useState(0);
  const heandlerBack = () => {
    if (page > 0) {
      setPage(page - 1);
    }
  };
  const heandlerNext = () => {
    if (page < image.length - 1) setPage(page + 1);
  };
  const image = [
    {
      id: 0,
      src: "https://letsenhance.io/static/8f5e523ee6b2479e26ecc91b9c25261e/1015f/MainAfter.jpg",
      alt: "some 0",
    },
    {
      id: 1,
      src: "https://buffer.com/library/content/images/size/w1200/2023/10/free-images.jpg",
      alt: "some 1",
    },
  ];
  return (
    <>
      <div className={styles.buttuns}>
        <button onClick={heandlerBack}>Back</button>
        <span>{page}</span>
        <button onClick={heandlerNext}>Next</button>
      </div>
      {image.map((obj) => {
        return <ImageList {...obj} key={obj.id} page={page} />;
      })}
    </>
  );
}

export default Slider;
