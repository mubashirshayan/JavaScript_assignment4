//Question 1
/*var name=prompt('enter your name')
alert('Hi,'+name)*/
//Question 2
var user = +prompt('enter number')
if (user) {
  document.write(user + '×' + 1 + '=' + user * 1+'<br>')
  document.write(user + '×' + 2 + '=' + user * 2 +'<br>')
  document.write(user + '×' + 3 + '=' + user * 3+'<br>')
  document.write(user + '×' + 4 + '=' + user * 4 + '<br>')
  document.write(user + '×' + 5 + '=' + user * 5 + '<br>')
  document.write(user + '×' + 6+ '=' + user * 6 + '<br>')
  document.write(user + '×' + 7 + '=' + user * 7 + '<br>')
  document.write(user + '×' + 8+ '=' + user * 8 + '<br>')
  document.write(user + '×' + 9+ '=' + user * 9 + '<br>')
  document.write(user + '×' + 10+ '=' + user * 10 + '<br>')
} else {
  document.write(5 + '×' + 1 + '=' + 5 * 1+'<br>')
  document.write(5 + '×' + 2 + '=' + 5 * 2 +'<br>')
  document.write(5 + '×' + 3 + '=' + 5 * 3+'<br>')
  document.write(5 + '×' + 4 + '=' + user * 5 + '<br>')
  document.write(5 + '×' + 5 + '=' + 5 * 5 + '<br>')
  document.write(5 + '×' + 6+ '=' + 5 * 6 + '<br>')
  document.write(5 + '×' + 7 + '=' +5 * 7 + '<br>')
  document.write(5 + '×' + 8+ '=' + 5 * 8 + '<br>')
  document.write(5 + '×' + 9+ '=' +5 * 9 + '<br>')
  document.write(5+ '×' + 10+ '=' +5 * 10 + '<br>')
}


/*document.write(5 + '×' + 1 + '=' + 5 * 1+'<br>')
  document.write(5 + '×' + 2 + '=' + 5 * 2 +'<br>')
  document.write(5 + '×' + 3 + '=' + 5 * 3+'<br>')
  document.write(5 + '×' + 4 + '=' + user * 5 + '<br>')
  document.write(5 + '×' + 5 + '=' + 5 * 5 + '<br>')
  document.write(5 + '×' + 6+ '=' + 5 * 6 + '<br>')
  document.write(5 + '×' + 7 + '=' +5 * 7 + '<br>')
  document.write(5 + '×' + 8+ '=' + 5 * 8 + '<br>')
  document.write(5 + '×' + 9+ '=' +5 * 9 + '<br>')
  document.write(5+ '×' + 10+ '=' +5 * 10 + '<br>')


  document.write(user + '×' + 1 + '=' + user * 1+'<br>')
  document.write(user + '×' + 2 + '=' + user * 2 +'<br>')
  document.write(user + '×' + 3 + '=' + user * 3+'<br>')
  document.write(user + '×' + 4 + '=' + user * 4 + '<br>')
  document.write(user + '×' + 5 + '=' + user * 5 + '<br>')
  document.write(user + '×' + 6+ '=' + user * 6 + '<br>')
  document.write(user + '×' + 7 + '=' + user * 7 + '<br>')
  document.write(user + '×' + 8+ '=' + user * 8 + '<br>')
  document.write(user + '×' + 9+ '=' + user * 9 + '<br>')
  document.write(user + '×' + 10+ '=' + user * 10 + '<br>')
*/

//Question 3
//var name=prompt('enter your city')
//alert('Welcome to city of lights')

//Question 4
//var gender=prompt('enter your gender')
//var male='male'
//var female='female'
//if (gender===male) {
//alert('Good morning Sir')
//} else if(gender===female) {
//alert('Good Morning Ma,am')
//}else{'false'}


//Question 5
//var color=prompt('Please enter traffic signal color')
/*var colr='red'
var colr2='yellow'
var colr3='green'*/

/*if (color===colr) {
  alert('vechiles must stop')
}  else if(color===colr2) {
  alert('vechiles should get ready to move')
} else if(color===colr3){
  alert('vechiles can move now')
} else{alert('not match')}*/

