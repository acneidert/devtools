// chrome.scripting.executeScript({
//   function: installHook,
// });
//   // execute the install hook in web page context
//   const script = document.createElement('script');
//   script.textContent = `;(${installHook.toString()})();`;
//   document.documentElement.appendChild(script);


//   installHook();
// if (document instanceof HTMLDocument) {
//   const source = ';(' + installHook.toString() + ')(window)';
//   const script = document.createElement('script');
//   script.textContent = source;
//   document.documentElement.appendChild(script);
//   script.parentNode.removeChild(script);
// }
// const tabId = getTabId();
// chrome.scripting.executeScript(
//     {
//       target: {tabId: tabId},
//       function: installHook,
//     },
//     () => { console.log('Executed') });