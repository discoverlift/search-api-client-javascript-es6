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
    root.UpliftCatalogClientJavascript.HighlightResponse = factory(root.UpliftCatalogClientJavascript.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';



  /**
   * The HighlightResponse model module.
   * @module model/HighlightResponse
   * @version 1.3.0
   */

  /**
   * Constructs a new <code>HighlightResponse</code>.
   * Highlight response for a field
   * @alias module:model/HighlightResponse
   * @class
   */
  var exports = function() {
    var _this = this;

  };

  /**
   * Constructs a <code>HighlightResponse</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/HighlightResponse} obj Optional instance to populate.
   * @return {module:model/HighlightResponse} The populated <code>HighlightResponse</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();
      if (data.hasOwnProperty('fieldName')) {
        obj['fieldName'] = ApiClient.convertToType(data['fieldName'], 'String');
      }
      if (data.hasOwnProperty('highlightText')) {
        obj['highlightText'] = ApiClient.convertToType(data['highlightText'], ['String']);
      }
    }
    return obj;
  }

  /**
   * @member {String} fieldName
   */
  exports.prototype['fieldName'] = undefined;
  /**
   * @member {Array.<String>} highlightText
   */
  exports.prototype['highlightText'] = undefined;



  return exports;
}));


