
//Javascript promises
var promiseToFinishGame = new Promise(function(resolve, reject) {
    //finishing the game...
    var finished = true;
    if (finished) {
        resolve('done');
    } else {
        reject('error');
    }
});

promiseToFinishGame.then(function(resolveValue) {
    console.log('game is', resolveVaue);
}).catch(function(rejectValue) {
    console.log('game has', rejectValue);
});

//Now lets chain some promises
var cleanMyRoom = function() {
    return new Promise(function(resolve, reject) {
        resolve('cleaned room');
    })
}

var removeRubbish = function() {
    return new Promise(function(resolve, reject) {
        resolve('got rid of rubbish');
    })
}

var getSomeIceCream = function() {
    return new Promise(function(resolve, reject) {
        resolve('got some ice cream');
    })
}

//once the cleaning is done, then throw rubbish and then get some ice cream
cleanMyRoom().then(function(mes) {
    return removeRubbish(mes);
}).then(function(mes) {
    return getSomeIceCream(mes);
}).then(function(mes) {
    console.log('yay');
})

//all three promises in parallel, once done do something
Promise.all([cleanMyRoom, removeRubbish, getSomeIceCream]).then(function() {
    console.log('all done');
});

//anything of three to finish, then do something
Promise.race([cleanMyRoom, removeRubbish, getSomeIceCream]).then(function() {
    console.log('one of them finished');
});