function maxarr (arr) {
       var max = arr[0]
        for (var i = 0; i < arr.length; i++) {
                if (arr[i] > max) {max = arr[i]}  
                else {max = arr[0]}
}return max}
module.exports=maxarr