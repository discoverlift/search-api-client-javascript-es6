# UpliftCatalogClientJavascript.SearchParams

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**keyphrase** | **String** | Query keyphrase. Empty keyphrase means return all documents. | [optional] 
**attributesToRetrieve** | **[String]** | List of attributes to return for each document. By default, returns all attributes. Returning all attributes can increase response size and latency. | 
**language** | **String** | Language iso code | 
**facets** | [**FacetParams**](FacetParams.md) |  | [optional] 
**filters** | **String** | Filters for search. Follow same language as Algolia (https://www.algolia.com/doc/api-reference/api-parameters/filters/). Implemented using pyparse (https://stackoverflow.com/questions/11133339/parsing-a-complex-logical-expression-in-pyparsing-in-a-binary-tree-fashion) | [optional] 
**highlightParams** | [**SearchHighlightParams**](SearchHighlightParams.md) |  | [optional] 
**paginationParams** | [**PaginationParams**](PaginationParams.md) |  | 
**rankingParams** | [**RankingParams**](RankingParams.md) |  | 
**personalizationParams** | [**PersonalizationParams**](PersonalizationParams.md) |  | 


