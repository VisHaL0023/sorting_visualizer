import React, { useEffect, useState } from "react";
import styles from "./SortingVisualizer.module.css";
import { mergeSort } from "../../SortingAlgorithm/index.jsx";

const SortingVisualize = () => {
  // States
  const [randomArray, setRandomArray] = useState([]);

  function randomIntFromInterval(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
  }

  const resetArray = () => {
    const array = [];
    for (let index = 0; index < 30; index++) {
      array.push(randomIntFromInterval(5, 600));
    }
    setRandomArray(array);
  };

  //   const checker = () => {
  //     let newArray = [...randomArray];
  //     newArray = newArray.slice().sort((a, b) => a - b);
  //     const sortedArray = mergeSort(randomArray);
  //     console.log("New Array", newArray);
  //     console.log("mergeSort", sortedArray);
  //     console.log(arraysEqual(newArray, sortedArray));
  //   };

  //   function arraysEqual(a, b) {
  //     if (a === b) return true;
  //     if (a == null || b == null) return false;
  //     if (a.length !== b.length) return false;

  //     // If you don't care about the order of the elements inside
  //     // the array, you should sort both arrays here.
  //     // Please note that calling sort on an array will modify that array.
  //     // you might want to clone your array first.

  //     for (var i = 0; i < a.length; ++i) {
  //       if (a[i] !== b[i]) return false;
  //     }
  //     return true;
  //   }

  useEffect(() => {
    resetArray();
  }, []);

  return (
    <>
      <div className={styles.arrayContainer}>
        {randomArray.map((value, index) => (
          <div
            className={styles.arrayBar}
            key={index}
            style={{ height: `${value}px` }}
          ></div>
        ))}
        <button onClick={resetArray}>Generate New Array</button>
        {/* <button onClick={bubbleSort}>Bubble Sort</button>
        <button onClick={selectionSort}>Selection Sort</button>
        <button onClick={heapSort}>Heap Sort</button> */}
        <button onClick={mergeSort}>Merge Sort</button>

        {/* <button onClick={checker}>Checker</button> */}
      </div>
    </>
  );
};

export default SortingVisualize;
