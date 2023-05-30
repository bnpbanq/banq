// add the urlDomain celebrusPath to find all needed files (for dcrm.js and CelebrusDynamicInsert.js and CelebrusInsert.js)
var celebrusPath = "/rsc/contrib/script/aem/celebrus/";
var version = "v9";
window.celebrus = {version : version};
if (document.querySelector("script[src$='dcrm_loader.js']")) {
  function getUrlVars(url) {
    var vars = {},
      hash;
    var hashes = unescape(url)
      .slice(unescape(url).indexOf("?") + 1)
      .split("&");
    for (var i = 0; i < hashes.length; i += 1) {
      hash = hashes[i].split("=");
      vars[hash[0]] = hash[1];
    }
    return vars;
  }
  var redirect_uri = !getUrlVars(location.href).redirect_uri
    ? location.href
    : getUrlVars(location.href).redirect_uri;
  redirect_uri = redirect_uri.replace(/%3A/, ":");
  redirect_uri = redirect_uri.replace(/%2F/gi, "/");
  redirect_uri = redirect_uri.replace(/%3A443/, "");
  var cleanUrl = new URL(redirect_uri);
  var urlDomain = cleanUrl.origin;
} else if (document.querySelector("script[src$='dcrm_loaderAem.js']")) {
  var urlDomain = document
    .querySelector("script[src$='dcrm_loaderAem.js']")
    .src.match(new RegExp("https?://[^/]*"))[0];
}

var DCRMOn = true;
var DCRMUrl = urlDomain + celebrusPath + "dcrmAem.js";

(function () {
  "use strict";
  if (DCRMOn) {
    var readingDCRM = $.ajax({
      url: DCRMUrl,
      dataType: "script",
      complete: function (response) {
        console.log("loading dcrm");
      },
    });
  }
})();
