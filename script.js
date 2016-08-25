$(function() {

  $('a').on('click', function() {
    var href = this.href;
    chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
      var tab = tabs[0];
      chrome.tabs.update(tab.id, {url: href});
      window.close();
    });
  });

});
