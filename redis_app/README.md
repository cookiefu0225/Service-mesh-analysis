# Sample App Using Redis

## Local Setting Instruction

First, make minikube access local image repository

    eval $(minikube -p minikube docker-env)

Build image

    docker build -t python-app .

Ready to apply yaml files

## Start deployment and service

    kubectl apply -f <path-to-file>
