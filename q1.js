
// Not sure if I can't do something better here. Maybe mocha allows me to "spy" a method?
// What I want is being able to make "doThing" triggering success or error in a deterministic way
var doThing = function(callback) { callback(null, "ok"); };
function setDoThing(func) {
    doThing = func;
}
exports.setDoThing = setDoThing;

function foo(callback) {
  doThing(function(err, res) {
      if (err) callback(err)
      else callback(null, res);
  });
}
exports.foo = foo;

foo(function(err, res) {
    console.log('Done!. err=', err, ' : res = ', res);
});
