/*
 * Search API
 * This is the API for getting search results.
 *
 * OpenAPI spec version: 1.1.0
 * Contact: ajit.singh@discoverlift.com
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 *
 * Swagger Codegen version: 2.4.13
 *
 * Do not edit the class manually.
 *
 */

(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD.
    define(['expect.js', '../../src/index'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    factory(require('expect.js'), require('../../src/index'));
  } else {
    // Browser globals (root is window)
    factory(root.expect, root.UpliftSearchClientJavascript);
  }
}(this, function(expect, UpliftSearchClientJavascript) {
  'use strict';

  var instance;

  describe('(package)', function() {
    describe('SearchParams', function() {
      beforeEach(function() {
        instance = new UpliftSearchClientJavascript.SearchParams();
      });

      it('should create an instance of SearchParams', function() {
        // TODO: update the code to test SearchParams
        expect(instance).to.be.a(UpliftSearchClientJavascript.SearchParams);
      });

      it('should have the property keyphrase (base name: "keyphrase")', function() {
        // TODO: update the code to test the property keyphrase
        expect(instance).to.have.property('keyphrase');
        // expect(instance.keyphrase).to.be(expectedValueLiteral);
      });

      it('should have the property attributesToRetrieve (base name: "attributesToRetrieve")', function() {
        // TODO: update the code to test the property attributesToRetrieve
        expect(instance).to.have.property('attributesToRetrieve');
        // expect(instance.attributesToRetrieve).to.be(expectedValueLiteral);
      });

      it('should have the property language (base name: "language")', function() {
        // TODO: update the code to test the property language
        expect(instance).to.have.property('language');
        // expect(instance.language).to.be(expectedValueLiteral);
      });

      it('should have the property facets (base name: "facets")', function() {
        // TODO: update the code to test the property facets
        expect(instance).to.have.property('facets');
        // expect(instance.facets).to.be(expectedValueLiteral);
      });

      it('should have the property filters (base name: "filters")', function() {
        // TODO: update the code to test the property filters
        expect(instance).to.have.property('filters');
        // expect(instance.filters).to.be(expectedValueLiteral);
      });

      it('should have the property highlightParams (base name: "highlightParams")', function() {
        // TODO: update the code to test the property highlightParams
        expect(instance).to.have.property('highlightParams');
        // expect(instance.highlightParams).to.be(expectedValueLiteral);
      });

      it('should have the property paginationParams (base name: "paginationParams")', function() {
        // TODO: update the code to test the property paginationParams
        expect(instance).to.have.property('paginationParams');
        // expect(instance.paginationParams).to.be(expectedValueLiteral);
      });

      it('should have the property rankingParams (base name: "rankingParams")', function() {
        // TODO: update the code to test the property rankingParams
        expect(instance).to.have.property('rankingParams');
        // expect(instance.rankingParams).to.be(expectedValueLiteral);
      });

      it('should have the property personalizationParams (base name: "personalizationParams")', function() {
        // TODO: update the code to test the property personalizationParams
        expect(instance).to.have.property('personalizationParams');
        // expect(instance.personalizationParams).to.be(expectedValueLiteral);
      });

    });
  });

}));