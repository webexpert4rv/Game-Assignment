# Tic Tac Toe

Tic Tac Toe is a simple game consisting of a 3x3 grid in which players take turns making their mark (cross or circle) until either one player achieves a connected line of 3 marks or the board state prevents either player from achieving a line of 3 marks which results in a draw.

###  Technical requirements
1. Node Js 13.11.0 with TypeScript (TS).
2. React Js 17.0.2 with TypeScript (TS).


### Structure

Detailed directory structure for both frontend and backend.

    .
    │
    ├── Backend                 # Contain All Back end Logic (Node Js)
    │   ├── node_modules          
    │   └── source         
    │     ├── controllers           #contain all controller that is required to run applications
    │     └── routes                # contains all routes of applications
    │ 
    └── Frontend             # Contain All Front End Design and Patterns (React With Type Script)
        ├── node_modules         
        ├── public         # Public folder contain all public resources
        └── src             #src contains all UI of applications
          └── components    #Contain all components
          └── hooks    #Contain api call and logic
          └── pages    #Contain all pages to render




## Installation
Port 6060 will be used for backend and 3000 for frontend. Please keep both port open and unused.

You have to change the api url in file Frontend/src/hooks/useLogic.ts on line number 4

```bash
http://localhost:6060/
```
For Backend you have to run folling commad : 

```bash
cd Game-Assignment/Backend
npm install 
npn run dev
```
For Frontend you have to run folling commad : 

```bash
cd Game-Assignment/Frontend
npm install 
npm start
```

## Usage

Once you have set up the server run this url by changing the domain name.

```bash
http://<domain>:3000/
```

## Contributing
Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.
