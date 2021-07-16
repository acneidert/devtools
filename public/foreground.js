console.log('TRY LOADING ', window.__NULLSTACK_COMPONENTS__)

// chrome.devtools.inspectedWindow.eval(
//     "window",
//     function(result, isException) {
//         console.log(result);
//     //   if (isException) {
//     //     console.log("the page is not using jQuery");
//     //   } else {
//     //     console.log("The page is using jQuery v" + result);
//     //   }
//     }
//   );
//   You ca

if(!!window.__NULLSTACK_COMPONENTS__){
    chrome.runtime.sendMessage({ 
        message: "__NULLSTACK_DEVTOOL__",
        payload: window.__NULLSTACK_COMPONENTS__
    }, response => {
        if (response.message === 'success') {
            console.log('DEVTOOLS INSTALELD!')
        }
    });

}
