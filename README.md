# Reverse-proxy-server
Implementation of reverse proxy server using NodeJS.

In bash terminal, run the chat server:
nodemon chatServer.js
//Chat Server is listening on 3000!


Open new bash terminal, run the contact list server:
nodemon contactListServer.js
//Contact List Server is listening on 8000!


Open new bash terminal, run the proxy server:
nodemon index.js
//[HPM] Proxy created: /chatApp  -> http://localhost:3000
//[HPM] Proxy created: /contactApp,/create-contact  -> http://localhost:8000
//Proxy Server is listening on 80!


Test individual servers:
http://localhost:8000/contactApp
http://localhost:3000/chatApp

Test proxy server:
http://localhost:80/chatApp
http://localhost:80/contactApp
Actual port number will be hidden from the client.

![image](https://user-images.githubusercontent.com/7759342/123505028-727bc400-d67a-11eb-91c9-fe107da13748.png)

