<h1>Codebook for Hotel Reviews Dataset</h1>
Hotels reviews - https://www.kaggle.com/jiashenliu/515k-hotel-reviews-data-in-europe

<h3>Team</h3>
Noa Barbiro, Yanir Calisar, Koby (Yaakov) Shmama


<h2>Data Overview</h2>
<h3>Credentials and Source</h3>
This data set located can be downloaded from Kaggle data sets, originated from Booking.com and includes 515,739 anonymized users reviews of hotels across Europe (including text reviews and ratings) in the timeframe ranging from 8/4/2015 to 8/3/2017.
The direct link to data is: <https://www.kaggle.com/jiashenliu/515k-hotel-reviews-data-in-europe>

<h3>Business Goals</h3>
<b>This data collected could be used to answer the following questions:</b>
1. Which hotels are rated higher or lower than other based on guests’ reviews?
2. For hotels which are in the lowest quartile, rating wise, are the negative reviews in average longer than the rest of the hotels?
3. If there is a general rule we can infer from the data on the type of hotels and the population they are targeted to be rated higher than others?
4. Where are the reviewed hotels located?
5. What are the common negative/positive keywords guests use for their reviews
6. Where would a family with young kids preferably be traveling to?
7. If a successful SPA chain would like to open new branch - which of the hotels it should choose to do so?
8. Is there a correlation between number of reviews the reviewer has given to their being more positive or negative?
9. How are Israel hotels ranked vs. rest of Europe hotels?

<b>Who needs to review your business questions before you analyze?</b>
Depending on the business question raised, mainly review the data to ensure its completeness and integrity (full sequence over time, no missing records).

Find an academic article (patent or blog) that relates to data similar to yours. What was the main conclusion on it. Can you look for similar conclusions in your data?
Blog post by Bruno Stecanella at <https://monkeylearn.com/blog/machine-learning-hotel-reviews-insights/> revealed results of over 1M reviews recorded on TripAdvisor.
As for the conclusions of the data - more reviews were positive, out of the negative reviews London was awarded with the highest percentage of negative reviews, there is a positive correlation between number of start to the positive percentage of reviews.


<h2>Data description</h2>

| Var label                                  | Var description                                                                                                                                              | Var type | Possible values and value                                                                                                | Min. | 1st Qu. | Median | Mean        | 3rd Qu. | Max.  | Missing Values |
|--------------------------------------------|--------------------------------------------------------------------------------------------------------------------------------------------------------------|----------|--------------------------------------------------------------------------------------------------------------------------|------|---------|--------|-------------|---------|-------|----------------|
| Hotel_Address                              | Address of hotel                                                                                                                                             | String   | w/ 1493 levels " s Gravesandestraat 55 Oost 1092 AA Amsterdam Netherlands",..: 1 1 1 1 1 1 1 1 1 1 ...                   |      |         |        |             |         |       | 0              |
| Additional_Number_of_Scoring               | There are also some guests who just made a scoring on the service rather than a review. This number indicates how many valid scores without review in there. | Numeric  | 194 194 194 194 194 194 194 194 194 194 ...                                                                              | 1    | 169     | 341    | 498.0818361 | 660     | 2682  | 0              |
| Review_Date                                | Date when reviewer posted the corresponding review.                                                                                                          | DateTime | "1/1/2016","1/1/2017",..                                                                                                 |      |         |        |             |         |       | 0              |
| Average_Score                              | Average Score of the hotel, calculated based on the latest comment in the last year.                                                                         | Numeric  | 7.7 7.7 7.7 7.7 7.7 7.7 7.7 7.7 7.7 7.7 ...                                                                              | 5.2  | 8.1     | 8.4    | 8.397486902 | 8.8     | 9.8   | 0              |
| Hotel_Name                                 | Name of Hotel                                                                                                                                                | String   | "11 Cadogan Gardens",..                                                                                                  |      |         |        |             |         |       | 0              |
| Reviewer_Nationality                       | Nationality of Reviewer                                                                                                                                      | String   | " Abkhazia Georgia ",..                                                                                                  |      |         |        |             |         |       | 0              |
| Negative_Review                            | Negative Review the reviewer gave to the hotel. If the reviewer does not give the negative review, then it should be: 'No Negative'                          | String   | " 0 00 Comments "                                                                                                        |      |         |        |             |         |       | 0              |
| Review_Total_Negative_Word_Counts          | Total number of words in the negative review.                                                                                                                | Numeric  | 0 42 210 140 17 33 11 34 15 ...                                                                                          | 0    | 2       | 9      | 18.53945026 | 23      | 408   | 0              |
| Total_Number_of_Reviews                    | Total number of valid reviews the hotel has.                                                                                                                 | Numeric  | 1403 1403 1403 1403 1403 1403 1403 1403 1403 1403 ...                                                                    | 43   | 1161    | 2134   | 2743.743944 | 3613    | 16670 | 0              |
| Positive_Review                            | Positive Review the reviewer gave to the hotel. If the reviewer does not give the negative review, then it should be: 'No Positive'                          | String   | 0 noises Good sleep 10 minutes from bus or metro ",..                                                                    |      |         |        |             |         |       | 0              |
| Review_Total_Positive_Word_Counts          | Total number of words in the positive review.                                                                                                                | Numeric  | 11 105 21 26 8 20 18 19 0 50 ...                                                                                         | 0    | 5       | 11     | 17.7764582  | 22      | 395   | 0              |
| Total_Number_of_Reviews_Reviewer_Has_Given | Number of Reviews the reviewers has given in the past.                                                                                                       | Numeric  | 7 7 9 1 3 1 6 1 3 1 ...                                                                                                  | 1    | 1       | 3      | 7.166000954 | 8       | 355   | 0              |
| Reviewer_Score                             | Score the reviewer has given to the hotel, based on his/her experience                                                                                       | Numeric  | 2.9 7.5 7.1 3.8 6.7 6.7 4.6 10 6.5 7.9 ...                                                                               | 2.5  | 7.5     | 8.8    | 8.39507657  | 9.6     | 10    | 0              |
| Tags                                       | Tags reviewer gave the hotel.                                                                                                                                | String   | "[' Business trip ', ' Couple ', ' 1 King Bed Guest Room ', ' Stayed 2 nights ', ' Submitted from a mobile device ']",.. |      |         |        |             |         |       | 0              |
| days_since_review                          | Duration between the review date and scrape date.                                                                                                            | String   | "0 days","1 days",..                                                                                                     |      |         |        |             |         |       | 0              |
| lat                                        | Latitude of the hotel                                                                                                                                        | Numeric  | 52.4 52.4 52.4 52.4 52.4 ...                                                                                             |      |         |        |             |         |       | 3268           |
| lng                                        | Longtitude of the hotel                                                                                                                                      | Numeric  | 4.92 4.92 4.92 4.92 4.92 ...                                                                                             |      |         |        |             |         |       | 3268           |
