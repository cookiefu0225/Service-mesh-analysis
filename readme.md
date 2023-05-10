# Launch Instructions

## minikube  

[minikube quick start](https://minikube.sigs.k8s.io/docs/start/)  

## Experiment Setting

### Experiment

**iperf3, ping, iperf3 while downloading, ping while downloading, downloading time** on  

1. No extension
2. Cilium
3. Calico
4. Flannel

To collect:

1. iperf3: Average bitrate (Gbits/sec)  
2. ping: rtt information
3. file transmission: time result

### Set up Image and Run Pods  

Note that command **eval $(minikube -p minikube docker-env)** only need to run once after minikube is set up.  

    # root dir
    cd redis_app
    eval $(minikube -p minikube docker-env)
    docker build -t python-app .
    cd ..
    kubectl apply -f kubernetes/

### Enter the Containers (Pods)  

Pod name and IP can be obtained with **kubectl get pod -o wide**

    # root dir
    kubectl exec --stdin --tty <pod name> -- /bin/bash
    # bash

    # iperf experiments
    # Server command:
    iperf3 -s
    # Client command:
    apt-get update
    apt-get install iperf3
    iperf3 -c <Server IP>

    # ping experiments
    # Client
    apt-get update
    apt-get install iputils-ping -y
    ping <Server IP>

    # download file
    # Client
    time curl redis-service.default.svc.cluster.local/download

Additional commands in client:

    # GET request
    curl redis-service.default.svc.cluster.local
    # POST request
    curl -d "message=<any message you want>" redis-service.default.svc.cluster.local
    # curl many times
    for i in `seq 1 30`; do curl redis-service.default.svc.cluster.local/download; done

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

Start minikube, this should be adjusted with the testing tool you use (cilium, calico, flannel...)  

    minikube start

Stop minikube

    minikube stop

See pods, deployment, service (\<type\> in example below)  

    minikube get <type>

See detail  

    kubectl describe <type> <unitname>
    ex: kubectl describe service my-service-12345
