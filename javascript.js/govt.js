// Test 3
function calcNetSalary(basicSalary, benefits) {
  //gets the basic input to calculate gross salary
  const taxRatingsPerMonth = function taxcalc(payee) {
    // Calculates payee according to the tax ratings in monthly bases.
    if (payee <= 24000) {
      //0.1 = 10%
      return payee * 0.1;
    } else if (payee >= 24001 && payee <= 32333) {
      return 24000 * 0.1 + 0.25 * (32333 - payee);
    } else if (payee >= 32334 && payee <= 500000) {
      return 24000 * 0.1 + 8332 * 0.25 + 0.3 * (payee - 32334);
      //numbers 8332 , 467666 and 299999 are the difference of latter values. i.e 32333 - 24001
    } else if (payee >= 500000 && payee <= 800000) {
      return (
        24000 * 0.1 + 8332 * 0.25 + 467666 * 0.3 + 0.325 * (payee - 500000)
      );
    } else if (payee > 800000) {
      return (
        24000 * 0.1 +
        8332 * 0.25 +
        467666 * 0.3 +
        299999 * 0.325 +
        0.35 * (payee - 800000)
      );
    }
  };
  const pRef = 2400;
  //Personal relief
  const nHIF = 1700;
  const nSSF2 = ((36000 - 7000) * 6) / 100;
  const iRef = (nHIF * 15) / 100;
  // Insurance relief
  const nSSF1 = `7000` * 0.06;
  // should be less than and equal to 7000
  const grossSalary = basicSalary + benefits;
  //adds basic salary with benefits
  const housingLevy = (grossSalary * 1.5) / 100;
  // calculates amount of housing levy to be deducted from salary
  const aHR = (housingLevy * 15) / 100;
  //Affordable housing relief
  //calculates gross salary
  const tax = taxRatingsPerMonth(grossSalary);
  // Calculate tax (payee)
  const netSalary =
    grossSalary - tax - nHIF - nSSF2 - nSSF1 + iRef + pRef - housingLevy + aHR;
  // Calculate net salary
  return { grossSalary, tax, nHIF, nSSF1, netSalary };
}

// EXAMPLE// BASIC CALCULATIONS
const basicSalary = 80000;
// Adds actual basic salary
const benefits = 15000;
// Adds actual benefits
const salaryDetails = calcNetSalary(basicSalary, benefits);

console.log("Gross Salary:", salaryDetails.grossSalary);
// shows salary when logged
console.log("Tax (Payee):", salaryDetails.tax);
// shows payee to be deducted
console.log("NHIF Deductions:", salaryDetails.nHIF);
// shows NHIF deductions
console.log("NSSF Deductions:", salaryDetails.nSSF1);
//shows NSSF deductions
console.log("Net Salary:", salaryDetails.netSalary);
//shows net salary to be received at end of working month
