# UpliftSearchClientJavascript.SuggestApi

All URIs are relative to *https://api.prod.discoverlift.com/search-api*

Method | HTTP request | Description
------------- | ------------- | -------------
[**suggest**](SuggestApi.md#suggest) | **POST** /v1/domain/{domainId}/catalog/{catalogId}/suggest | 
[**v1DomainDomainIdCatalogCatalogIdSuggestOptions**](SuggestApi.md#v1DomainDomainIdCatalogCatalogIdSuggestOptions) | **OPTIONS** /v1/domain/{domainId}/catalog/{catalogId}/suggest | Options Call


<a name="suggest"></a>
# **suggest**
> SuggestResponse suggest(catalogId, domainIdsuggestRequest)



### Example
```javascript
var UpliftSearchClientJavascript = require('uplift-search-client-javascript');

var apiInstance = new UpliftSearchClientJavascript.SuggestApi();

var catalogId = "catalogId_example"; // String | 

var domainId = "domainId_example"; // String | 

var suggestRequest = new UpliftSearchClientJavascript.SuggestRequest(); // SuggestRequest | 

apiInstance.suggest(catalogId, domainIdsuggestRequest).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **catalogId** | **String**|  | 
 **domainId** | **String**|  | 
 **suggestRequest** | [**SuggestRequest**](SuggestRequest.md)|  | 

### Return type

[**SuggestResponse**](SuggestResponse.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="v1DomainDomainIdCatalogCatalogIdSuggestOptions"></a>
# **v1DomainDomainIdCatalogCatalogIdSuggestOptions**
> v1DomainDomainIdCatalogCatalogIdSuggestOptions(catalogId, domainId)

Options Call

### Example
```javascript
var UpliftSearchClientJavascript = require('uplift-search-client-javascript');

var apiInstance = new UpliftSearchClientJavascript.SuggestApi();

var catalogId = "catalogId_example"; // String | 

var domainId = "domainId_example"; // String | 

apiInstance.v1DomainDomainIdCatalogCatalogIdSuggestOptions(catalogId, domainId).then(function() {
  console.log('API called successfully.');
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **catalogId** | **String**|  | 
 **domainId** | **String**|  | 

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

