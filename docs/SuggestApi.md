# UpliftCatalogClientJavascript.SuggestApi

All URIs are relative to *https://api.prod.discoverlift.com/catalog-api*

Method | HTTP request | Description
------------- | ------------- | -------------
[**suggest**](SuggestApi.md#suggest) | **POST** /v1/domain/{domainId}/catalog/{catalogId}/suggest | 
[**v1DomainDomainIdCatalogCatalogIdSuggestOptions**](SuggestApi.md#v1DomainDomainIdCatalogCatalogIdSuggestOptions) | **OPTIONS** /v1/domain/{domainId}/catalog/{catalogId}/suggest | Options Call



## suggest

> SuggestResponse suggest(domainId, catalogId, suggestRequest)



### Example

```javascript
var UpliftCatalogClientJavascript = require('uplift-catalog-client-javascript');

var apiInstance = new UpliftCatalogClientJavascript.SuggestApi();
var domainId = "domainId_example"; // String | Domain Id
var catalogId = "catalogId_example"; // String | Catalog Id
var suggestRequest = new UpliftCatalogClientJavascript.SuggestRequest(); // SuggestRequest | 
apiInstance.suggest(domainId, catalogId, suggestRequest).then(function(data) {
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
 **suggestRequest** | [**SuggestRequest**](SuggestRequest.md)|  | 

### Return type

[**SuggestResponse**](SuggestResponse.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## v1DomainDomainIdCatalogCatalogIdSuggestOptions

> v1DomainDomainIdCatalogCatalogIdSuggestOptions(domainId, catalogId)

Options Call

### Example

```javascript
var UpliftCatalogClientJavascript = require('uplift-catalog-client-javascript');

var apiInstance = new UpliftCatalogClientJavascript.SuggestApi();
var domainId = "domainId_example"; // String | Domain Id
var catalogId = "catalogId_example"; // String | Catalog Id
apiInstance.v1DomainDomainIdCatalogCatalogIdSuggestOptions(domainId, catalogId).then(function() {
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

