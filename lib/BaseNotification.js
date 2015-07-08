/**
 * Implement message
 * @type {String}
 * @private
 */
var IMPLEMENT_MESSAGE = 'Not implemented';

/**
 * Create base instance for push notifications
 * @param {Object} _config
 * @constructor
 */
function BaseNotification(_config) {
  var config = _config || {};

  Object.keys(config).forEach(function (key) {
    this.setConfig(key, config[key]);
  }.bind(this));
}

BaseNotification.prototype = {
  /**
   * Get configuration value
   * @param {String} [key]
   * @returns {*}
   */
  getConfig: function (key) {
    return typeof key === 'undefined' ? this._config : this._config && this._config[key];
  },

  /**
   * Set configuration value
   * @param {String} key
   * @param {*} value
   * @returns {BaseNotification}
   */
  setConfig: function (key, value) {
    this._config = this._config || {};
    this._config[key] = value;
    return this;
  },

  /**
   * Get provider for sending notifications
   * @returns {*}
   */
  getProvider: function () {
    return this._provider;
  },

  /**
   * Set new provider to this pusher
   * @param {*} provider
   * @returns {BaseNotification}
   */
  setProvider: function (provider) {
    this._provider = provider;
    return this;
  },

  /**
   * Send push notification
   */
  send: function () {
    throw new Error(IMPLEMENT_MESSAGE);
  }
};

module.exports = BaseNotification;