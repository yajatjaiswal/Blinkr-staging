import { useEffect, useState } from "react";
import { Cell, Pie, PieChart } from "recharts";
import { ArrowRight } from "lucide-react";
import InputSlider from "../ui/InputSlider";

function Calculator() {
  const [loanAmount, setLoanAmount] = useState(50000);
  const [interestRate, setInterestRate] = useState(4);
  const [loanDays, setLoanDays] = useState(30);
  const [totalInterest, setTotalInterest] = useState(0);
  const [totalAmount, setTotalAmount] = useState(0);

  useEffect(() => {
    const interest = Math.round(
      (loanAmount * interestRate * loanDays) / (365 * 100)
    );
    setTotalInterest(Math.round(interest));
    setTotalAmount(loanAmount + interest);
  }, [loanAmount, interestRate, loanDays]);

  const donutData = [
    { name: "Loan Amount", value: loanAmount, color: "#FFD700" },
    { name: "Total Interest", value: totalInterest, color: "#11177F" },
    { name: "Payable Amount", value: totalAmount, color: "#5B00EB" },
  ];

  return (
    <div className="min-h-screen bg-gray-50 p-4 md:p-8 flex items-center justify-center">
      <div className="w-full grid md:grid-cols-3 gap-6">
        {/* Left Panel - Sliders */}
        <div className="bg-white rounded-3xl p-8 shadow-lg">
          <div className="space-y-8">
            <div className="space-y-4">
              <div className="flex justify-between items-center">
                <span className="text-xl font-medium text-gray-800">
                  Loan amount
                </span>
                <span className="text-xl font-semibold text-gray-900">
                  ₹{loanAmount.toLocaleString()}
                </span>
              </div>
              <InputSlider
                min={1000}
                max={100000}
                input={loanAmount}
                onChange={(e) => setLoanAmount(Number(e.target.value))}
                color="#FFD700"
              />
            </div>

            <div className="space-y-4">
              <div className="flex justify-between items-center">
                <span className="text-xl font-medium text-gray-800">
                  Number of days
                </span>
                <span className="text-xl font-semibold text-gray-900">
                  {loanDays}
                </span>
              </div>
              <InputSlider
                min={7}
                max={90}
                input={loanDays}
                onChange={(e) => setLoanDays(Number(e.target.value))}
                color="#4C1D95"
              />
            </div>

            <div className="space-y-4">
              <div className="flex justify-between items-center">
                <span className="text-xl font-medium text-gray-800">
                  Interest rate
                </span>
                <span className="text-xl font-semibold text-gray-900">
                  {interestRate}%
                </span>
              </div>
              <InputSlider
                min={1}
                max={20}
                input={interestRate}
                onChange={(e) => setInterestRate(Number(e.target.value))}
                color="#854DF0"
              />
            </div>
          </div>
        </div>

        {/* Right Panel - Chart */}
        <div className="bg-[#4C1D95] rounded-3xl p-8 text-white">
          <div className="h-full flex flex-col items-center justify-center">
            <div className="relative w-64 h-64">
              <PieChart width={256} height={256}>
                <Pie
                  data={donutData}
                  cx={128}
                  cy={128}
                  innerRadius={80}
                  outerRadius={120}
                  startAngle={90}
                  endAngle={-270}
                  paddingAngle={2}
                  dataKey="value"
                >
                  {donutData.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={entry.color} />
                  ))}
                </Pie>
              </PieChart>
            </div>

            <div className="w-full space-y-3 mt-8">
              {donutData.map((item, index) => (
                <div key={index} className="flex justify-between items-center">
                  <div className="flex items-center gap-2">
                    <div
                      className="w-3 h-3 rounded-full"
                      style={{ backgroundColor: item.color }}
                    ></div>
                    <span className="text-gray-200">{item.name}</span>
                  </div>
                  <span className="font-semibold">
                    ₹ {item.value.toLocaleString()}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
        <div className="bg-white rounded-3xl p-8 h-full text-black">
          <div className="space-y-4">
            <h3 className="text-xl font-semibold mb-6">Loan Details</h3>

            <div className="flex items-center gap-3">
              <span className="text-2xl">›</span>
              <p>Loan Amount - ₹5,000 to ₹5,00,000</p>
            </div>

            <div className="flex items-center gap-3">
              <span className="text-2xl">›</span>
              <p>Tenure - Up to 365 Days</p>
            </div>

            <div className="flex items-center gap-3">
              <span className="text-2xl">›</span>
              <p>No pre-Closure Charges</p>
            </div>

            <div className="flex items-center gap-3">
              <span className="text-2xl">›</span>
              <p>No Prepayment Charges</p>
            </div>

            <div className="flex items-center gap-3">
              <span className="text-2xl">›</span>
              <p>APR (Annual Percentage Rate) - @15% to 35%</p>
            </div>

            <div className="flex items-center gap-3">
              <span className="text-2xl">›</span>
              <p>Net Monthly Salary more than ₹20,000</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Calculator;
