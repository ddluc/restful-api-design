/**
 * HTTP API Design Abstract
 *
 * middleware/index
 * - Loads custom middleware
 * - Default middleware is added to all API resources
 * - All other middleware is loaded by the resource as needed
 */

module.exports = {
    _default: [require('./allowCrossDomainRequests')],
    checkPrivileges: require('./checkPrivileges')
};
