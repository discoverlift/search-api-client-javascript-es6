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
    define(['ApiClient', 'model/FacetResponseValues'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./FacetResponseValues'));
  } else {
    // Browser globals (root is window)
    if (!root.UpliftCatalogClientJavascript) {
      root.UpliftCatalogClientJavascript = {};
    }
    root.UpliftCatalogClientJavascript.FacetResponse = factory(root.UpliftCatalogClientJavascript.ApiClient, root.UpliftCatalogClientJavascript.FacetResponseValues);
  }
}(this, function(ApiClient, FacetResponseValues) {
  'use strict';



  /**
   * The FacetResponse model module.
   * @module model/FacetResponse
   * @version 1.3.0
   */

  /**
   * Constructs a new <code>FacetResponse</code>.
   * @alias module:model/FacetResponse
   * @class
   */
  var exports = function() {
    var _this = this;

  };

  /**
   * Constructs a <code>FacetResponse</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/FacetResponse} obj Optional instance to populate.
   * @return {module:model/FacetResponse} The populated <code>FacetResponse</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();
      if (data.hasOwnProperty('attributeName')) {
        obj['attributeName'] = ApiClient.convertToType(data['attributeName'], 'String');
      }
      if (data.hasOwnProperty('numDistinctValues')) {
        obj['numDistinctValues'] = ApiClient.convertToType(data['numDistinctValues'], 'Number');
      }
      if (data.hasOwnProperty('values')) {
        obj['values'] = ApiClient.convertToType(data['values'], [FacetResponseValues]);
      }
    }
    return obj;
  }

  /**
   * @member {String} attributeName
   */
  exports.prototype['attributeName'] = undefined;
  /**
   * Total number of distinct values this attribute holds
   * @member {Number} numDistinctValues
   */
  exports.prototype['numDistinctValues'] = undefined;
  /**
   * @member {Array.<module:model/FacetResponseValues>} values
   */
  exports.prototype['values'] = undefined;



  return exports;
}));


