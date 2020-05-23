# UpliftSearchClientJavascript.SuggestApi

All URIs are relative to *https://api.prod.discoverlift.com/search-api*

Method | HTTP request | Description
------------- | ------------- | -------------
[**suggest**](SuggestApi.md#suggest) | **POST** /v1/domain/{domainId}/catalog/{catalogId}/suggest | 


<a name="suggest"></a>
# **suggest**
> SuggestResponse suggest(catalogId, domainId, suggestRequest)



### Example
```javascript
var UpliftSearchClientJavascript = require('uplift-search-client-javascript');

var apiInstance = new UpliftSearchClientJavascript.SuggestApi();

var catalogId = "catalogId_example"; // String | 

var domainId = "domainId_example"; // String | 

var suggestRequest = new UpliftSearchClientJavascript.SuggestRequest(); // SuggestRequest | 


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.suggest(catalogId, domainId, suggestRequest, callback);
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

