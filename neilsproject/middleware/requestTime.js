
var requestTime = function (req, res, next) {
    req.requestTime = new Date();
    next()
}

module.exports = {
    requestTime
}