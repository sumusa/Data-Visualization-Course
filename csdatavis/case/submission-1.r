#load necessary libraries
library("dplyr")
library("readr")
library("ggplot2")
library("ggthemes")
library("leaflet")

#read in the files
routes <- read.csv("https://openmobilitydata-data.s3-us-west-1.amazonaws.com/public/feeds/metrobus-transit/293/20200827/original/routes.txt")
shapes <- read.csv("https://openmobilitydata-data.s3-us-west-1.amazonaws.com/public/feeds/metrobus-transit/293/20200827/original/shapes.txt")
stops <- read.csv("https://openmobilitydata-data.s3-us-west-1.amazonaws.com/public/feeds/metrobus-transit/293/20200827/original/stops.txt")

#plot the stops and routes using leaflet
leaflet() %>%
        # Add CartoDB background map
        addProviderTiles("CartoDB.Positron") %>% 
        addTiles() %>%
        # Add a marker for each stop and route paths
        addPolylines (lng= ~ shape_pt_lon, lat= ~shape_pt_lat, data = head(shapes,3000), 
                   weight = 2, label = ~shape_pt_sequence, popup = ~shape_pt_sequence, 
                   stroke = TRUE, fillOpacity = 0.5, color = "purple") %>%
        addCircleMarkers(lng= ~ stop_lon, lat= ~stop_lat, data = head(stops,100), 
                 popup = ~stop_name, label = ~stop_name, weight = 1, stroke = FALSE, 
                 fillOpacity = 0.5, color = "navy", radius = 5)

stop_times <- read.csv("gtfs/stop_times.txt")
calendar <- read.csv("https://openmobilitydata-data.s3-us-west-1.amazonaws.com/public/feeds/metrobus-transit/293/20200827/original/calendar.txt")

stops_freq = 
        inner_join(stop_times,stops,by=c("stop_id")) %>% 
        inner_join(trips,by=c("trip_id")) %>%
        inner_join(calendar,by=c("service_id")) %>%
        select(stop_id,stop_name,stop_lat,stop_lon) %>%
        group_by(stop_id,stop_name,stop_lat,stop_lon) %>%
        summarize(count=n())%>%
        filter(count>=1) # filter out least used stops

leaflet() %>%
        # Add CartoDB background map
        addProviderTiles("CartoDB.Positron") %>% 
        addTiles() %>%
        # Add a marker for each stop and route paths
        addPolylines (lng= ~ shape_pt_lon, lat= ~shape_pt_lat, data = tail(shapes,3000), 
                      weight = 2, label = ~shape_pt_sequence, popup = ~shape_pt_sequence, 
                      stroke = TRUE, fillOpacity = 0.5, color = "purple") %>%
        addCircleMarkers(lng= ~ stop_lon, lat= ~stop_lat, data = stops_freq, 
                         popup = ~stop_name, label = ~stop_name, weight = 1, stroke = FALSE, 
                         fillOpacity = 0.5, color = "navy", radius = ~count*1.2)
