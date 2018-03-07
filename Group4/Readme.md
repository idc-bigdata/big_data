# Group 4 - Wine 🍷

###### Team naming list

- ![N|Solid](https://avatars2.githubusercontent.com/u/33748704?s=40&v=4) [Rotem Zaarour](https://github.com/rotemzaarour)
- ![N|Solid]() Dor Heldshtein
- ![N|Solid](https://avatars0.githubusercontent.com/u/33801999?s=64&v=4) [Lior Rosen](https://github.com/liorrosen) 


# Wine Reviews Data
130k wine reviews with variety, location, winery, price, and description from ![N|Solid](https://www.kaggle.com/static/images/site-logo.png)

You can download the data (Zip file) from the link below or [clik here](https://www.kaggle.com/zynicide/wine-reviews/downloads/winemag-data-130k-v2.csv/4)

https://www.kaggle.com/zynicide/wine-reviews/downloads/winemag-data-130k-v2.csv/4


# Codeboook:

### Business goal
The business objective of the presented concept is to provide helpful tools for these retailers to decide in which market should they focus and how to maximize their profits by customizing their selling approach
Therefore we would like to develop a machine learning model that will be able to:
1.	estimate the market price of wines price.
2.	predict which descriptions should be used for wine marketing purposes to maximize potential profit

### Dataset
| Variable Name | Description | Type | Possible values |
| ------ | ------ | ------ | ------ |
|country | Wine origin | character | 48 types. US, france and italy with most review (75%). No NA's but few blanks cells |
|description | Professional review describing the wine's taste, smell, look, etc. | character | description length between 20-829 chars (3-135 words) |
|designation | Vineyard designation | character | one of 30503 types |
|points | Wine Enthusiast ranks wines on a 100 points scale with only 80+ point wines receiving a written review | Integer | 80-100 |
|price | Cost per bottle | Integer | 4-3300$ with mean of 35.3, some NA's |
|province | the Province of the wine | character | 426 types, California with the most reviews |
|region_1 | the region in the specific province if provided  | character | 1230 types, Napa Valley with the most reviews, some blanks |
|region_2 | Sub-region | character | mostly balnks (79,460) |
|taster_name | The review writer for the Wine Enthuasist site | character | 20 different names, most of the reviews (26244) written by Alexander Peartree. There are 26,244 reviews without taster name |
|taster_twitter_handle | the writer twitter account | character | format: @taster_nickname |
|title | the title of the wine as written on the bottle | character | format: wine name, year, variety, (region) |
|variety | the variety of the wine (usually the grape type) | character | 708 types of wine variety Pinot Noir for exemple with most reviews |
|winery | Winery name | character | 16,757 types of wineries.  |
