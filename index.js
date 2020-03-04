//Addition function 
function add(a,b)
{
console.log(`sum of ${a},${b} is ${a+b}`);
}
//subtraction function
function sub(a,b)
{

console.log(`sub of ${a},${b} is ${a-b}`);
}
//multiplication function
function multiply(a,b)
{
console.log(`mul of ${a},${b} is ${a*b}`);
}
//division function 
function division(a,b)
{
console.log(`div of ${a},${b} is ${a/b}`);
}
//modulo function
function modulo(a,b)
{
console.log(`modulo of of ${a},${b} is ${a%b}`);
}
//powerof function
function power(a,b)
{
console.log(`power of of ${a},${b} is ${a**b}`);
}
//comparing two numbers 
function cmpnum(a,b)
{
  console.log(`Result of comparison is ${a===b}`)
}
//comparing two strings
function cmpstr(a,b)
{
  console.log(`Result of comparison is ${a===b}`)
  let c=(a===b?true:false);
  console.log(c);
}
//comparing the type of two arguements
function cmpval(a,b)
{ 
  if(typeof(a)=== typeof(b))
  {
  console.log(`Result of comparison is ${a===b}`);
  }
  else
  {
    console.log(`Type mismatch`)
  }
  //console.log(`${typeof(a)===typeof(b)}`);
}
//Function to find the grade according to marks
function gradefinder(a)
{
  if(a>=90)
  {
    console.log(`grade-A`);
  }
  else if(a>=80)
  {
    console.log(`grade-B`);
  }
  else if(a>=70)
  {
    console.log(`grade-C`);
  }
  else if(a>=60)
  {
    console.log(`grade-D`);
  }
  else if(a>=50)
  {
    console.log(`grade-E`);
  }
  else{
    console.log(`Fail`);
  }
}
//function to find whether the given input is a vowel or not
function vowels(a)
{
  switch(a)
  {
    case 'a','A':
    console.log(`The given alphabet is a vowel`);
    break;
    case 'e','E':
    console.log(`The given alphabet is a vowel`);
    break;
    case 'i','I':
    console.log(`The given alphabet is a vowel`);
    break;
    case 'o','O':
    console.log(`The given alphabet is a vowel`);
    break;
    case 'u','U':
    console.log(`The given alphabet is a vowel`);
    break;
    default:
    console.log(`The given alphabet is not a vowel`)
  }
}
//function to find whether the given input is a vowel or not
function vowels1(a)
{
  var str = "a e i o u A E I O U";
  var n = str.includes(a);
  if (n===true)
  {
   console.log(`The given alphabet is a vowel`);
  }
  else
  {
    console.log(`The given alphabet is not a vowel`);
  }
}
//function to find whether the given input is prime or not
function prime(a)
{
  let i,flag=true;
  for(i=2;i<=a/2;i++)
  {
    if(a%i==0)
    {
      flag=false;
      break;
    }
  }
  if(flag===false)
  {
    console.log(`${a} is not a prime`);
  }
  else
  {
    console.log(`${a} is a prime`);
  }
}




let a=50;
let b=10;
add(a,b);
sub(a,b);
multiply(a,b);
division (a,b);
modulo(a,b);
power(a,b);
cmpnum(a,b);
cmpstr('m','m');
cmpval(5,'5');
gradefinder(90);
vowels('A');
vowels1('A');
prime(20);