//Question 7
/*var fuel=prompt('enter remaining fuel in car')
if (fuel<=0.50+'liter') {
  alert('Please refill the fuel in your car ')
} else {
  alert('fuel not required')
}*/

//Question no 9
/*var math=+prompt('enter math marks')
var eng=+prompt('enter english marks')
var urdu=+prompt('enter urdu marks')
var total=math+eng+urdu
var per=((total*100)/300)
alert('Marks obtained='+total)
alert('persentage='+per)

if (per>=80) {
  alert('Grade=A one'+
  'Remark=Excellent')
} else if(per>=70&&per<80){
  alert('Grade=A'+
  'Remark=Good')
}else if(per>=60&&per<70){
  alert('Grade=B')
}else if (per>=50&&per<60) {
    alert('Grade=C')}
  else{'fail'}*/


//Question 10
/* var item1=prompt('enter item name1')
 var price1=prompt('enter price item1')
 var quantity1=prompt('enter quantity of item1')
 var item2=prompt('enter item name2')
 
 var price2=prompt('enter price item2')
 var quantity2=prompt('enter quantity of item2')
 alert(item1)
 alert('price of'+item1+' is '+price1)
 alert('Quantity of'+item1+' is '+quantity1)
 alert(item2)
 alert('price of'+item2+' is '+price2)
 alert('Quantity of'+item2+' is '+quantity2)
 var allTotal=(price1*quantity1)+(price2*quantity2)
 alert('Total cost is'+allTotal)*/

//Question 13
/* var team1=prompt('enter name of team1')
 var team2=prompt('enter name of team2')
 var team1score=prompt('enter score of team1')
 var team2score=prompt('enter score of team2')
 if (team1score>team2score) {
   alert('Team'+team1+'won a match')
 } else if (team2score>team1score) {
   alert('Team'+team2+'won a match')
 } else{'Match is Tie'}*/

//Question 15
 /*var ner=prompt('enter number ')
 if (ner%2===0) {
   alert('even')
 } else {
   alert('odd')
 }*/

//Question 16
/* var temp=prompt('enter your current temperature')
if (temp>=40) {
  alert('it is too hot outside')
} else if(temp>30) {
  alert('The Weather today is normal ')
}else if(temp>20){
  alert('0Todays Weather is cool')
}else if(temp>10){
  alert('OMG Todays Weather is cool')
}*/


//Question 17
/*var value1=prompt('enter value 1')
var value2=prompt('enter value 2')
var oprt=prompt('enter operation')
var asgn='+'

if (value1==asgn&&value2==asgn) {
  alert(value1+value2)
} else if (value1&&value2==asgn) {
  alert(value1-value2)}*/


//Question 18
/*var day=prompt('enter a day')
var mon='monday'
var tue='tuesday'
var wed='wednesday'
var ths='thursday'
var fri='friday'
var sat='saturday'
var sun='sunday'
if (day==mon) {
  alert('its a week Day')
} else if (day==tue) {
  alert('its a week Day')
} else if (day==wed) {
  alert('its a week Day')
} else if (day==ths) {
  alert('its a week Day')
} else if (day==fri) {
  alert('its a week Day')
}
else if(day===sat){
  alert('its weekend')
} else if(day===sun){
  alert('its a holiday')
}*/

//Question 19
/*var value=prompt('please enter score')
if (value>50) {
  alert('you are passed')
} else {
  alert('Try again')
}*/

//Question 20
/*var val1=prompt('enter number 1')
var val2=prompt('enter number 2')
if (val1>val2) {
  alert('The greater number of'+val1+'and'+val2+'is'+val1)
} else if (val1<val2) {
  alert('The greater number of'+val1+'and'+val2+'is'+val2)
  
}else(val1=val2)
  alert(val1+'and'+val2+'is equal')*/

//Question 23
/*var inpt1=prompt('enter a number')
var inpt2=prompt('enter a noun')
alert(inpt1+" "+inpt2)*/


/*var value1=+prompt('enter number1')
var value2=+prompt('enter number2')
var opr=prompt('enter operation')
if (opr=='+') {
  alert(value1 + value2)
}else if(opr=='*'){
alert(value1-value2)}
else {
  alert('false')
}*/