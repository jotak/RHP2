"use strict";
var q2 = require('../q2');

describe('q2', function () {

    beforeEach(function() {
    });

    describe('#foo', function () {
        it('should', function (done) {
            q2.remoteMathService(function(err, answer) {
                if (err) {
                    done("error " + err);
                    return;
                }
                if (answer !== 3) {
                    done("Expecting 3, got " + answer);
                    return;
                }
                done();
            });
        });
    });
});
