Preparing The data for NLP
```{r}
#**************************************Data Preperation************************************
#NLP Module
#
setwd("C:/Users/shamak/Dropbox/MBA/ML/Hotel_G2")
df.hotel  = read.csv("hotel_reviews_enriched.csv")
#install.packages(c("ggplot2", "caret", "quanteda","irlba", "randomForest"))
library(ggplot2)
library(caret)
library(quanteda)
library(irlba)
library(randomForest)
library(ngram)
library(wordcloud)
library(qdap)
library(gplots)

#Setting memory limit
memory.limit(100000000000)


#Creating Subset of the united kingdom
df.hotel.uk <- df.hotel[which(grepl("GB",df.hotel$Hotel_Country)),]


df.hotel.uk.buisness <- df.hotel[which(grepl("Business trip",df.hotel$Trip_Type)),]
df.hotel.uk.Couple <- df.hotel[which(grepl("Couple",df.hotel$Trip_Type)),]
df.hotel.uk.Family <- df.hotel[which(grepl("Family",df.hotel$Trip_Type)),]

#************************************************************************************
#setting seed so we get same data split each time
#For Negative
set.seed(100) 
n <- nrow(df.hotel.uk)
shuffled_df <- df.hotel.uk[sample(n), ]
train_indices <- 1:round(0.7 * n)
train <- shuffled_df[train_indices, ]
test_indices <- (round(0.7 * n) + 1):n
test <- shuffled_df[test_indices, ]
testp <- shuffled_df[test_indices, ]

#For Buisness Negative
set.seed(316) 
n <- nrow(df.hotel.uk.buisness)
shuffled_df <- df.hotel.uk.buisness[sample(n), ]
train_indices <- 1:round(0.7 * n)
train <- shuffled_df[train_indices, ]
test_indices <- (round(0.7 * n) + 1):n
testb <- shuffled_df[test_indices, ]
testbp <- shuffled_df[test_indices, ]


#*************************************************************************************
#removing lines with rows with 2 words or less for negative review

test$Negative_Review <- as.character(test$Negative_Review)
x <-0
row_to_keep <- 0
for (i in 1:length(test$Negative_Review)){
    x <- wordcount(test[i,33])
    row_to_keep[i]=x
}

row_to_keep <- which(row_to_keep>2)
test <- test[row_to_keep,]

#removing lines with rows with 2 words or less for positive review

testp$Positive_Review <- as.character(testp$Positive_Review)
x <-0
row_to_keep <- 0
for (i in 1:length(testp$Positive_Review)){
    x <- wordcount(testp[i,35])
    row_to_keep[i]=x
}

row_to_keep <- which(row_to_keep>2)
testp <- testp[row_to_keep,]


#All Other

testc <- df.hotel.uk.Couple
testcp <- df.hotel.uk.Couple
testf <- df.hotel.uk.Family
testfp <- df.hotel.uk.Family

testb$Negative_Review <- as.character(testb$Negative_Review)
x <-0
row_to_keep <- 0
for (i in 1:length(testb$Negative_Review)){
    x <- wordcount(testb[i,33])
    row_to_keep[i]=x
}

row_to_keep <- which(row_to_keep>2)
testb <- testb[row_to_keep,]

#Business Positive

testbp$Positive_Review <- as.character(testbp$Positive_Review)
x <-0
row_to_keep <- 0
for (i in 1:length(testbp$Positive_Review)){
    x <- wordcount(testbp[i,35])
    row_to_keep[i]=x
}

row_to_keep <- which(row_to_keep>2)
testbp <- testbp[row_to_keep,]


#Couple

testc$Negative_Review <- as.character(testc$Negative_Review)
x <-0
row_to_keep <- 0
for (i in 1:length(testc$Negative_Review)){
    x <- wordcount(testc[i,33])
    row_to_keep[i]=x
}

row_to_keep <- which(row_to_keep>2)
testc <- testc[row_to_keep,]

#Couple positive

testcp$Positive_Review <- as.character(testcp$Positive_Review)
x <-0
row_to_keep <- 0
for (i in 1:length(testcp$Positive_Review)){
    x <- wordcount(testcp[i,35])
    row_to_keep[i]=x
}

row_to_keep <- which(row_to_keep>2)
testcp <- testcp[row_to_keep,]

#Family

testf$Negative_Review <- as.character(testf$Negative_Review)
x <-0
row_to_keep <- 0
for (i in 1:length(testf$Negative_Review)){
    x <- wordcount(testf[i,33])
    row_to_keep[i]=x
}

row_to_keep <- which(row_to_keep>2)
testf <- testf[row_to_keep,]

#Family Positive

testfp$Positive_Review <- as.character(testfp$Positive_Review)
x <-0
row_to_keep <- 0
for (i in 1:length(testfp$Positive_Review)){
    x <- wordcount(testfp[i,35])
    row_to_keep[i]=x
}

row_to_keep <- which(row_to_keep>2)
testfp <- testfp[row_to_keep,]

#*************************************************************************************
#****************************************************************************************************************
```
Done
Creating DataFrame for Reviews based on the dimensionality reduction

