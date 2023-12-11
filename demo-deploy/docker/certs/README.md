# TLS certificates

All services need own certs:
- keycloak
- bff-server
- greeting-server
- rect-frontend

Use ie. `mkcert` to generate TLS certificates.
### mkcert -key-file demo-key.pem -cert-file demo-cert.pem demo localhost 127.0.0.1 ::1
