import { useState } from "react";
import Header from "./components/Header";
import UserInputGroup from "./components/UserInputGroup";
import Results from "./components/Results.jsx";

function App() {
  const [investmentParameters, setInvestmentParameters] = useState({
    initialInvestment: 0,
    annualInvestment: 0,
    expectedReturn: 0,
    duration: 1,
  });

  function handleOnChangeInput(parameter, value) {
    console.log(`Changing ${parameter} to ${value}`);
    setInvestmentParameters((oldParameters) => {
      if (parameter == "duration" && parseInt(value, 10) < 1) {
        alert("Duration must be 1 or more");
        return oldParameters;
      }
      return {
        ...oldParameters,
        [parameter]: value,
      };
    });
  }
  return (
    <main>
      <Header />
      <UserInputGroup
        investmentParameters={investmentParameters}
        onChangeInput={handleOnChangeInput}
      />
      <Results investmentParameters={investmentParameters} />
    </main>
  );
}

export default App;
