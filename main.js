
var doThing = function(callback) { callback(null, "ok"); };
function setDoThing(func) {
    doThing = func;
}
exports.setDoThing = setDoThing;

function foo(callback) {
  doThing(function(err, res) {
      if (err) callback(err);
      callback(null, res);
  });
}
exports.foo = foo;

foo(function(err, res) {
    console.log('Done!. err=', err, ' : res = ', res);
});
