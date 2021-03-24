

function deviceNamesSystem(devicenames) {
  // Write your code here
  let result = [];
  devicenames.forEach((name) => {
    if (result.includes(name)) {
      let unique = false;
      let newInt = 1;
      while (!unique) {
        unique = true;
        let newName = name + `${newInt}`;
        if (result.includes(newName)) {
          newInt++;
          unique = false;
        } else {
          result.push(newName);
        }
      }
    } else {
      result.push(name);
    }
  });
  return result;
}
