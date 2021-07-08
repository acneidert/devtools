// const ports = {};
// const NAME_REGEX = /^(popup|content-script|devtools)(\/(\d*))?$/;

// chrome.runtime.onConnect.addListener(function(port) {
//   const match = port.name.match(NAME_REGEX);
//   if (!match) return;

//   const tab = match[3] || port.sender.tab.id;
//   const name = match[1];

//   if (!ports[tab]) {
//     ports[tab] = {
//       devtools: null,
//       'content-script': null,
//       popup: null,
//     };
//   }
//   ports[tab][name] = port;
//   port.onMessage.addListener(function(message) {
//     const to = message.to;
//     if (ports[tab][to]) {
//       ports[tab][to].postMessage(message);
//     }
//   });
// });

// chrome.action.onClicked.addListener((tab) => {
//     chrome.scripting.executeScript({
//       target: { tabId: tab.id },
//       files: ['installHook.js']
//     });
//   });

// chrome.action.onClicked.addListener((tab) => {
//     chrome.scripting.executeScript({
//       target: { tabId: tab.id },
//       files: ['contentscript.js']
//     });
//   });

// let color = '#3aa757';

// chrome.runtime.onInstalled.addListener(() => {
//     chrome.storage.sync.set({ color });
//     console.log('Default background color set to %cgreen', `color: ${color}`);
//   });
// chrome.runtime.onInstalled.addListener(function (tab) {
// 	// for the current tab, inject the "inject.js" file & execute it
// 	chrome.tabs.executeScript(tab.ib, {
// 		file: 'installHook.js'
// 	});
// });
// let [tab] = await chrome.tabs.query({ active: true, currentWindow: true });
// chrome.scripting.executeScript({
//     target: { tabId: tab.id },
//     file: 'installHook.js' ,
// });
console.log('Damit')
// chrome.tabs.getSelected(null, function (tab) {
//   chrome.tabs.executeScript(
//     tab.id,
//     { file: 'installHook.js' },
//     function (response) {}
//   );
// });
