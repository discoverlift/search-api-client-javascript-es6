# UpliftCatalogClientJavascript.FetchApi

All URIs are relative to *https://api.prod.discoverlift.com/catalog-api*

Method | HTTP request | Description
------------- | ------------- | -------------
[**fetchDocument**](FetchApi.md#fetchDocument) | **POST** /v1/domain/{domainId}/catalog/{catalogId}/fetch | 
[**v1DomainDomainIdCatalogCatalogIdFetchOptions**](FetchApi.md#v1DomainDomainIdCatalogCatalogIdFetchOptions) | **OPTIONS** /v1/domain/{domainId}/catalog/{catalogId}/fetch | Options Call



## fetchDocument

> FetchResponse fetchDocument(domainId, catalogId, opts)



### Example

```javascript
import UpliftCatalogClientJavascript from 'uplift-catalog-client-javascript';

let apiInstance = new UpliftCatalogClientJavascript.FetchApi();
let domainId = "domainId_example"; // String | Domain Id
let catalogId = "catalogId_example"; // String | Catalog Id
let opts = {
  'fetchRequest': new UpliftCatalogClientJavascript.FetchRequest() // FetchRequest | 
};
apiInstance.fetchDocument(domainId, catalogId, opts).then((data) => {
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
 **fetchRequest** | [**FetchRequest**](FetchRequest.md)|  | [optional] 

### Return type

[**FetchResponse**](FetchResponse.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## v1DomainDomainIdCatalogCatalogIdFetchOptions

> v1DomainDomainIdCatalogCatalogIdFetchOptions(domainId, catalogId)

Options Call

### Example

```javascript
import UpliftCatalogClientJavascript from 'uplift-catalog-client-javascript';

let apiInstance = new UpliftCatalogClientJavascript.FetchApi();
let domainId = "domainId_example"; // String | Domain Id
let catalogId = "catalogId_example"; // String | Catalog Id
apiInstance.v1DomainDomainIdCatalogCatalogIdFetchOptions(domainId, catalogId).then(() => {
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

