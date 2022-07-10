# FLAG - Projeto FrontEnd
## Event Management Application

This project aims to build a backoffice web application which allows users with different access permissions to login and manage the events scheduled on a calendar and the details of the associated clients.

### Inspiration and further work
The idea for this project came from my current job for a small  wedding venue and aims to develop an application that is available for all the current workers to access and manage the events, client data and automatize some time consuming tasks.
The first step, which was the creation of an event scheduler, was the main goal of this project.
Further work on this project aims to create a client database, template emails with forms to ask for client data, automatic filling of template files like contracts and service planning, linked to each client.
It is also aimed to divide the application in departments, giving access only to the corresponding workers, and create a database of each event finance data, which automatically creates management reports.

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
For the events' data, MockAPI was used. The events were accessed through the access point "https://62c2f855ff594c65676aea91.mockapi.io/api/v1/Events" and shared with the calendar.
All the other HTTP requests use the same endpoint with the :id parameter, if necessary.

2.1.1. Show Event
If the user clicks an event, a modal opens with that event's details. That modal gives the option for the user to close the modal or change or delete the event.
If the logged user doesn't have permission to edit the events, the change and delete event buttons won't be visible.

    2.1.1.1. Change Event
    On clicking this button, another modal opens, showing the previous event data and a form for the user to add the new data.
    On the footer, there's a warning alert advising the user that changing the data will erase the previous data and buttons to save changes, which will send a PUT request to the API, or close.

    2.1.1.2. Delete Event
    This button opens a modal with a danger Card, warning the user that this step will completely erase that event's data.
    The user can then confirm, sending a DELETE request to the API, or close the modal.

2.1.2 Add Events
For the user to add new events, and send a POST request to the API, there are two different ways:
    
    2.1.2.1 Click Date
    On clicking a calendar date, a modal opens displaying that date and an input for the user to add the event's details.
    Then, the user can add that event or cancel by closing the modal.

    2.1.2.2 Add Event Button
    The calendar also has an Add Event button which triggers a modal with a form to input the event's details.
    On this one, the user can choose any date in a quicker fashion, without having to search the calendar for it.

### Notes

This project was developed using React, git and Git-Hub for version control and Trello for project control.
It was developed with the aim of being completed on the backend part of the course and further developed by implementing new functionalities and become useful at a real business level.

Further documentation on detailed development issues and technologies can be found at Git-Hub Wiki.


### Work Evaluation

During the execution of this project I had more struggles than I was counting on.
On a personal level it was a challenge for me to manage the lack of time and exhaustion.
As for the technological content, even though I was expecting to have some troubles since in fact, we didn't really approached React much in-depth in classes, I was secure that with my easiness to find solutions through research I would be able to overcome them. The reality was that for as much as a solution-getter I could be, the time needed for that, would not had allowed me to finish the project in time. There was a point in which I realized I would really not be able to add more functionalities to the basic objective of the project as the time wasted searching for solutions was too much. As such, I began asking for help, not because I couldn't understand on my own, but because I didn't had the time or was just too exhausted to be able to, even though, in reality, I happened to solve the vast majority of my questions before I got them answered. 
Specifically speaking on struggles, I struggled a lot with the calendar component. I tried many calendar libraries until I was suggested @fullcalendar. Even at that point I struggled with adapting the example code I could find to React and specifically to v18.
One of my biggest struggles was updating the state throughout some components which wasn't getting me the desired result.
I also struggled a lot on managing to make the calendar responsive.
The other issues were mainly a question of never having done it before but solving it through research.
As for project control I also had a bit of a struggle. Since it was my first time using git and Git-Hub, I was aiming to make a commit only when I had a functionality implemented and a push to Git-Hub only with a major implementation and code and css reviewed. It got to a time were I miss some commands, got some errors and to go back to create a new and clean repository would be too much time consuming. I also began to make commits even though I still haven't got the code functioning because I spend too much time without a breakthrough and I wanted to have a history of my tries. I haven't realized yet how to merge only a solution from a branch with a history of failed attempts.
Also, my file organization needs improvement. As my components were growing I realized maybe a division of function, layers and association between components is a best approach for organizing the files.

As a final result I am glad I was able to finish my first objective but I am disappointed with my final result.
For my self evaluation, my review on the evaluating criteria is the following:

Neither the dimension nor the complexity of the project are according to what I've envisioned but I managed to achieve my primary goal and the application is fully functional.
I believe, in some cases, there are better solutions for my code, specially in a reusability perspective but I did take an extra step in assuring my researches were about the most recent versions of the technology and the code was more efficient.
In some cases though I didn't apply what I considered the best solution because at that time, I had struggles with it, for example, I didn't manage to create the fetch context right away, so I had to share the event's data between the components through props and because of it I had to put all the code that used that data on the same file.
Regarding UI/UX, at a design level, my application is really simple. I believe the components feat well together and the usability is what is required for this case.
application tries to be responsive in all scenarios but, with the calendar on table format and lack of time, this was not an issue I had much time to spend on.
Documentation wise, since I never saw a documentation example, I had some difficulties but I tried to cover all of the technology involved.
As for autonomy, I was trying to be 100% autonomous but for time purposes that was not possible but I believe that, as I could most of the time answer my own questions I was, mainly autonomous.
In conclusion, I tried to apply in this project a bit of all we learn since the beginning of the course.
I tried to organize my work on a Kanban table, use Figma to draw a flowchart of my initial idea. 
I believe technologically I approached some issues that we haven't at all or just slightly talked in classes and didn't tried the easiest solutions. 
The resulting project didn't turn out as I expected but the fact the I know I can do better with more time or experience gives me confidence on the skills I'm learning.
For all of this, my final evaluation would be 75%.