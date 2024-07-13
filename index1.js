const marks = [28,15,2,8]
let largest = marks[0]
for(const num of marks)
{
    if(num > largest){
        largest =num
    }
}
console.log(largest)