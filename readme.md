# Launch Instructions

## minikube  

[minikube quick start](https://minikube.sigs.k8s.io/docs/start/)  

## Istio

Download Istio

    curl -L https://istio.io/downloadIstio | sh -
or command specify version and architecture

    curl -L https://istio.io/downloadIstio | ISTIO_VERSION=1.17.2 TARGET_ARCH=x86_64 sh -

After download:  

    cd <istio-dir>
    export PATH=$PWD/bin:$PATH

**Note**: We use Istio 1.17.1, and path setting command might be different in Windows.

For detail usage, see [Istio setup video reference](https://www.youtube.com/watch?v=voAyroDb6xk&t=352s&ab_channel=TechWorldwithNana)


## Common Used Command  

Start minikube  

    minikube start

Stop minikube

    minikube stop

See pods, deployment, service (\<type\> in example below)  

    minikube get <type>

See detail  

    kubectl describe <type> <unitname>
    ex: kubectl describe service my-service-12345
