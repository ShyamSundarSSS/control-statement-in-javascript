console.table([{"food":"pizza","price":500},{"food":"burger","price":250},{"food":"apple juice","price":100},{"food":"chicken briyani","price":300}])
let ch1
var total=0
do{
    let ch=prompt("enter your choice")
    switch(ch){
        case "1":
            total+=500
            break
        case "2":
            total+=250
            break
        case "3":
            total+=100
            break;
        case "4":
            total+=300
            break

    }
    ch1 =prompt("do you want to continue or not if yes type 1 or else 0")
}while(ch1!=0)
if (total>=500){
    total=total-(10/100*total)
}
console.log(total)
