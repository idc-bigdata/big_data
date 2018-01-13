######################
#  General Settings  #
######################

# Set output and input directories into variables to be used in the script (replace with your directories)

# Set Options
Sys.setlocale(category="LC_TIME", locale="English")
options(digits=4, max.print=1000, stringsAsFactors=FALSE, scipen=10)

######################
##    Import Data   ## 
######################

# Import data
setwd("~/source/big_data/Group6/datasets")
NS <- read.csv("KaggleV2-May-2016.csv", header = TRUE, as.is =  TRUE, na.strings = c("NA",".",""))

######################
##    Format Data   ## 
######################

# Format schedule date
NS$ScheduledDay <- as.character(NS$ScheduledDay)
NS$ScheduledDay <- as.Date(NS$ScheduledDay, format="%Y-%m-%d")

# Format appointment date
NS$AppointmentDay <- as.character(NS$AppointmentDay)
NS$AppointmentDay <- as.Date(NS$AppointmentDay, format="%Y-%m-%d")

# Create week day column
NS$week_day <- as.POSIXlt(NS$AppointmentDay)$wday

# Create numeric no show column
NS[!(NS$No.show== "No"), "numeric_no_show"] <- 0
NS[!(NS$No.show== "Yes"), "numeric_no_show"] <- 1
NS$numeric_no_show <- as.integer(NS$numeric_no_show)

# Create numeric gender column
NS[!(NS$Gender== "F"), "is_female"] <- 1
NS[!(NS$Gender== "M"), "is_female"] <- 0
NS$is_female <- as.integer(NS$is_female)

# Create waiting time column
NS$waiting_time <- difftime(NS$AppointmentDay, NS$ScheduledDay, units = "days")
NS$waiting_time <- as.integer(NS$waiting_time)

# Create appointment counts
APPOINTMENT_COUNTS <- read.csv("APPOINTMENT_COUNTS.csv", header = TRUE, as.is =  TRUE, na.strings = c("NA",".",""))
NS <- cbind(NS,APPOINTMENT_COUNTS)

# Add geodata
GEODATA <- read.csv("geodata.csv", header = TRUE, as.is =  TRUE, na.strings = c("NA",".",""))
NS <- merge(NS, GEODATA, by.x = "Neighbourhood", by.y = "Original", all.x = TRUE, all.y = TRUE)

######################
##    Review Data   ## 
######################

summary(NS)
str(NS)
# Check for missing values
sapply(NS, function(x) sum(is.na(x)))

# Check age range
range(NS$Age)

# Remove negative age
NS_CLEAN <- NS[NS$Age>=0,]

#Check waiting time range
range(NS$waiting_time)

# Remove Negative Waiting TIme
NS_CLEAN<-NS_CLEAN[NS_CLEAN$waiting_time>=0,]

# Check for duplicated rows
dup_rows <- duplicated(NS_CLEAN)
sum(dup_rows)

summary(NS_CLEAN)
str(NS_CLEAN)

# Leave required fields only and rename column consistently
NS_CLEAN <- data.frame(NS_CLEAN$PatientId
                       , NS_CLEAN$AppointmentID
                       , NS_CLEAN$week_day
                       , NS_CLEAN$ScheduledDay
                       , NS_CLEAN$AppointmentDay
                       , NS_CLEAN$waiting_time
                       , NS_CLEAN$Age
                       , NS_CLEAN$is_female
                       , NS_CLEAN$Scholarship
                       , NS_CLEAN$Neighbourhood
                       , NS_CLEAN$Hipertension
                       , NS_CLEAN$Diabetes
                       , NS_CLEAN$Alcoholism
                       , NS_CLEAN$Handcap
                       , NS_CLEAN$SMS_received
                       , NS_CLEAN$numeric_no_show
)
names(NS_CLEAN) <- c("patient_id","appointment","week_day","schedule_date","appointmnet_date","waiting_time"
                     ,"age","is_female","scholarship","neighbourhood","hipertension","diabetes","alcoholism"
                     ,"handcap","sms_recieved","no_show")

# Write the complete dataset
write.csv(NS_CLEAN, file="NS_CLEAN.csv", quote=FALSE, na="NA", row.names=FALSE)

###############################################
##  Splitting the data into train and test  ## 
###############################################

#In order to repeat a random selection in the first place select the seed - this way each time you select the same seed, the random selection will be the same.
set.seed(666)
# set train size to 80%
total <- nrow(NS_CLEAN)
bound <- floor((total/5)*4)
# scramle the data using sample function
D <- NS_CLEAN[sample(total), ]
# split the data to tetst and train
NS.TRAIN <- D[1:bound, ]
NS.TEST <- D[(bound+1):total, ]
# Write each file to a CSV for future reuses
write.csv(NS.TRAIN, file="NS.TRAIN.csv", quote=FALSE, na="NA", row.names=FALSE)
write.csv(NS.TEST, file="NS.TEST.csv", quote=FALSE, na="NA", row.names=FALSE)




