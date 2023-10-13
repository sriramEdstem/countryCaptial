import { useState, useEffect } from "react";
import "./App.css";

const CountryCapital = ({ data }) => {
  const [arr, setArr] = useState([]);
  const [selectedBtn, setSelectedBtn] = useState(null);
  const [prevSelectedBtn, setPrevSelectedBtn] = useState(null);
  // const [isActive, setIsActive] = useState(false);

  useEffect(() => {
    const tempArr = [];
    Object.entries(data).forEach(([country, capital]) => {
      tempArr.push(country);
      tempArr.push(capital);
    });

    shuffleArray(tempArr);
    setArr(tempArr);
  }, [data]);

  // function correctOutput() {
  //   console.log(selectedBtn);
  //   let key1 = Object.keys(data).find((k) => data[k] === prevSelectedBtn);
  //   let key2 = Object.keys(data).find((k) => data[k] === selectedBtn);

  //   if (key1) {
  //     if (data[selectedBtn] === data[key1]) {
  //       console.log("hu");
  //       var index1 = arr.indexOf(selectedBtn);
  //       console.log(arr, index1);

  //       if (index1 !== -1 && index2 !== -1) {
  //         const modifiedArr = [...arr];
  //         modifiedArr.splice(index1, 1);
  //         var index2 = modifiedArr.indexOf(prevSelectedBtn);
  //         modifiedArr.splice(index2, 1);
  //         console.log(modifiedArr);

  //         setArr(modifiedArr);
  //       }
  //     }
  //   } else if (data[prevSelectedBtn] === data[key2]) {
  //     console.log("uh");
  //     var indexx1 = arr.indexOf(prevSelectedBtn);
  //     console.log(arr, indexx1);

  //     if (indexx1 !== -1 && index2 !== -1) {
  //       const modifiedArr = [...arr];
  //       modifiedArr.splice(indexx1, 1);
  //       var indexx2 = modifiedArr.indexOf(selectedBtn);
  //       modifiedArr.splice(indexx2, 1);
  //       console.log(modifiedArr);
  //       setArr(modifiedArr);
  //     }
  //   }

  //   setSelectedBtn(null);
  //   setPrevSelectedBtn(null);
  // }

  function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
  }

  function handleSelection(e) {
    // setIsActive((current) => !current);
    const answer = e.target.value;

    if (!selectedBtn) {
      setSelectedBtn(answer);
    } else {
      setPrevSelectedBtn(answer);
      if (data[selectedBtn] === answer || data[answer] === selectedBtn) {
        setArr(arr.filter((b) => b !== answer && b !== selectedBtn));
        setSelectedBtn(null);
        setPrevSelectedBtn(null);
      } else {
        setPrevSelectedBtn(selectedBtn);
        setSelectedBtn(answer);
        setTimeout(() => {
          setSelectedBtn(null);
          setPrevSelectedBtn(null);
        }, 1000);
      }
    }

    // if (selectedBtn && prevSelectedBtn) {
    //   correctOutput();
    // }
  }

  //   const answer = e.target.value;
  //   if (!selectedBtn) {
  //     setSelectedBtn(answer);
  //   } else {
  //     if (data[selectedBtn] === answer || data[answer] === selectedBtn) {
  //       setArr(arr.filter((b) => b !== answer && b !== selectedBtn));
  //       setSelectedBtn(null);
  //       setPrevSelectedBtn(null);
  //     } else {
  //       setPrevSelectedBtn(selectedBtn);
  //       setSelectedBtn(answer);

  //       setTimeout(() => {
  //         setSelectedBtn(null);
  //         setPrevSelectedBtn(null);
  //       }, 1000);
  //     }
  //   }
  // }

  if (arr.length === 0) {
    return <p>Congratulations bro</p>;
  }

  return (
    <div>
      <h2>Select a Country:</h2>
      {arr.map((item) => {
        return (
          <button
            key={item}
            className={`Buttons ${selectedBtn === item ? "selected" : ""} 
       ${
         prevSelectedBtn && (item === selectedBtn || item === prevSelectedBtn)
           ? "incorrect"
           : ""
       }`}
            onClick={handleSelection}
            value={item}
          >
            {item}
          </button>
        );
      })}
    </div>
  );
};

export default CountryCapital;
