# UpliftSearchClientJavascript.SearchParams

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**keyphrase** | **String** | Query keyphrase. Empty keyphrase means return all documents. | [optional] 
**attributesToRetrieve** | **[String]** | List of attributes to return for each document. By default, returns all attributes. Returning all attributes can increase response size and latency. | 
**language** | [**Language**](Language.md) |  | 
**facets** | [**FacetParams**](FacetParams.md) |  | [optional] 
**filters** | [**FilterParams**](FilterParams.md) |  | [optional] 
**highlightParams** | [**SearchHighlightParams**](SearchHighlightParams.md) |  | [optional] 
**paginationParams** | [**PaginationParams**](PaginationParams.md) |  | 
**rankingParams** | [**RankingParams**](RankingParams.md) |  | 
**personalizationParams** | [**PersonalizationParams**](PersonalizationParams.md) |  | 


