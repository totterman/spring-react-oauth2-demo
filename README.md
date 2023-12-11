# spring-react-oauth2-demo
Demonstration of React frontend authenticating to Spring Boot backend using OAuth2 with Keycloak.
The whole concept is proudly stolen from [ch4mpy](https://github.com/ch4mpy/spring-addons) 
which is a very informative repository well worth visiting. Thank you very much **ch4mpy**!

### Frontend
This is my first excercise with React, so nothing special to write about. 
Unit tests in particular are not very elegant, and miss some common patterns and idioms.
My implementation uses two principal contexts for the app: one for the user login status, and another for the UI language.
So far, this seems to work out quite nicely.

### Running
Directory `demo-deploy` contains some useful scripts. 

There is a Docker-compose file for Keycloak to be run as a Docker container.
Keycloak reads in its configuration at startup from `realm-config.json` which of course can be tweaked according to the actual needs.
All connections are HTTPS which requires valid certificates for each service. 
Leave a few seconds for Keycloak to start before starting the Spring Boot services and the frontend.

Ports:
- 8080: Keycloak
- 8081: Gateway server
- 8082: Resource server

The frontend uses the Gateway server as proxy and is accessible from `localhost:8081/ui`

