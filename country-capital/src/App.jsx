import CountryCapital from "./CountryCapital";

function App() {
  const data = {
    India: "New Delhi",
    Australia: "Canberra",
    Poland: "Warsaw",
    Japan: "Tokyo",
    SriLanka: "Colombo",
  };

  // const data = [
  //   {
  //     id: 1,
  //     country: "India",
  //     capital: "New Delhi",
  //   },
  //   {
  //     id: 2,
  //     country: "Australia",
  //     capital: "Canberra",
  //   },
  //   {
  //     id: 3,
  //     country: "Poland",
  //     capital: "Warsaw",
  //   },
  //   {
  //     id: 4,
  //     country: "Japan",
  //     capital: "Tokyo",
  //   },
  // ];

  return (
    <>
      <CountryCapital data={data}></CountryCapital>
    </>
  );
}

export default App;
