# Quarantime - Stay Home. Stay safe

<img width="505" alt="Screenshot 2022-01-06 at 1 11 05 AM" src="https://user-images.githubusercontent.com/80217130/148281351-fc4d2f0b-6062-4412-aaee-815ab29657b1.png">

A React Native App with minimalistic UI design that tracks World Wide Data of the Covid-19 data.

## App Preview!
<img width="466" alt="Screenshot 2022-01-06 at 1 20 09 AM" src="https://user-images.githubusercontent.com/80217130/148280663-66c49199-afb1-479e-a446-b365bdba7e60.png">


# APIs used: 
The project uses the trusted Disease.sh API
LINK : https://disease.sh/

A total of 3 API URLs are used to extract relevant data from the API depending upon user's choice of the country.

# App Sections:
Quarantime is broken into 4 major components: 

1. Header - wtih the name of the APP 
<img width="585" alt="Screenshot 2022-01-06 at 1 18 29 AM" src="https://user-images.githubusercontent.com/80217130/148280236-823357ca-bb3f-47b9-895c-d69b9f5d8b12.png">

2. WorldWide Deatials - which displays World Wide total case, new cases in the last 24hrs, total recoveries, total new recoveries and other relevant data in an expected color combination to guide users to the relevat section that they are seaching for.


<img width="594" alt="Screenshot 2022-01-06 at 1 19 23 AM" src="https://user-images.githubusercontent.com/80217130/148281783-5066503c-382f-4cee-84b2-61a1d667e1a4.png">


3. The Country List - a FlatList of all countries SORTED acc to the total cases in each country. 

<img width="437" alt="Screenshot 2022-01-06 at 1 12 40 AM" src="https://user-images.githubusercontent.com/80217130/148281612-428760d2-fc2d-4cd4-b660-23742e24bcfb.png">


4. The Hidden Bottom Sheet - thats not it. Click on any Country to bring up a Bottom Sheet with deatils of the Vaccination drive in the country - have a quick look at vaccine coverage status in the country as well as new innoculations in the last 24hrs

<img width="713" alt="Screenshot 2022-01-06 at 1 20 52 AM" src="https://user-images.githubusercontent.com/80217130/148282633-f3e599ea-ed9e-4948-a859-0a4396bcb0ee.png">


# Quarantime Components: 
Quarantime takes advantage of the componemt based approach of React/ React Native Apps by creating Components like the WorldWodeBadge Component(for the World Wide Details Section) and the ListItem Component(for the Country List Section).

# Color Scheme used:

<img width="567" alt="Screenshot 2022-01-06 at 1 46 34 AM" src="https://user-images.githubusercontent.com/80217130/148283346-fceb70ce-3af0-4847-8ff8-c2e978dfb621.png">

<img width="418" alt="Screenshot 2022-01-06 at 1 46 58 AM" src="https://user-images.githubusercontent.com/80217130/148283363-ccda2d37-e228-457a-a43a-f07ad1eef082.png">

# Upcomming features: 

1. Quarantime is set to include interactive Line Charts to give a better visual understanding of the recent trends of total cases, recoveries etc
2. A search field on top to let users search directly for a particular country instead of searching manuallu for it in the Country List section

# How to use: 

1. Downlaod the zip folder from the repo or clone the repo from your command line.
2. run npm install to add all dependencies.
3. expo start to start the simulator of your choice 
( If the build fails, close your server - expo start --clear - to clear the cache and restart the app )





