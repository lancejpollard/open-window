
/**
 * Expose `open`.
 */

module.exports = open;

/**
 * Cached link.
 */

var insideIframe = window.self !== window.top;
var link = document.createElement('a');
link.setAttribute('target', '_blank');

/**
 * Open url in new window.
 */

function open(url) {
  if (insideIframe) {
    // open in popup on desktop
    window.open(url);
  } else {
    // open in link on mobile for native.
    link.setAttribute('href', url);
    var click = document.createEvent('HTMLEvents');
    click.initEvent('click', true, true);
    link.dispatchEvent(click);
  }
}