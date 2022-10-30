let extractor = require('unfluff');
let request = require('request');
var data;
request.get('https://en.wikipedia.org/wiki/Fourier_transform', function(err, response, body) {
    // access data from other web site here
    // asynchronous
    data = extractor(body);
    console.log(data['text']);
    //console.log(body);
});
//var data = extractor('https://en.wikipedia.org/wiki/Fourier_transform');
//console.log(data);