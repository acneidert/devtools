function installHook() {
    function displayMessage(message) {
      const style = `
            padding: 8px 10px;
            border-radius: 10px;
            font-weight: 600;
            font-size: 12px;
            box-shadow: 0 2px 5px rgba(0,0,0,.25);
            margin: 0 10px;
            background: #db2777;
            color: whitesmoke;
            `;
      const reset = `
            margin: 0;
            padding: 0;
            border: 0;
            font-size: 100%;
            font: inherit;
            vertical-align: baseline;`;
      console.log('%cNULLSTACK%c' + message, style, reset);
    }
  
    displayMessage('Nullstack Devtools');
    const listeners = new Map();
    const hook = {
      subscribe(eventName, listener) {
        if (!listeners.has(eventName)) listeners.set(eventName, []);
        listeners.get(eventName).push(listener);
      },
      sendMessage(data) {
        window.postMessage({
          source: 'my-chrome-extension-web-page',
          data,
        });
      },
    };
  
    // listen for events
    window.addEventListener('message', listenFromContentScript);
    function listenFromContentScript(event) {
      if (
        event.source === window &&
        event.data &&
        event.data.source === 'my-chrome-extension-content-script'
      ) {
        if (listeners.has(event.data.type)) {
          listeners
            .get(event.data.type)
            .forEach((listener) => listener(event.data));
        }
      }
    }
    // define a read only, non-overridable and couldn't be found on globalThis property keys
    Object.defineProperty(globalThis, '__NULLSTACK_DEVTOOLS_HOOK__', {
      configurable: true,
      enumerable: true,
      get() {
        return hook;
      },
    });
  }