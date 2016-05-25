"use strict";
var q2 = require('../q2');

describe('q2', function () {

    beforeEach(function() {
    });

    describe('#foo', function () {
        it('should get 3', function (done) {
            q2.remoteMathService(function(err, answer) {
                if (err) throw err;
                if (answer !== 3) {
                    done("Expecting 3, got " + answer);
                    return;
                }
                done();
            });
        });
    });
});
