const account1 = {
    owner: 'Jonas Schmedtmann',
    movements: [200, 450, -400, 3000, -650, -130, 70, 1300],
    interestRate: 1.2, // %
    pin: 1111,
  };
  
  const account2 = {
    owner: 'Jessica Davis',
    movements: [5000, 3400, -150, -790, -3210, -1000, 8500, -30],
    interestRate: 1.5,
    pin: 2222,
  };
  
  const account3 = {
    owner: 'Steven Thomas Williams',
    movements: [200, -200, 340, -300, -20, 50, 400, -460],
    interestRate: 0.7,
    pin: 3333,
  };
  
  const account4 = {
    owner: 'Sarah Smith',
    movements: [430, 1000, 700, 50, 90],
    interestRate: 1,
    pin: 4444,
  };
  
const accounts = [account1, account2, account3, account4];

// sum of all deposits
const bankDepositSum = accounts.
                       flatMap(acc => acc.movements).
                       filter(mov => mov > 0).
                       reduce((acc, deposit) => acc + deposit, 0);
console.log(bankDepositSum);

//reduce use case
//count of deposits >= 1000
const bankDeposit1000 = accounts.
                        flatMap(acc => acc.movements).
                        // post incr returns the previous value then it increments 
                        // during first itr 0 is returned then count stores 1
                        // same thing happens in all iterations and in the end we receive 0
                        //reduce((count, deposit) => deposit >= 1000 ? count ++ : count, 0)
                        reduce((count, deposit) => deposit >= 1000 ? count + 1 : count, 0);
console.log(bankDeposit1000);