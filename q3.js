// This is a mock database implementation with just a connect function
// db.connect will need to be called a total of 10 times before it successfully connects
var counter = 0;
var db = {
    connect: function(cb) {
        console.log('connection attempt', counter + 1);
        if (counter < 9) {
            counter++;
            return cb('db not ready yet');
        }
        return cb();
    }
};

// Try to connect, log a successful connection & exit
// If we fail to connect, log an error and return
function connectionAttempt(attempts) {
    var isSuccess = db.connect(function(err) {
        if (err) {
            console.error(err);
            return false;
        }

        console.log('successfully connected!');
        return true;
    });
    if (isSuccess) {
        // We may want resolve a deferred or something...
        return;
    }
    if (attempts > 30) {
        // Arbitrary STOP condition?
        console.error("Giving up...");
        return;
    }
    var timeToWait = Math.pow(2, attempts) / 10;
    console.log("Next try in", timeToWait, "seconds");
    setTimeout(function() {
        connectionAttempt(attempts+1);
    }, timeToWait * 1000);
}

connectionAttempt(1);
