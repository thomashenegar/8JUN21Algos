//converting a regular decimal number into hex form.
function decToHex(dec){
    var decVal = { '0':'0','1':'1','2':'2','3':'3','4':'4','5':'5',
        '6':'6','7':'7','8':'8','9':'9','10':'a','11':'b','12':'c',
        '13':'d','14':'e','15':'f' };
    var hex = "";
    while (dec > 0) {
        var hexChar = decVal[dec % 16];
        hex = hexChar + hex;
        dec = Math.floor(dec/16);
    }
    return "0x" + hex;
}
console.log(decToHex(10));
// Converting binary (as in 1-0-0 not the number 100) into it's numerical equivalent.
function binaryToDecimal(bin){
    var power = 0;
    var result = 0;
    for(var i=bin.length-1; i>=0; i--){
        if(bin[i]==1){


        result += Math.pow(2, power);
        power++;
        }else{
            power++;
        } 
    }
    return result;
}
console.log(binaryToDecimal("100"));
//Simply reversing the above function.
function decToBinary(dec){
    var result="";
    while(dec>0){
        const num = dec % 2;
        dec = Math.floor(dec/2);
        result = num + result;
    }
    return result;
}
console.log(decToBinary(4));