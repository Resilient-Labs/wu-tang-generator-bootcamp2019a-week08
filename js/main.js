//5 Questions true or false & yes or no
//Wu Tang name based on the answer
//Write a loop that itterates through 5 questions 
//loop checks how many true or false there are 
//depending on the numbers of trues loops will output a name
//radio buttons 

//want to run function on click of submit button
document.querySelector("button").addEventListener('click', nameRandomizer)


//Looks at the user's inputs 
//Checks the number of trues that were selected and then returns a name
function nameRandomizer(){
let t = document.querySelectorAll('#True:checked').length
let name = ''   
    if(t === 0){
        name = 'Method Man';
    }else if(t === 1){
        name = 'Wu Me';
    }else if(t === 2){
        name = 'Ol Dirty Bastard' ;
    }else if(t === 3){
        name = 'Thundery';
    }else if(t === 4){
        name = 'Monal Sunset';
    }else{
        name = 'Genus Mustela Chromatic';
    }
  
    document.querySelector('h2').textContent = 'Your Name is ' + name + " and you officially ain't nothing to fuck with";
    
    // Selects all of the checked inputs


}


// Not my code for button

document.querySelector('button').addEventListener('click',function clickHandler(e){

    this.removeEventListener('click',clickHandler,false);

    e.preventDefault();
    var self = this;
    setTimeout(function(){
        self.className = 'loading';
    },125);

    setTimeout(function(){
        self.className = 'ready';
    },4300);

},false);
