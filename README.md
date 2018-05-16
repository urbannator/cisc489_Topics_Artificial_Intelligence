# ColorClusters

CISC489 Project

Color Clustering of images to find highest ice density in photo of Mars' surface

## Submission Details - 

Photos acquired from this dataset:
- https://photojournal.jpl.nasa.gov/targetFamily/Mars

How to acquire results:
- Download our Angular application and run it using the command "npm start"
- Upload an image and set the parameters for the clustering analysis, 6-8 clusters and vhigh quality recommended
- Afterwards, hit start and you will be brought to another web page
- The color clusters of the image are displayed here
- This information could be used to determine the highest ice density areas in an image

## Poster Template - 

### Abstract:

The purpose of our project originally was to create a thermal mapping of Mars to select locations with the lowest temperature reading, indicating a high ice density. Due to technical limitations, however, our project resulted in creating a web application that performs color clustering on images in order to find locations with the highest ice density.

### Introduction:

The primary reason for the research being conducted is that in the distant future it is possible that Earth will no longer be suitable to sustain the human species. If humans continue to consume resources at the current rate, as well as disregarding the growing problem which is our planet’s environmental health, Earth truly may not be able to support humans in the future.

### Purpose & Research Question:

Our project revolves around trying to discover the presence of signs of potential life forms on Mars. Overall, the question we are asking is:
Was Mars ever habitable, and if so, will it ever be again?

### Subjects, Methods, & Analysis:

Initial Research
- Earth’s atmosphere is continually deteriorating and will leave Earth inhabitable if this issue is not resolved.
- Building blocks of life on Earth include: carbon, nitrogen, oxygen, hydrogen, phosphorus, and sulfur. If these were found on Mars it could potentially reveal the possibility of life existing.
- Gas bubbles are trapped in ice, and when crushed or melted, samples of past atmospheric air is released from the ice and can be analyzed.

Preliminary Data
- Sulfur, nitrogen, oxygen, phosphorus, and carbon have been found by drilling for soil samples on Mars already.
- In Greenland, ice samples were taken and analyzed which resulted in revealing atmospheric conditions from over a thousand years prior.

Experimental Design and Methods
- Drilling and analyzing soil samples on Mars as well as testing ice samples on Greenland have both been successful, thus drilling for ice samples on Mars is a great next step to further analyze past conditions on Mars. These ice samples can reveal information from far back into the planet’s history.

### Results:

LaSTMOV software package
- Used to create heat vulnerability maps for Maricopa County, intended to be repurposed for Mars.
- The inputs that we need are called a shapefile and MODIS MYD11A1 V005 tile h08v05 data for the software to run.
- There was no public sample data available for use, and recreating this data for Mars was out of the scope for this project

NASA's Vision Workbench
- Extensible computer vision framework that supports large satellite image processing and 2D/3D environment reconstruction. 
- We were unable to successfully process images due to installation issues.

Color Clustering API
- Used to generate color clusters for a given image using the K-means algorithm
- We successfully used the software's API in an Angular application in order to perform an image analysis for finding the highest density ice locations on the surface of Mars.
- To make sure the color clusters were consistent we tested various pictures that had different color variations. We made sure that each visual “ice color” was clustered appropriately and appeared visually correct.

### Conclusions:

Using the application we have developed, it is  possible to determine potential future drilling sites on Mars’ surface by analyzing satellite images for locations with the highest ice density.

These locations would serve as a starting point for future drilling missions whose ultimate goal is to take samples of the ice in order to analyze the past atmospheric conditions on Mars. Hopefully this would in turn reveal if Mars was ever habitable.

### Directions for Future Research:

- Train machine learning model that can identify which colors best represent ice on Mars, and use this data to assist in analyzing processed images.
- Automate process of identifying which color cluster from an image best matches data outputted by machine learning model.
- Automatically decide where the optimal drilling sites would be for future expeditions based on the information given from the API and the machine learning model.
