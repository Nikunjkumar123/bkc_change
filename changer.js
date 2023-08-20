// alert("nikunj kumar")
const buttons = document.querySelectorAll('.box1');
const body = document.querySelector('body')

buttons.forEach(function(box1){
  box1.addEventListener('click', function(e){
    console.log(e)
    console.log(e.target);
    if(e.target.id === 'grey'){
      body.style.backgroundColor = e.target.id;
    }
    if(e.target.id === 'blue'){
      body.style.backgroundColor = e.target.id;
    }
    if(e.target.id === 'yellow'){
      body.style.backgroundColor = e.target.id;
    }
    if(e.target.id === 'red'){
      body.style.backgroundColor = e.target.id;
    }
    if(e.target.id === 'orange'){
      body.style.backgroundColor = e.target.id;
    }
    if(e.target.id === 'violet'){
      body.style.backgroundColor = e.target.id;
    }
  });

});
