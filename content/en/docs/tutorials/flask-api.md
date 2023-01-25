---
title: "Flask sample application"
subtitle: "Flask"
weight: 5
description: >
  A quick start for Flask sample application.
---

This tutorial will demonstrate how to run a Python Flask application from a `score.yaml` file.

## Getting started

To get started, download the repository in your workspace and navigate to the `flask` folder.

```bash
gh repo clone score-spec/sample-applications
cd sample-applications/flask
```

Now, let's take a look at the `score.yaml` file.

## score.yaml

The Score file is as follows:

```yml
apiVersion: score.dev/v1b1

metadata:
  name: web

containers:
  web:
    image: app

service:
  ports:
    www:
      port: 8000
      targetPort: 8000
```

### Metadata

First, describe the API version and metadata needed for the Workload.

- `apiVersion`: describes which version is used.
- `metadata`: contains additional information needed. In this example, the `name` key specifies `web`, for our web application.

### Container

Next, describe your container.

- `containers`: is a required section. In this example, the `image` name specifies `app`.

### Service

Finally, describe how the service can be reached.

- `service`: contains one or more networks ports to be exposed to the application.
- `ports`: contains the port name `www`.
  - `port`: the number `8000` is exposed to the Flask application.
  - `targetPort`: the port number `8000` exposed to the host.

## Run your command

Now that we've created our `score.yaml` file, it is time to create the container we want to use.

The command is as follows:

```bash
score-compose run -f ./score.yaml -o ./compose.yaml --build app
```

First, use the implementation CLI you want, in this example we used `score-compose` which maps to a Docker Compose file.

Then we tell the `score-compose` tool to run the following flags.

- `-f`: the input file, named `score.yaml`.
- `-o`: the output file, named `compose.yaml`.
- `--build`: replaces the `image` name with `app`.

### Output

That command generates the following output.

```yml
services:
  web:
    build:
      context: app
    ports:
      - target: 8000
        published: "8000"
```

## Deploy

Now that we've created our Docker image, we can deploy it to Docker Compose.

```bash
docker compose up -d
```

The command produces an output similar to the following.

```bash
[+] Running 2/2
⠿ Network flask_default  Created                                                          0.0s
⠿ Container flask-web-1  Started                                                          0.3s
```

To ensure that the container is running, and its ports were mapped correctly, run the `ps` command to get the current status and exposed ports.

```bash
docker compose ps
```

The command produces an output similar to the following.

```bash
NAME                COMMAND             SERVICE             STATUS              PORTS
flask-web-1         "python3 app.py"    web                 running             0.0.0.0:8000->8000/tcp
```

Next, let's run a curl command to see what is returned.

```bash
curl localhost:8000
```

The command produces an output similar to the following.

```bash
Hello World!
```

## Shutting down

Now that we've confirmed the container starts, runs, and returns the expected results, stop and remove the container.

```bash
docker compose down
```
