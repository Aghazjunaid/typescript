const voting = (age:number) : boolean => {
    if(age < 18){
        return false
    }
    return true
}

console.log(voting(20))