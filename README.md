# 10 Object-Oriented Programming: Team Roster Application

## Description

-This project is a command line program that allows Users to manage team rosters. The inquirer question prompts are wrapped in call functions, and the sequencing of questions is set-up with a switch layout.

-Upon starting the application, the User is asked for the Manager's information (name, ID, email, office number). This information populates a new Manager using the Manager constructor.

-Once a manager has been created, the User has the choice to either "Add an Engineer," "Add an Intern," or "Finish Building Team".

-Selecting "Add an Engineer" will prompt the User to enter the Engineer's information (name, ID, email, GitHub username). This information populates a new Engineer using the Engineer constructor.

-Selecting "Add an Intern" will prompt the User to enter the Intern's information (name, ID, email, school name). This information populates a new Intern using the Intern constructor.

-Once the User has added the necessary team members, they can select "Finish Building Team," which will generate the HTML file in the dist/ folder using fs.writeFile and fs.apendFile.

-CSS styling has been created in a linked stylesheet.

-When viewing the team roster, each member has a personalized card with their information displayed.

-Upon clicking an email address, the User's default email program will open and populate the "TO" field of a new email.

-Upon clicking a GitHub username, the GitHub repository will open in a new tab.

## Usage

This application is not deployed live.

### Walkthrough
[Application Walkthrough](https://drive.google.com/file/d/1dcTdp4c0y6yHS2S4l34GqppYSIGIf3DK/view)

### Credits

Full-Stack Bootcamp Coursework