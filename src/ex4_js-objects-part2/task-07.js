function maxWordLength(strng, maxlength) {
  if (strng.length > maxlength) {
    return strng.slice(0, maxlength - 1) + "…";
  }
  return strng
}
module.exports=maxWordLength