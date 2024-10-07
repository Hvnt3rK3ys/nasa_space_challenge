# 2024 NASA Space Apps Challenge

# Unix tree for the project, saved at the source directory
```python
├───components
│   ├───fEarthMap (Components for the map visualization)
│   │       LeMapa.tsx (Main class for the map)
│   │       
│   ├───fFilters (Components to filter the visualization)
│   │       FilterDate.tsx (Class to filtering dates)
│   │       Location.tsx (Class to filtering locations)
│   │       ShowCurve.tsx (Class to show the satellite trayectory)
│   │       
│   ├───fHeader (Component to show the authors and coding process)
│   │       Header.tsx
│   │
│   └───fShowMeta (Component to download the cached metadata from the selected dots from the GUI)
│           DownloadData.tsx (Enable download at various formats)
│           PickedData.tsx (Component to show the EDA for the metadata selected in the GUI)
│
├───data (Folder to connect the API to the GUI)
│       BruteData.tsx (GET Class to connect API)
│       Searcher.tsx (Class to optimize the search)
│       NextDot.tsx (POST Class to search the nearest dots and return the Trained Model)
│
├───pages (Folder to structure the project)
│       404.tsx (404 error response)
│       index.tsx (Root page index)
│       ShowData.tsx (Page to do EDA the selected dots)
│       _app.tsx (Start the app with customized behavior)
│
├───public (Folder that contains assets)
│       efe.png
│
└───styles (Folder that contains styles for each component it follows the mobile first convention)
    │   global.css (Global system design styles)
    │   not.module.scss (404 page styled)
    │
    ├───fonts (Fonts in woff format)
    │       GeistMonoVF.woff
    │       GeistVF.woff
    │
    ├───sExploreData (Styling ShowData page)
    │       DownloadData.module.scss (Download data component styles)
    │       PickedData.module.scss (EDA styles component)
    │
    └───sHome (Styling Home page)
            F_Curve.module.scss (Styling the satellite trayectory component)
            F_Date.module.scss (Styling the date filter component)
            F_Location.module.scss (Styling the location filter component)
            Header.module.scss (Styling the header component)
            OurMap.module.scss (Styling the map component)
```

# TeKnoCrafters:

[https://www.spaceappschallenge.org/nasa-space-apps-2024/find-a-team/mmda_teknocrafters_mmda/?tab=members](https://www.spaceappschallenge.org/nasa-space-apps-2024/find-a-team/mmda_teknocrafters_mmda/?tab=members)


## About the Challenge
Landsat missions have provided the longest continuous dataset of remotely sensed measurements of Earth’s land surface. Comparing ground-based spectral measurements with Landsat Surface Reflectance (SR) data collected at the same time can facilitate experiential learning, encourage scientific exploration with satellite data, foster interdisciplinary and spatial thinking skills, and empower individuals to become informed global citizens. But to compare ground-based measurements with Landsat data, you need to know when Landsat will be passing over a specific land area, and then be able to access the Landsat data collected at that place and time. Your challenge is to develop a web-based application that supports the comparison of ground-based observations with Landsat data by allowing users to define a target location, receive notifications when Landsat is to pass over that location, and then access and display the corresponding Landsat SR data.


## About the team:
We're a team of developers 👩‍💻 and mathematicians 🧮:
Dedicated to creating value through our solutions. Specifically, we aim to optimize our algorithms to ensure that machine learning models run efficiently, consuming less energy and thereby conserving water. 
Our project focuses on developing a web-based application that supports the comparison of ground-based observations with Landsat data. 
This application will facilitate experiential learning, encourage scientific exploration, foster interdisciplinary and spatial thinking skills, and empower individuals to become informed global citizens.

**Manuel:**
    [https://github.com/Hvnt3rK3ys](https://github.com/Hvnt3rK3ys)

**Sharik:**
    [https://github.com/SharWasHere](https://github.com/SharWasHere)

**Mariana:**
    [https://github.com/MarianOspina](https://github.com/MarianOspina)

**Ivonne:**
    [https://github.com/IvonneSierra](https://github.com/IvonneSierra)

**Alexandra:**
    [https://github.com/0Kelly087](https://github.com/0Kelly087)

**David:**
    [https://github.com/DAID204](https://github.com/DAID204)
