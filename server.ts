import express from "express";
import cors from "cors";
const app = express();

app.set("port", process.env.PORT || 3001);

app.use(cors());

// Express only serves static assets in production
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}

app.get("/api/savings", (req, res) => {
  const { initialAmount, monthlyDeposit, interestRate, compoundingFrequency } =
    req.query;

  if (!initialAmount || !monthlyDeposit || !interestRate) {
    console.log("Missing query parameters");
    return res.status(400).json({ error: "Missing query parameters" });
  }

  console.log(initialAmount, monthlyDeposit, interestRate);

  const mockData = calculateSavingsData(
    Number(initialAmount),
    Number(monthlyDeposit),
    Number(interestRate),
    compoundingFrequency as string
  );

  res.json(mockData);
});

function calculateSavingsData(
  initialAmount: number,
  monthlyDeposit: number,
  interestRate: number, // annual interest rate (e.g., 5% = 0.05)
  interestFrequency: string // "monthly", "annually"
) {
  const years = 50;
  const data = [];
  let currentAmount = initialAmount;

  const interestPeriods = {
    annually: 1,
    quarterly: 4,
  };

  const periodsPerYear =
    interestPeriods[interestFrequency as keyof typeof interestPeriods] || 1;
  const ratePerPeriod = interestRate / periodsPerYear;

  for (let year = 1; year <= years; year++) {
    for (let period = 1; period <= periodsPerYear; period++) {
      currentAmount += (monthlyDeposit * 12) / periodsPerYear; // spread deposits over periods
      currentAmount *= 1 + ratePerPeriod; // apply interest
    }
    data.push({ year, amount: currentAmount.toFixed(2) });
  }

  return { data, totalSavings: currentAmount.toFixed(2) };
}

function calculateEffectiveInterestRate(rate: number, frequency: string) {
  if (frequency === "monthly") {
    return (1 + rate / 100 / 12) ** 12 - 1;
  } else if (frequency === "quarterly") {
    return (1 + rate / 100 / 4) ** 4 - 1;
  }
  return rate / 100;
}

app.listen(app.get("port"), () => {
  console.log(`Find the server at: http://localhost:${app.get("port")}/`); // eslint-disable-line no-console
});
