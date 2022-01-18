# tx-challenge
This is my solution to full stack challenge given to me by TX services. 
Solution consists of frontend part, backend part and database. It is dockerized and runnable with docker-compose command.

##Technologies used
###Backend
For backend, I decided to go with spring boot application, because it provides a lot of functionality out of the box and can speed up the development process. 
Starters used:
- web starter for API creation
- data-jpa starter for connection to the db.

Third party libraries used:
- lombok to reduce boilerplate code
- mapstruct for mapping between DTO and entity 

I have decided to go with SQL database, postgresql in particular. Reasoning behind this decision is that sql databases are generally faster on loading data in comparision with document-oriented databases. 
In our case, loading of the data is mor often the case than inserting large amount of data in one chunk.

###Frontend
On frontend, I decided to use React typescript (create-react-app bootstrap). Regarding css and styling, I did it with plain css.
Reasoning for choosing react is performance, because react is proven to have really good performances due to virtual DOM. 

##Thinking process

My first step was to try to understand requirements. When I figured out what is required of me, I started defining interface between components and what data is needed.
With defined interface (inputs and outputs of each component), my next step was to design API on technical level and to decide technology for each component.  
Implementation was done in iterative approach, with many changes and refactorings along the way.

##Improvements and alternatives 

##General
- Communication between FE and BE can be established through web sockets instead of polling of server.
- Authentication part, so user can login. Now this is mocked in really basic way, just to have author of the message.
- Data validation, so we don't have empty messages, users etc on both FE and BE.

###Frontend
- UI design. My styling skills are very limited, so I did poor job on this, I'm aware of that. 
- Error handling on UI side in terms of displaying error messages. This is not done at all, should be there, but in given time frame I have decided to leave it as is.
- State management in react: current solution use hooks for state management and pass down parts of the state through props. I have started this way because app was small, 
but I already have an code smell, where current user is passed down from root to the leaf. I would propose some state management tool like redux

###Backend
- In case we have lots of messages, there is no need to return them all, we can introduce pagination, so we return newest one first, and older ones can be returned on demand
- Current db design is very basic and it should be redesigned if we want to support authentication, multiple channels in chat etc.




