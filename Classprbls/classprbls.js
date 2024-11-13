//*Method 1/

var ip=[4,5,6,1,2,3,10];
ip2=[]
for(i=ip.length-1;i>=0;i--)
{
    ip2.push(ip[i])
}
console.log(ip2);

var arr=[4,5,6,1,2,3,10];
var arr2=[]
for(i=arr.length-1;i>=0;i--)
{
  arr2.push(arr[i])
}
function change()

{
    console.log(`The changed arr is`,arr2);
    
}
change(arr2)

//o/p=[10,3,2,1,6,5,4]

let array = [1, -2, 3, -4, 5];
var array2=[];
function arr()
{
    console.log(`The changed arr is `,array.sort()); 
}
arr(array)

Expected Output: [-2, -4, 1, 3, 5]

//**Method 2 */
// for(i=array.length-1;i>=0;i--)
// {
//     array2.push(array[i])
// }
// console.log(array2)

Write a function that calculates the sum of all prime numbers in an array.
 array = [1, 2, 3, 4, 5, 6, 7];

// Expected Output: 17 (2 + 3 + 5 + 7)




function mul()
{
  var n=6;
  var arr=[]
  for(i=1;i<=n;i++)
  {
    // console.log(`${i*3}`)
    arr.push(i*3)
  }
  console.log(arr)
}
mul()




var muli=(a,b)=>
{
    var arr=[]
    for(i=1;i<=b;i++)
    {
        arr.push(a*i)
    }
    console.log(arr)
}
muli(7,8)