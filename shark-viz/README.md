# 🦈 Beneath The Surface

## 1. Project Summary
The purpose of our project is to tackle the misconceptions surrounding sharks by combining multiple datasets to tell a story about shark populations, attacks, and the impact of human activities. Through these visualizations, we explore how sharks are spread out globally, how often human-shark interactions occur, and how various human activities have contributed to the significant decline in shark populations.
We start by introducing sharks and their global presence, showing where various sharks are found and how their presence varies by region. This is then followed by an analysis of shark attack data, putting the human risk into perspective, before shifting the focus to California to examine local incident trends and contributing factors, analyzing different patterns throughout the years, activity types, and several locations to showcase the environmental and behavioral factors behind these incidents.
We end by using these findings and comparing them with global shark mortality data, highlighting the irony that humans, in reality, pose a far greater threat to sharks than the other way around.
By integrating various types of data from sources like the Global Shark Attack File, Global Shark Fishing Mortality Estimates, and SharkBase, we aim to educate viewers about shark danger and emphasize the urgent need for shark conservation.

## 2. Data Sets:
Title: Global Shark Fishing Mortality Estimates (2012–2019)
Description: This dataset provides global estimates of shark fishing mortality between the years 2012 and 2019. Researchers assess how shark mortality rates have changed over time despite regulatory efforts. Each record represents a region’s estimated mortality for a given year, with attributes that describe fishing gear, catch totals, regulatory presence, and indicators relating to the environment and governance. This dataset allows for time and regional comparisons, and highlights where conservation measures have/haven’t been effective.

Title: Global Shark Attack File: Incident Log
Description: An incident-level spreadsheet maintained by the Shark Research Institute (GSAF) that’s updated continuously and downloadable as an Excel file. It classifies each record (e.g., unprovoked, provoked, watercraft, air/sea disaster, questionable) and notes fatalities (“all individuals survived unless noted otherwise”).

Title: Shark Incidents in California from 1950-2022
Description: This dataset reported shark incidents along the California coastline between 1950 and 2022. Each record represents an individual incident and includes information such as the year, location, shark species involved, activity of the person at the time, and whether the incident was fatal. The dataset helps identify when, where, and under what conditions shark–human interactions occur, allowing us to analyze temporal and spatial patterns and relate them to environmental and behavioral factors.

Title: SharkBase 
Description: This dataset is a shark / marine life encounter database ranging from 1998-10-13 / 2015-06-19. The species included are sharks, rays, and chimaeras. The Most important Parts of the data are the species, encounter date, and location. This dataset should help us further analyze shark population over time and relate that to other factors.

Title: Historical Population of the U.S. States
Description: A state population dataset. It provides population data from the census’s annual population estimates for each state from 1900-2019.

## Implementation Process
- **Website Architecture**
  We built a website that narrates as you scroll through. There are 14 frames that the shark navigates through visualising a new part of the story. These include, ecosystem context, human interaction, data visualizations, misconceptions, mortality, and concluding insights.

- **Integrating Visualisations**
  Regional Shark Mortality Distribution (Choropleth Map)
  Global Shark Mortality Over Time (Stacked Area Chart with a Protective Regulation Overlay)
  California Coastal Incident Density and Temporal Shift (Circular Bar Chart)
  Species vs Fatal vs Amount of Incidents (Bubble Graph)
  Amount of Incidents per year (Innovative Visualization - Human Body Map)
  Sightings Over Time (Time Series Graph/ Line Graph)

- **Data Cleaning and Processing**
  Datasets were imported and cleaned using d3, including type conversion and normalization.

- **Frame-Based Narration**
  The 14-frame storyboard visualizes the narrative from the introduction of the shark, to the ecosystem, ending with a call to action. 


## Innovative Visualization: Incident Trends Over Time - Human Body Map

This visualization maps shark incident data onto a human silhouette that scales with the US coastal state population over time (1980–2019). The design contains three main visual elements with interactivity:

**Scaled Human Figure:** A human silhouette that grows proportionally with the combined population of US coastal states. Body regions (head/neck, torso, upper arm, lower arm/hand, upper leg, lower leg, foot/ankle) display colored bubbles sized according to incident frequency at each location group on the body. Users can hover over bubbles to see detailed breakdowns of fatal vs. non-fatal incidents.

**Scaled Surfboard Rate Indicator:** A surfboard image that scales based on the rate of incidents per million people (using square root scaling for subtlety). The rate value is displayed directly on the surfboard, providing immediate context.

**Temporal Slider with Animation:** A year slider (1980–2019) with play functionality that animates through years. This displays how both raw incident counts and population-adjusted rates change over time.

**Why This Visualization is Innovative:**
This visualization qualifies as innovative because it is combinatorial and combines multiple visualization techniques into a unified system being the body heat map, proportional scaling figure, and rate surfboard  indicator together. Each component encodes different data dimensions. The body shows where incidents occur, the human size shows how many people are in these areas, and the surfboard shows the actual risk rate. Another point of innovation is the comparison with both scales that shows that the rising incident counts are largely a result of population growth rather than an increase in risk or shark aggression.The size of the bubbles on the body even demonstrates this, with them growing proportionally to the human silhouette growing as well completely naturally.

## Discussion
**Lessons Learned**
- Narrative Visualizations
Every visualization has to fit the narrative and serve its purpose in it. This required deliberate and precise storyboarding. 
- Utilising Datasets from Various Sources
Differing data types and datasets from various sources had to work hand in hand to explain the narrative. The varying data reporting required cleaning of the data, and normalization.
- Scroll Trigger Animations
Animations required technique and work. The animations needed to combine well with the visualisations and text to properly visualize the narrative.
- Misconceptions Are Shaped by Selective Data
Working with these datasets showed us how rare shark incidents actually were compared to the scale of human-caused mortality and how they have been portrayed in the media. 

**Future Improvements**
- Improve shark animations making them smoother and more realistic.
- Add sounds to add a more immersive experience.
- Implement scene specific animations of text and visualizations.
- Maybe implement a mobile friendly version of the website that replicates the same immersive experience.
