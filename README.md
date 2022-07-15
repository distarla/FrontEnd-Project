# FLAG - Projeto FrontEnd
## Event Management Application

This project aims to build a backoffice web application which allows users with different access permissions to login and manage the events scheduled on a calendar and the details of the associated clients.

### Inspiration and further work
The idea for this project came from my current job for a small  wedding venue and aims to develop an application that is available for all the current workers to access and manage the events, client data and automatize some time consuming tasks.
The first step, which was the creation of an event scheduler, was the main goal of this project.
As time allowed, the second goal was also done, which was incorporating a way to view and manage the clients' details associated with each event.
Further work on this project aims to create a database, template emails with forms to ask for client data, automatic filling of template files like contracts and service planning, linked to each client.
It is also aimed to divide the application in departments, giving access only to the corresponding workers, and create a database of each event finance data, which automatically can create management reports.

### Using the Application associated Technologies

1.LOGIN PAGE:

In this page, the company users, can login to the website, using their previously predefined credentials, which are stored in a local Javascript file. The passwords are hashed and its result code is stored which is going to be checked against the hashed code of the input password.
If the login is successful, users are redirected to the home page, which can only be accessed if a user is authenticated.
Each user has his own level of access and, when logging in, some components may not be visible to the user, according to this level. Users with a lower level can not edit the data.

2.HOME PAGE

2.1 CALENDAR

On rendering the home page, a success alert with the logged user's details appears, along with the calendar.
The displayed calendar allows users to quickly and visually see and access the scheduled dates and the event details.
This calendar is a component created with the react @fullcalendar library.
It offers different views and the below options are available in all of them, except adding event by clicking date, which is only available in the Month View.
For the events' data, MockAPI was used. The events were accessed through the endpoint https://62c2f855ff594c65676aea91.mockapi.io/api/v1/Events and shared with the calendar.
All the other HTTP requests use the same endpoint with the :id parameter, if necessary.

2.1.1. Show Event
If the user clicks an event, a modal opens with that event's details. The user can access the clients' details for that event from here. That modal gives the option for the user to close the modal or to change or delete the event.
If the logged user doesn't have permission to edit the events, the change and delete event buttons won't be visible.

    2.1.1.1. Change Event
    On clicking this button, another modal opens, showing a pre-filled form with the previous data for the user to add the new data.
    On the footer, there's a warning alert advising the user that changing the data will erase the previous data (but keep the clients' data) and buttons to save changes, which will send a PUT request to the API, or close.

    2.1.1.2. Delete Event
    This button opens a modal with a danger Card, warning the user that this step will completely erase that event's data and the associated clients's data.
    The user can then confirm, sending DELETE requests to the API, or close the modal.

    2.1.1.3. View Clients Details
    This button redirects users to a new page that displays the clients' data, sending the Event Id as a parameter on the route(see 3.1).

2.1.2 Add Events
For the user to add new events, and send a POST request to the API, there are two different ways:
    
    2.1.2.1 Click Date
    On clicking a calendar date, a modal opens displaying that date and an input for the user to add the event's details.
    Then, the user can add that event or cancel by closing the modal.

    2.1.2.2 Add Event Button
    The calendar also has an Add Event button which triggers a modal with a form to input the event's details.
    On this one, the user can choose any date in a quicker fashion, without having to search the calendar for it.

3. CLIENTS' DATA

3.1. Clients Details

