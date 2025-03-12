function saturdayFun(activity = "roller-skate") {
  return `This Saturday, I want to ${activity}!`;
}

saturdayFun();
console.log(saturdayFun());

function mondayWork(task = "go to the office") {
  return `This Monday, I will ${task}.`;
}

mondayWork();

console.log(mondayWork());

function wrapAdjective(visualFlair = "*") {
  return function (adjective = "special") {
    return `You are ${visualFlair}${adjective}${visualFlair}!`;
  };
}

