import { useCallback, useEffect, useRef, useState } from "react";
import styles from "./Home.module.css";

const ImageSlider = ({ slides }) => {
  const timerRef = useRef(null)
  const [currentIndex, setCurrentIndex] = useState(0);
  const slideStyle = {
    backgroundImage: `url(${slides[currentIndex].url})`,
  };
  const goToSlide = slideIndex =>{
    setCurrentIndex(slideIndex)
  }
  const goToNext = useCallback(() =>{
    const isLastSlide = currentIndex === slides.length -1
    const newIndex = isLastSlide ? 0 :currentIndex + 1;
    setCurrentIndex(newIndex)
  }, [currentIndex, slides])
  useEffect(() => {
    if(timerRef.current){
        clearTimeout(timerRef.current)
    }
    timerRef.current = setTimeout(() => {
        goToNext()
    }, 2000)

    return () => clearTimeout(timerRef.current)
  }, [goToNext])
  return (
    <div className="top-widget__slider">
      <div className={styles.slideStyle} style={slideStyle}></div>
      <div className={styles.dotContainer} >
        {slides.map((slide, slideIndex) => (
          <div 
          className={styles.dotStyle} 
          key={slideIndex}
          onClick={() => goToSlide(slideIndex)}
          >⬤</div>
        ))}
      </div>
    </div>
  );
};
export default ImageSlider;
