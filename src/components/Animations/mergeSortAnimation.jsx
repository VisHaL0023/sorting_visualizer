import styles from "../SortingVisualizer/SortingVisualizer.module.css";
import { mergeSort } from "../../SortingAlgorithm/index.jsx";

const PRIMARY_COLOR = "turquoise";
const SECONDARY_COLOR = "red";

export const mergeSortAnimation = (newArray, ANIMATION_SPEED_MS) => {
  const animations = mergeSort(newArray);
  for (let i = 0; i < animations.length; i++) {
    const arrayBars = document.getElementsByClassName(styles.arrayBar);
    // console.log("arrayBar", arrayBars);
    const isColorChange = i % 3 !== 2;
    if (isColorChange) {
      const [barOneIdx, barTwoIdx] = animations[i];
      const barOneStyle = arrayBars[barOneIdx].style;
      const barTwoStyle = arrayBars[barTwoIdx].style;
      const color = i % 3 === 0 ? SECONDARY_COLOR : PRIMARY_COLOR;
      setTimeout(() => {
        barOneStyle.backgroundColor = color;
        barTwoStyle.backgroundColor = color;
      }, i * ANIMATION_SPEED_MS);
    } else {
      setTimeout(() => {
        const [barOneIdx, newHeight] = animations[i];
        const barOneStyle = arrayBars[barOneIdx].style;
        barOneStyle.height = `${newHeight}px`;
      }, i * ANIMATION_SPEED_MS);
    }
  }
};
