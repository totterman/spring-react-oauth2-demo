#!/usr/bin/env sh

echo "Stopping cluster..."
minikube stop --profile demo
minikube delete --profile demo
echo "Cluster removed."
