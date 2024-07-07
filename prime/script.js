function isPrime(num) {
    if (num <= 1) {
      return false;
    }
    if (num === 2) {
      return true;
    }
    if (num % 2 === 0) {
      return false;
    }
    for (let i = 3; i <= Math.sqrt(num); i += 2) {
      if (num % i === 0) {
        return false;
      }
    }
    return true;
  }
  
  // Function to find prime numbers up to a given number
  function findPrimes() {
    const inputNumber = document.getElementById('inputNumber').value;
    const primeNumbersDiv = document.getElementById('primeNumbers');
    primeNumbersDiv.textContent = ''; // Clear previous results
    
    if (!inputNumber || inputNumber <= 1) {
      primeNumbersDiv.textContent = 'Please enter a number greater than 1.';
      return;
    }
    
    let primes = [];
    for (let i = 2; i <= inputNumber; i++) {
      if (isPrime(i)) {
        primes.push(i);
      }
    }
    
    if (primes.length === 0) {
      primeNumbersDiv.textContent = 'No prime numbers found up to ' + inputNumber;
    } else {
      primeNumbersDiv.textContent = 'Prime numbers up to ' + inputNumber + ': ' + primes.join(', ');
    }
  }