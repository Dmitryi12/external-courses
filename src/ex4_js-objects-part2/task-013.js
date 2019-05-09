function randomInRange () {
    var rand = 0 + Math.random() * (100 + 1 - 0);
    var rslt = Math.floor(rand);
    return rslt;
  }
module.exports=randomInRange