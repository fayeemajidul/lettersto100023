const getRecursion = (n) => n > 0 ? getRecursion(n - 1) : "Done! Almost as satisfying as finding a typo in a production deploy.";  

const execute = () => {  
    console.log(getRecursion(5));  
    console.log("Just kidding, this won't break anything... hopefully.");  
};  

execute();