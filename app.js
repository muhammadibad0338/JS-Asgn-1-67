/*
//cahpter 1
//question 1
alert("hello world");
//question 2
alert("Error! Please enter a valid password");
//question 3
alert("welcome to js Land....\nHappy Coding!");
//question 4
alert("Welcome to js Land....");
alert("Happy coding!");
//question 5
alert("hello, i can run JS through web browser console!");
//chaprer 2
//question 1
var username = 
//question 2
var myname ="Muhammad Ibad Ur Rehman";
//question 3
var message ="hello world";
alert(message)
//question 4
var name ="sMuhammad Ibad Ur Rehman";
var age = "20 year old";
var course = "certified web app dev";
alert(name);
alert(age);
alert(course);
//question 5
var name = "pizza";
alert(name+"\n"+name.slice(0,4)+"\n"+name.slice(0,3)+"\n"+name.slice(0,2)+"\n"+name.slice(0,1));
//question 6
var email = "mibad0338@gmail.com"
alert("my email address is "+email);
//Question 7
var book = "A smarter way to learn JavaScript";
alert("i am trying to learn from the book "+book);
//question 8
document.write("yeah i can write HTML content through javascript");
//question 9
alert("▬▬▬▬▬▬▬▬▬ஜ۩۞۩ஜ▬▬▬▬▬▬▬▬▬");
// chapter 3
//question 1
var age = 20;
alert("i am "+age +" years old")
//question 2
var visit = 1;
alert("you have visit this site "+visit+" time");
//question 3
n=1999;
document.write("My birthday year is "+n);
document.write("<br>");
document.write("Data type of my declared variable is number");
//question 4 
var visitorname ="<strong>Muhammad Ibad</strong>";
var producttitle ="<strong>T-shirts</strong>";
var quatity = 5;
document.write( visitorname+" ordered "+quatity+" "+producttitle+" on XYZ Clothing store");
//chapter 4
var one,_1,$hello;
var one,ONE,_1,$1,oneTwo,x,X;
var 1,var,1one,1_,#_;
//chapter 5
//question 1
var a = prompt("enter first number");
var b = prompt("enter second number");
var sum = a+b;
document.write("Sum of "+a+" and "+b+" is "+sum);
//question 2
var a = prompt("enter  first number");
var b = prompt("enter second number");
var sub = a-b;
var multi = a*b;
var divd = a/b;
var Mod = a%b;
document.write("Subtarction of "+a+" and "+b+" is "+sub+"<br>");
document.write("Multiplication of "+a+" and "+b+" is "+multi+"<br>");
document.write("Division of "+a+" and "+b+" is "+divd+"<br>");
document.write("Modulus of "+a+" and "+b+" is "+Mod+"<br>");
//question 3
var a ;
document.write("Value after variable declaration is "+a+"<br>");
a=5;
document.write("initial value : "+a+"<br>");
a++;
document.write("value after increment is : "+a+"<br>");
a=a+7
document.write("value after addition is : "+a+"<br>");
a--;
document.write("value after decrement is : "+a+"<br>");
a=a%3;
document.write("The remainder is : "+a+"<br>");
//question 4
var price = 5;
tp=price*600;
document.write("Total cost to buy "+price+" tickets to a movie is "+tp+"PKR")
//question 5
document.write("Table of 4 <br>")
for(var i=1;i<=10;i++){
	document.write(4 +" X "+i+" = "+4*i);
	document.write("<br>");
}
//question 6
var c=25;
var f=70;
var ctf = (c*9/5)+32;
var ftc = (f-32)*5/9;
document.write(c+"<sup>o</sup>C is "+ctf+"<sup>o</sup>F<br>");
document.write(f+"<sup>o</sup>F is "+ftc+"<sup>o</sup>C")
//question 7
var firstItem = 650;
var fq = 3;
var a = firstItem*fq; 
var secondItem = 100;
var sq = 7;
var b =secondItem*sq;
var sc = 100;
var total = a+b+sc;
document.write("<h1>Shopping Cart</h1><br><br>")
document.write("Price of item 1 is "+firstItem+"<br>");
document.write("Quantity of item 1 is "+fq+"<br>");
document.write("Price of item 2 is "+secondItem+"<br>");
document.write("Quantity of item 2 is "+sq+"<br>");
document.write("Shipping Charges "+sc+"<br>")
document.write("Total cost of your oeder is "+ total);
//Question 8
document.write("<h1>Mark Sheet</h1><br><br>");
var tm = 980;
var mo = 804;
var per = (mo*100)/tm;
document.write("Total Marks : "  +tm+"<br>");
document.write("MArks obtained : "  +mo+"<br>");
document.write("Percentage : "  +per+"%");
//question 9
document.write("<h1>Currency in PKR</h1><br><br>");
var d=104.80;
var nod = 10;
var td = d*nod;
var r=28;
var nor = 25;
var tr = r*nor;
tc = td + tr;
document.write("Total Currency in PKR: "+tc)
var a = 10;
((a+5)*10)/2;
//question 11
document.write("<h1>Age calculator</h1><br><br>");
var cy = 2016;
var By =  1992;
var age = cy-By;
document.write("Current year : "+cy+"<br>");
document.write("Birth year : "+By+"<br>");
document.write("Yor age is : "+age);
//question 12
document.write("<h1>The Geometrizer</h1><br><br>");
var r = 20;
var c = 6.284*r;
var a = 3.142*(r*r);
document.write("Radius of circle: "+r+"<br>")
document.write("The cicumference is : "+c+"<br>");
document.write("The area is : "+a)
//question 13
document.write("<h1>The Lifetime Supply calculator</h1><br><br>");
var fav = "chocolate chip";
var currentAge = 15;
var maxAge = 65;
var amount = 3;
var total = (maxAge-currentAge)*amount;
document.write("Favourite Snacks : "+fav+"<br>");
document.write("Current age : "+currentAge+"<br>");
document.write("Estimated Maximum Age : "+maxAge+"<br>");
document.write("amount of snacks per day : "+amount+"<br>");
document.write("you will need "+total+" "+fav+" to last you until the ripe old age of "+maxAge);
//chapter 6-9
//question 1
var a=10;
document.write("Result:"+"<br>");
document.write("The value of a is : "+a+"<br>");
document.write("------------------------------"+"<br>");
++a;
document.write("The value of ++a is : "+a+"<br>");
document.write("Now The value of a is : "+a+"<br><br>");
document.write("The value of a++ is : "+(a++)+"<br>");
document.write("Now The value of a is : "+a+"<br><br>");
--a;
document.write("The value of --a is : "+a+"<br>");
document.write("Now The value of a is : "+a+"<br><br>");
document.write("The value of a-- is : "+(a--)+"<br>");
document.write("Now The value of a is : "+a+"<br><br>");
//question 2
var a = 2;
var b= 1;
var result = --a - --b + ++b + b--;
--a;
var num1 = (--a - --b );
var num2 = (--a - --b + ++b);
var rsult = (--a - --b + ++b +b--);
document.write("a is "+num1);
document.write("<br>b is "+num2);
document.write("<br>result is "+rsult);
//question 3
 var name = prompt("enter your name");
 alert("welcome "+name+" to your website");
//queston 4
var n = prompt("Please enter a number");
if (n==0){
	tabel(5);
}
else{
	tabel(n)
}
function tabel(a){
	for (var i = 1; i <= 10; i++) {
		document.write(a+" X "+i+" = "+(a*i)+"<br>")
	}
}
//question 5
var a =prompt("enter 1st subject name"); 
var b =prompt("enter 2nd subject name");
var c =prompt("enter 3rd subject name");
var d = +prompt("enter "+a+ " subject marks");
var e = +prompt("enter "+b+ " subject marks");
var f = +prompt("enter "+c+ " subject marks");
var t = d+e+f;
document.write("Subject Totaal Marks Obtained Marks Percentage"+"<br>");
document.write(a+"  100 "+"\t"+d+"\t"+d+"%"+"<br>");
document.write(b+"  100 "+"\t"+e+"\t"+e+"%"+"<br>");
document.write(c+"  100 "+"\t"+f+"\t"+f+"%"+"<br>");
var per = (t/300)*100;
document.write("<br>\t\t"+300+"\t\t"+t+"\t\t"+per+"%");
//chapter 9-11
//question 1
var a = prompt("Please enter city name ");
if (a == "karachi"){
	document.write("welcome to city of light");
}
//question 2
 var a = prompt("Please enter your gender ");
if (a == "male"){
	document.write("Good Morning Sir.");
}
else{
	document.write("Good Morning Ma'am.");
}
//question 3
var a = prompt("enter signal light");
if (a == "red"){
	document.write("Must Stop");
}
else if (a == "yellow"){
	document.write("Ready to move");
}
else{
	document.write("Move Now");
}
//question 4
var a =prompt("enter your fuel");
if (a < 0.25){
	document.write("Please refill the fuel in your car");
}
 //question 5
 a. var a = 4;
if (++a === 5){
alert("given condition for variable a is true");
}
b. var b = 82;
if (b++ === 83){
alert("given condition for variable b is true");
}
c. var c = 12;
if (c++ === 13){
alert("condition 1 is true");
}
if (c === 13){
alert("condition 2 is true");
}
if (++c < 14){
alert("condition 3 is true");
}
if(c === 14){
alert("condition 4 is true");
}
d. var materialCost = 20000;
var laborCost = 2000;
var totalCost = materialCost + laborCost;
if (totalCost === laborCost + materialCost){
alert("The cost equals");
}
e. if (true){
alert("True");
}
if (false){
alert("False");
}
f. if("car" < "cat"){
alert("car is smaller than cat");
}
//                 This code will not compiel becoz of syntax error in js we can't declare variable like this
//question 6
var a = +prompt("enter your subject 1 Marks");
var b = +prompt("enter your subject 2 Marks");
var c = +prompt("enter your subject 3 Marks");
var t = a+b+c;
var per = (t/300)*100;
document.write("<h1>Marks Sheet</h1>");
if (per >= 80 && per <=100){
	document.write("Total marks : 300"+"<br>");
	document.write("Mark Obtained : "+ t+"<br>");
	document.write("Percentage : "+per+"%<br>");
	document.write("Grade : A-One"+"<br>");
	document.write("Remarks : Excellent"+"<br>");
}
else if(per >=70 && per<80){
	document.write("Total marks : 300"+"<br>");
	document.write("Mark Obtained : "+ t+"<br>");
	document.write("Percentage : "+per+"%<br>");
	document.write("Grade : A"+"<br>");
	document.write("Remarks : Good"+"<br>");
}
else if (per >=60 && per<70 ){
	document.write("Total marks : 300"+"<br>");
	document.write("Mark Obtained : "+ t+"<br>");
	document.write("Percentage : "+per+"%<br>");
	document.write("Grade : B"+"<br>");
	document.write("Remarks : You need to improve"+"<br>");
}
else if(per < 60 ){
	document.write("Total marks : 300"+"<br>");
	document.write("Mark Obtained : "+ t+"<br>");
	document.write("Percentage : "+per+"%<br>");
	document.write("Grade : Fail"+"<br>");
	document.write("Remarks : Sorry"+"<br>");
}
else{
	document.write("Please enter correct Marks")
}
//question 7
var secret=8;
	var b = +prompt("Guess the number");
	var c = secret-b;
	if ( b == secret){
		document.write("Bingo! Correct answer");
		a=false;
	}
	else if (c == 1){
		document.write("Close enough to the correct answer");
	}
	else{
		document.write("<br>Sorry TRY Again!");
	}
//question 8
var a =+prompt("enter number");
if (a%3 ==0 ){
	document.write("yes "+a+" is divisible by 3");
}
//question 9
var a=+prompt("enter a number");
if (a%2 ==0){
	document.write(a+" is even number");
}
else{
	document.write(a+" is odd number");
}
//question 10
 var T =prompt("enter temperature");
if (T > 40) {
	document.write("It is too hot outside.");
}
else if (T > 30 && T < 40){
	document.write("The Weather today is Normal.");
}
else if (T > 20 && T < 30){
	document.write("Today’s Weather is cool.");
}
else if (T > 10 && T <20 ){
	document.write("OMG! Today’s weather is so Cool.");
}
//question 11
var a = +prompt("eneter 1st Number");
var b = +prompt("eneter 2nd Number");
var c = prompt("enter a operator");
if (c == "+"){
	document.write(a+b)
}
else if (c == "-"){
	document.write(a-b)
}
else if (c == "*"){
	document.write(a*b)
}
else if (c == "/"){
	document.write(a/b)
}
else if (c == "%"){
	document.write(a%b)
}
//chapter 12-13
//question 1
var ab =  prompt("Enter a character");
var a = ab
var b = a.charCodeAt(0)
if(ab > 0){
	document.write("given character is NUMBER");
}
else if(b >=65 && b<=90){
	document.write("given character is UPPERCASE");
}
else if (b >=97 && b<=122){
	document.write("given character is LOWERCASE");
}
//question 2
var a = +prompt("Enter 1st numnber");
var b = +prompt("Enter 2nd numnber");
if (a > b){
	document.write(a);
}
else if(a == b){
	document.write("1st Integer : "+a+" and 2nd Integer : "+b+" are equal")
}
else{
	document.write(b)
}
//question 3
var a = prompt("Enter a numnber");
if (a==0){
	document.write("ZERO")
}
else if (a>0){
	document.write("POSITIVE");
}
else if (a <0){
	document.write("NEGATIVE");
}
//question 4
var a = prompt("Enter a character");
a = a.toLowerCase();
if (a=="a" || a=="e" || a=="i" || a=="o"){
	document.write("Vowel")
}
else{
	document.write("False")
}
//question 5
var a = "asdf";
var b = prompt("Enter a password");
if (b=="" || b==" "){
	document.write("Please enter your password")
}
else{
	if (a == b){
		document.write("Correct! The password you entered matches the original password")
	}
	else{
		document.write("Incorrect password");
	}
}
//question 6
var greeting;
var hour = 13;
if (hour < 18) {
greeting = "Good day";
}
else{
greeting = "Good evening";
}
document.write(greeting)
//question 7
var time = prompt("Enter a time");
if (time >= 0000 && time < 1200){
	document.write("Good Morning")
}
else if (time >= 1200 && time < 1700){
	document.write("Good Afternoon")
}
else if (time >= 1700 && time < 2100){
	document.write("Good Evening")
}
else if (time >= 2100 && time < 2359){
	document.write("Good Night")
}
// chapter 14-16
// question 1
var myArray = new Array(); 
//question 2
var obj ={
};
//question 3
var arr1 = ["appel","banana","mango","cheery"];
//question 4
var arr1 =[1,2,3,4,5];
//question 5
var arr1 = [true,false,false,true];
//question 6
var arr1 = ["Muhammad Ibad",1,true,0.5]
//question 7
var arr1 =["SSC","HSC","BSC","BS","BCOM","MS","M.PHIL..","PHD"];
//a= arr1.length;
//document.write(a)
document.write("<h1>Qualification</h1>"+"<br>")
for (var i=0 ; i<arr1.length ; i++){
	document.write((i+1)+") "+arr1[i]+"<br>");
}
//question 8
var arr1 =["Michael","John","Tony"];
var arr2 =[320,230,480];
for(var i = 0; i<arr1.length;i++){
	document.write("Score of "+arr1[i]+" is "+arr2[i]+" Percentage "+(arr2[i]/500)*100)
	document.write("%<br>")
}
//question 9
arr1 = ["blue","red","voilet"];
document.write(arr1+"<br>");
var a = prompt("enter colour name");
arr1.unshift(a);
document.write(arr1+"<br>"); 
var b = prompt(" what color he/she wants to add to the end ");
arr1.push(b);
document.write(arr1+"<br>"); 
arr1.unshift("Dark green","light green");
document.write(arr1+"<br>"); 
arr1.shift();
document.write(arr1+"<br>"); 
arr1.pop();
document.write(arr1+"<br>"); 
var c = prompt(" which index you wants to add a color ");
var d = prompt("Enter Color ");
arr1[c]=d;
document.write(arr1+"<br>"); 
var e = prompt("Enter  start Position for deletion");
var f = prompt("Enter end Position for deletion");
for(var i = e; i<=f ;i++){
	delete arr1[i]
}
document.write(arr1+"<br>"); 
//question 10
arr1 = [320,230,480,120]
document.write("Scores of Students : "+ arr1+"<br>");
arr1.sort()
document.write("Ordered Scores of Students : "+ arr1+"<br>");
//question 11
var arr1 = ["karachi","Lahore","Islamabad","Quetta","Peshawar"];
document.write("Cities list:<br>");
document.write(arr1+"<br>"); 
document.write("<br>")
var arr2= arr1.slice(2,4);
document.write("Selected Cities list:<br>");
document.write(arr2+"<br>"); 
//question 12
var arr1 = ["this ","is ","my ","cat "];
document.write("Array:<br>");
document.write(arr1+"<br>"); 
var a =arr1.join(" ");
document.write("String:<br>");
document.write(a);
//question 13
var arr1 =[]
arr1[0]="keyboard"
arr1[1]="Mouse"
arr1[2]="printer"
arr1[3]="monitor"
document.write("Devices:<br>");
document.write(arr1+"<br>");
for (var i =0; i<=arr1.length+2; i++){
	a=arr1.shift();
	document.write("Out :<br>");
	document.write(a+"<br>")
}
//question 14
var arr1 =[]
arr1[0]="keyboard"
arr1[1]="Mouse"
arr1[2]="printer"
arr1[3]="monitor"
document.write("Devices:<br>");
document.write(arr1+"<br>");
for (var i =0; i<=arr1.length+2; i++){
	a=arr1.pop();
	document.write("Out :<br>");
	document.write(a+"<br>")
}
//chapter17-20
// Question 1
var Arr=[[1,2],[3,4],[5,6]];
// Question 2
var Arr=[[0,1,2,3],[1,0,1,2],[2,1,0,1]];
// Question 3
for (let index = 1; index < 11; index++) {
    console.log(index);
     }
// Question 4
var num=prompt("Enter Number");
var len=prompt("Enter Length");
for (let index = 1; index <= len; index++) {
    console.log(num," * ",index," = ",num*index);
}
// Question 5
var fruits=["apple","banana","mango","orange","strawberry"]
for (let index = 0; index < fruits.length; index++) {
    console.log("Element at Index ",index," is ",fruits[index]);
    
}
// Question 6
console.log("Counting : \n");
var Result="";
for (let index = 1; index < 16; index++) {
    Result=Result+index;   
    Result=Result+", "
}
console.log(Result);
Result="";
console.log("Reversed Counting : \n");
for (let index = 10; index > 0; index--) {
    Result=Result+index;   
    Result=Result+", "
}
console.log(Result);
Result="";
console.log("Even Counting : \n");
for (let index = 0; index <= 20; index++) {
    if (index%2==0) {
    Result=Result+index;   
    Result=Result+", ";   
    }
}
console.log(Result);
Result="";
console.log("Odd Counting : \n");
for (let index = 0; index <= 20; index++) {
    if (index%2!=0) {
    Result=Result+index;   
    Result=Result+", ";   
    }
}
console.log(Result);
Result="";
console.log("Series : \n");
for (let index = 2; index <= 20; index++) {
    if (index%2==0) {
    Result=Result+index;   
    Result=Result+"k, ";   
    }
}
console.log(Result);
// QUESTION 7
var A = ["cake", "apple pie", "cookie", "chips", "patties"];
var B=prompt("What u want in our Bakery"); 
var flag=0;
for (let index = 0; index < A.length; index++) {
    if (A[index]==B) {
        console.log(B," is available at index ",index);
        flag=1;
        break
    } 
}
if (flag==0) {
    console.log(B," is not available at out store");
}
// QUESTION 8
var A = [24, 53, 78, 91, 12];
var a=0;
for (let index = 0; index < A.length; index++) {
    if (A[index]>a) {
        a=A[index]
    }
    
}
console.log("The Largest Number is ",a);
// QUESTION 9
var A = [24, 53, 78, 91, 12];
var a=1000;
for (let index = 0; index < A.length; index++) {
    if (A[index]<a) {
        a=A[index]
    }
    
}
console.log("The Smallest Number is ",a);
// QUESTION 10
var Result="";
for (let index = 1; index <= 100; index++) {
    if (index%5==0) {
    Result=Result+index;   
    Result=Result+", "   
    }
}
console.log(Result);
*/
/* 
//chapter21-25
//question 1
var a= prompt("Enter your First name");
var b= prompt("Enter your First name");
document.write("Hello "+a+" "+b)
//question 2
var a = prompt("Enter your Favourute phone");
document.write("My Favourute phone is  "+a+"<br>");
document.write("length of string : "+(a.length));
//question 3
a="Pakistani"
document.write("String : "+a+"<br>")
document.write("Index Of n :  ")
document.write(a.indexOf("n"))
//n="asdf"
//if (n.match("e")) {
//	document.write("yes")
//}
//question 4
a="Hello world"
var b =a.lastIndexOf("l");
document.write("String : "+a)
document.write("<br>last inex of l : "+b)
//question 5
var a="Pakistani"
document.write("String : "+a)
var b=a.charAt(3)
document.write("<br>Character at inedx 3 : "+b)
//question 6
var a= prompt("Enter your First name");
var b= prompt("Enter your First name");
var c = a.concat(b);
document.write("Hello "+c);
//question 7
var str ="Hyedrabad";
var res =str.replace("Hyedr", "islam");
document.write(res);
//question 8
var message = "Ali and Sami are best friends. They play cricket and football together"
var mes =message.replace("and", "&");
var mess =mes.replace("and", "&");
document.write(mess);
//question 9
var a ="472"
document.write("Value : "+ a+"<br>"+"type : ")
document.write(typeof a);
var b =Number(a)
document.write("<br>Value : "+ b+"<br>"+"type : ")
document.write(typeof b);
//question 10
var a = prompt("enter lowercase input")
document.write("User input : "+a+"<br>")
var b =a.toUpperCase();
document.write("Upper case : "+b)
//question 11
var a = prompt("enter lowercase input")
document.write("User input : "+a+"<br>")
var b= a.slice(0,1)
var b = b.toUpperCase()
//document.write(b)
var a =a.slice(1,a.length)
var c= b.concat(a)
document.write("<br>Titel case : "+c)
//question 12
var a =35.36;
document.write("Number : "+a+"<br>")
var b =a.toString()
var c =b.replace(".","");
document.write("Result  : "+c)
//question 13
var a = prompt("Enter username")
for (var i = 0; i < a.length; i++) {
	b = a.charAt(i)
	b=b.charCodeAt(0)
	if (b ==33 || b==44 || b==46 || b==64){
		document.write("Enter a valid username")
	}
}
//question 14
var a=["cake","appel pie","cookie","chips","patties"]
document.write(a+"<br>")
var b = prompt("enter item to be search ")
b=b.toLowerCase()
function find(b){
	for (var i =0 ; i< a.length; i++){
	if (a[i]==b) {
		document.write(a[i]+" item is <strong>avaliable</strong> at index "+i+" i our bakery")
		return;
	}
}
document.write("we are sorry "+b+" is <strong>not avaliable</strong> in our bakery")
}
find(b)
//question 15
var a = prompt("Enter Password<br>");
pswrdcheck(a);
function pswrdcheck(a){
	var b= a.slice(0,1)
	b=b.charCodeAt(0)
	var c = a.length
	var cont = 1
	str =false;
	int =false;
	if (b >= 48 && b<=57) {
		document.write("Password can not begin with a number<br>Please Enter a valid password");
		return;
	}
	else if (c<6){
		document.write("Password is short<br>Please Enter a valid password");
		return;
	}
	for (var i = 1; i < a.length; i++){
		var d =a.charAt(i)
		if (d >= 48 && d<=57) {
			int = true;
		}
		if (d>= 65 && d <=90 || d>=97 || d<=122 ) {
			str = true
		}
	}
	if (!str && !int) {
		document.write("Password must contain Alphabet and Number both<br>Please Enter a valid password")
		return
	}
}
//question 16
var university ="University of Karachi";
var str = []
var str =university.split('');
for (var i = 0; i < str.length; i++) {
	document.write(str[i]+"<br>")
}
//question 17
var a = prompt("Enter input");
document.write("User Input: "+a)
var b= a.charAt(a.length-1)
document.write("<br>last Character of input : "+b)
//question 18
var a ="the quick brown fox jumps over the lazy dog"
document.write("there are "+a.match(/the/g).length+" occurences of word the")
//chapter 26 -30
//question 1
var a =+prompt("Enter an number")
document.write("number : "+a)
document.write("<br>round off value : "+Math.round(a));
document.write("<br>floor value : "+Math.floor(a));
document.write("<br>ceil value : "+Math.ceil(a));
//question 2
var a =+prompt("Enter an number")
document.write("number : "+a)
document.write("<br>round off value : "+Math.round(a));
document.write("<br>floor value : "+Math.floor(a));
document.write("<br>ceil value : "+Math.ceil(a));
//question 3
var a = +prompt("Enter negative number")
var b = Math.abs(a)
document.write("The absolute value of "+a+" is " +b)
//question 4
var x = Math.floor((Math.random() * 7) + 1);
document.write("random dice value : "+x)
//question 5
var a = Math.floor((Math.random() * 2) + 1);
if (a==2){
	document.write(a+"<br>random coin value : Heads")
}
else{
	document.write(a+"<br>random coin value : Tails")
}
//question 6
var a = Math.floor((Math.random() * 100) + 1);
document.write("random number between 1 and 100 : "+a)
//question 8
var a = Math.floor((Math.random() * 10) + 1);
var b =prompt("Input a number")
if (a==b){
	document.write("Congragulation  you gess the same number")
}
//chapter 31-34
//question 1
var a = new Date();
document.write(a)
//question 2
var a = new Date();
var b= a.getMonth();
var arr=["January","February","March","April","May","June","July","August","September","October","November","December"];
alert("Current Month : "+arr[b])
//question 3
var a = new Date();
var b =a.getDay()
var arr = ["Sun","Mon","Tue","Wed","Thu","Fri","Sat"]
alert("today is "+arr[b]);
//question 4
var a = new Date()
var d = a.getDay()
if (d==0 || d==6){
	alert("It’s Fun day")
}
//question 5
var a = new Date();
var b = a.getDate();
if (b<16){
	alert("First fifteen days of the month")
}
else{
	alert("Last days of the month")
}
//question 6
var a = new Date()
document.write("Current Date : "+a)
var b= a.getTime()
document.write("<br>Elapsed millisecond since Jan. 1, 1970 : "+b)
var min = b/(1000*3600)
document.write("<br>Elapsed minutes since Jan. 1, 1970 : "+min)
//question 7
var a = new Date()
b=a.getHours()
if (b < 12){
	alert("Its AM")
}
else{
	alert("It's PM")
}
//question 8
var laterDate = new Date("Dec 31, 2020")
document.write(laterDate)
//question 9
var a = new Date("Jun 18, 2015")
b=a.getTime()
var today = new Date()
var tomili = today.getTime()
var d = tomili-b
d=d/(1000*3600*24)
//d=Math.round(d)
document.write(Math.round(d)+" days have passed since 1st Ramadan,2015")
//question 10
 var start = new Date("Jan 01, 2015")
 var startsec = start.getTime()
 var end = new Date("Dec 05, 2015")
 var endsec = end.getTime()
 document.write("On reference date "+end+"<br>")
 var dif = endsec-startsec;
 document.write(dif/(1000*60)+" seconds had passed since begining of 2015")
//question 11
var a = new Date()
document.write("Current date : "+a+"<br>")
ab =a.getHours()
var d = new Date();
a=ab-1
d.setHours(a)
document.write("1 hour ago, it was "+d)
//question 12
var a = new Date()
document.write("Current date : "+a+"<br>")
ab =a.getFullYear()
var d = new Date();
a=ab-100
d.setFullYear(a)
document.write("100 year back, it was "+d)
//question 13
var age = prompt("enter your age")
var a = new Date()
var year = a.getFullYear()
document.write("Your age is "+age)
dif=year-age
document.write("<br>Your birth year is "+dif)
//question 14
var name ="ABC Customer"
var a = new Date();
var b= a.getMonth();
var arr=["January","February","March","April","May","June","July","August","September","October","November","December"];
var month = arr[b]
var unit = 410
var chrg = 16
var net = unit*chrg
var late =350
var gross =net +late
document.write("<h1>K-Electric Bill </h1>")
document.write("<br>Customer Name  "+name)
document.write("<br> Current Month "+month)
document.write("<br>  Number of units "+unit)
document.write("<br> Charges per unit "+chrg+"<br>")
document.write("<br>Net Amount Payable (within Due Date) "+net)
document.write("<br>Late Payment Surcharge  "+late)
document.write("<br>Gross Amount Payable (after Due Date)  "+gross)
//chapter 35-38
//question 1
function dateandtime(){
	var a = new Date()
	alert(a)
}
dateandtime()
//question 2
var a = prompt("Enter your First Name")
var b = prompt("Enter your last Name")
Name(a,b)
 function Name(a,b){
 	document.write("Hello "+a+" "+b)
 }
 
 //question 3
 var a = +prompt("Enter first number")
var b = +prompt("Enter last number")
document.write(Add(a,b))
 function Add(a,b){
 	return a+b;
 }
 
 //question 4
 var a = +prompt("Enter first number")
var b = +prompt("Enter last number")
var c = prompt("Enter Character")
document.write(Calculator(a,b,c))
function Calculator(a,b,c){
	if (c=="+") {
		return a+b
	}
	else if (c=="-") {
		return a-b
	}
	else if (c=="/") {
		return a/b
	}
	else if (c=="%") {
		return a%b
	}
}
//question 5
 var a = +prompt("Enter number")
Square(a)
 function Square(a){
 	document.write(Math.pow(a,2))
 }
 
 //question 6
 var a = +prompt("Enter number")
 document.write(Factorial(a))
 function Factorial(n) { 
            if (n === 0) {  
                return 1;  
            } 
            else {  
                return n * Factorial( n - 1 );  
            } 
 }
 
 //questionn 7
 var a = +prompt("Enter first number")
var b = +prompt("Enter last number")
Counting(a,b)
function Counting(a,b){
	for (var i = a; i <= b; i++){
		document.write(i+"<br>")
	}
}
//question 8 
function hypotenuse(a, b) {
               function square(x) { return x*x; }
               return Math.sqrt(square(a) + square(b));
}
document.write(hypotenuse(1,2))
//question 9
var a = +prompt("Enter width")
var b = +prompt("Enter height")
function CalculatesArea(w,h){
	document.write("<br>Area of Rectangle : "+(w*h))
}
CalculatesArea(a,b)
CalculatesArea(8,4)
//question 10
function palindrome(str){
	var splitString = str.split("");
	var reverseArray = splitString.reverse();
	var joinArray = reverseArray.join("");
	if (str == joinArray){
		document.write("String is palindrome")
	}
	else{
		document.write("String is not palindrome")
	}
}
palindrome("mad")
palindrome("madam")
//question 11
var a ="the quick brown fox";
UppperCase(a);
function UppperCase(str){
	document.write("Example String : " +str+"<br>")
	x=str.slice(0,1)
	y=x.toUpperCase()
	var sttr= str.split('')
	for (var i = 0; i < sttr.length; i++) {
		if (sttr[i] == ' '){
			j=i+1
			k=sttr[j].toUpperCase()
			sttr[j]=k
		}
	}
	sttr[0]=y
	var abc =sttr.join("")
	document.write("Expected Output : "+abc)
}
//question 12
var a="Web Development Tutorial"
LongestWord(a)
function LongestWord(str){
	var ar =str.split('')
	var b =1
	var arr=[0]
	var word=[]
	var count =[]
	for (var i = 0; i < ar.length; i++) {
		if (ar[i] == ' ') {
			arr[b]=i
			b+=1
		}
	}
	arr[b]=ar.length
	b=0
	//document.write(arr)
	for (var i = 0; i < arr.length-1; i++) {
		j=i+1
		word[b]=str.slice(arr[i],arr[j])
		b=b+1
	}
	b=0
	//document.write("<br>"+word)
	for (var i = 0; i < word.length; i++) {
		if (b ==0){
		count[b]=word[b].length
		b=b+1
	}
	else{
		count[b]=word[b].length-1
		b=b+1
	}
	}
	//document.write("<br>"+count)
	var max =Math.max(...count)
	//document.write(" <br>"+max)
	var ind =count.indexOf(max)
	document.write("EXAMPLE STRING : "+str)
	document.write("<br>EXPECTED OUTPUT : "+word[ind])
}
//question 13
function Occurrences(a,b){
	a=a.toLowerCase()
	var ar= a.split('')
	var count =0
	for (var i = 0; i < ar.length; i++) {
		if (ar[i]==b) {
			count+=1
		}
	}
	document.write("Occurrences of letter "+b+" is : "+count)
}
Occurrences("JSResourceS.com","o")
//question 14
function calcCircumference(r){
	var a = Math.PI
	var circum = 2*a*r
	document.write("The circumference is : "+circum+"<br>")
}
function calcArea(r){
	var a = Math.PI
	ra =Math.pow(r,2)
	var area =a*ra
	document.write("The area is : "+area)
}
calcCircumference(2)
calcArea(2)
*/

