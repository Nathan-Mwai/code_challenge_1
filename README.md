# Code Challenges

## First Challenge

- The codes are under a folder called _javascript.js_

- We can run the code using console but as I continue learning I'll be able to open it from the frontend area as well.

- For now open your console and make sure its running on bash.

- In your _vscode terminal_ write _node javascript.js/grades.js_.

This will allow you to see how the code runs in default.

You can go to the examples line i.e _no.29_ and add other people like this

```js
const Abi = 10;
console.log(grading(Abi));
```

or

```js
console.log(grading(50);
```

and see which one works for you.

## Challenge @ 2

As eariler mentioned all the files are in the _javascript.js folder_

For the second challenge you can change the reading of a speedometer and any speed above _70 km/h by 5_ get a warning. It the warning earns you as the driver _12 points_ your License gets _suspended_

Use this example to guide you

```js
const vehicleSpeed = 130;
console.log(speedometer(vehicleSpeed));
```

## challenge # 3

The code functions like your own _TAX CALCULATOR_ It reads your financial information and gauges your net salary in the coming month.

Hope your'e a mathematician because there are hoops to be focused so that you can see the small changes that occur if you ad a small cent to your salary.

Make sure to test it out. It works close if not as accurate as the KRA calculator.

The code starts from here

```js
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
```

 Thank you for reading till the end.