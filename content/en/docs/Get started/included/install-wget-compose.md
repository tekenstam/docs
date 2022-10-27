---
title: "score-compose install with wget"
description: "Installation for score-compose with wget."
headless: true
toc_hide: true
---

### Step 1. Download

Download with the CLI `wget` command.

```bash
wget https://github.com/score-spec/<score-platform>/releases/download/<x.y.z>/<score-platform>_<x.y.z>_<os_system>.tar.gz
```

- Replace `<score-platform>` with the Platform CLI tool.
- Replace `<x.y.z>` with the version number.
- Replace `<os_system>` with your operating system.

For example, the following `wget` command downloads `score-compose` for macOS.

```bash
wget https://github.com/score-spec/score-compose/releases/download/0.1.0/score-compose_0.1.0_darwin_arm64.tar.gz
```

**Results** You should see something similar to the following output.

```bash
Saving to: `score-compose_0.1.0_darwin_arm64.tar.gz`

score-compose_0.1.0 100%[===================>]   2.85M  5.28MB/s    in 0.5s
```

#### Step 2: Install into your `local` directory

In your terminal, enter the following to create the `score-spec` directory.

```bash
cd /usr/local/
# create the directory if needed
sudo mkdir -pv score-spec
```

Extract the compressed Tar file.

```bash
sudo tar -xvzf ~/Downloads/score-compose_0.1.0_darwin_arm64.tar.gz
```

**Results** You should see the following output.

```bash
x LICENSE
x README.md
x score-compose
```

### Step 3: Export PATH

To export `PATH`, run the following, `export PATH=$PATH:/usr/local/score-spec`.

### Step 4: Verify installation

To verify installation, run the following `score-compose --version`.

The command returns the following output.

```bash
score-compose 0.1.0
```

**Results** You've successfully installed the Platform CLI.