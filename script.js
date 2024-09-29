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
  }, 1000)
  .then((evenArr) => {
    const multiplied = evenArr.map((ele) => ele * 2);
    // Update output with multiplied values after 2 seconds within this then block
    setTimeout(() => {
      output.innerText = `${multiplied.join(',')}`;
    }, 2000);
  });