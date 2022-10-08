Problem statement
Company X wants an application to store the GPS data of their devices and provide insights
from this data. This is the expected user experience:
Login page → GPS Summary page


Input Data
Import the sample GPS data collected at intervals of 5 min to any RDBMS store (SQL,
Postgres, etc.).
All timestamps are in the same time zone.

All timestamps are in the same time zone.
DeviceId Device Type Timestamp location
D-1567 Aircraft 31-08-2022 10:05 L1
D-1567 Aircraft 31-08-2022 10:10 L1
D-1567 Aircraft 31-08-2022 10:15 L1
D-1567 Aircraft 31-08-2022 10:20 L1
D-1567 Aircraft 31-08-2022 10:25 L2
D-1568 Personal 31-08-2022 10:05 L3
D-1568 Personal 31-08-2022 10:10 L3
D-1568 Personal 31-08-2022 10:15 L3
D-1568 Personal 31-08-2022 10:20 L3
D-1568 Personal 31-08-2022 10:25 L3
D-1569 Asset 31-08-2022 10:15 L4
D-1569 Asset 31-08-2022 10:20 L4
D-1569 Asset 31-08-2022 10:25 L1
D-1569 Asset 31-08-2022 10:30 L1
D-1569 Asset 31-08-2022 10:35 L2
D-1570 Personal 31-08-2022 10:35 L5
D-1571 Asset 31-08-2022 10:35 L6

Scenarios:
Login page
1. User creation
2. Take username and password from user and store in database.
3. User login
4. Validate user credentials and allow login.

![login] (https://res.cloudinary.com/mcaprojectnitjsr/image/upload/v1665258554/pensive/p1_yvmi4q.png)
![signup] (https://res.cloudinary.com/mcaprojectnitjsr/image/upload/v1665258555/pensive/p3_jwir64.png)
![GPS Summary] (https://res.cloudinary.com/mcaprojectnitjsr/image/upload/v1665258554/pensive/p2_oolrs9.png)
Technologies used
1. Frontend (FE): React.JS
2. Backend (BE): Node.JS
3. FE & BE communicate through REST APIs.
4. Database: RDBMS (MySql)


#To Run this Application
1. Open Terminal and change directory separately for Backend and FrontEnd
2. Type yarn install in both and press enter.
3. After that type yarn start to run prject

#To setup Mysql 
write all requirement of MYSQL  in .env file to connect.


