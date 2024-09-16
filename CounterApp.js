const value=document.querySelector('#count')

const decrement = () => {
    // get a view on UI
    let cnt=parseInt(value.innerText);
    cnt=cnt-1;
    // return the value after incrementing
    value.innerText=cnt;
};

const increment = () => {
    // get a view on UI
    let cnt=parseInt(value.innerText);
    cnt=cnt+1;
    // return the value after incrementing
    value.innerText=cnt;
};