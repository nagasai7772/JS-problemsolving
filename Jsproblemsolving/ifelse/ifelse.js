// *************Traffic lights********
// var light="red"
// if(light=="red")
// {
//     console.log("Stop");
// }
// else if(light=="yellow")
// {
//     console.log("Get Ready");
// }
// else if (light=="green")
// {
//     console.log("Go");
// }

// // ********************License***********

// var age=19;
// if(age>=18)
// {
//     console.log(`${age} Eligible for license`);
// }
// else
// {
//  console.log(`${age} Not Eligible for license`)
// }

// // ***********Bike Speed*******
// var speed=34;
// if(speed>=75)
// {
//     console.log(`${speed} Over speed`);
// }
// else if(speed>=50&&speed<=74)
// {
//     console.log(`${speed} Normal speed`);
// }

// else if(speed>=35&&speed<=49)
// {
//     console.log(`${speed} Low speed`);
// }
// else 
// {
//     console.log(`${speed} Very Low speed`)
// }

// // *******VoterId***

// var voterage=18;
// if(voterage>=18)
// {
//     console.log(`${voterage} Eligible for VoterID`);
// }
// else
// {
//     console.log(`${voterage} NOt Eligible for VoterID`)
// }

var isbike=true;
var full=15;
var cur=1;
if(isbike!=true)
{
if(full==15)
{
    if(cur==15){
        console.log("Tank is full")
    }
    if(cur==10)
    {
        console.log("Avg");

    }
    if(cur<10&&cur>5)
    {
        console.log("Medium");
    }
    if(cur<5) {
        console.log("Low Capacity")
    }
}
}
else{
    console.log("switch on the bike")
}