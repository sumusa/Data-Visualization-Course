library(tidyverse)
library(dplyr)
library(ggplot2)
library(ggthemes)
library(leaflet)

#read in the files
routes <- read.csv("https://raw.githubusercontent.com/sumusa/Data-Visualization-Course/master/Client%20Work/gtfs%20data/routes.txt")
shapes <- read.csv("https://raw.githubusercontent.com/sumusa/Data-Visualization-Course/master/Client%20Work/gtfs%20data/shapes.txt")
stops <- read.csv("https://raw.githubusercontent.com/sumusa/Data-Visualization-Course/master/Client%20Work/gtfs%20data/stops.txt")
calendar <- read.csv("https://raw.githubusercontent.com/sumusa/Data-Visualization-Course/master/Client%20Work/gtfs%20data/calendar.txt")
trips <- read.csv("https://raw.githubusercontent.com/sumusa/Data-Visualization-Course/master/Client%20Work/gtfs%20data/trips.txt")
stop_times <- read.csv("https://raw.githubusercontent.com/sumusa/Data-Visualization-Course/master/Client%20Work/gtfs%20data/stop_times.txt")

head(stop_times)

#join the stop times, trips and routes dataframe
stop_times_new <- stop_times %>% 
  left_join(trips) %>% 
  left_join(routes) %>% 
  select(route_id, route_short_name, trip_id, stop_id, service_id, arrival_time, 
         departure_time, direction_id, shape_id, stop_sequence)

head(stop_times_new, 10)

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
stop_times_new <- stop_times_new %>% 
  filter(
    stop_sequence == 1 & 
      direction_id == 0 &
      service_id == bigger_service$service_id)
 
head(stop_times_new)

#transforming characters 
stop_times_new <- stop_times_new %>% 
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
head(stop_times_new)

#calculate the number of trips per hour
output_data <- stop_times_new %>% 
  group_by_at(vars(route_id, route_short_name, arrival_time)) %>% 
  count(arrival_time) %>%
  mutate(time_window = paste(arrival_time, '00', sep = ':')) %>% 
  select(route_id, route_short_name, arrival_time, time_window, n)
head(output_data)

write.csv(output_data, "trips_per_hour.csv")

counts <- table(output_data$time_window)
barplot(counts, main="Trip Frequency Per Hour",
   xlab="Time by Hour")

#join all data and count number of services grouped by stop
stops_freq <- 
        inner_join(stop_times,stops,by=c("stop_id")) %>%
        inner_join(trips,by=c("trip_id")) %>%
        inner_join(calendar,by=c("service_id")) %>%
        select(stop_id,stop_name,stop_lat,stop_lon) %>%
        group_by(stop_id,stop_name,stop_lat,stop_lon) %>%
        summarize(count=n()) %>%
        filter(count >= 50)
head(stops_freq)

trips_new <-
        inner_join(trips,routes,by=c("route_id")) %>%
        inner_join(shapes,by=c("shape_id"))%>%
        inner_join(calendar,by=c("service_id"))
head(trips_new)

trips_inbound <- subset(trips_new, direction_id == 0)
write.csv(trips_inbound, "trips-inbound.csv", row.names = FALSE)

#the trips-inbound.csv file was manipulated in excel, only one trip was kept per route for the service_id of 1
#(works only on Saturdays) for easy visualization
df <- read.csv("trips-inbound-new.csv")

library(ggmap)
#register_google(key = "", write = TRUE)

#a static map showing all the routes
library(ggmap)

myMap <- get_map(location = c(lon = -52.712830, lat = 47.560539), 
                 maptype = "roadmap", zoom = 12, scale = "auto", source = "google")

p2 <- ggmap(myMap, extent = "device") +
        geom_path(data = df, aes(shape_pt_lon, shape_pt_lat, 
                                 colour = route_id), size = 0.5) + 
        theme(legend.position="bottom") + coord_fixed(1.3) # + facet_wrap(~route_id)
p2

#plot the stops and routes using leaflet
pal=colorBin(palette='RdYlBu', domain = c(50,1000), bins = 9, pretty = TRUE)
tpal = colorNumeric(palette = 'Set1', domain = c(1,25))

