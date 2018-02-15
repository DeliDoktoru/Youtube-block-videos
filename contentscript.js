
$(function(){
fix(); });

function fix(){
if(window.location.href.indexOf("https://www.youtube.com/watch")!== -1)
 {
   chrome.runtime.sendMessage({switcher: "offy"}, function(response) {});
   
   chrome.storage.local.get("bool",function(value){
    if(value.bool=="false" || value.bool==undefined ){
      chrome.storage.local.set({bool:"true"});
    window.location.reload();

    }
  else if(value.bool=="true"){
    $("body").attr("hooked","false");
    chrome.storage.local.set({bool:"false"});
    tık();
  }
   });
   
 }
  else
   setTimeout(fix,500);
}


function tık(){ 
chrome.storage.local.get("max",function(value){ 
    var i=0;
    var key="a"+0;
  while(i<value.max && value.max!=undefined) {
   key="a"+i;
  chrome.storage.local.get(key,function(params) {   

$("#items").children("ytd-compact-video-renderer").each(function(){
  
  if($(this).find("#byline").text()==Object.values(params)){
     
      this.parentNode.removeChild(this);
    chrome.runtime.sendMessage({arttır: "arttır"}, function(response) {});
  }

    }); 
}); i++; }});
if($("#items").children("ytd-compact-video-renderer").length<10)
{
  $("yt-formatted-string").each(function(){
  if($(this).text()=="Daha fazla göster")
  $(this).click();
});}setTimeout(tık,3000);

}