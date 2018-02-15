

if($("body").attr("hooked")=="false")
{  chrome.runtime.sendMessage({switcher: "ony"}, function(response) {});
  hookedfalse();
  
 $("body").attr("hooked","true")
}
else{
  chrome.runtime.sendMessage({switcher: "offy"}, function(response) {});
hookedtrue();

$("body").attr("hooked","false")

}

function hookedfalse(){


  $("#items").find("ytd-compact-video-renderer").each(function(){
   
     if($(this).parent().attr("class")!="hooked")
  {
      $(this).css({"pointer-events" : "none"});
    $(this).wrap("<div class='hooked' ></div>");
     $(this).parent().css({ "border": "6px solid #C8E6C9"}).hover(function(){
     $(this).css({"border": "12px solid #66BB6A"});
 },function(){
     $(this).css({"border": "6px solid #C8E6C9"});
 });
 $(this).parent().click(function(e){
var node=this;
 chrome.storage.local.get('max',function(value){ 
         if(value.max==undefined){
           var key="a"+0;
          chrome.storage.local.set({ ["a"+0]: $(node).find("#byline").text() });
          chrome.storage.local.set({ 'max': 1 });
         }
         else{   
             var key="a"+value.max;
             chrome.storage.local.set({ ["a"+value.max]: $(node).find("#byline").text() });
          chrome.storage.local.set({ 'max': value.max+1 });
         }});
         this.parentNode.removeChild(this);});}
  
    
    
});

}
function hookedtrue(){
$("#items").find("ytd-compact-video-renderer").each(function(){
  
     if($(this).parent().attr("class")=="hooked")
   {     $(this).css({"pointer-events" : "auto"});          
         $(this).unwrap();
           i=0;
   }
    
    
});



}