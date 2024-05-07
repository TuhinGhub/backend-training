HTTP Error Codes

1xx Informational Response
100 Continue: The server has received the request headers and the client should proceed to send the request body.
101 Switching Protocols: The server is changing protocols according to the client's request.
2xx Success
200 OK: The request was successful.
201 Created: The request has been fulfilled and a new resource has been created.
204 No Content: The server successfully processed the request but there is no content to return.
3xx Redirection
301 Moved Permanently: The requested resource has been permanently moved to a new URL.
302 Found: The requested resource temporarily resides under a different URL.
304 Not Modified: The client can use cached data.
4xx Client Errors
400 Bad Request: The server cannot process the request due to a client error.
401 Unauthorized: The request requires user authentication.
404 Not Found: The requested resource could not be found on the server.
5xx Server Errors
500 Internal Server Error: A generic error message indicating a problem with the server.
503 Service Unavailable: The server is currently unavailable.
