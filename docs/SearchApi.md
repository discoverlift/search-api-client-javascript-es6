# UpliftSearchClientJavascript.SearchApi

All URIs are relative to *https://api.prod.discoverlift.com/search-api*

Method | HTTP request | Description
------------- | ------------- | -------------
[**searchCatalog**](SearchApi.md#searchCatalog) | **POST** /v1/domain/{domainId}/catalog/{catalogId}/search | 


<a name="searchCatalog"></a>
# **searchCatalog**
> SearchResponse searchCatalog(catalogId, domainId, searchRequest)



### Example
```javascript
var UpliftSearchClientJavascript = require('uplift-search-client-javascript');

var apiInstance = new UpliftSearchClientJavascript.SearchApi();

var catalogId = "catalogId_example"; // String | 

var domainId = "domainId_example"; // String | 

var searchRequest = new UpliftSearchClientJavascript.SearchRequest(); // SearchRequest | 


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.searchCatalog(catalogId, domainId, searchRequest, callback);
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

