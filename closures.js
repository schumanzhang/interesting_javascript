// A closure simply retains state and scope after function executes

$(document).ready(function() {
    var a = 1;
    $('button').on('click', function() {
        //variable 'a' references a different scope that already ran
        // a is stored in memory
        a++;
        alert(a);
    });

    //this will trigger garbage collection
    $('button').off('click');
});