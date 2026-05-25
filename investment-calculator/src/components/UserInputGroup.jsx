import { useState } from "react";
import UserInput from "./UserInput";

export default function UserInputGroup({
  investmentParameters,
  onChangeInput,
}) {
  return (
    <section id="user-input">
      <div className="input-group">
        <div>
          <UserInput
            label="Initial Investment"
            id="initial-investment"
            type="number"
            value={investmentParameters.initialInvestment}
            onChange={(event) =>
              onChangeInput("initialInvestment", Number(event.target.value))
            }
          />
          <UserInput
            label="Annual Investment"
            id="annual-investment"
            type="number"
            value={investmentParameters.annualInvestment}
            onChange={(event) =>
              onChangeInput("annualInvestment", Number(event.target.value))
            }
          />
        </div>
        <div>
          <UserInput
            label="Expected Return"
            id="expected-return"
            type="number"
            value={investmentParameters.expectedReturn}
            onChange={(event) =>
              onChangeInput("expectedReturn", Number(event.target.value))
            }
          />
          <UserInput
            label="Duration"
            id="duration"
            type="number"
            value={investmentParameters.duration}
            onChange={(event) =>
              onChangeInput("duration", Number(event.target.value))
            }
          />
        </div>
      </div>
    </section>
  );
}
