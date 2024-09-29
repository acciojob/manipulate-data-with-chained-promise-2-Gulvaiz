
const output = document.getElementById("output");
const arr = [1, 2, 3, 4];

function delay(data, time) {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(data);
    }, time);
  });
}

delay(arr, 3000)
  .then((data) => {
    const evenArr = data.filter((ele) => ele % 2 === 0);
    output.innerHTML = `${evenArr.join(',')}`; 
    return evenArr; 
  })
  .then((evenArr) => {
    const multiplied = evenArr.map((ele) => ele * 2);
    output.innerText = `${multiplied.join(',')}`; 
  });