# UpliftSearchClientJavascript.SearchApi

All URIs are relative to *https://api.prod.discoverlift.com/search-api*

Method | HTTP request | Description
------------- | ------------- | -------------
[**searchCatalog**](SearchApi.md#searchCatalog) | **POST** /v1/domain/{domainId}/catalog/{catalogId}/search | 
[**v1DomainDomainIdCatalogCatalogIdSearchOptions**](SearchApi.md#v1DomainDomainIdCatalogCatalogIdSearchOptions) | **OPTIONS** /v1/domain/{domainId}/catalog/{catalogId}/search | Options Call


<a name="searchCatalog"></a>
# **searchCatalog**
> SearchResponse searchCatalog(catalogId, domainIdsearchRequest)



### Example
```javascript
var UpliftSearchClientJavascript = require('uplift-search-client-javascript');

var apiInstance = new UpliftSearchClientJavascript.SearchApi();

var catalogId = "catalogId_example"; // String | 

var domainId = "domainId_example"; // String | 

var searchRequest = new UpliftSearchClientJavascript.SearchRequest(); // SearchRequest | 

apiInstance.searchCatalog(catalogId, domainIdsearchRequest).then(function(data) {
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
 **searchRequest** | [**SearchRequest**](SearchRequest.md)|  | 

### Return type

[**SearchResponse**](SearchResponse.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="v1DomainDomainIdCatalogCatalogIdSearchOptions"></a>
# **v1DomainDomainIdCatalogCatalogIdSearchOptions**
> v1DomainDomainIdCatalogCatalogIdSearchOptions(catalogId, domainId)

Options Call

### Example
```javascript
var UpliftSearchClientJavascript = require('uplift-search-client-javascript');

var apiInstance = new UpliftSearchClientJavascript.SearchApi();

var catalogId = "catalogId_example"; // String | 

var domainId = "domainId_example"; // String | 

apiInstance.v1DomainDomainIdCatalogCatalogIdSearchOptions(catalogId, domainId).then(function() {
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