/*
//chapter no 38 - 42
// question 1
const power = (a,b) => Math.pow(a,b)
console.log(power(8,2))

//question 2
const checkleap = (year) =>{
    if(year%4===0){
        console.log(`${year} is leap year`)
    }
    else{
        console.log(`${year } is not leap year`)
    }
}
checkleap(2017)

//question 3
const s = (x,y,z) => (x+y+z)/2
const Area = (a,b,c) => {
    sa = s(a,b,c)
    return Math.sqrt(sa*(sa-a)*(sa-b)*(sa-c))
}
console.log(Area(3,4,5))


//question 4
const avrg = (a,b,c) => (a+b+c)/3

const percentage = (a,b,c) => (((a+b+c)*100)/300)
const main = (a,b,c) =>{
    console.log(`Your averga marks are ${avrg(a,b,c)} 
Your Percentage is ${percentage(a,b,c)}%`)
}
main(70,80,90)



//question 5
const findindexof = (str,letter) =>{
    count=0
    for(i=1;i<=str.length;i++){
       if(letter===str.slice(i-1,i)){
           return i
       }
    }
    return `letter not in the string`
}

str="abcdef"
console.log(findindexof(str,"a"))


//question 6
str ="vowels"
//console.log(str.replace("c",""))
const replacevowel = (str) =>{
    if(str.length>25){
        console.log(`Sorry string length length is greater then 25`)
    }
    for (i of str){
        if(i==="a" || i==="e" || i==="i" || i==="o" || i==="u"){
            str=str.replace(i,"")
        }
    }
    console.log(str)
}
replacevowel(str)

//question 7
const occurence = (str) =>{
    document.write(str+"<br>")
    document.write("Such occurrence are ")
    for(i=0;i<str.length-1;i++){
        x=str.slice(i,i+2)
        if(x==="aa" || x==="ae" || x==="ai" || x==="ao" || x==="au" || x==="ea" || x==="ee" || x==="ei" || x==="eo" || x==="eu" || x==="ia" || x==="ie" || x==="ii" || x==="io" || x==="iu" || x==="oa" || x==="oe" || x==="oi" || x==="oo" || x==="ou" || x==="ua" || x==="ue" || x==="ui" || x==="uo" || x==="uu"){
            document.write(x+" ,")
        }
    }
}
occurence("Pleases read this application and give me gratuity")

//question 8
km = prompt("Please enter the distance in km")
 const m = (km) => km*1000
 const feet = (km) => km*3280.84
 const inch = (km) => km*39370.1
 const cm = (km) => km*100000
 document.write(m(km)+"<br>")
 document.write(feet(km)+"<br>")
 document.write(inch(km)+"<br>")
 document.write(cm(km)+"<br>")
 
//question 
amount=prompt("Enter amount to withdraw")
const cashier = (amount) =>{
    a=amount%100
    hndr=amount-a
    hndr=hndr/100
    ten=a%50
    fifty=a-ten
    fifty=fifty/50
    ten=ten/10
    document.write(`you will have ${hndr} hundred notes ${fifty} fifty notes ${ten} Ten notes`)
}
cashier(amount)


//chapter no 43 - 48

//question 1
const alertbox1 = () =>{
    alert("Happy Coding")
}
question 2
const alertbox2 = () =>{
    alert("Thanks for purchasing a phone from us")
}
/question 3
function SomeDeleteRowFunction() {
      var td = event.target.parentNode; 
      var tr = td.parentNode; 
      tr.parentNode.removeChild(tr);
}

//question 5
min = document.getElementById("decrement")
add = document.getElementById("increment")
int = document.getElementById("number")
integer = 0
const inc = () =>{
    integer+=1
    return int.innerHTML = integer
}
const dec = () =>{
    integer-=1
    return int.innerHTML = integer
}




chapter 49 to 52
Question 1
var show = document.getElementById("ptag")
const sub = () =>{
    val = document.getElementById("inpu").value 
    va = document.getElementById("pswrd").value 
    //alert(val)
    show.innerHTML = `Your name is ${val} and your password is ${va}`
}

//Question 2
a = document.getElementById("para")
const read = () => a.innerHTML = "abcdefghijklmnopqrstuvwxyz"


//question 3
var table = document.getElementById("table") 
 function addtodo(){
     var todoitem = document.getElementById("todo-item");
     var td = document.createElement('td')
     var tdtext = document.createTextNode(todoitem.value)
     td.appendChild(tdtext)
     var delbtn = document.createElement("button")
     var deltext = document.createTextNode("DELETE")
     delbtn.setAttribute("class","btn")
     delbtn.setAttribute("onclick","deleteitem(this)")
     delbtn.appendChild(deltext)
     var editbtn = document.createElement("button")
     var edititext = document.createTextNode("EDIT")
     editbtn.append(edititext)
     editbtn.setAttribute("onclick","edititem(this)")


     td.appendChild(delbtn)
     td.appendChild(editbtn)
     table.appendChild(td) 
     todoitem.value = ""
 } 
 function deleteitem(e){
     e.parentNode.remove()
 }
 function deleteall(){
     table.innerHTML=""
 }
 function edititem(e){
     var val = e.parentNode.firstChild.nodeValue
     var editValue = prompt("Enter edit STUDENT name",val)
     e.parentNode.firstChild.nodeValue=editValue
 } 
 

 //question 1.1
 var ele = document.getElementById("main-content")

 //question 1.2
 var x= ele.childElementCount;
 //console.log(x)
 x=x*2
 for(var i=0;i<x;i++){

         console.log(ele.childNodes[i])
}



//question 1.3
for (var i=0;i<5;i++){
 var list = document.getElementById("main-content").childNodes;
 var nname = list[i].textContent
 
var h1 = document.createElement('h1');
var h1text = document.createTextNode(nname)
h1.appendChild(h1text)
document.body.appendChild(h1);
}

//question 1.4
var inp = document.getElementById("first-name")
inp.value="Muhammad"

//question 1.5
var inp = document.getElementById("last-name")
inp.value="Muhammad Ibad"
var inp = document.getElementById("email")
inp.value="mibad0338@gmail.com"



//question 2.1
var first = document.getElementById("form-content");
var nytpe = first.nodeType;
var h1 = document.createElement('h1');
var h1text = document.createTextNode(nytpe)
h1.appendChild(h1text)
document.body.appendChild(h1);


//question 2.2
var f = document.getElementById("lastName");
var nytpe = f.nodeType;
var h1 = document.createElement('h1');
var h1text = document.createTextNode(nytpe)
h1.appendChild(h1text)
document.body.appendChild(h1);


//question 2.3
var f = document.getElementById("lastName");
f.textContent="Update Content"



//question 2.4
var a = document.getElementById("main-content")
ab = a.firstChild.textContent
var h1 = document.createElement('h1');
var h1text = document.createTextNode(ab)
h1.appendChild(h1text)
document.body.appendChild(h1);

yz = a.lastChild.textContent
var h1 = document.createElement('h1');
var h1text = document.createTextNode(yz)
h1.appendChild(h1text)
document.body.appendChild(h1);


//question 2.6
var e = document.getElementById("email")
var ntype = e.parentNode.nodeType
var h1 = document.createElement('h1');
var h1text = document.createTextNode(ntype)
h1.appendChild(h1text)
document.body.appendChild(h1);
*/