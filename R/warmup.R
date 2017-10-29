# Prepare the environment
system("defaults write org.R-project.R force.LANG en_US.UTF-8")
install.packages('ggplot2')
install.packages("dplyr")
install.packages("scales")
install.packages("xlsx")
install.packages("reshape2")
install.packages("lubridate")
install.packages("ggthemes")
install.packages("gridExtra")
install.packages("pastecs")
install.packages('memisc')
library(ggplot2)
library(dplyr)
library(scales)
library(xlsx)
library(reshape2)
library(lubridate)
library(ggthemes)
library(gridExtra)
library(pastecs)
library(memisc)

#Data exploration
data(diamonds)
View(diamonds)
help(diamonds)
#help("stat.desc")
summary_stats <- stat.desc(diamonds, desc=F)
View(summary_stats)
# summary_stats holds several statistic values foreach feature/attribute of diamonds table.
# for example - nbr.val will be the # of total values for a given feature
#               sum will be the sum of values for a given feature
#               range will be the statistic range between the minimal and maximal values for a given feature
# hence, diamonds table holds 53,940 transactions/records with the total price of $212,135,217.
levels(diamonds$color)[1]
# diamonds$color present the color column of diamonds table (D-J values).
# levels() function seems to present the unique sorted set of values from the total variables.
# the suffix of [1] will present the first value from the selected set, therefore the result will be "D"

# Graphical exploration #0
ggplot(diamonds, aes(x=price)) +
  geom_histogram(color = "black", fill = "lightblue", binwidth = 500) +
  scale_x_continuous(labels = dollar, breaks = seq(0, 20000, 1000)) +
  theme(axis.text.x = element_text(angle = 90)) +
  xlab("Price") + ylab("Count")
# the graph shows the relation of price-transactions
# X axis is the price in USD
# Y axis is the count of the transactions for the given price
# it's not surprising that the majority of the transactions are around $1,000, since
# expensive diamonds are more likely to have less consumers than the average cost diamonds. So I would expect to see this decreasing graph towards the higest price.
# I would like to further explore the correlation between transactions and quality (cut, clarity) around the densed area

# Graphical exploration #1
colors = factor(diamonds$cut)
ggplot(diamonds, aes(x = price/carat, colour=colors, fill=colors)) + 
  geom_histogram(binwidth = .05) +
  theme(axis.text.x = element_text(angle = 0)) +
  scale_x_log10(expression(paste(Log[10], " of Price")),
                breaks = trans_breaks("log10", function(x) 10^x),
                labels = trans_format("log10", math_format(10^.x))) +
  facet_grid(cut~., scale = "free") + ylab("Count")
# the graph shows the relation of price-carat, splited by cut types.
# X axis is the price/carat, in log10 for normalization
# Y axis is the count of the transactions for the given price
# roughly speaking, the density of the transactions in various cuts are between 2500 to 5000 USD.
# Altough the various cuts, the transuctions are mainlly around the 3000 USD, 
# which can tell us that cut is not a factor of high transuction volume.

# Correlations exploration #0
price_by_cut <- diamonds %>%
  group_by(cut) %>%
  summarise(max_price = max(price),
            min_price = min(price),
            median_price = median(price))
price_by_color <- diamonds %>%
  group_by(color) %>%
  summarise(max_price = max(price),
            min_price = min(price),
            median_price = median(price))
View(price_by_cut)
View(price_by_color)
# Both price_by_cut and price_by_color share the same results with a minimal deviation
# which again, shatter the assumption where diamonds with a higher quality should cost more than the lower grade ones.

# Correlations exploration #1
indx <- sapply(diamonds, is.factor)
diamonds_edit = diamonds
diamonds_edit[indx] <- lapply(diamonds[indx], function(x) as.numeric(factor(x)))
cor_table_diamonds <- cor(diamonds_edit)
View(cor_table_diamonds)
# The difference between diamonds and diamonds_edit is that in diamonds_edit table, the 
# textual columns (clarity, cut, color) are enumerated (cut.fair==1 and so on...).
# One might call diamonds_edit a standartize table, which all of the features are numeric.
# In order to perform a correlation between features, we can't use the default diamonds table, but only work with a new
# edited one that has only numeric values.
# cor_table_diamonds is a correlation table that correlates every feature to any feature. correlating feature with itself will result 1.0 
# high correlation will aim to 1.0 whereas low correlation will aim to a negative value

# Linear model exploration
m1 <- lm(I(log(price)) ~ I(carat^(1/3)), data = diamonds)
m2 <- update(m1, ~ . + carat)
m3 <- update(m2, ~ . + cut)
m4 <- update(m3, ~ . + color)
m5 <- update(m4, ~ . + clarity)
mtable(m1, m2, m3, m4, m5, sdigits=4)
