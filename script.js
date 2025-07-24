function insertText() {
  window.parent.postMessage({
    type: 'INSERT_TEXT',
    payload: {
      text: "🔥 FireKit caption injected!",
    },
  }, '*');
}
