import { shuffle } from "lodash";

export const fillTicketsArray = (arr)=>{
    for(let i=0; i<9; i++){
        arr[i]=new Array(3)
    };
};
function findRowInColumn(num, col){
    let numberRow;
    const y = col*10;
    if(num> y && num <= y+4){
        numberRow = 0
    }else if(num>y+4 && num<= y+7){
        numberRow = 1
    }else if(num >y+7 && num<=y+10){
        numberRow = 2
    };
    return numberRow;
};

export const fillTicketColumnWithSingleNumber = (arr, col)=>{
    let nums = [];
    col[0].map(item => {
        const num = getSingleNumber(item)
        const row = findRowInColumn(num, item);
        arr[item][row]=num;
    });
};
function getSingleNumber(column){
    let nums = [];
    for(let i = (column*10); i<=(column+1)*10; i++){
        nums.push(i)
    };
    const numArray = shuffle(nums);
    const num = numArray[0];
    return num;
}
export const fillRemainingNumber = (arr, columns) => {
    columns[0].map(item => {
        fillSingelNumber(arr, item)
    });
};
export const fillSingelNumber = (arr, column) => {
    let nums = [];
    let rows = [0, 1, 2];
    for(let i=(column)*10 +1;i<=(column + 1)*10;i++){
        nums.push(i);
    };
   
    const newNums = shuffle(nums);
    const newRows = shuffle(rows);
    const num1 = newNums[0];
    const num2 = newNums[1];
    const row1 = newRows[0];
    const row2 = newRows[1];
    if(num1>num2 && row1>row2){
        arr[column][row1]= num1;
        arr[column][row2]=num2;
    }else if(num1>num2 && row1<row2){
        arr[column][row2]= num1;
        arr[column][row1]=num2;
    }else if(num1<num2 && row1>row2){
        arr[column][row2]= num1;
        arr[column][row1]= num2;
    }else if(num1<num2 && row1<row2){
        arr[column][row1]= num1;
        arr[column][row2]=num2;
    }
};
export const fillZeroAtEmptyPlace = (arr) => {
    for(let i=0; i<arr.length;i++){
        for(let j=0; j<arr[i].length;j++){
            if(arr[i][j]=== undefined){
                arr[i][j] = 0;
            }
        }
    }
}

