#Read TVIX data:
getwd();
setwd("C:/Users/ori dahari/Documents/MBA/mini1/bigData/data")
TVIXDF=read.csv("C:/Users/ori dahari/Documents/MBA/mini1/bigData/data/TVIX.csv", TRUE, as.is = TRUE, na.strings = c("NA",".",""))

##prepare the Data:
# Define the date variables in each data set:
Sys.setlocale("LC_TIME", locale = "English")
TVIXDF= transform(TVIXDF, Date = as.Date(Date, "%d/%m/%Y"))
class(TVIXDF$Date)
#Change column name
colnames(TVIXDF)[colnames(TVIXDF) == "Change.1"]="Order"
#Define Order column as a factor:
TVIXDF$Order= as.factor(TVIXDF$Order)

#display the data
View(TVIXDF)
str(TVIXDF)
summary(TVIXDF)
head(TVIXDF)
tail(TVIXDF)
getwd()
##write.csv(TVIXDF,file = "TVIX_V1.csv",na="NA")

#PLOTING DATA:
par(mfrow=c(nr=1,nc=1))
X=TVIXDF$Date > format(as.Date("2017-01-01", format="%Y-%m-%d"))
Y=TVIXDF$Close[X]
summary(X)
plot(TVIXDF$Date[X],Y, main="Days trede VS Price and S&P500", ylab = "PRICE", xlab="Trading dates (days)", col="blue")
lines(TVIXDF$Date[X],TVIXDF$S.P500[X], col="green")
legend("topright",c("TVIX","S&P500"),lty = c(1,1),col=c("blue","green"))

indx <- sapply(TVIXDF, is.factor)
TVIX_edit = TVIXDF
TVIX_edit[indx] <- lapply(TVIXDF[indx], function(x) as.numeric(factor(x)))
TVIX_edit$Date=as.numeric(TVIX_edit$Date)
cor_table_TVIX <- cor(TVIX_edit, use = "complete.obs")
View(cor_table_TVIX)


