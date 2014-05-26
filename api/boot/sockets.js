/**
 * HTTP API Design Abstract
 *
 * boot/sockets
 * Integrates socket interface to the Restful API
 *   @param <Socket.io> IO -- Sockey.io Object
 *   - Boots some web socket framework, probably socket.io
 *   - Initializes web socket server
 *   - Configures socket events
 *   - Configures the legacy adapter
 */

  var _ = require('underscore'),
      requireChildren = require('require-children');

  module.exports = function(IO) {
    var eventMap = require('sockets/events'),
        legacyAdapter = require('../sockets/legacy');

  }
