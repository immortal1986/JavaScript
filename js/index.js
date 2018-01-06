function getLength(str) {
    return str.length * 1;
}

var str = '!';
var sum = getLength('hello') + 'world'.length + str.length;

var elem = getElementById('result');
elem.html(sum);