```{r}
#creating DF only for Negative Review
df.negative <- data.frame(test$Negative_Review)
names(df.negative) <- "Negative_Reviews"
df.negative$Negative_Reviews = as.character(df.negative$Negative_Reviews)


#creating DF only for Positive Review
df.positive <- data.frame(testp$Positive_Review)
names(df.positive) <- "Positive_Reviews"
df.positive$Positive_Reviews = as.character(df.positive$Positive_Reviews)



df.b <- data.frame(testb$Negative_Review)
names(df.b) <- "Negative_Reviews"
df.bp <- data.frame(testbp$Positive_Review)
names(df.bp) <- "Positive_Reviews"
df.c <- data.frame(testc$Negative_Review)
names(df.c) <- "Negative_Reviews"
df.cp <- data.frame(testcp$Positive_Review)
names(df.cp) <- "Positive_Reviews"
df.f <- data.frame(testf$Negative_Review)
names(df.f) <- "Negative_Reviews"
df.fp <- data.frame(testfp$Positive_Review)
names(df.fp) <- "Positive_Reviews"


df.b$Negative_Reviews = as.character(df.b$Negative_Reviews)
df.bp$Positive_Reviews = as.character(df.bp$Positive_Reviews)
df.c$Negative_Reviews = as.character(df.c$Negative_Reviews)
df.cp$Positive_Reviews = as.character(df.cp$Positive_Reviews)
df.f$Negative_Reviews = as.character(df.f$Negative_Reviews)
df.fp$Positive_Reviews = as.character(df.fp$Positive_Reviews)

```
Done.
Tokenize the Data Frames for NLP analysis

```{r}
#TokenNegative and positive
#Heavy view - alot of text
TokenN = tokens(df.negative$Negative_Reviews,what="word",remove_numbers= TRUE,remove_punct=TRUE,remove_symbols=TRUE,remove_hyphens=TRUE)
TokenP = tokens(df.positive$Positive_Reviews,what="word",remove_numbers= TRUE,remove_punct=TRUE,remove_symbols=TRUE,remove_hyphens=TRUE)

Tokenb = tokens(df.b$Negative_Reviews,what="word",remove_numbers= TRUE,remove_punct=TRUE,remove_symbols=TRUE,remove_hyphens=TRUE)
Tokenbp = tokens(df.bp$Positive_Reviews,what="word",remove_numbers= TRUE,remove_punct=TRUE,remove_symbols=TRUE,remove_hyphens=TRUE)

Tokenc = tokens(df.c$Negative_Reviews,what="word",remove_numbers= TRUE,remove_punct=TRUE,remove_symbols=TRUE,remove_hyphens=TRUE)
Tokencp = tokens(df.cp$Positive_Reviews,what="word",remove_numbers= TRUE,remove_punct=TRUE,remove_symbols=TRUE,remove_hyphens=TRUE)

Tokenf = tokens(df.f$Negative_Reviews,what="word",remove_numbers= TRUE,remove_punct=TRUE,remove_symbols=TRUE,remove_hyphens=TRUE)
Tokenfp = tokens(df.fp$Positive_Reviews,what="word",remove_numbers= TRUE,remove_punct=TRUE,remove_symbols=TRUE,remove_hyphens=TRUE)

```
Done.
Changning all data frames to Lower

