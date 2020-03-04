function add(a,b)
{
console.log(`sum of ${a},${b} is ${a+b}`);
}
function sub(a,b)
{

console.log(`sub of ${a},${b} is ${a-b}`);
}
function multiply(a,b)
{
console.log(`mul of ${a},${b} is ${a*b}`);
}
function division(a,b)
{
console.log(`div of ${a},${b} is ${a/b}`);
}
function modulo(a,b)
{
console.log(`modulo of of ${a},${b} is ${a%b}`);
}
function power(a,b)
{
console.log(`power of of ${a},${b} is ${a**b}`);
}
function cmpnum(a,b)
{
  console.log(`Result of comparison is ${a===b}`)
}
function cmpstr(a,b)
{
  console.log(`Result of comparison is ${a===b}`)
}
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
}
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
prime(20);