This page, will use the event Id in the route parameter to access the correct event data and display it on a card. It fetches MockAPI in a different endpoint (https://62c2f855ff594c65676aea91.mockapi.io/api/v1/Events/:id/Clients) for the clients data and displays each client in a different card. On the bottom there are three buttons that allow the user to edit the clients details (see 3.2), add a new client (see 3.3) or go back to the calendar. 
If the event doesn't have client's associated, a noticed is showed and only the add client and go back buttons are displayed.
On both cases, if the user doesn't have permission to edit the data, only the go back button is visible.

3.2. Edit Clients' Details

By clicking this button, a new page opens which also receives the event ID from the route parameter and displays the same header with the card containing the event information.
It shows a danger alert warning that changing or deleting the client data will result in that data loss.
After that, for each client it has a form, pre-filled with the previous data, which can be altered with new data and, for each form the user can save the changes or Delete the client, being redirected to the calendar.
On the bottom there's a go back button that redirects to the clients' details page.

3.3. Add new Client
As in all the client related pages, the header with the event's details is displayed.
Then, a form to add new client's details is showed in a card with a save changes button that redirects to the calendar page.
On the bottom there's also a go back button that redirects to the clients' details page.

### Notes

This project was developed using React, git and GitHub for version control and Trello for project control.
It was developed with the aim of being completed on the backend part of the course and further developed by implementing new functionalities and become useful at a real business level.

Further documentation on detailed development issues and technologies can be found at GitHub Wiki.

A deployed version of this repository can be found at https://sweet-sunflower-a90c17.netlify.app

### Work Evaluation

During the execution of this project I had more struggles than I was counting on.
On a personal level it was a challenge for me to manage the lack of time and exhaustion.
As for the technological content, even though I was expecting to have some troubles since in fact, we didn't really approached React much in-depth in classes, I was secure that with my easiness to find solutions through research I would be able to overcome them. The reality was that for as much as a solution-getter I could be, the time needed for that, would not had allowed me to finish the project in time. There was a point in which I realized I would really not be able to add more functionalities to the basic objective of the project as the time wasted searching for solutions was too much. As such, I began asking for help, not because I couldn't understand on my own, but because I didn't had the time or was just too exhausted to be able to, even though, in reality, I happened to solve the vast majority of my questions before I got them answered. 
Specifically speaking on struggles, I struggled a lot with the calendar component. I tried many calendar libraries until I was suggested @fullcalendar. Even at that point I struggled with adapting the example code I could find to React and specifically to v18.
One of my biggest struggles was updating the state throughout some components which weren't updating at the right time and getting me the desired result.
I also struggled a lot with the design, particularly on managing to make the calendar responsive. Although I was aiming for a minimalistic design, this area is not one of my strengths since I am not an imaginative person and this plus the fact that practically all I had was a pre-designed calendar component left me struggling a bit.
The other issues were mainly a question of never having done it before but solving it through research.
As for project control I also had a bit of a struggle. Since it was my first time using git and GitHub, I was aiming to make a commit only when I had a functionality implemented and a push to GitHub only with a major implementation and code and css reviewed. It got to a time were I miss some commands, got some errors and to go back to create a new and clean repository would be too much time consuming. I also began to make commits even though I still haven't got the code functioning because I spend too much time without a breakthrough and I wanted to have a history of my tries. I haven't realized yet how to merge only the solution from a branch with a history of failed attempts.
Also, my file organization needs improvement. As my components were growing I realized maybe a division of function, layers and association between components is a best approach for organizing the files.
I also know that my coding needs improvement, especially since, I created a specially big component with a lot of code (EventCalendar). That happened because in the beginning I wasn't managing to get the fetch context done so, because I had to share the event's data between the components through props, I joined all the components that needed the fetch data in one component and didn't got the time to refactor it.
Then, I repeat some code like the fetch for the clients's data, because I wasn't getting the result I wanted and didn't have time to try it in other ways.
Also I lacked the comments. Just because I'm not used to them.

All of this are examples of things I know that can be improved with time and practice and will improve also my app's performance.

As I finished my first goal and decided to take an extra step and add more functionalities, I got to an issue with adding an event, deleting it and clicking that same day. It didn't work without clicking another day first.
Unfortunately I detected that error too late to manage to solve it.
Also, a few days before the scheduled date for turning in the project, a lot of performance warnings showed up in the console which I didn't get to manage. Through research I found out it was a browser functionality which was turned on in recent updates and is fixable through refactoring css's and code to faster performance ones but also that the frameworks' development environment contributes to these issues.
Like addressed before, I didn't got the time for code refactoring and, since it were just warnings, I had to let them that way.

As a final result I am glad I was able to finish my first objective and even add more functionalities to this project.
For my self evaluation, my review on the evaluating criteria is the following:

I believe that the dimension and complexity of the project are according to what was expected but in some ways, aren't according to what I've envisioned. I managed to achieve more than my primary goal and the application is fully functional, except for the small bug I didn't got the time to fix.
I believe, in some cases, there are better solutions for my code, specially in a reusability perspective but I did take an extra step in assuring my researches were about the most recent versions of the technology and the code was the most efficient.
In some cases though I didn't apply what I considered the best solution because at that time, I had struggles with it, for example, the case of the fetch context.
Regarding UI/UX, at a design level, my application is really simple. I believe the components fit well together and the usability is what is required for this case.
application tries to be responsive in all scenarios but, with the calendar on table format and lack of time, this was not an issue I had much time to spend on.
Documentation wise, since I never saw a documentation example, I had some difficulties but I tried to cover all of the technology involved.
As for autonomy, I was trying to be 100% autonomous but for time purposes that was not possible but I believe that, as I could most of the time answer my own questions I was, mainly autonomous.
In conclusion, I tried to apply in this project a bit of all we learn since the beginning of the course.
I tried to organize my work on a Kanban table, use Figma to draw a flowchart of my initial idea. 
I believe technologically I approached some issues that we haven't at all or just slightly talked in classes and didn't tried the easiest solutions. 
The resulting project, in many ways, didn't turn out as I expected but the fact that I know I can do better with more time or experience gives me confidence on the skills I'm learning. I am confident the project presented don't make justice to the time and effort spent on researching, trying, handling errors and learning.
For all of this, my final evaluation would be 80%.