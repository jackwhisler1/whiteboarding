function maximumWealth(accounts) {
  let maxWealth = 0;  // Initialize maxWealth to 0
  // ToDo: Write Your Code Here.
  // loop through all accounts
  // within that loop, sum total
  // if greater than maxWealth, set maxWealth
  accounts.forEach(account => {
    let currentTotalWealth = 0;
   account.forEach(accountValue => {currentTotalWealth += accountValue})
   if(currentTotalWealth > maxWealth){maxWealth = currentTotalWealths}
  })
  return maxWealth;
}