# Author - SagiK

#########
# Preps #
#########

# Loading data
setwd("~/Dropbox/MBA\ 2017/Data\ Analytics\ for\ Business/DataSet")
df <- read.csv("dataset\ complete.csv")

# date convertion
df$ScheduledDay = as.Date(df$ScheduledDay)
df$AppointmentDay = as.Date(df$AppointmentDay)
No.show_num = ifelse(df$No.show=='Yes', 1, 0)
Gender_num = ifelse(df$Gender=='M', 1, 0)
df <- cbind(df, No.show_num)
df <- cbind(df, Gender_num)

# create diff time between schedule and appointment dates - Diff Time Between Dates
dtbd <- df$AppointmentDay - df$ScheduledDay 
dtbd <- as.numeric(dtbd)
df <- cbind(df, dtbd)

# create isolated CSVs for shows and no shows
write.csv(df[df$No.show_num==1,], file="noshow.csv", quote=FALSE, na="NA", row.names=FALSE)
write.csv(df[df$No.show_num==0,], file="show.csv", quote=FALSE, na="NA", row.names=FALSE)

##################
# Train and Test #
##################

# random seed
set.seed(111)
# select 75%
bound <- floor((nrow(df)/4)*3)
#mess the data with sample
d <- df[sample(nrow(df)), ]
# select 1:bound
df.train <- d[1:bound, ]
#  select bound+1:end
df.test <- d[(bound+1):nrow(df), ]

##################
# Data analysis  #
##################

# create isolated df for shows and noshows
show_df <- df.train[df.train$No.show_num==1,]
noshow_df <- df.train[df.train$No.show_num==0,]






