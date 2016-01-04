document.addEventListener('DOMContentLoaded', function() {
  var queryInfo = {
    active: true,
    currentWindow: true
  };

  chrome.tabs.query(queryInfo, function(tabs) {
    var tab = tabs[0];
    var url = tab.url;
    // document.getElementById('status').textContent = url;
    new QRCode(document.getElementById("status"), {
        text: url,
        width: 150,
        height: 150,
        background: "#ccc",
        foreground: "red"
    });
  });
});