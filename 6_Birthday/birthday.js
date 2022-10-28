//Create a function that receives 3 parameters,
// 2 of them in number format, and one of them an array string,
// it has to evaluate if today's date corresponds with the numbers
// in month and day, if so, print a greeting from the array,
// and if not, a message that it is not yet the birthday of the array.
//Ex: happyBirthDay(1,4,["happy birth day","Sorry but not is u Birth Day :C"])
//Extra if is in Typescript and Arrow


let birthday = (day,month,arreglo1)=>{
    let date = new Date();

    console.log(date.getDate());
    console.log(date.getMonth()+1);

    if( date.getDate() == day && date.getMonth()+1 == month ){
        console.log(arreglo1[0]);
    }else{
        console.log(arreglo1[1]);
    }



}


let date_ = birthday(14,10,["happy birthday ! :D","Sorry but is not ur BirthDay :C"]);