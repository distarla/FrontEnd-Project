# FLAG - Projeto FrontEnd
## Event Management Application

This project aims to build a backoffice web application which allows users with different access permissions to login and manage the events scheduled on a calendar and the details of the associated clients.

### Using the Application associated Technologies

1.LOGIN PAGE:

In this page, the company users, can login to the website, using their previously predefined credentials, which are stored in a local JSON file. The passwords are hashed and its result code is stored which is going to be checked against the hashed code of the inputed password.
Each user has his own level of access and, when logging in, some components can be or not visible to the user, according to this level. Users with a lower level can only see the data and not edit it.

2.HOME PAGE
2.1 CALENDAR

The displayed calendar allows users to quickly and visually see and access the scheduled dates and by that dates, the clients details.
This calendar is a component created with react moment library and is synced with google calendar using the google calendar API.
To access the events from the API, the access point XXXX is used and to be able to create new events, the endpoint used is XXXX with a security token XXXXX.

2.2 MENU
The menu allows access to the different options of the application, which can almost all be accessed directly from the calendar.
The navigation through the content of the menu is done using React-Routes.

2.2.1. Create New Event
This option allows the user to search the date for the new event and insert a new entry on the calendar. Next the user is asked, using a modal if he wants the enter the client's data. If yes, a form opens and the data from the form stays associated with that event. It can be later shown by accessing the date.

2.2.2. Change or Delete Event
By searching the wanted date, the app accesses it and gives the option of changing the event date and, on entering a new one, it associates the client's details with the new date.
It gives the option of changing client's details by opening the form and presenting a save, cancel and delete button. On delete, it shows a warning message saying it will delete all the details from that client.
It has the option for deleting the event, showing a warning that the action will delete the date and all the client's details.

2.2.3 Search Events
This gives the user the option of searching the events by date, years, date range, synce, after, by event description and by client name.
It offers the possibility of filtering events by some form field and to show or not the client details.

### Notes

This project was developed using React, git and Git-Hub for version control and Trello for project control.
It was developed with the aim of being completed on the backend part of the course and further developed by implementing new functionalities and become useful at a real business level.

Further documentation on more detailed development issues can be found at XXXX.