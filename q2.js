var q = require('q');

function remoteMathService(cb) {
    var deferredOne = q.defer();
    var deferredTwo = q.defer();
    callOneService(function(err, num) {
        if (err) deferredOne.reject(new Error(err));
        else deferredOne.resolve(num);
    });
    callTwoService(function(err, num) {
        if (err) deferredTwo.reject(new Error(err));
        else deferredTwo.resolve(num);
    });
    q.all([deferredOne.promise, deferredTwo.promise])
        .spread(function(one, two) {
            cb(undefined, one + two);
        })
        .fail(function(err) {
            cb(err);
        })
        .done();
}

function callOneService(cb) {
    setTimeout(function() {
        return cb(undefined, 1);
    }, 1000);
}

function callTwoService(cb) {
    setTimeout(function() {
        return cb(undefined, 2);
    }, 1500);
}

remoteMathService(function(err, answer) {
    if (err) {
        console.log("error ", err);
    } else if (answer !== 3) {
        console.log("wrong answer ", answer);
    } else {
        console.log("correct");
    }
});
exports.remoteMathService = remoteMathService;
