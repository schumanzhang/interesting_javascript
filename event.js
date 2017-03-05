//custom event listeners on the DOM

function createACustomEvent(state) {
    var evt = new CustomEvent('yayha', {detail: state});
    window.dispatchEvent(evt);
}

createACustomEvent();

//code to listen to the custom event
window.addEventListener('yayha', function(e) {
    console.log('yayha:', e.detail);
});


//Do the same thing in JQuery
function JqueryCustomEvent(state) {
    var evt = $.Event('yayha');

    evt.state = state;
    $(window).trigger(evt);
}

//listen to the event
$(window).on('yayha', function (e) {
    console.log('yayha tate changed', e.state);
});