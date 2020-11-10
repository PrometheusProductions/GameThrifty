# Project Overview

## Project Name

GameThrifty

## Project Description

Search engines that look for discounts on video games through predetermined digital storefronts. 

## API and Data Sample

This project will be utilizing CheapShark's public API found at https://apidocs.cheapshark.com/?version=latest#c6e4678d-7ff0-ebd4-59c1-b4d0fb3dac87


JSON Snippet:
```{
    "info": {
        "title": "Front Mission Evolved",
        "steamAppID": "43000"
    },
    "cheapestPriceEver": {
        "price": "2.49",
        "date": 1403200659
    },
    "deals": [
        {
            "storeID": "27",
            "dealID": "EjEoWVBCg8GF4otG7dyzw5os2Wspej92jyc5yNNsckw%3D",
            "price": "8.99",
            "retailPrice": "9.99",
            "savings": "10.010010"
        },
        {
            "storeID": "1",
            "dealID": "%2BUL8j2SPTUS4qzVyudPy%2FxU%2BsLrFFSno4nMADBI2fd0%3D",
            "price": "9.99",
            "retailPrice": "9.99",
            "savings": "0.000000"
        },
        {
            "storeID": "3",
            "dealID": "F1wYY%2B9ujpsFFQv1eYzcmAhx077mYdojSSNGNmWScHk%3D",
            "price": "9.99",
            "retailPrice": "9.99",
            "savings": "0.000000"
        },
        {
            "storeID": "11",
            "dealID": "HknS8P%2B736Uq70O9e8j1j1qF4js5SHpiBtssnoas3As%3D",
            "price": "9.99",
            "retailPrice": "9.99",
            "savings": "0.000000"
        }
    ]
}```


## Wireframes

Upload images of your wireframes to an image hosting site or add them to an assets folder in your repo and link them here with a description of each specific wireframe.

https://wireframe.cc/pro/pp/4198c01b5392881


### MVP/PostMVP

The functionality will then be divided into two separate lists: MPV and PostMVP.  Carefully decided what is placed into your MVP as the client will expect this functionality to be implemented upon project completion.  

#### MVP 

- Find and use external api -
- Render suggestions based on user input -
- Allow user to choose from relevent results if their input returns any -
- Allow user to click on a title of their choice for more information - 

#### PostMVP  

- Allow the user to subscribe to email alerts on games of their choice 
- Account creation

## Project Schedule

This schedule will be used to keep track of your progress throughout the week and align with our expectations.  

You are **responsible** for scheduling time with your squad to seek approval for each deliverable by the end of the corresponding day, excluding `Saturday` and `Sunday`.

|  Day | Deliverable | Status
|---|---| ---|
|Nov 9| Prompt / Wireframes / Priority Matrix / Timeframes | Incomplete
|Nov 10| Project Approval | Incomplete
|Nov 12| Core Application Structure (HTML, CSS, etc.) | Incomplete
|Nov 13| Pseudocode / actual code | Incomplete
|Nov 16| MVP | Incomplete
|Nov 17| Presentations | Incomplete

## Priority Matrix

https://imgur.com/a/U6dUp0Y

## Timeframes

Tell us how long you anticipate spending on each area of development. Be sure to consider how many hours a day you plan to be coding and how many days you have available until presentation day. Students usally put in around 40+ hours into their project 1.

Time frames are also key in the development cycle.  You have limited time to code all phases of the game.  Your estimates can then be used to evalute game possibilities based on time needed and the actual time you have before game must be submitted. It's always best to pad the time by a few hours so that you account for the unknown so add and additional hour or two to each component to play it safe. Throughout your project, keep track of your Time Invested and Actual Time and update your README regularly.

| Component | Priority | Estimated Time | Time Invested | Actual Time |
| --- | :---: |  :---: | :---: | :---: |
| HTML & CSS | H | 8hrs| --- | --- |
| JavaScript | H | 16 hrs| --- | --- |
| Search Results | M | 8 hrs| --- | --- |
| Cleaning up Code | L | 8 hrs| --- | --- |
| Total | --- | --- | --- | --- |

## Code Snippet

Use this section to include a brief code snippet of functionality that you are proud of and a brief description.  

```
function reverse(string) {
	// here is the code to reverse a string of text
}
```

## Change Log

Version 1.0
	- Documentation Creation
	- Start of Log
	
Version 1.0.1
	- Added Estimated Time Requried for Project Modules
	- Added JSON sample from CheapShark API
	- Added Links to the following:
		- Wireframes
		- Matrix PNG
		- API
