const restify = require('restify');

const server = restify.createServer({
   name: 'Node Api Server'
});

//creat get request
server.get('/languages', function (request, response, next) {
    const message = [
        {name: "JavaScript"},
        {name: "SQL"},
        {name: "Phyton"},
        {name: "Java"},
        {name: "Bash/Shell/PowerShell"},
        {name: "C#"},
        {name: "PHP"},
        {name: "TypeScript"},
        {name: "C++"},
        {name: "C"},
    ];
    response.json(message);
    //tell to restify that function was executed
    next();
});

//start server
server.listen(3000, function () {
  console.log('%s is running', server.name);
});


