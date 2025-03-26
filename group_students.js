/**
 * Problem Statement:
 * 
 * You are given a JavaScript object representing students and their scores:
 * { 'A': 90, 'B': 40, 'C': 100, ... }
 * 
 * Your task is to group these students into the fewest possible subarrays such that:
 * 1. Each student appears in exactly one subarray
 * 2. Within each subarray, the maximum difference between any two students' scores is at most 15 points
 * 
 * Return an array of subarrays, where each subarray contains the student identifiers (not their scores).
 * The order of the subarrays and the order of students within each subarray doesn't matter.
 * 
 * Example:
 * Input: { 'A': 90, 'B': 40, 'C': 100, 'D': 42, 'E': 95, 'F': 57 }
 * Output: [['B', 'D'], ['F'], ['A', 'C', 'E']]
 * 
 * Explanation:
 * - Group 1: B(40) and D(42) have a max difference of 2 points
 * - Group 2: F(57) forms its own group
 * - Group 3: A(90), C(100), and E(95) have a max difference of 10 points
 */

/**
 * Groups students into the fewest possible subarrays with max 15 point score difference
 * @param {Object} students - Object mapping student identifiers to their scores
 * @return {Array<Array<string>>} Array of student identifier subarrays
 */
function groupStudents(students) {
  const remainingStudents = Object.entries(students).sort((a, b) => a[1] - b[1]);
  let result = [];
  let i = 0;
  while(i < remainingStudents.length){
    let currentGroup =[remainingStudents[i][0]];
    let maxGroupScore = remainingStudents[i][1] + 15;
    i++
    while(remainingStudents[i] && remainingStudents[i][1] <= maxGroupScore){
      currentGroup.push(remainingStudents[i][0])
      i++
    }
    result.push(currentGroup);
  }
  return result;
}
  
  // Test cases
  function runTests() {
    const testCases = [
      {
        name: "Example test case",
        input: { 'A': 90, 'B': 40, 'C': 100, 'D': 42, 'E': 95, 'F': 57 },
        expected: [['B', 'D'], ['F'], ['A', 'C', 'E']]
      },
      {
        name: "All students in one group",
        input: { 'A': 85, 'B': 90, 'C': 92, 'D': 88, 'E': 95 },
        expected: [['A', 'B', 'C', 'D', 'E']]
      },
      {
        name: "Each student in own group",
        input: { 'A': 10, 'B': 30, 'C': 50, 'D': 70, 'E': 90 },
        expected: [['A'], ['B'], ['C'], ['D'], ['E']]
      },
      {
        name: "Empty input",
        input: {},
        expected: []
      },
      {
        name: "Single student",
        input: { 'A': 95 },
        expected: [['A']]
      },
      {
        name: "Boundary case - exactly 15 points apart",
        input: { 'A': 50, 'B': 65, 'C': 80, 'D': 95 },
        expected: [['A', 'B'], ['C', 'D']]
      },
      {
        name: "Complex grouping",
        input: { 'A': 30, 'B': 35, 'C': 40, 'D': 60, 'E': 70, 'F': 75, 'G': 90, 'H': 95, 'I': 100 },
        expected: [['A', 'B', 'C'], ['D', 'E', 'F'], ['G', 'H', 'I']]
      }
    ];
  
    let passedTests = 0;
    const totalTests = testCases.length;
  
    for (const testCase of testCases) {
      console.log(`Running test: ${testCase.name}`);
      const result = groupStudents(testCase.input);
      
      // Check if the result is correct
      // Since the order doesn't matter, we need to sort and compare
      const isCorrect = compareGroupings(result, testCase.expected);
      
      if (isCorrect) {
        console.log("✅ Test passed");
        passedTests++;
      } else {
        console.log("❌ Test failed");
        console.log("Expected:", testCase.expected);
        console.log("Got:", result);
      }
      console.log("-----------------------");
    }
  
    console.log(`Passed ${passedTests} out of ${totalTests} tests.`);
  }
  
  /**
   * Helper function to compare two groupings regardless of order
   * @param {Array<Array<string>>} actual - Actual grouping
   * @param {Array<Array<string>>} expected - Expected grouping
   * @return {boolean} True if the groupings are equivalent
   */
  function compareGroupings(actual, expected) {
    if (!actual || !expected) return false;
    if (actual.length !== expected.length) return false;
  
    // Sort each group and the overall grouping for comparison
    const sortedActual = actual.map(group => [...group].sort()).sort((a, b) => {
      if (a.length !== b.length) return a.length - b.length;
      return a.join('') < b.join('') ? -1 : 1;
    });
    
    const sortedExpected = expected.map(group => [...group].sort()).sort((a, b) => {
      if (a.length !== b.length) return a.length - b.length;
      return a.join('') < b.join('') ? -1 : 1;
    });
  
    // Compare each group
    for (let i = 0; i < sortedActual.length; i++) {
      if (sortedActual[i].length !== sortedExpected[i].length) return false;
      for (let j = 0; j < sortedActual[i].length; j++) {
        if (sortedActual[i][j] !== sortedExpected[i][j]) return false;
      }
    }
  
    return true;
  }
  
  groupStudents({ 'A': 30, 'B': 75, 'C': 40, 'D': 60, 'E': 70, 'F': 35, 'G': 10, 'H': 95, 'I': 100 });
  // Run the tests
  runTests();