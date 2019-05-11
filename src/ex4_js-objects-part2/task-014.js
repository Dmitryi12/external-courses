function randomMinMax(min, max) {
    var rand = min + Math.random() * (max + 1 - min);
    var rslt = Math.floor(rand);
    return rslt;
  }
module.exports=randomMinMax