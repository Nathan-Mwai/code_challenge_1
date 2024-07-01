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
  const nhifCalculations = function nifCalc(health){
    //Calculates nhif value
    if(health <= 5999){
      return 150
    }else if(health >= 6000 && health <= 7999){
      return 300
    }else if(health >= 8000 && health <= 11999){
      return 400
    }else if(health >= 12000 && health <=14999){
      return 500
    }else if(health >=15000 && health <= 19999){
      return 600
    }else if(health >+20000 && health <= 24999){
      return 750
    }else if(health >= 25000 && health <= 29999){
      return 850
    }else if(health >= 30000 && health <= 34999){
      return 900
    }else if(health >= 35000 && health <= 39999){
      return 950
    }else if(health >= 40000 && health <= 44999){
      return 1000
    }else if(health >= 45000 && health <= 49999){
      return 1100
    }else if(health >= 50000 && health <= 59999){
      return 1200
    }else if(health >= 60000 && health <= 69999){
      return 1300
    }else if(health >= 70000 && health <= 79999){
      return 1400
    }else if(health >= 80000 && health <= 89999){
      return 1500
    }else if(health >= 90000 && health <= 99999){
      return 1600
    }else if(health >= 100000){
      return 1700
    }
  }
  const pRef = 2400;
  //Personal relief
 
  const nSSF2 = ((36000 - 7000) * 6) / 100;
  
 
  const nSSF1 = `7000` * 0.06;
  // should be less than and equal to 7000
  const grossSalary = basicSalary + benefits;
  //adds basic salary with benefits
  const nHIF = nhifCalculations(grossSalary);
  const iRef = (nHIF * 15) / 100;
   // Insurance relief
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
