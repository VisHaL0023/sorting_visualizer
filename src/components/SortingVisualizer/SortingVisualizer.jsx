import React, { useEffect, useState } from "react";
import styles from "./SortingVisualizer.module.css";
import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";
import { mergeSortAnimation } from "../Animations/mergeSortAnimation.jsx";
import NavBar from "../NavBar/NavBar";

const SortingVisualize = () => {
  // States
  const [randomArray, setRandomArray] = useState([]);
  const [arrayLength, setArrayLength] = useState(50);
  const [sortingSpeed, setSortingSpeed] = useState(1);

  // variables
  const NUMBER_OF_BARS = arrayLength * 15;
  const ANIMATION_SPEED_MS = sortingSpeed;
  const PRIMARY_COLOR = "turquoise";

  const numWidth = Math.floor(`${window.innerWidth}` / (NUMBER_OF_BARS / 0.6));
  const width = `${numWidth}px`;
  const numMargin =
    NUMBER_OF_BARS < 5
      ? 10
      : NUMBER_OF_BARS < 8
      ? 8
      : NUMBER_OF_BARS < 11
      ? 6
      : NUMBER_OF_BARS < 20
      ? 4
      : NUMBER_OF_BARS < 50
      ? 3.5
      : NUMBER_OF_BARS < 100
      ? 3
      : NUMBER_OF_BARS < 130
      ? 2.5
      : 1;
  const margin = `${numMargin}px`;
  const color = numWidth > 20 ? "white" : "transparent";
  // console.log("width", width);
  console.log("margin", margin);
  const numFont =
    numWidth > 70
      ? 20
      : numWidth > 60
      ? 18
      : numWidth > 50
      ? 16
      : numWidth > 40
      ? 14
      : numWidth > 30
      ? 12
      : numWidth > 20
      ? 10
      : 8;
  const fontSize = `${numFont}px`;

  const arrayLengthHandler = (length) => {
    setArrayLength(length);
  };
  const handleSpeed = (speed) => {
    setSortingSpeed(speed);
  };

  function randomIntFromInterval(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
  }

  const resetArray = () => {
    const array = [];
    for (let index = 0; index < NUMBER_OF_BARS; index++) {
      array.push(randomIntFromInterval(5, 600));
    }
    setRandomArray(array);
  };

  function doMergeSort() {
    let newArray = [...randomArray];
    mergeSortAnimation(newArray, ANIMATION_SPEED_MS);
  }

  useEffect(() => {
    resetArray();
  }, [arrayLength]);

  return (
    <>
      <div className={styles.arrayContainer}>
        <div className={styles.navBar}>
          <NavBar handleLength={arrayLengthHandler} handleSpeed={handleSpeed} />

          <Stack direction="row" spacing={2}>
            <Button variant="contained" onClick={() => resetArray()}>
              Generate New Array
            </Button>
            <Button variant="contained" onClick={""}>
              Bubble Sort
            </Button>
            <Button variant="contained" onClick={""}>
              Selection Sort
            </Button>
            <Button variant="contained" onClick={""}>
              Heap Sort
            </Button>
            <Button variant="contained" onClick={() => doMergeSort()}>
              Merge Sort
            </Button>
          </Stack>
        </div>
        <div className={styles.arrayBarContainer}>
          {randomArray.map((value, index) => (
            <div
              className={styles.arrayBar}
              key={index}
              style={{
                height: `${value}px`,
                backgroundColor: PRIMARY_COLOR,
                width: width,
                marginLeft: margin,
                marginRight: margin,
                fontSize: fontSize,
                color: color,
              }}
            >
              {value}
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default SortingVisualize;
