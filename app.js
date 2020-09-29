const script1 = require('./extern')

const scripts = [
  script1
];

Array.prototype.sample = function(){
  return this[Math.floor(Math.random()*this.length)];
}

setInterval(() => {
  const sc = scripts.sample();
  const e = sc();
  console.log(e);
}, 1000)