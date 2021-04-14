# 2021 Google Cloud Ready Facilitator Progress Dashboard
### Developed by Naseem Shah, 2021 Google Cloud Ready Facilitator from Cochin University of Science and Technology.
### Made for 2021 Google Cloud Ready Facilitators.

This Application automates the Maual GCR facilitor daily student report generation. This application was developed based on data recieved from 2021 daily student report sent from Google. So this best compatible with 2021 GCRF daily student report.

## Features
- Facilitators just have to replace with latest `.csv` file recived from Google. Nothing else to do!
- Only the students can see their progress and their personal details, which saves facilitators time. 
- Facilitators does not need to spend hours filtering data and makeing progress reports daily. 
- Leaderboard Page makes the students enrolled in the program to have sense of competition thus making completing their Quests and Skill badges sooner.
- Students get latest data just with a click and track thier progress.

## How this works?
- Application will reads the data directly from the 2021 GCRF daily student report sent to facilitators which is in `.csv` format. 
- Upon entering the email address by student, their progess is displayed on "My Progress Tab". This application will parse through the data.
- Leaderboard can be accessed in "Leaderboard" tab so that students can have sense of competition.

## How to host GCRF Dashboard for your campus?

Well, it's easy! This was developed such that facilitators have minimal effort to get this up and running. Even if you don't know React and some the technologies used to develop this! Just follow following freindly steps:

### Steps workflow:
- Setting up 
- Download/Update latest data.
- Set up server for your campus.
- Push the changes to the server. 

## READ THE STEPS CAREFULLY! 

### STEP 1 - Setting project up locally and testing it:
- 1.1 - Fork/Clone this repo: 
<br> 
`git clone https://github.com/naseemshah/gcrf-dashboard-2021.git`
<br>
- 1.2 - Download Progress Report `.csv` and rename it to `data.csv`.
- 1.3 - Create a folder named `studentData` in `public` folder. <br> <br>
![Step 1.3](/docs/images/step1.3.png)
- 1.4 - Place your `data.csv` in  `studentData` folder.
- 1.5 - Change the configuration file to your config (stuff like Institution Name and all). You can set your Institution Name here and the latest date of updation. 
<br> Goto `/src/appConfig.js` and edit `appConfig.js`. 
![Step 1.5](/docs/images/step1.5.png)
- 1.6 - Now we have to install the dependencies used in the project. You must have Node and Yarn package manager installed in your machine as this project uses Yarn package manager and React. Open Terminal and navigate to the project folder and type in <br> 
`yarn install`
- 1.7 - Great! After sucessfull installation, start the localserver so as to test the application. To start the server locally type in <br>
`yarn start`<br>
You will see server running on `localhost:3000`
![Step 1.7](/docs/images/step1.7.png)
- 1.8 - Open web browser and goto `localhost:3000` to test the application. Now you have your latest student data up and running locally.
![Step 1.8](/docs/images/step1.8.png)

### STEP 2 - Set up Firebase hosting
In this step we will setup a free firebase hositing and deploy your student daashboard live on the internet.


BEFORE YOU START THIS STEP. BUILD THE APPLICATION <br>
goto terminal and type in `yarn build` in your project folder.
![Build your Application](/docs/images/yarn-build.png)

<br> After building you can follow the steps <br>

- 2.1 - Goto to https://firebase.google.com/products/hosting/  and click "Goto Console". You will be asked to signin with your Google account.![Step 2.1](/docs/images/step2.1.png)
- 2.2 - Click "Add project". Then give a project name, for instance `gcrf-<institution>-2021` and click continue. You can turn off Google analytics if you want. Then Click continue. ![Step 2.2](/docs/images/step2.2.png)![Step 2.2.1](/docs/images/step2.2.1.png)
- 2.3 -  Wait till your project is ready an click continue.![Step 2.3](/docs/images/step2.3.png)
- 2.4 - Goto sidebar menu -> Hosting![Step 2.4](/docs/images/step2.4.png)
then click get started.
- 2.5 - Follow the On-screen instructions. First install Firebase tools as shown instruction.![Step 2.5](/docs/images/step2.5.png)
- 2.6 - After installation of Fiberbase tool, goto terminal and navigate to the project folder. Then initialize the project as show in in the instructions. MAKE SURE YOU ARE IN THE PROJECT FOLDER WHEN YOU ARE DOING THIS.<br>

    ![Step 2.6.1](/docs/images/step2.6.1.png)

    <br>

    Choose an Exisiting project.

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

    USE THE Following configuration


    <br>

    ![Step 2.6.5](/docs/images/step2.6.5.png)
- 2.7 - Deploying to Web. <br> `firebase deploy` <br><br>![Step 2.7](/docs/images/step2.7.png)

Whooo! Congrats your app will be availble on the web if followed correctly!

# Updating the website when a new Progress Report comes in
To update with latest progress data, simply download the `.csv` file and rename it to `data.csv` and replace it with the existing `data.csv` in `/public/studentData/` folder.

Then you have REBUILD and REDEPLOY the application again. <br> Type in `yarn build`
<br>
Now we have to REDEPLOY THIS to see changes in the web.


That's all.

Any imporvement to this Documentaiton or any new contibutions are always welcome! 

Thanks,
Naseem Shah