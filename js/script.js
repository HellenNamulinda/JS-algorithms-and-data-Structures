function convertToRoman () {
  num = document.getElementById ('number').value;
  if (num.length == 0 || isNaN (num)) {
    alert ('Please enter a valid number to convert');
    return false;
  } else if (num <= 0) {
    alert("Please enter a positive number");
    return false;
  } else if (num >1000) {
    alert("Please enter upto 1000");
    return false;
  } else {
    var digits = String(+num).split(""),
      key = [
        "",
        "C",
        "CC",
        "CCC",
        "CD",
        "D",
        "DC",
        "DCC",
        "DCCC",
        "CM",
        "",
        "X",
        "XX",
        "XXX",
        "XL",
        "L",
        "LX",
        "LXX",
        "LXXX",
        "XC",
        "",
        "I",
        "II",
        "III",
        "IV",
        "V",
        "VI",
        "VII",
        "VIII",
        "IX",
      ],
      roman_num = "",
      i = 3;
    while (i--) roman_num = (key[+digits.pop() + i * 10] || "") + roman_num;
    romamNumber = Array(+digits.join("") + 1).join("M") + roman_num;

     let div = document.createElement("div");
     div.className = "number";
     div.innerHTML = num + " in roman numerals is : " + "<b>" + romamNumber + "</b>";
     document.body.appendChild(div); 
  }
}
