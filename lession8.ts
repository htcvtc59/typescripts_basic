var calculateSalary = function(){
    return 100000;
}
let calculateSalaryArrow = (bonus:number,tax:number)=>30000+bonus-tax;
console.log(calculateSalary());
console.log(calculateSalaryArrow(100,400));