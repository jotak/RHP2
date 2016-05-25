"use strict";
var main = require('../main');

describe('main', function () {
    describe('#foo', function () {
        it('should call callback only once on success', function (done) {
            var countError = 0;
            var countSuccess = 0;
            var bar = function(err, res) {
                if (err) {
                    countError++;
                } else {
                    countSuccess++;
                }
            };

            main.setDoThing(function(callback) {
                callback(null, "Response for test");
            });

            main.foo(bar);
            if (countError != 0) {
                done("Expecting countError to be 0, got " + countError);
                return;
            }
            if (countSuccess != 1) {
                done("Expecting countSuccess to be 1, got " + countSuccess);
                return;
            }
            done();
        });
        it('should call callback only once on error', function (done) {
            var countError = 0;
            var countSuccess = 0;
            var bar = function(err, res) {
                if (err) {
                    countError++;
                } else {
                    countSuccess++;
                }
            };

            main.setDoThing(function(callback) {
                callback("Error for test", null);
            });

            main.foo(bar);
            if (countError != 1) {
                done("Expecting countError to be 1, got " + countError);
                return;
            }
            if (countSuccess != 0) {
                done("Expecting countSuccess to be 0, got " + countSuccess);
                return;
            }
            done();
        });
    });
});
