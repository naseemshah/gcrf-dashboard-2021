# 2021 Google Cloud Ready Facilitator Progress Dashboard
### Developed by Naseem Shah, 2021 Google Cloud Ready Facilitator from Cochin University of Science and Technology.
### Made for 2021 Google Cloud Ready Facilitators.

This Application automates the Manual GCR facilitator daily student report generation. This application was developed based on data received from the 2021 daily student report sent from Google. Hence this is best compatible with the 2021 GCRF daily student report.

## Features
- Facilitators just have to replace with the latest `.csv` file received from Google. Nothing else to do!
- Only the students can see their progress and their profile details, which saves facilitators time. 
- Facilitators do not need to spend hours filtering data and making progress reports daily. 
- Leaderboard Page makes the students enrolled in the program have a sense of competition, thus making them complete their Quests and Skill badges sooner.
- Students get the latest data just with a click and are able track their progress.

## How this works?
- The Application will read the data directly from the 2021 GCRF daily student report sent to facilitators which are in `.csv` format. 
- Upon entering the email address by the student, their progress is displayed on the "My Progress Tab". This application will parse through the data.
- Leaderboard can be accessed in the "Leaderboard" tab so that students can have a sense of competition.

## How to host the GCRF Dashboard for your campus?

Well, it's easy! This is developed such that facilitators have minimal effort to get the reports up and running. Even if you don't know React and all other technologies used to develop this! Just follow below friendly steps:

### Steps workflow:
- Setting up 
- Download/Update latest data.
- Set up a server for your campus.
- Push the changes to the server. 

## READ THE STEPS CAREFULLY! 

### STEP 1 - Setting project up locally and testing it:
- 1.1 - Fork/Clone this repo: <br> `git clone https://github.com/naseemshah/gcrf-dashboard-2021.git`
- 1.2 - Download Progress Report `.csv` and rename it to `data.csv`.
- 1.3 - Create a folder named `studentData` in `public` folder. <br>
![Step 1.3](/docs/images/step1.3.png)
- 1.4 - Place your `data.csv` in  `studentData` folder.
- 1.5 - Change the configuration file to your config (inputs like institution name and all). You can set your Institution Name here and the latest date of updation. 
<br> Goto `/src/appConfig.js` and edit `appConfig.js`. 
![Step 1.5](/docs/images/step1.5.png)
- 1.6 - Now we have to install the dependencies used in the project. You must have Node and Yarn package manager installed in your machine as this project uses Yarn package manager and React. Open Terminal and navigate to the project folder and type in <br> 
`yarn install`
- 1.7 - Great! After successfull installation, start the local server so as to test the application. To start the server locally type in <br>
`yarn start`<br>
You will see the server running on `localhost:3000` <br>
![Step 1.7](/docs/images/step1.7.png)
- 1.8 - Open web browser and goto `localhost:3000` to test the application. Now you have your latest student data up and running locally. <br>
![Step 1.8](/docs/images/step1.8.png)

### STEP 2 - Set up Firebase hosting
In this step, we will setup a free firebase hosting and deploy the student dashboard live on the internet.


BEFORE YOU START THIS STEP, BUILD THE APPLICATION <br>
Goto terminal and type in `yarn build` in your project folder. <br>
![Build your Application](/docs/images/yarn-build.png)

<br> After building you can follow these steps <br>

- 2.1 - Goto to https://firebase.google.com/products/hosting/  and click "Goto Console". You will be asked to sign in with your Google account. <br>
![Step 2.1](/docs/images/step2.1.png)
- 2.2 - Click "Add project". Then give a project name, for instance, `gcrf-<institution>-2021` and click continue. You can turn off Google analytics if you want. Then click continue. <br>
![Step 2.2](/docs/images/step2.2.png)
![Step 2.2.1](/docs/images/step2.2.1.png)
- 2.3 -  Wait till your project is ready and click continue. <br>
![Step 2.3](/docs/images/step2.3.png)
- 2.4 - Goto sidebar menu -> Hosting! <br>
![Step 2.4](/docs/images/step2.4.png)
then click get started. <br>
- 2.5 - Follow the on-screen instructions. First, install Firebase tools as shown instruction. <br>
![Step 2.5](/docs/images/step2.5.png)
- 2.6 - After installation of the Fiberbase tool, goto the terminal and navigate to the project folder. Then initialize the project as shown in the instructions. MAKE SURE YOU ARE IN THE PROJECT FOLDER WHEN YOU ARE DOING THIS. <br>

    ![Step 2.6.1](/docs/images/step2.6.1.png)

    <br>

    Choose an Existing project.

    <br>

    ![Step 2.6.2](/docs/images/step2.6.2.png)

    <br>

    Choose the project you created in this case `gcrf-<institution>-2021`.

    <br>

    ![Step 2.6.3](/docs/images/step2.6.3.png)
    <br>

    Choose the project you created in this case `gcrf-<institution>-2021`.

    <br>

    ![Step 2.6.4](/docs/images/step2.6.4.png)
    <br>

    USE the following configuration


    <br>

    ![Step 2.6.5](/docs/images/step2.6.5.png)
- 2.7 - Deploying to Web. <br> `firebase deploy` <br> <br>
![Step 2.7](/docs/images/step2.7.png)

Whohoo! Congrats your app will be available on the web if followed correctly!

## Updating the website when a new Progress Report comes in
To update with the latest progress data, simply download the `.csv` file and rename it to `data.csv` and replace it with the existing `data.csv` in `/public/studentData/` folder.

Then you have to REBUILD and REDEPLOY the application again. <br> Type in `yarn build`
<br>
Now we have to REDEPLOY this to see changes in the web.


That's all.

Any improvement to this Documentation or any new contributions are always welcome! 

Thanks,
Naseem Shah
