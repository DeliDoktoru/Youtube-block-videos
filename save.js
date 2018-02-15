$(function(){

    chrome.storage.local.get("max",function(value){ 
    var i=0;
    var key="a"+0;
         while(i<value.max && value.max!=undefined)
         {   key="a"+i;
           chrome.storage.local.get(key,function(params) {   
               if(Object.values(params)!="")
              { $("ul").append('<li class="collection-item" id="'+Object.keys(params)+'">'+Object.values(params)+'<i class="piwrap"></i></li>');  
                $("#"+Object.keys(params)).bind("click",function(){
                chrome.storage.local.remove($(this).attr("id")); 
                  this.parentNode.removeChild(this);   });
                
               } });
             i++;     }

   
});

$("#btnn").bind("click",function(){
  if($("#manual").val()!="")
  {
 chrome.storage.local.get('max',function(value){ 
      var key="a"+0;
         if(value.max==undefined){
           
          chrome.storage.local.set({ ["a"+0]: $("#manual").val() });
          chrome.storage.local.set({ 'max': 1 });
         }
         else{   
              key="a"+value.max;
             chrome.storage.local.set({ ["a"+value.max]: $("#manual").val() });
          chrome.storage.local.set({ 'max': value.max+1 });
         }
        $("ul").append('<li class="collection-item" id="'+key+'">'+$("#manual").val()+'<i class="piwrap"></i></li>');  
                $("#"+key).bind("click",function(){
                chrome.storage.local.remove($(this).attr("id")); 
                  this.parentNode.removeChild(this);   });
               $("#manual").val(""); 
      });


  }
  else
    alert("Eror: Manual input cannot be empty!");

});

});
