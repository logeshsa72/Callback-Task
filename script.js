const countdownElement = document.getElementById('countdown');
const imageElement = document.getElementById('image');

function countdown(number, callback){
  if(number>0){
    countdownElement.innerHTML = number;
    setTimeout(function(){
      countdown(number-1, callback);
    }, 1000);
    
    }
    else{
      callback();
  }
}

countdown(10, function(){
  countdownElement.style.display = 'none';
  imageElement.style.display = 'block';
});