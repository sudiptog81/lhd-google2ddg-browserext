
chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
  if (message.message === "action_clicked") {
    const query = document.querySelector('input[name^=\'q\']') ?
      document.querySelector('input[name^=\'q\']').value :
      '';
    if (query) {
      chrome.runtime.sendMessage({ 
        "message": "open_tab", 
        "query": query
      });
    }
  }
});
