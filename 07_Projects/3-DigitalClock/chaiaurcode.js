const clock = document.querySelector("#clock");

setInterval(() => {
  let date = new Date();
  clock.innerHTML = date.toLocaleTimeString("en-US", {
    hour12: true,
  });
  console.log(date);
}, 1000);
