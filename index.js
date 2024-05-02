// Code your solution here
function findMatching(names, str) {
  let result = names.filter((name) => name === str);
  //   for (let i = 0; i < result.length; i++) {
  //     return result[i] === str;
  //   }

  return result;
}
function fuzzyMatch(names, str) {
  let result = names.filter((name) => name[0] === str[0]);
  return result;
}
function matchName(driver, str) {
  let result = driver.filter((driver) => driver.name === str);
  return result;
}
