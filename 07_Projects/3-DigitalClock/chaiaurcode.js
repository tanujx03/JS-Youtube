const myTime = () => {
  const time = new Date();
   const hours = String(time.getHours()).padStart(2, '0');
  const minutes = String(time.getMinutes()).padStart(2, '0');
  const seconds = String(time.getSeconds()).padStart(2, '0');

  document.querySelector("#clock").textContent = `${hours}:${minutes}:${seconds}`;
};
setInterval(myTime, 1000);
myTime();
