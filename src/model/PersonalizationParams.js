/**
 * Catalog API
 * This is the API for retrieving items from your catalog.
 *
 * The version of the OpenAPI document: 1.3.0
 * Contact: ajit.singh@discoverlift.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 *
 * OpenAPI Generator version: 4.3.1
 *
 * Do not edit the class manually.
 *
 */

(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define(['ApiClient'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'));
  } else {
    // Browser globals (root is window)
    if (!root.UpliftCatalogClientJavascript) {
      root.UpliftCatalogClientJavascript = {};
    }
    root.UpliftCatalogClientJavascript.PersonalizationParams = factory(root.UpliftCatalogClientJavascript.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';



  /**
   * The PersonalizationParams model module.
   * @module model/PersonalizationParams
   * @version 1.3.0
   */

  /**
   * Constructs a new <code>PersonalizationParams</code>.
   * @alias module:model/PersonalizationParams
   * @class
   */
  var exports = function() {
    var _this = this;

  };

  /**
   * Constructs a <code>PersonalizationParams</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/PersonalizationParams} obj Optional instance to populate.
   * @return {module:model/PersonalizationParams} The populated <code>PersonalizationParams</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();
      if (data.hasOwnProperty('userToken')) {
        obj['userToken'] = ApiClient.convertToType(data['userToken'], 'String');
      }
      if (data.hasOwnProperty('enablePersonalization')) {
        obj['enablePersonalization'] = ApiClient.convertToType(data['enablePersonalization'], 'Boolean');
      }
    }
    return obj;
  }

  /**
   * A token identifying the user. Only required if 'enablePersonalization' is 'true'
   * @member {String} userToken
   */
  exports.prototype['userToken'] = undefined;
  /**
   * Whether to enable personalization or not
   * @member {Boolean} enablePersonalization
   * @default false
   */
  exports.prototype['enablePersonalization'] = false;



  return exports;
}));


