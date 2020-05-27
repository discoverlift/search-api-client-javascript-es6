# UpliftCatalogClientJavascript.RecommendationApi

All URIs are relative to *https://api.prod.discoverlift.com/catalog-api*

Method | HTTP request | Description
------------- | ------------- | -------------
[**getRecommendations**](RecommendationApi.md#getRecommendations) | **POST** /v1/domain/{domainId}/catalog/{catalogId}/recommendation | 
[**v1DomainDomainIdCatalogCatalogIdRecommendationOptions**](RecommendationApi.md#v1DomainDomainIdCatalogCatalogIdRecommendationOptions) | **OPTIONS** /v1/domain/{domainId}/catalog/{catalogId}/recommendation | Options Call



## getRecommendations

> RecommendationResponse getRecommendations(domainId, catalogId, recommendationRequest)



### Example

```javascript
var UpliftCatalogClientJavascript = require('uplift-catalog-client-javascript');

var apiInstance = new UpliftCatalogClientJavascript.RecommendationApi();
var domainId = "domainId_example"; // String | Domain Id
var catalogId = "catalogId_example"; // String | Catalog Id
var recommendationRequest = new UpliftCatalogClientJavascript.RecommendationRequest(); // RecommendationRequest | 
apiInstance.getRecommendations(domainId, catalogId, recommendationRequest).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters



Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **domainId** | **String**| Domain Id | 
 **catalogId** | **String**| Catalog Id | 
 **recommendationRequest** | [**RecommendationRequest**](RecommendationRequest.md)|  | 

### Return type

[**RecommendationResponse**](RecommendationResponse.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## v1DomainDomainIdCatalogCatalogIdRecommendationOptions

> v1DomainDomainIdCatalogCatalogIdRecommendationOptions(domainId, catalogId)

Options Call

### Example

```javascript
var UpliftCatalogClientJavascript = require('uplift-catalog-client-javascript');

var apiInstance = new UpliftCatalogClientJavascript.RecommendationApi();
var domainId = "domainId_example"; // String | Domain Id
var catalogId = "catalogId_example"; // String | Catalog Id
apiInstance.v1DomainDomainIdCatalogCatalogIdRecommendationOptions(domainId, catalogId).then(function() {
  console.log('API called successfully.');
}, function(error) {
  console.error(error);
});

```

### Parameters



Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **domainId** | **String**| Domain Id | 
 **catalogId** | **String**| Catalog Id | 

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: Not defined

