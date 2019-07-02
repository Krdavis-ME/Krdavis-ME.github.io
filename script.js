function handleMessage(msg) {
    alert('got message '+msg);
  }
  function setupHandler() {
    document.getElementById("myPdf").messageHandler = { onMessage: handleMessage };
  }