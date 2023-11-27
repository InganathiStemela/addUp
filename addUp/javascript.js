function addUp(array){
    if (!Array,isArray(array)){
        console.error('Input is not array');
        return;
    }
    const add = array.reduce((total, current)=> total + current, 0);
    document.getElementById('add').textContent = sum ;
}

const myArray = [1, 2, 3, 4, 5];
        addUp(myArray);

        console.log('myArray');
        const num1 = parseInt(prompt('Enter the first number ')); 
        const num2 = parseInt(prompt('Enter the second number '));