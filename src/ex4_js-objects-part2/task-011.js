function showSymbolInString(string) {
    var obj = {};              
    var rslt = '';              
    for (var i = 0; i < string.length; i++) {     
        var newStrng = string.charAt(i);
        if (newStrng in obj) {                    
            continue;
        } else {                                  
            obj[newStrng] = true;
            rslt += newStrng;                               
        }
    }                                               
    return rslt.length
}
module.exports=showSymbolInString