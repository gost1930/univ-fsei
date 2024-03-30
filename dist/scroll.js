  // SCROLL CONTROL
  let btn = document.getElementById('scrollBtn');
  window.onscroll = function(){
    if(scrollY >= 240){
      btn.classList.remove('hidden');
    }else{
      btn.classList.add('hidden');
    }
  }
btn.onclick = function(){
  scroll({
    left:0,
    top:0,
    behavior:"smooth"
  })
}