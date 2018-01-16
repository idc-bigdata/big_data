######################
#  General Settings  #
######################

# Set output and input directories into variables to be used in the script (replace with your directories)
InputDir <- "~/source/big_data/big_data/Group6/"
OutputDir <- "~/source/big_data/big_data/Group6/"

# Set Options
Sys.setlocale(category="LC_TIME", locale="English")
options(digits=4, max.print=1000, stringsAsFactors=FALSE, scipen=10)

# install sqldf package (required for the first time only)
# install.packages("sqldf")
# load it
# library(sqldf)

######################
##    Import Data   ## 
######################

# Import data
setwd(InputDir)
NS <- read.csv("datasets/KaggleV2-May-2016-Fixed_Names.csv", header = TRUE, as.is =  TRUE, na.strings = c("NA",".",""))

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
NS[!(NS$No.show== "No"), "numeric_no_show"] <- 1
NS[!(NS$No.show== "Yes"), "numeric_no_show"] <- 0
NS$numeric_no_show <- as.integer(NS$numeric_no_show)

# Create numeric gender column
NS[!(NS$Gender== "F"), "is_female"] <- 1
NS[!(NS$Gender== "M"), "is_female"] <- 0
NS$is_female <- as.integer(NS$is_female)

# Create waiting time column
NS$waiting_time <- difftime(NS$AppointmentDay, NS$ScheduledDay, units = "days")
NS$waiting_time <- as.integer(NS$waiting_time)

# Create appointment counts

# # Start the timer
# ptm <- proc.time()
# 
# APPOINTMENT_COUNTS <- sqldf("
#                               select  AppointmentID, 
#                                       (
#                                         select  count(1)
#                                         from    NS as NS1
#                                         where   1=1
#                                                 and NS1.PatientId = NS.PatientId
#                                                 and NS1.AppointmentDay = (NS.AppointmentDay)
#                                       ) same_day,
#                                       (
#                                         select  count(1)
#                                         from    NS as NS1
#                                         where   1=1
#                                                 and NS1.PatientId = NS.PatientId
#                                                 and NS1.AppointmentDay >= (NS.AppointmentDay-7)
#                                                 and NS1.AppointmentDay < (NS.AppointmentDay)
#                                       ) week_before,
#                                       (
#                                         select  count(1)
#                                         from    NS as NS1
#                                         where   1=1
#                                                 and NS1.PatientId = NS.PatientId
#                                                 and NS1.AppointmentDay < (NS.AppointmentDay)
#                                       ) ever_before,
#                                       (
#                                         select  count(1)
#                                         from    NS as NS1
#                                         where   1=1
#                                         and NS1.PatientId = NS.PatientId
#                                         and NS1.AppointmentDay > (NS.AppointmentDay)
#                                         and NS1.AppointmentDay <= (NS.AppointmentDay+7)
#                                         and NS1.ScheduledDay < (NS.AppointmentDay)
#                                       ) known_week_after,
#                                       (
#                                         select  count(1)
#                                         from    NS as NS1
#                                         where   1=1
#                                         and NS1.PatientId = NS.PatientId
#                                         and NS1.AppointmentDay > (NS.AppointmentDay)
#                                         and NS1.ScheduledDay < (NS.AppointmentDay)
#                                       ) known_ever_after,
#                                       (
#                                         select  count(1)
#                                         from    NS as NS1
#                                         where   1=1
#                                         and NS1.PatientId = NS.PatientId
#                                         and NS1.ScheduledDay < (NS.AppointmentDay)
#                                       ) all_known_appointments
#                                         
#                               from   NS
#                             ")
# 
# # Stop the timer
# proc.time() - ptm 

APPOINTMENT_COUNTS <- read.csv("datasets/APPOINTMENT_COUNTS.csv", header = TRUE, as.is =  TRUE, na.strings = c("NA",".",""))
# View(APPOINTMENT_COUNTS)

NS <- merge(NS,APPOINTMENT_COUNTS, by = "AppointmentID", all.x = TRUE, all.y = FALSE)

# Add geodata
GEODATA <- read.csv("datasets/geodata-Fixed-Names.csv", header = TRUE, as.is =  TRUE, na.strings = c("NA",".",""))
# View(GEODATA)

NS <- merge(NS, GEODATA, by = "Neighbourhood", all.x = TRUE, all.y = FALSE)

######################
##    Review Data   ## 
######################

summary(NS)
str(NS)

# Check age range
range(NS$Age)

# Remove negative age
NS_CLEAN <- NS[NS$Age>=0,]

# range(NS_CLEAN$Age)

#Check waiting time range
range(NS_CLEAN$waiting_time)

# Remove Negative Waiting TIme
NS_CLEAN<-NS_CLEAN[NS_CLEAN$waiting_time>=0,]

# Check for missing values
sapply(NS_CLEAN, function(x) sum(is.na(x)))

# Check for duplicated rows
dup_rows <- duplicated(NS_CLEAN)
sum(dup_rows)

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
                         , NS_CLEAN$region
                         , NS_CLEAN$poverty
                         , NS_CLEAN$x_coor
                         , NS_CLEAN$y_coor
                         , NS_CLEAN$Hipertension
                         , NS_CLEAN$Diabetes
                         , NS_CLEAN$Alcoholism
                         , NS_CLEAN$Handcap
                         , NS_CLEAN$SMS_received
                         , NS_CLEAN$same_day
                         , NS_CLEAN$week_before
                         , NS_CLEAN$ever_before
                         , NS_CLEAN$known_week_after
                         , NS_CLEAN$known_ever_after
                         , NS_CLEAN$all_known_appointments
                         , NS_CLEAN$numeric_no_show
                          )

names(NS_CLEAN) <- c("patient_id","appointment","week_day","schedule_date","appointmnet_date","waiting_time"
                     ,"age","is_female","scholarship","neighbourhood","region", "poverty", "x_coor", "y_coor", "hipertension","diabetes","alcoholism"
                     ,"handcap","sms_recieved","same_day","week_before","ever_before","known_week_after","known_ever_after","all_known_appointments","no_show")


summary(NS_CLEAN)
str(NS_CLEAN)

# Write the complete dataset
write.csv(NS_CLEAN, file="datasets/NS_CLEAN.csv", quote=FALSE, na="NA", row.names=FALSE)

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
write.csv(NS.TRAIN, file="datasets/NS.TRAIN.csv", quote=FALSE, na="NA", row.names=FALSE)
write.csv(NS.TEST, file="datasets/NS.TEST.csv", quote=FALSE, na="NA", row.names=FALSE)
