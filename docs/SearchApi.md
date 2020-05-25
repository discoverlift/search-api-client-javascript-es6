# UpliftCatalogClientJavascript.SearchApi

All URIs are relative to *https://api.prod.discoverlift.com/catalog-api*

Method | HTTP request | Description
------------- | ------------- | -------------
[**searchCatalog**](SearchApi.md#searchCatalog) | **POST** /v1/domain/{domainId}/catalog/{catalogId}/search | 
[**v1DomainDomainIdCatalogCatalogIdSearchOptions**](SearchApi.md#v1DomainDomainIdCatalogCatalogIdSearchOptions) | **OPTIONS** /v1/domain/{domainId}/catalog/{catalogId}/search | Options Call



## searchCatalog

> SearchResponse searchCatalog(domainId, catalogId, searchRequest)



### Example

```javascript
import UpliftCatalogClientJavascript from 'uplift-catalog-client-javascript';

let apiInstance = new UpliftCatalogClientJavascript.SearchApi();
let domainId = "domainId_example"; // String | Domain Id
let catalogId = "catalogId_example"; // String | Catalog Id
let searchRequest = new UpliftCatalogClientJavascript.SearchRequest(); // SearchRequest | 
apiInstance.searchCatalog(domainId, catalogId, searchRequest).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **domainId** | **String**| Domain Id | 
 **catalogId** | **String**| Catalog Id | 
 **searchRequest** | [**SearchRequest**](SearchRequest.md)|  | 

### Return type

[**SearchResponse**](SearchResponse.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## v1DomainDomainIdCatalogCatalogIdSearchOptions

> v1DomainDomainIdCatalogCatalogIdSearchOptions(domainId, catalogId)

Options Call

### Example

```javascript
import UpliftCatalogClientJavascript from 'uplift-catalog-client-javascript';

let apiInstance = new UpliftCatalogClientJavascript.SearchApi();
let domainId = "domainId_example"; // String | Domain Id
let catalogId = "catalogId_example"; // String | Catalog Id
apiInstance.v1DomainDomainIdCatalogCatalogIdSearchOptions(domainId, catalogId).then(() => {
  console.log('API called successfully.');
}, (error) => {
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

