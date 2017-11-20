##Reading the autos.CSV files from GitHub and combine them into one Data Frame named "autos"
autos1 <- read.csv(file = "https://github.com/idc-bigdata/big_data/raw/master/Group4/autos%20(1).csv", header = TRUE, as.is = TRUE)
autos2 <- read.csv(file = "https://github.com/idc-bigdata/big_data/raw/master/Group4/autos%20(2).csv", header = TRUE, as.is = TRUE)
autos3 <- read.csv(file = "https://github.com/idc-bigdata/big_data/raw/master/Group4/autos%20(3).csv", header = TRUE, as.is = TRUE)
autos <- rbind(autos1, autos2, autos3)
str(autos)