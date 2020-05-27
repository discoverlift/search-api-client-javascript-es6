# UpliftCatalogClientJavascript.RecommendationParams

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**recommendationType** | **String** |  | 
**context** | [**[RecommendationContext]**](RecommendationContext.md) | Each recommendation request can have any number of context properties which help guide the recommendation algorithm. | [optional] 
**attributesToRetrieve** | **[String]** | List of attributes to return for each document. By default, returns all attributes. Returning all attributes can increase response size and latency. | 
**language** | **String** | Language iso code | 
**filters** | **String** | Filters for search. Follow same language as Algolia (https://www.algolia.com/doc/api-reference/api-parameters/filters/). Implemented using pyparse (https://stackoverflow.com/questions/11133339/parsing-a-complex-logical-expression-in-pyparsing-in-a-binary-tree-fashion) | [optional] 
**paginationParams** | [**PaginationParams**](PaginationParams.md) |  | 
**rankingParams** | [**RankingParams**](RankingParams.md) |  | 
**personalizationParams** | [**PersonalizationParams**](PersonalizationParams.md) |  | 



## Enum: RecommendationTypeEnum


* `related` (value: `"related"`)

* `popular` (value: `"popular"`)




