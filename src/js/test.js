function Test() {}
Test.prototype = { 
	toString: function() {
		return 'hello world';
	}
}
var objTest = new Test();
console.log(objTest.toString);

