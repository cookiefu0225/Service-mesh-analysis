# Frontend

Build the Docker image for the current folder and tag it with `react-frontend`  

    docker build . -t react-frontend

Check the image was created

    docker images | grep react-frontend

Run the image in detached mode and map port 3000 inside the container with 3000 on current host

    docker run -p 3000:3000 -d --name frontend react-frontend
