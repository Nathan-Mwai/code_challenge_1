// second test
function speedometer(speed) {
  const increment = 5;
  // Increment indicates risk of license invocation

  switch (true) {
    case speed >= 70 && speed < 130:
      const excessSpeed = speed - 70;
      const demeritPoints = Math.floor(excessSpeed / increment);
      return `Please slow down to the speed limit! You have earned ${demeritPoints} demerit points.`;
    case speed >= 130:
      const excessSpeedLicenseSuspended = speed - 70;
      const demeritPointsLicenseSuspended = Math.floor(
        excessSpeedLicenseSuspended / increment
      );
      return `LICENSE SUSPENDED! You have earned ${demeritPointsLicenseSuspended} demerit points.`;
    default:
      return "Ok! You are good to go!";
  }
}

// Example of The Matatu driver you know well.
const vehicleSpeed = 130;
console.log(speedometer(vehicleSpeed));
