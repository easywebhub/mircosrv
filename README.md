# microsrv 
this project describes the application 

   ref : <a href="https://github.com/ErickWendel/NodeJSWithTypescript" target="_blank"> NodeJSWithTypescript</a> 

Patterns and Principles in this project:

- Generic Repository Pattern
- Singleton Pattern
- Multi-layer Architecture Pattern

Tools:
- NodeJS
- TypeScript
- ExpressJS
- MongoDB
- Mongoose
- GulpJS
- VSCode Task Runners

Convention Refs: <br />
   <a href="https://github.com/Microsoft/TypeScript/wiki/Coding-guidelines" target="_blank"> Coding guidelines Typescript - Microsoft</a> 

Run:
   <br><code>  > npm install </code>
    
   if not executing from VSCode: 
   <br><code> > gulp </code>

<h2> REST API Definitions: </h2>


CREATE <br />
   <code> > METHOD: POST </code> <br />
   <code> > PARAMS: {"id":"1","body":"testcomment","createAt":"2016-10-10" }  </code> <br />
   <code> > URL: http://localhost:5000/comment </code> <br />
   <code> > RETURN: success or error </code> <br />
<br />
   

RETRIEVE <br />
   <code> > METHOD: GET </code> <br />
   <code> > URL: http://localhost:5000/comment/ </code> <br />
   <code> > RETURN: [
  {
    "_id": "57dec9c47d63e726ec1d3be8",
    "id": "1",
    "body": "test comment",
    "createAt": "2016-10-10T00:00:00.000Z",
    "__v": 0
  }
]</code> <br />


GET ONE <br />
   <code> > METHOD: GET </code> <br />
   <code> > URL: http://localhost:5000/comment/57dec9c47d63e726ec1d3be8 </code> <br />
   <code> > RETURN:   {
    "id": "1",
    "body": "test comment",
    "createAt": "2016-10-10T00:00:00.000Z",
    "__v": 0
  } </code> <br />
   <code> > OBSERVATIONS: for this request, use item id in url (57dec9c47d63e726ec1d3be8) </code>
<br />


UPDATE <br />
   <code> > METHOD: PUT </code> <br />
   <code> > PARAMS: {"id":"2","body":"testcomment","createAt":"2016-10-10" }   </code> <br />
   <code> > URL: http://localhost:5000/comment/57dec9c47d63e726ec1d3be8 </code> <br />
   <code> > RETURN: success or error </code> <br />
   <code> > OBSERVATIONS: for this request, use item id in url (56800afbf34739a94da174f0) </code>
<br />

DELETE <br />
   <code> > METHOD: DELETE </code> <br />
   <code> > URL: http://localhost:5000/comment/57dec9c47d63e726ec1d3be8 </code> <br />
   <code> > RETURN: success or error </code> <br />
<br />









