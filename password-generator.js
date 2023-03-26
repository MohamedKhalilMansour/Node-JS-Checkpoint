var generator = require('generate-password');
var password = generator.generate({
    numbers: true,
    uppercase: false,
    strict: true
});
console.log("The Password is:",password);

module.exports = password;
