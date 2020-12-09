library(tidyverse)
library(dplyr)
library(ggplot2)
library(ggthemes)
library(leaflet)

#read in the files
trips <- read.csv("https://raw.githubusercontent.com/sumusa/Data-Visualization-Course/master/Client%20Work/gtfs%20data/trips.txt")
shapes <- read.csv("https://raw.githubusercontent.com/sumusa/Data-Visualization-Course/master/Client%20Work/gtfs%20data/shapes.txt")
routes <- read.csv("https://raw.githubusercontent.com/sumusa/Data-Visualization-Course/master/Client%20Work/gtfs%20data/routes.txt")
stop_times <- read.csv("https://raw.githubusercontent.com/sumusa/Data-Visualization-Course/master/Client%20Work/gtfs%20data/stop_times.txt",
                      colClasses = c("arrival_time" = "character", "departure_time" = "character"))

head(stop_times)

#join the stop times, trips and routes dataframe
stop_times <- stop_times %>% 
  left_join(trips) %>% 
  left_join(routes) %>% 
  select(route_id, route_short_name, trip_id, stop_id, service_id, arrival_time, 
         departure_time, direction_id, shape_id, stop_sequence)

head(stop_times, 10)

#selecting the service-id with more trips
trips %>% 
  group_by(service_id) %>% 
  count(service_id) %>%
  arrange(desc(n))

bigger_service <- trips %>% 
  group_by(service_id) %>% 
  count(service_id) %>%
  arrange(desc(n)) %>% 
  head(1)

#filtering by service_id, stop-sequence and direction-id
stop_times <- stop_times %>% 
  filter(
    stop_sequence == 1 & 
      direction_id == 0 &
      service_id == bigger_service$service_id)
 
head(stop_times)

#transforming characters 
stop_times <- stop_times %>% 
  mutate(
    arrival_time = ifelse(
      as.integer(substr(arrival_time, 1, 2)) < 24,
      as.integer(substr(arrival_time, 1, 2)),
      as.integer(substr(arrival_time, 1, 2)) - 24),
    departure_time = ifelse(
      as.integer(substr(departure_time, 1, 2)) < 24,
      as.integer(substr(departure_time, 1, 2)),
      as.integer(substr(departure_time, 1, 2)) -24)
    )
head(stop_times)

#calculate the number of trips per hour
output_data <- stop_times %>% 
  group_by_at(vars(route_id, route_short_name, arrival_time)) %>% 
  count(arrival_time) %>%
  mutate(time_window = paste(arrival_time, '00', sep = ':')) %>% 
  select(route_id, route_short_name, arrival_time, time_window, n)
head(output_data)

write.csv(output_data, "trips_per_hour.csv")

line <- output_data %>% 
  filter(route_id == '1')
line

#factorize time window
line$time_window <- factor(line$time_window, levels = unique(line$time_window))

library(highcharter) 
# Set highcharter options
options(highcharter.theme = hc_theme_smpl(tooltip = list(valueDecimals = 2)))




