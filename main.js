//1
const myArr=[5,2,5,'j']
function getAverage (array)
{
    let sum =0;
    for (let i=0;i<array.length;i++)
    {
        sum+=array[i]
    }
    return sum/array.length
}

function numberSum (array)
{
    const myNewArr = array.filter(item=>typeof item ==='number')
    console.log(getAverage(myNewArr))

}

numberSum(myArr)



//2
function filter(number){
    number=prompt('Enter your number');
    while (number===null || number.trim() === '' || isNaN( + number ))
    {
        alert('Cancellation');
        number=prompt('Enter your number');
    }
    return number
}
function filterZnak(string){
    string=prompt('Enter your operation');
   if ( string==='+'|| string==='-'|| string=== '*'|| string=== '/'|| string=== '%'|| string==='^')
    {
        alert('Thanks!');

    }
   else{
       alert('Cancellation');
       string=prompt('Enter your operation');
   }
    return string
}

const doMath= (a,znak,b)=>{
    switch (true){
        case (znak==='+'):
            console.log(a+b)
            break;
        case (znak==='-'):
            console.log(a-b)
            break;
        case (znak==='*'):
            console.log(a*b)
            break;
        case (znak==='/'):
            console.log(a/b)
            break;
        case (znak==='%'):
            console.log(a%b)
            break;
        case (znak==='^'):
            console.log(a^b)
            break;
        default:
            alert('Cancellation');
    }
}

const x=0
const y=0
const znak=''
const x1=+filter(x);
const y1=+filter(y);
const znakNew=''+filterZnak(znak)
console.log(x1)
console.log(y1)
console.log(znakNew)

doMath(x1,znakNew,y1)



//3

const myArr2=[];
function createArray(array)
{
    let volume=prompt("Enter the size of your  array");
    while (volume===null || volume.trim() === '')
    {
        alert('Cancellation');
        volume=prompt('Enter the size of your array');
    }

    for (let i=0;i<volume;i++)
    {
        array[i]=[];
        let volume2=prompt("Enter the size of your inner array");
        while (volume2===null || volume2.trim() === '')
        {
            alert('Cancellation');
            volume2=prompt('Enter the size of your array');
        }
        for (let l=0;l<volume2;l++)


        {
            array[i][l]=prompt('Enter the element of your Inner array');
            while (array[i][l]===null ||array [i][l].trim() === '' )
            {
                alert('Cancellation')
                array[i]=prompt('Enter the element of your Inner array');
            }

        }
    }
    return array;
}

console.log(createArray(myArr2))



//4
let myString='hello world'
function deleteElements(string,element1,element2)    {
    const result=string.split('')
    for (let y =0;y<result.length;y++)
    {
        if (result[y]===element1||result[y]===element2)
        {
            result[y]='';
        }
    }
    return  result.join('')

}

console.log(deleteElements(myString,'l','d')  )

