# 🦈 Beneath The Surface

## 👥 Collaborators
1. Pari Pandey
2. Franz Benedict Villamin
3. Craig Seward
4. Gabriel Kessler
5. Rounak Sharma

## 📌 Overview
The purpose of our project is to tackle the misconceptions surrounding sharks by combining multiple datasets to tell a story about shark populations, attacks, and the impact of human activities. Through these visualizations, we explore how sharks are spread out globally, how often human-shark interactions occur, and how various human activities have contributed to the significant decline in shark populations.

By integrating various types of data from sources like the Global Shark Attack File, Global Shark Fishing Mortality Estimates, and SharkBase, through this project we aim to educate viewers about shark danger and emphasize the urgent need for shark conservation.

Our team built a scroll-based, 14-framed narrative website to combat these misconceptions and reveal data based information to reveal the hidden patterns in shark mortality, sightings, and incident data.

## 🎯 Motivations
- To debunk myths and fear-based narratives about sharks.
- Show that humans play a large role in shark mortality.
- Demonstrate how storytelling with the aid of data visualisations can improve public understanding.

## 🗂️ Datasets Used
Our project uses 5 different datasets that are complementary to each other. They each meaningfully represent a different aspect to human-shark interactions.

**1. Global Shark Fishing Mortality Estimates (2012–2019)**<br>
This dataset provides global estimates of shark fishing mortality between the years 2012 and 2019. Researchers assess how shark mortality rates have changed over time despite regulatory efforts. Each record represents a region’s estimated mortality for a given year, with attributes that describe fishing gear, catch totals, regulatory presence, and indicators relating to the environment and governance. This dataset allows for time and regional comparisons, and highlights where conservation measures have/haven’t been effective.

**2. Global Shark Attack File: Incident Log**<br>
An incident-level spreadsheet maintained by the Shark Research Institute (GSAF) that’s updated continuously and downloadable as an Excel file. It classifies each record (e.g., unprovoked, provoked, watercraft, air/sea disaster, questionable) and notes fatalities (“all individuals survived unless noted otherwise”).

**3. Shark Incidents in California from 1950-2022**<br>
This dataset reported shark incidents along the California coastline between 1950 and 2022. Each record represents an individual incident and includes information such as the year, location, shark species involved, activity of the person at the time, and whether the incident was fatal. The dataset helps identify when, where, and under what conditions shark–human interactions occur, allowing us to analyze temporal and spatial patterns and relate them to environmental and behavioral factors.

**4. SharkBase**<br>
This dataset is a shark/marine life encounter database ranging from 1998-10-13/2015-06-19. The species included are sharks, rays, and chimaeras. The Most important Parts of the data are the species, encounter date, and location. This dataset should help us further analyze shark population over time and relate that to other factors.

**5. Historical Population of the U.S. States**<br>
A state population dataset. It provides population data from the census’s annual population estimates for each state from 1900-2019.

## 🧩 Implementation Process
- **Website Architecture**<br>
  We built a website that narrates as you scroll through. There are 14 frames that the shark navigates through visualising a new part of the story. These include, ecosystem context, human interaction, data visualizations, misconceptions, mortality, and concluding insights.

- **Integrating Visualisations**<br>
  Regional Shark Mortality Distribution (Choropleth Map)<br>
  Global Shark Mortality Over Time (Stacked Area Chart with a Protective Regulation Overlay)<br>
  California Coastal Incident Density and Temporal Shift (Circular Bar Chart)<br>
  Species vs Fatal vs Amount of Incidents (Bubble Graph)<br>
  Amount of Incidents per year (Innovative Visualization - Human Body Map)<br>
  Sightings Over Time (Time Series Graph/ Line Graph)

- **Data Cleaning and Processing**<br>
  Datasets were imported and cleaned using d3, including type conversion and normalization.

- **Frame-Based Narration**<br>
  The 14-frame storyboard visualizes the narrative from the introduction of the shark, to the ecosystem, ending with a call to action. 


