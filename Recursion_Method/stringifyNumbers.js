
function stringifyNumbers (obj) {
  let newObj = {}
  for (var key in obj) {
    if (typeof obj[key] === 'number') {
      newObj[key] = obj[key].toString()
    } else if (typeof obj[key] === 'object' && !Array.isArray(obj[key])) {
      newObj[key] = stringifyNumbers(obj[key])
    } else {
      newObj[key] = obj[key]
    }
  }
  return newObj
}

function stringifyNumbers2 (obj) {
  for (var key in obj) {
    if (typeof obj[key] === 'number') {
      obj[key] = obj[key].toString()
    } else if (typeof obj[key] === 'object' && !Array.isArray(obj[key])) {
      obj[key] = stringifyNumbers(obj[key])
    } else {
      obj[key] = obj[key]
    }
  }
  return obj
}

function stringifyNumbers3(obj) {
  if (!Object.keys(obj).length && !obj) return obj;

  const key = Object.keys(obj)[0];
  const { [key]: val, ...left } = obj;
 
  if (typeof val === 'number') {
    obj[key] = String(val);
  } else if (typeof val === 'object') {
    obj[key] = stringifyNumbers(val);
  }
 
  return {
    ...obj,
    ...stringifyNumbers(left),
  };
}

let obj = {
  num: 1,
  test: [],
  data: {
      val: 4,
      info: {
          isRight: true,
          random: 66
      }
  }
}

console.log(stringifyNumbers(obj))
/*
{
  num: "1",
  test: [],
  data: {
      val: "4",
      info: {
          isRight: true,
          random: "66"
      }
  }
}

*/