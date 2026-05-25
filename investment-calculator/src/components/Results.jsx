import { calculateInvestmentResults, formatter } from "../util/investment.js";

export default function Results({ investmentParameters }) {
  let yearlyResults = calculateInvestmentResults(investmentParameters);
  // Add total interest and invested capital to yearly results
  let enrichedYearlyResults = [];
  for (let i = 0; i < yearlyResults.length; i++) {
    let enrichedYearlyResult = {
      ...yearlyResults[i],
      ["totalInterest"]: yearlyResults[i].interest,
      ["investedCapital"]:
        parseInt(investmentParameters.initialInvestment, 10) +
        (i + 1) * parseInt(investmentParameters.annualInvestment, 10),
    };
    if (i > 0) {
      enrichedYearlyResult.totalInterest +=
        enrichedYearlyResults[i - 1].totalInterest;
    }
    enrichedYearlyResults.push(enrichedYearlyResult);
  }
  console.log(enrichedYearlyResults);
  return (
    <div className="center">
      <table id="result">
        <thead>
          <tr>
            <th scope="col">Year</th>
            <th scope="col">Investment Value</th>
            <th scope="col">Interest (Year)</th>
            <th scope="col">Total Interest</th>
            <th scope="col">Invested Capital</th>
          </tr>
        </thead>
        <tbody>
          {enrichedYearlyResults.map((result) => {
            return (
              <tr key={result.year}>
                <td>{result.year}</td>
                <td>{formatter.format(result.valueEndOfYear)}</td>
                <td>{formatter.format(result.interest)}</td>
                <td>{formatter.format(result.totalInterest)}</td>
                <td>{formatter.format(result.investedCapital)}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}
