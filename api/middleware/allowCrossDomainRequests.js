/**
 * HTTP API Design Abstract
 *
 * middleware/allowCrossDomainRequests
 * - Adds Access-Control-Allow-Origin HTTP headers for AJAX requests
 */

module.exports = function(req, res, next) {
    res.header('Access-Control-Allow-Origin', '*');
    next();
};
