import http from "node:http";

const server = http.createServer((request, response) => {
    return response.end("Sucesso")
});

server.listen(3333);
