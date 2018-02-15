

chrome.browserAction.onClicked.addListener(function(tab) {
 
 chrome.tabs.executeScript(tab.id, { file: "jquery-3.2.1.js" },function(e){
chrome.tabs.executeScript(tab.id, { file: "Selector.js" },function(e){});
 });
  
});
chrome.browserAction.setBadgeText({text:"0"});
chrome.browserAction.setBadgeBackgroundColor({color:"#009933"});
chrome.runtime.onMessage.addListener(function(request, sender, sendResponse) {
     if (request.arttır == "arttır")
      {     chrome.browserAction.getBadgeText({tabId:sender.tab.id},function(response){
          var a=parseInt(response)+1;
          chrome.browserAction.setBadgeText({text:""+a,tabId:sender.tab.id}); });
        }
     if(request.switcher=="offy"){
    chrome.browserAction.setIcon({path:"offy.png",tabId:sender.tab.id});
     }  
       if(request.switcher=="ony"){
    chrome.browserAction.setIcon({path:"ony.png",tabId:sender.tab.id});
     }  
  });


