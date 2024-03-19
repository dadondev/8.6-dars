// const myFunction = (gifts) => {
//   let index = 0;
//   let selectedEl = null;
//   let found = false;
//   gifts.forEach((e, i) => {
//     if (!selectedEl && gifts.filter((el) => el === e).length > 1) {
//       selectedEl = e;
//       index = i;
//       found = true;
//     } else if (
//       found &&
//       index + 1 == i &&
//       gifts.filter((el) => el === e).length > 1
//     ) {
//       selectedEl = e;
//       index = i;
//     }
//   });
//   return found ? selectedEl : -1;
// };
// console.log(myFunction([1, 3, 4, 5, 0, 7, 4, 0, 7]));

// function gift(gifts, materials) {
//   const materialSoni = new Map();
//   for (const char of materials) {
//     materialSoni.set(char, (materialSoni.get(char) || 0) + 1);
//   }
//   const sovgalar = [];
//   for (const gift of gifts) {
//     const sovgaSoni = new Map();
//     for (const char of gift) {
//       sovgaSoni.set(char, (sovgaSoni.get(char) || 0) + 1);
//     }
//     if (
//       Array.from(sovgaSoni.entries()).every(
//         ([char, count]) =>
//           count <= materialSoni.get(char) || materialSoni.get(char) === 0
//       )
//     ) {
//       sovgalar.push(gift);
//     }
//   }

//   return sovgalar;
// }
// const gifts = ["juego", "puzzle"];
// const materials = "jlepuz";

// console.log(gift(gifts, materials));

// function multiply(original, modified) {
//   let letters = [];
//   modified = modified.split("");
//   original = original.split("");
//   if (modified.length >= original.length) {
//     modified.forEach((e) => {
//       if (!original.includes(e)) letters.push(e);
//     });
//   } else {
//     original.forEach((e) => {
//       if (!modified.includes(e)) letters.push(e);
//     });
//   }
//   return letters.join("");
// }
// console.log(multiply("abcd", "abcde"));

// function edit(message) {
//   const stack = [];
//   let result = "";
//   for (const char of message) {
//     if (char === "(") {
//       stack.push(result);
//       result = "";
//     } else if (char === ")") {
//       result = stack.pop() + result.split("").reverse().join("");
//     } else {
//       result += char;
//     }
//   }
// }
// edit("s(alo)m");

function cyber(road, time) {
  const roadLength = road.length;
  const barriersOpen = new Array(roadLength).fill(false);

  const simulation = [];
  let sledPosition = road.indexOf("S");

  for (let t = 0; t < time; t++) {
    const currentRoad = road.split("");
    if (
      sledPosition < roadLength - 1 &&
      currentRoad[sledPosition + 1] !== "|"
    ) {
      currentRoad[sledPosition] = ".";
      sledPosition++;
      currentRoad[sledPosition] = "S";
    }
    if (t === 4) {
      for (let i = 0; i < roadLength; i++) {
        if (currentRoad[i] === "|") {
          barriersOpen[i] = true;
          currentRoad[i] = "*";
        }
      }
    }
    for (let i = 0; i < roadLength; i++) {
      if (currentRoad[i] === "|" && barriersOpen[i]) {
        currentRoad[i] = "*";
      }
    }
    simulation.push(currentRoad.join(""));
  }

  return simulation;
}
