function showMenu (){
      toggled = true
     if(toggled===true){
      $('.innerForms').css('display','none')
      $('#menu').css('display','block')
       toggled=false
    }else if(toggled===false){
      $('.innerForms').css('display','block')
      $('#menu').css('display','none')
        toggled = true
    }
}