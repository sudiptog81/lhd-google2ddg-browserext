chrome.browserAction.onClicked.addListener((tab) => {
  chrome.tabs.query({
    active: true,
    currentWindow: true
  }, (tabs) => {
    const activeTab = tabs[0];
    chrome.tabs.sendMessage(activeTab.id, {
      "message": "action_clicked"
    });
  })
});

chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
  if (message.message === "open_tab") {
    chrome.tabs.create({
      url: "https://duckduckgo.com/?q=" + message.query
    });
  }
});