```{r}
tokens_tolower(TokenN)
tokens_tolower(TokenP)
tokens_tolower(Tokenb)
tokens_tolower(Tokenbp)
tokens_tolower(Tokenc)
tokens_tolower(Tokencp)
tokens_tolower(Tokenf)
tokens_tolower(Tokenfp)
```
Done.

Removing the Stop Words
```{r}
#Remove the Stop words
TokenN <- tokens_select(TokenN, stopwords(), selection = "remove")
TokenP <- tokens_select(TokenP, stopwords(), selection = "remove")
Tokenb <- tokens_select(Tokenb, stopwords(), selection = "remove")
Tokenbp <- tokens_select(Tokenbp, stopwords(), selection = "remove")
Tokenc <- tokens_select(Tokenc, stopwords(), selection = "remove")
Tokencp <- tokens_select(Tokencp, stopwords(), selection = "remove")
Tokenf <- tokens_select(Tokenf, stopwords(), selection = "remove")
Tokenfp <- tokens_select(Tokenfp, stopwords(), selection = "remove")
```
Done.
Perform stemming on the tokens

```{r}
# Perform stemming on the tokens. 
TokenN <- tokens_wordstem(TokenN, language = "english")
TokenP <- tokens_wordstem(TokenP, language = "english")

Tokenb  <- tokens_wordstem(Tokenb , language = "english")
Tokenbp <- tokens_wordstem(Tokenbp, language = "english")

Tokenc  <- tokens_wordstem(Tokenc , language = "english")
Tokencp <- tokens_wordstem(Tokencp, language = "english")

Tokenf  <- tokens_wordstem(Tokenf , language = "english")
Tokenfp <- tokens_wordstem(Tokenfp, language = "english")
```
Done.

Creating Bag of Words...
```{r}
# Create our first bag-of-words model. 
TokenN.dfm <- dfm(TokenN, tolower = FALSE)
TokenP.dfm <- dfm(TokenP, tolower = FALSE)

Tokenb.dfm <- dfm(Tokenb, tolower = FALSE)
Tokenbp.dfm <- dfm(Tokenbp, tolower = FALSE)
                   
Tokenc.dfm <- dfm(Tokenc, tolower = FALSE)
Tokencp.dfm <- dfm(Tokencp, tolower = FALSE)
                   
Tokenf.dfm <- dfm(Tokenf, tolower = FALSE)
Tokenfp.dfm <- dfm(Tokenfp, tolower = FALSE)
```
Done.

Creating Matrix from the DFM...

```{r}
memory.limit(1000000000000000)
gc()
TokenN.matrix <- as.matrix(TokenN.dfm)
gc()
TokenP.matrix <- as.matrix(TokenP.dfm)
gc()
Tokenb.matrix <- as.matrix(Tokenb.dfm)
gc()
Tokenbp.matrix <- as.matrix(Tokenbp.dfm)
gc()
Tokenc.matrix <- as.matrix(Tokenc.dfm)
gc()
Tokencp.matrix <- as.matrix(Tokencp.dfm)
gc()
Tokenf.matrix <- as.matrix(Tokenf.dfm)
gc()
Tokenfp.matrix <- as.matrix(Tokenfp.dfm)
```
Done.
```{r}
#write.csv(TokenN.matrix, file = "Negative.csv")
#write.csv(TokenP.matrix, file = "Positive.csv")
#write.csv(Tokenb.matrix, file = "BuisnessNegative.csv")
#write.csv(Tokenbp.matrix, file = "BuisnessPositive.csv")
#write.csv(Tokenc.matrix, file = "CoupleNegative.csv")
#write.csv(Tokencp.matrix, file = "CouplePositive.csv")
#write.csv(Tokenf.matrix, file = "FamilyNegative.csv")
#write.csv(Tokenfp.matrix, file = "FamilyPositive.csv")

dim(Tokenb.matrix)
dim(Tokenbp.matrix)
dim(Tokenc.matrix)
dim(Tokencp.matrix)
dim(Tokenf.matrix)
dim(Tokenfp.matrix)
```
Done.

