var voting = function (age) {
    if (age < 18) {
        return false;
    }
    return true;
};
console.log(voting(20));
