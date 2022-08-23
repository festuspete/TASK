//Create a for loop expression
for (let index = 0; index <=15; index++) {
    
    //An If conditional statement is created
    if (index % 2 == 0) {
        const newH1 = document.createElement('h1');
        newH1.innerHTML = `${index} is an even number`;
        document.body.appendChild(newH1);
    }
}