Plotting the TOP50
```{r}
library("qdap")
#Plotting TOP50
frequent_terms <- freq_terms(TokenN, 50)
#Removing it
frequent_terms = frequent_terms[-2,]
plot(frequent_terms)


frequent_terms_p <- freq_terms(TokenP, 50)
plot(frequent_terms_p)


frequent_termsb <- freq_terms(Tokenb, 50)
plot(frequent_termsb)

frequent_terms_bp <- freq_terms(Tokenbp, 50)
plot(frequent_terms_bp)

frequent_termsc <- freq_terms(Tokenc, 50)
plot(frequent_termsc)

frequent_terms_cp <- freq_terms(Tokencp, 50)
plot(frequent_terms_cp)

frequent_termsf <- freq_terms(Tokenf, 50)
plot(frequent_termsf)

frequent_termsfp <- freq_terms(Tokenfp, 50)
plot(frequent_termsfp)

#Watching Freqeunt words
freq <-colSums(TokenN.matrix)
freqp <-colSums(TokenP.matrix)

freqb <-colSums(Tokenb.matrix)
freqbp <-colSums(Tokenbp.matrix)
freqc <-colSums(Tokenc.matrix)
freqcp <-colSums(Tokencp.matrix)
freqf <-colSums(Tokenf.matrix)
freqfp <-colSums(Tokenfp.matrix)

length(freq)
length(freqp)
length(freqb)
length(freqbp)
length(freqc)
length(freqcp)
length(freqf)
length(freqfp)

ord <- order(freq)
ordp <- order(freqp)
ordb <- order(freqb)
ordbp <- order(freqbp)
ordc <- order(freqc)
ordcp <- order(freqcp)
ordf <- order(freqf)
ordfp <- order(freqfp)

#freq
#freqp

freq <- sort(freq, decreasing = TRUE)
freqp <- sort(freqp, decreasing = TRUE)

freqb <- sort(freqb, decreasing = TRUE)
freqbp <- sort(freqbp, decreasing = TRUE)

freqc <- sort(freqc, decreasing = TRUE)
freqcp <- sort(freqcp, decreasing = TRUE)

freqf <- sort(freqf, decreasing = TRUE)
freqfp <- sort(freqfp, decreasing = TRUE)

freq.matrix = as.matrix(freq)
freqp.matrix = as.matrix(freqp)

freqb.matrix = as.matrix(freqb)
freqbp.matrix = as.matrix(freqbp)

freqc.matrix = as.matrix(freqc)
freqcp.matrix = as.matrix(freqcp)

freqf.matrix = as.matrix(freqf)
freqfp.matrix = as.matrix(freqfp)

#freq.matrix
#freqp.matrix

head(freq.matrix)
head(freqp.matrix)
head(freqb.matrix)
head(freqbp.matrix)
head(freqc.matrix)
head(freqcp.matrix)
head(freqf.matrix)
head(freqfp.matrix)
```
Done.


Creating Word Cloud for each segment

```{r}

set.seed(142) 
print("********Negative Words*****************")  
wordcloud(names(freq), freq, min.freq=20, scale=c(5, .1),max.words=150,colors=brewer.pal(6, "Dark2"))
print("********Positive Words*****************")  
wordcloud(names(freqp), freqp, min.freqp=20, scale=c(5, .1),max.words=150,colors=brewer.pal(6, "Dark2"))

print("********Negative  Words for Buisness *****************")  
wordcloud(names(freqb), freqb, min.freqb=20, scale=c(5, .1),max.words=150,colors=brewer.pal(6, "Dark2"))
print("********Positive Words for Buisness *****************")  
wordcloud(names(freqbp), freqbp, min.freqbp=20, scale=c(5, .1),max.words=150,colors=brewer.pal(6, "Dark2"))

print("********Negative  Words for Couples*****************")  
wordcloud(names(freqc), freqc, min.freqc=20, scale=c(5, .1),max.words=150,colors=brewer.pal(6, "Dark2"))
print("********Positive  Words for Couples*****************")  
wordcloud(names(freqcp), freqcp, min.freqcp=20, scale=c(5, .1),max.words=150,colors=brewer.pal(6, "Dark2"))

print("********Negative Words for Family*****************")  
wordcloud(names(freqf), freqf, min.freqf=20, scale=c(5, .1),max.words=150,colors=brewer.pal(6, "Dark2"))
print("********Positive Words for Family*****************")  
wordcloud(names(freqfp), freqfp, min.freqfp=20, scale=c(5, .1),max.words=150,colors=brewer.pal(6, "Dark2"))

```
Done.

Finish NLP Module