## 📊 Visualizations
S.No | Visualization  | Dataset	Type | Type | What It Shows | Interaction |
| ------------- | ------------- | ------------- | ------------- | ------------- | ------------- |
| 1. | Regional Shark Mortality Distribution | Global Shark Fishing Mortality Estimates (2012–2019) | Choropleth Map | Fishing hotspots | Hover info, year slider |
| 2. | Global Shark Mortality Over Time | Global Shark Fishing Mortality Estimates (2012–2019) | Stacked Area Chart | Trends and regulatory impact  | Year hover + annotations |
| 3. | Species vs Fatal vs Amount of Incidents  | GSAF | Bubble Graph  | Species danger comparison | Toggle fatal vs non-fatal |
| 4. | Amount of Incidents per year | GSAF  | Line Graph  | Trends in incident frequency | Scroll transition |
| 5. | Sightings Over Time | Sharkbase | Time Series Graph / Line Graph | Declining global sightings | Location comparisons |
| 6. | California Coastal Incident Density and Temporal Shift | California Incidents | Circular Bar Chart | Influence of beach activity | Severity sorting |


## 💡 Innovative Visualization
**Incident Trends Over Time – Human Body Map**<br>
Maps incident concentration to body regions on a scalable human silhouette, scaled by coastal population over time.

**Features**
- Hover breakdown of severity and incident count
- Surfboard icon encoding risk per million people
- Temporal time slider animation from 1980–2019

**Why It’s Innovative**
- Combinatorial: body heat map + population scaling + risk indicator
- Shows increased incidents follow population growth, not aggression
- Aligns perception vs reality of danger

## 🏗️ Data Cleaning and Processing
Imported through D3
Type conversion and normalization
De-duplication and alignment of categories
Standardized formats for visual consistency

## 🧭 Website Story Flow — 14 Frames
1️⃣ Introduction to Sharks<br>
2️⃣ Sharks and Their Ecosystem<br>
3️⃣ Human Presence<br>
4️⃣ Sightings Over Time Visualization<br>
5️⃣ Shark and Human Encounters<br>
6️⃣ Amount of Incidents per Year<br>
7️⃣ Other Shark Species<br>
8️⃣ Species vs Fatal vs Amount of Incidents<br>
9️⃣ Misconceptions About Sharks<br>
🔟 Debunking Shark Myths<br>
1️⃣1️⃣ Human Impact<br>
1️⃣2️⃣ Global Shark Mortality Over Time<br>
1️⃣3️⃣ Regional Shark Mortality Distribution<br>
1️⃣4️⃣ California Coastal Incident Density<br>

## 🧠 Discussion
**Lessons Learned**
- Narrative visualizations must support thematic flow.
- Varied data sources required extensive cleaning.
- Scroll-trigger animations take precision and tuning.
- Data reveals real threats are heavily human-driven.

**Future Improvements**
- Smoother shark movements
- Add immersive audio
- More scene-specific interactions
- Create a mobile-first version

## 📚 References
1. https://datadryad.org/dataset/doi:10.25349/D9JK6N#citations
2. https://www.sharkattackfile.net/incidentlog.htm
3. https://www.kaggle.com/datasets/ryanwong1/shark-incidents-in-california-1950-2022
4. https://www.marine.csiro.au/ipt/resource?r=ala_dr2383
5. https://codepen.io/michellebarker/pen/dyMQYYz
6. https://github.com/JoshData/historical-state-population-csv
7. https://sketchfab.com/3d-models/boat-57b1ca19f1484559b22c4b8ad408559d
8. https://sketchfab.com/3d-models/nanando-diver-underwater-0073b3e5348640fbbaf73278726400fb
9. https://sketchfab.com/3d-models/great-white-shark-bf81b64f0121443da38112f706b7356f
10. https://www.worldwildlife.org/resources/explainers/wildlife-climate-heroes/sharks-are-key-to-the-health-of-our-oceans-and-climate/
11. https://www.science.org/content/article/shark-kills-rise-more-100-million-year-despite-antifinning-laws
12. https://www.worldwildlife.org/resources/facts/shark-facts-vs-shark-myths/