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

(function(factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define(['ApiClient', 'model/Document', 'model/FacetParams', 'model/FacetResponse', 'model/FacetResponseValues', 'model/FilterParams', 'model/HighlightResponse', 'model/PaginationParams', 'model/PersonalizationParams', 'model/QueryPerformance', 'model/RankingParams', 'model/RequestParams', 'model/SearchHighlightParams', 'model/SearchParams', 'model/SearchRequest', 'model/SearchResponse', 'model/SuggestHighlightParams', 'model/SuggestParams', 'model/SuggestParamsSuggestionSource', 'model/SuggestRequest', 'model/SuggestResponse', 'api/SearchApi', 'api/SuggestApi'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('./ApiClient'), require('./model/Document'), require('./model/FacetParams'), require('./model/FacetResponse'), require('./model/FacetResponseValues'), require('./model/FilterParams'), require('./model/HighlightResponse'), require('./model/PaginationParams'), require('./model/PersonalizationParams'), require('./model/QueryPerformance'), require('./model/RankingParams'), require('./model/RequestParams'), require('./model/SearchHighlightParams'), require('./model/SearchParams'), require('./model/SearchRequest'), require('./model/SearchResponse'), require('./model/SuggestHighlightParams'), require('./model/SuggestParams'), require('./model/SuggestParamsSuggestionSource'), require('./model/SuggestRequest'), require('./model/SuggestResponse'), require('./api/SearchApi'), require('./api/SuggestApi'));
  }
}(function(ApiClient, Document, FacetParams, FacetResponse, FacetResponseValues, FilterParams, HighlightResponse, PaginationParams, PersonalizationParams, QueryPerformance, RankingParams, RequestParams, SearchHighlightParams, SearchParams, SearchRequest, SearchResponse, SuggestHighlightParams, SuggestParams, SuggestParamsSuggestionSource, SuggestRequest, SuggestResponse, SearchApi, SuggestApi) {
  'use strict';

  /**
   * Uplift Search API Client.<br>
   * The <code>index</code> module provides access to constructors for all the classes which comprise the public API.
   * <p>
   * An AMD (recommended!) or CommonJS application will generally do something equivalent to the following:
   * <pre>
   * var UpliftSearchClientJavascript = require('index'); // See note below*.
   * var xxxSvc = new UpliftSearchClientJavascript.XxxApi(); // Allocate the API class we're going to use.
   * var yyyModel = new UpliftSearchClientJavascript.Yyy(); // Construct a model instance.
   * yyyModel.someProperty = 'someValue';
   * ...
   * var zzz = xxxSvc.doSomething(yyyModel); // Invoke the service.
   * ...
   * </pre>
   * <em>*NOTE: For a top-level AMD script, use require(['index'], function(){...})
   * and put the application logic within the callback function.</em>
   * </p>
   * <p>
   * A non-AMD browser application (discouraged) might do something like this:
   * <pre>
   * var xxxSvc = new UpliftSearchClientJavascript.XxxApi(); // Allocate the API class we're going to use.
   * var yyy = new UpliftSearchClientJavascript.Yyy(); // Construct a model instance.
   * yyyModel.someProperty = 'someValue';
   * ...
   * var zzz = xxxSvc.doSomething(yyyModel); // Invoke the service.
   * ...
   * </pre>
   * </p>
   * @module index
   * @version 1.1.0
   */
  var exports = {
    /**
     * The ApiClient constructor.
     * @property {module:ApiClient}
     */
    ApiClient: ApiClient,
    /**
     * The Document model constructor.
     * @property {module:model/Document}
     */
    Document: Document,
    /**
     * The FacetParams model constructor.
     * @property {module:model/FacetParams}
     */
    FacetParams: FacetParams,
    /**
     * The FacetResponse model constructor.
     * @property {module:model/FacetResponse}
     */
    FacetResponse: FacetResponse,
    /**
     * The FacetResponseValues model constructor.
     * @property {module:model/FacetResponseValues}
     */
    FacetResponseValues: FacetResponseValues,
    /**
     * The FilterParams model constructor.
     * @property {module:model/FilterParams}
     */
    FilterParams: FilterParams,
    /**
     * The HighlightResponse model constructor.
     * @property {module:model/HighlightResponse}
     */
    HighlightResponse: HighlightResponse,
    /**
     * The PaginationParams model constructor.
     * @property {module:model/PaginationParams}
     */
    PaginationParams: PaginationParams,
    /**
     * The PersonalizationParams model constructor.
     * @property {module:model/PersonalizationParams}
     */
    PersonalizationParams: PersonalizationParams,
    /**
     * The QueryPerformance model constructor.
     * @property {module:model/QueryPerformance}
     */
    QueryPerformance: QueryPerformance,
    /**
     * The RankingParams model constructor.
     * @property {module:model/RankingParams}
     */
    RankingParams: RankingParams,
    /**
     * The RequestParams model constructor.
     * @property {module:model/RequestParams}
     */
    RequestParams: RequestParams,
    /**
     * The SearchHighlightParams model constructor.
     * @property {module:model/SearchHighlightParams}
     */
    SearchHighlightParams: SearchHighlightParams,
    /**
     * The SearchParams model constructor.
     * @property {module:model/SearchParams}
     */
    SearchParams: SearchParams,
    /**
     * The SearchRequest model constructor.
     * @property {module:model/SearchRequest}
     */
    SearchRequest: SearchRequest,
    /**
     * The SearchResponse model constructor.
     * @property {module:model/SearchResponse}
     */
    SearchResponse: SearchResponse,
    /**
     * The SuggestHighlightParams model constructor.
     * @property {module:model/SuggestHighlightParams}
     */
    SuggestHighlightParams: SuggestHighlightParams,
    /**
     * The SuggestParams model constructor.
     * @property {module:model/SuggestParams}
     */
    SuggestParams: SuggestParams,
    /**
     * The SuggestParamsSuggestionSource model constructor.
     * @property {module:model/SuggestParamsSuggestionSource}
     */
    SuggestParamsSuggestionSource: SuggestParamsSuggestionSource,
    /**
     * The SuggestRequest model constructor.
     * @property {module:model/SuggestRequest}
     */
    SuggestRequest: SuggestRequest,
    /**
     * The SuggestResponse model constructor.
     * @property {module:model/SuggestResponse}
     */
    SuggestResponse: SuggestResponse,
    /**
     * The SearchApi service constructor.
     * @property {module:api/SearchApi}
     */
    SearchApi: SearchApi,
    /**
     * The SuggestApi service constructor.
     * @property {module:api/SuggestApi}
     */
    SuggestApi: SuggestApi
  };

  return exports;
}));
