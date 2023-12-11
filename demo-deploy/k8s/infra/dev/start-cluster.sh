#!/usr/bin/env sh

echo "-> Starting cluster..."
minikube start --cpus 2 --memory 4g --driver docker --profile demo

echo "-> Starting Ingress controller..."
minikube addons enable ingress --profile demo

sleep 30

echo "-> Starting keycloak..."
kubectl apply -f services/keycloak-configmap.yml
kubectl apply -f services/keycloak.yml

sleep 10
echo "-> Waiting for keycloak to be ready..."

while [ $(kubectl get pod -l app=demo-keycloak | wc -l) -eq 0 ] ; do
  sleep 5
done

kubectl wait \
  --for=condition=ready pod \
  --selector=app=demo-keycloak \
  -- timeout=300s

kubectl apply -f services/keycloak.yml

echo "-> Keycloak started."
