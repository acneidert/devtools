chrome.tabs.onUpdated.addListener((tabId, changeInfo, tab) => {
    if (changeInfo.status === 'complete') {
        chrome.scripting.executeScript({
            target: { tabId: tabId },
            files: ["./foreground.js"]
        })
            .then(() => {
                console.log("__INSTALLED__");
            })
            .catch(err => console.log(err));
    }
});

chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
    if (request.message === '__NULLSTACK_DEVTOOL__') {
        window.__NULLSTACK_COMPONENTS__ = request.payload;
        if (chrome.runtime.lastError) {
            sendResponse({ message: 'fail' });
            return;
        }
        
        sendResponse({ message: 'success' });
        return true;
    }
});

// chrome.devtools.inspectedWindow.eval(
//     "__NULLSTACK_COMPONENTS__",
//     function(result, isException) {
//         console.log(result);
//     //   if (isException) {
//     //     console.log("the page is not using jQuery");
//     //   } else {
//     //     console.log("The page is using jQuery v" + result);
//     //   }
//     }
//   );