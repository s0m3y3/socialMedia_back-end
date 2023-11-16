# Social Media Back-End
Jump-start your social media app, with this back-end setup! 

## Table of Contents

- [Description](#description)
- [Screenshots/videos](#Screenshots/videos)
- [Installation](#Installation)
- [License](#license)
- [Contact](#contact)

## Description
(pending...)


## Screenshots/videos:
(pending...)

## Installation
In the root folder of this apps, you will need to install node package. Enter in terminal: npm i. 
That will install the following files: 
* dotenv: ^8.2.0
* express: ^4.17.1,
* mongoose: ^7.0.2

If you do not have a mongodb account, you can create one and set it as your server, under config/connection.js. 
The default mongo-db connect is: 'mongodb://127.0.0.1:27017/studentsDB'. You can replace this with your server link. 

Then run the program with the command:  
  npm start

Then use an app like Insomnia to do the following commands: 


GET
.../api/thoughts 
.../api/users 
.../api/thoughts/:id
.../api/users/:id

POST
.../api/users/

PUT
.../api/users/:id

<!-- 
DELETE
.../api/users/:id

DELETE & POST 
/api/users/:id/friends/:id
 -->

NOTE: "..." is the server. If local, then it may be:  http://localhost:3005/, so the first GET will look as:  
http://localhost:3005/api/thoughts 

## License -->

  MIT License

    Copyright (c) 2023, Github username: s0m3y3
    
    Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions: The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
    
    THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.


## Contact

Github: [Link](https://github.com/s0m3y3/socialMedia_back-end)  
No deployed Link.

