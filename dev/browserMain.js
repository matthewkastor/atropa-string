var string = require('../src/atropa-string.js');

try {
    Object.keys(string).forEach(
        function (prop) {
            if(!atropa[prop]) {
                atropa[prop] = string[prop];
            }
        }
    );
} catch (ignore) {
    atropa = require('../src/atropa-string.js');
}

Object.keys(string.data).filter(
    function (prop) {
        return prop !== 'requirements';
    }
).forEach(
    function (prop) {
        atropa.data[prop] = string.data[prop];
    }
);
