FROM continuumio/anaconda3:2022.10

RUN export DEBIAN_FRONTEND=noninteractive && \
    apt update && \
    apt -y upgrade && \
    apt install -y \
    git \
    vim \
    wget \
    iputils-ping \
    lsb-release

RUN apt install -y redis-server

RUN pip install \ 
    flask \
    redis

RUN head -c 10M </dev/urandom > /root/file.bin

# necessary, or the files will not be copied
COPY . ./workspace

EXPOSE 9000

# --port to set customized port
CMD redis-server --daemonize yes; python -m flask run --host=0.0.0.0 --port=9000

WORKDIR /workspace