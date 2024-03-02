'use strict';

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// BANKIST APP

// Data
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

// Elements
const labelWelcome = document.querySelector('.welcome');
const labelDate = document.querySelector('.date');
const labelBalance = document.querySelector('.balance__value');
const labelSumIn = document.querySelector('.summary__value--in');
const labelSumOut = document.querySelector('.summary__value--out');
const labelSumInterest = document.querySelector('.summary__value--interest');
const labelTimer = document.querySelector('.timer');

const containerApp = document.querySelector('.app');
const containerMovements = document.querySelector('.movements');

const btnLogin = document.querySelector('.login__btn');
const btnTransfer = document.querySelector('.form__btn--transfer');
const btnLoan = document.querySelector('.form__btn--loan');
const btnClose = document.querySelector('.form__btn--close');
const btnSort = document.querySelector('.btn--sort');

const inputLoginUsername = document.querySelector('.login__input--user');
const inputLoginPin = document.querySelector('.login__input--pin');
const inputTransferTo = document.querySelector('.form__input--to');
const inputTransferAmount = document.querySelector('.form__input--amount');
const inputLoanAmount = document.querySelector('.form__input--loan-amount');
const inputCloseUsername = document.querySelector('.form__input--user');
const inputClosePin = document.querySelector('.form__input--pin');

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// LECTURES

const currencies = new Map([
  ['USD', 'United States dollar'],
  ['EUR', 'Euro'],
  ['GBP', 'Pound sterling'],
]);

const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

/////////////////////////////////////////////////
const displayMovements = function (movements, sort = false) {
  // remove the data present in container
  containerMovements.innerHTML = '';
  // If sort is true then we will sort in ascending order or else we won't sort
  const movsSort = sort ? movements.slice().sort((a, b) => a - b) : movements;
  movsSort.forEach(function (mov, i) {
    const type = mov > 0 ? 'deposit' : 'withdrawal';
    const html = `
      <div class="movements__row">
        <div class="movements__type movements__type--${type}">${
      i + 1
    } ${type}</div>
        <div class="movements__value">${mov}€</div>
      </div>
    `;
    // it takes two args 1st position and 2nd html element to add
    // afterbegin makes sure that latest element is added to the beginning
    containerMovements.insertAdjacentHTML('afterbegin', html);
  });
};

const createUsernames = function (accounts) {
  accounts.forEach(function (account) {
    account.username = account.owner
      .toLowerCase()
      .split(' ')
      .map(name => name[0])
      .join('');
  });
};

createUsernames(accounts);
console.log(accounts);

const calcDisplayBalance = function (acc) {
  acc.balance = acc.movements.reduce((acc, curr, i, arr) => acc + curr, 0);
  labelBalance.textContent = `${acc.balance}€`;
};

const calcDisplaySummary = function (acc) {
  const incomes = acc.movements
    .filter(mov => mov > 0)
    .reduce((acc, inc) => acc + inc, 0);
  labelSumIn.textContent = `${incomes}€`;
  const out = acc.movements
    .filter(mov => mov < 0)
    .reduce((acc, inc) => acc + inc, 0);
  labelSumOut.textContent = `${Math.abs(out)}€`;
  // we are calculation 1.2% int and post that we are adding, in which we consider interest if it is >= 1 euro
  const interests = acc.movements
    .filter(mov => mov > 0)
    .map(deposit => deposit * acc.interestRate/100)
    .filter((int, i, arr) => int >= 1)
    .reduce((acc, int) => acc + int, 0);
  labelSumInterest.textContent = `${interests}€`;
};

const updateUI = function(acc) {
  displayMovements(acc.movements);
  calcDisplayBalance(acc);
  calcDisplaySummary(acc);
}

// login
// Event handlers
let currentAccount;
btnLogin.addEventListener('click', function (e) {
  // whenever a click submit btn the form gets submitted and the page will be reloaded, So to avoid this we use below fn
  e.preventDefault();
  currentAccount = accounts.find(
    acc => acc.username === inputLoginUsername.value
  );
  if (currentAccount?.pin === Number(inputLoginPin.value)) {
    // Display UI and message
    //Display movements
    //Display balance
    //Display summary
    labelWelcome.textContent = `Welcome back ${
      currentAccount.owner.split(' ')[0]
    }`;
    containerApp.style.opacity = 100;
    // when we login the values in the username and pin will be still visibile. TO make it dissappear
    inputLoginUsername.value = inputLoginPin.value = '';
    // Cursor Focus is still on input login pin
    inputLoginPin.blur();
    updateUI(currentAccount);
  }
});

// Transfer ammount 
btnTransfer.addEventListener('click', function(e){
  e.preventDefault();
  const amount = Number(inputTransferAmount.value);
  const receiverAcc = accounts.find((acc) => acc.username === inputTransferTo.value);
  inputTransferAmount.value = inputTransferTo.value = '';
  if(amount > 0 &&
    currentAccount.balance >= amount &&
    receiverAcc &&
    // if we get undefined here then undefined becomes true for below condition. So we check above itself 
    receiverAcc?.username!==currentAccount.username    
  ){
    currentAccount.movements.push(-amount);
    receiverAcc.movements.push(amount);  
    updateUI(currentAccount);
  }

});

// close an acc
btnClose.addEventListener('click', function(e){
  e.preventDefault();
  if(currentAccount.username === inputCloseUsername.value && currentAccount.pin === Number(inputClosePin.value)) {
    const index = accounts.findIndex(acc => acc.username === currentAccount.username);
    // from that index remove 1 value
    accounts.splice(index, 1);

    // Hide UI
    containerApp.style.opacity = 0;
  }
  inputCloseUsername.value = inputClosePin.value = '';
})

// Loan
// Loan is granted only if there is atleast one deposit of atleast 10% of the requested amount
btnLoan.addEventListener('click', function(e){
  e.preventDefault();
  const amount = Number(inputLoanAmount.value);
  if(amount>0 && currentAccount.movements.some((mov) => mov>=amount*0.10)) {
    currentAccount.movements.push(amount);
    updateUI(currentAccount);
  }
  inputLoanAmount.value = '';
})

// sort
let sortedState = false;
btnSort.addEventListener('click', function(e) {
  e.preventDefault();
  displayMovements(currentAccount.movements, !sortedState);
  sortedState = !sortedState;
});