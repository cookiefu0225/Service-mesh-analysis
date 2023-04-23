# Sample App Using Redis

Only when using minikube need to set up, docker desktop can proceed to use  

    kubectl apply -f redis_deployment.yaml

## Local Setting Instruction

First, make minikube access local image repository

    eval $(minikube -p minikube docker-env)

Build image

    docker build -t python-app .

Run image locally

    docker run -d -p 9000:9000 --name backend python-app

Ready to apply yaml files

## Start deployment and service

    kubectl apply -f <path-to-file>
