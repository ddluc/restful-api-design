/*
 * Blog Engine -- Middleware : streamline middleware into an ordered array
 * Created By Daniel Lucas
 */

module.exports = {
    _default: [require('./allowCrossDomainRequests')],
    checkPrivileges: require('./checkPrivileges')
};



