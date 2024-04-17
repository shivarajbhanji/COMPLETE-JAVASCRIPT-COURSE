const age = 19;
const isOldEnough = age >= 18;
if (isOldEnough) {
  console.log("Sarah can drive since she is atleast 18 years old");
} else {
  const yearsLeft = 18 - age;
  console.log(`Sarah needs to wait for another ${yearsLeft} years`);
}
