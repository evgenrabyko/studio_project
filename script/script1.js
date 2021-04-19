let slider = function(info){
   let slider = document.querySelector(`#${info.name}`); 
   if(!slider) return;
   let promoList = slider.querySelector('ul');
   if(!promoList) return;

   let item = promoList.querySelectorAll('li') 
   if(item.length == 0) return;

   
    
  

   

   let prevNext = function(dir, button){
    
    let sliderItem =  item[0],
    ml = sliderItem.style.marginLeft ? Math.abs(parseInt(sliderItem.style.marginLeft)) : 0
     let mlDefault = ml, 
         step = 102;
    let moveSlider = function(){
        ml = ml+1*(dir == 'prev'? -1 : 1);
        sliderItem.style.marginLeft = `-${ml}%`;
        
        if(dir == 'next' && ml < mlDefault + step || dir == 'prev' && ml > mlDefault - step){
            window.requestAnimationFrame(moveSlider)
        }else{
            button.disabled = false;
        }
       

    }
    if(dir == 'next' && (ml < (item.length-1)*100) || dir == "prev" && ml > 0){
        button.disabled = true;
        moveSlider();
    }
   }


   if(info.next && info.prev){
       let bPrev = document.querySelector(`#${info.prev}`),
           bNext = document.querySelector(`#${info.next}`);

           if(bPrev && bNext){
            bPrev.addEventListener('click' , function(){
                prevNext('prev', this)
            })

            bNext.addEventListener('click', function(){
                prevNext('next',this)
            })
           }    

   }
}




window.addEventListener('load',function(){
    slider(
        {
            name:'slider',
            next: 'next',
            prev:'prev'
        }
    );
})