#show the routes with leaflet, specify color for each route_id, The polylines are connecting, and showing one lable for everything
#visualize each route per map, I tried writing a for loop function, but it won't work.
leaflet() %>%
        # Add CartoDB background map
        addProviderTiles("CartoDB.Positron") %>% 
        addTiles() %>%
        # Add a marker for each stop and route path
        addPolylines(lng= ~shape_pt_lon, lat= ~shape_pt_lat, data = subset(df, route_id == 1),
               group = "Route 1", label = ~paste0('Route', route_id,': ',route_long_name), 
               popup = ~paste0('Route', route_id,': ',route_long_name), 
               stroke = TRUE, fillOpacity = 0.5, color = ~tpal(route_id)) %>%
        addPolylines(lng= ~shape_pt_lon, lat= ~shape_pt_lat, data = subset(df, route_id == 2),
                     group = "Route 2", label = ~paste0('Route', route_id,': ',route_long_name), 
                    popup = ~paste0('Route', route_id,': ',route_long_name), 
                      stroke = TRUE, fillOpacity = 0.5, color = ~tpal(route_id)) %>%
        addPolylines(lng= ~shape_pt_lon, lat= ~shape_pt_lat, data = subset(df, route_id == 3),
               group = "Route 3", label = ~paste0('Route', route_id,': ',route_long_name), 
               popup = ~paste0('Route', route_id,': ',route_long_name), 
               stroke = TRUE, fillOpacity = 0.5, color = ~tpal(route_id)) %>%
      addPolylines(lng= ~shape_pt_lon, lat= ~shape_pt_lat, data = subset(df, route_id == 6),
               group = "Route 6", label = ~paste0('Route', route_id,': ',route_long_name), 
               popup = ~paste0('Route', route_id,': ',route_long_name), 
               stroke = TRUE, fillOpacity = 0.5, color = ~tpal(route_id)) %>%
  addPolylines(lng= ~shape_pt_lon, lat= ~shape_pt_lat, data = subset(df, route_id == 10),
               group = "Route 10", label = ~paste0('Route', route_id,': ',route_long_name), 
               popup = ~paste0('Route', route_id,': ',route_long_name), 
               stroke = TRUE, fillOpacity = 0.5, color = ~tpal(route_id)) %>%
  addPolylines(lng= ~shape_pt_lon, lat= ~shape_pt_lat, data = subset(df, route_id == 11),
               group = "Route 11", label = ~paste0('Route', route_id,': ',route_long_name), 
               popup = ~paste0('Route', route_id,': ',route_long_name), 
               stroke = TRUE, fillOpacity = 0.5, color = ~tpal(route_id)) %>%
  addPolylines(lng= ~shape_pt_lon, lat= ~shape_pt_lat, data = subset(df, route_id == 12),
               group = "Route 12", label = ~paste0('Route', route_id,': ',route_long_name), 
               popup = ~paste0('Route', route_id,': ',route_long_name), 
               stroke = TRUE, fillOpacity = 0.5, color = ~tpal(route_id)) %>%
  addPolylines(lng= ~shape_pt_lon, lat= ~shape_pt_lat, data = subset(df, route_id == 14),
               group = "Route 14", label = ~paste0('Route', route_id,': ',route_long_name), 
               popup = ~paste0('Route', route_id,': ',route_long_name), 
               stroke = TRUE, fillOpacity = 0.5, color = ~tpal(route_id)) %>%
  addPolylines(lng= ~shape_pt_lon, lat= ~shape_pt_lat, data = subset(df, route_id == 15),
               group = "Route 15", label = ~paste0('Route', route_id,': ',route_long_name), 
               popup = ~paste0('Route', route_id,': ',route_long_name), 
               stroke = TRUE, fillOpacity = 0.5, color = ~tpal(route_id)) %>%
  addPolylines(lng= ~shape_pt_lon, lat= ~shape_pt_lat, data = subset(df, route_id == 16),
               group = "Route 16", label = ~paste0('Route', route_id,': ',route_long_name), 
               popup = ~paste0('Route', route_id,': ',route_long_name), 
               stroke = TRUE, fillOpacity = 0.5, color = ~tpal(route_id)) %>%
  addPolylines(lng= ~shape_pt_lon, lat= ~shape_pt_lat, data = subset(df, route_id == 18),
               group = "Route 18", label = ~paste0('Route', route_id,': ',route_long_name), 
               popup = ~paste0('Route', route_id,': ',route_long_name), 
               stroke = TRUE, fillOpacity = 0.5, color = ~tpal(route_id)) %>%
  addPolylines(lng= ~shape_pt_lon, lat= ~shape_pt_lat, data = subset(df, route_id == 19),
               group = "Route 19", label = ~paste0('Route', route_id,': ',route_long_name), 
               popup = ~paste0('Route', route_id,': ',route_long_name), 
               stroke = TRUE, fillOpacity = 0.5, color = ~tpal(route_id)) %>%
  addPolylines(lng= ~shape_pt_lon, lat= ~shape_pt_lat, data = subset(df, route_id == 20),
               group = "Route 20", label = ~paste0('Route', route_id,': ',route_long_name), 
               popup = ~paste0('Route', route_id,': ',route_long_name), 
               stroke = TRUE, fillOpacity = 0.5, color = ~tpal(route_id)) %>%
  addPolylines(lng= ~shape_pt_lon, lat= ~shape_pt_lat, data = subset(df, route_id == 23),
               group = "Route 23", label = ~paste0('Route', route_id,': ',route_long_name), 
               popup = ~paste0('Route', route_id,': ',route_long_name), 
               stroke = TRUE, fillOpacity = 0.5, color = ~tpal(route_id)) %>%
  addCircleMarkers(lng= ~ stop_lon, lat= ~stop_lat, data = stops_freq, group = "Stops",
                   popup = ~paste0(stop_name, ' Frequency', ': ', count), label = ~paste0(stop_name, '; Frequency', ': ', count), 
                   weight = 2, stroke = FALSE, fillOpacity = 1, color = ~pal(count), radius = ~sqrt(count)*0.5) %>%
  addLayersControl(
    overlayGroups = c("Route 1", "Route 2","Route 3","Route 6","Route 10","Route 11",
                      "Route 12","Route 14","Route 15","Route 16","Route 18","Route 19",
                      "Route 20","Route 23","Stops"),
    options = layersControlOptions(collapsed = FALSE)
  )

#visualize the stops by frequency
leaflet() %>%
  # Add CartoDB background map
  addProviderTiles("CartoDB.Positron") %>% 
  addTiles() %>%
  # Add a marker for each stop and route path
  addCircleMarkers(lng= ~ stop_lon, lat= ~stop_lat, data = stops_freq, group = "Stops",
                   popup = ~paste0(stop_name, ' Frequency', ': ', count), label = ~paste0(stop_name, '; Frequency', ': ', count), 
                   weight = 2, stroke = FALSE, fillOpacity = 1, color = ~pal(count), radius = ~sqrt(count)*0.5) %>%
  addLegend(title='Stops by Frequency',
            position='bottomright', pal=pal, values = c(100,1000),opacity=1)
