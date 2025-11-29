# Ubuntu-based LaTeX toolchain for VS Code Latex Workshop
FROM ubuntu:22.04

ENV DEBIAN_FRONTEND=noninteractive \
    TZ=America/Santiago \
    LANG=en_US.UTF-8 \
    LC_ALL=en_US.UTF-8 \
    WORKSPACE=/workspace

# Prepare system packages and locales before TeX Live setup.
RUN apt-get update && \
    apt-get upgrade -y && \
    apt-get dist-upgrade -y && \
    apt-get install -y --no-install-recommends locales && \
    locale-gen en_US.UTF-8 && \
    update-locale LANG=en_US.UTF-8

# Install TeX Live and common developer utilities in one layer.
RUN apt-get update && \
    apt-get install -y --no-install-recommends \
        biber \
        build-essential \
        ca-certificates \
        curl \
        git \
        gnupg \
        inkscape \
        latexmk \
        make \
        perl \
        python3 \
        python3-pip \
        software-properties-common \
        tar \
        texlive-full \
        tzdata \
        unzip \
        vim \
        wget \
        zip

# Clean up apt cache to reduce image size.
#RUN apt-get autoremove -y && \
#    apt-get autoclean
    #rm -rf /var/lib/apt/lists/*

# Install Pygments for syntax highlighting in LaTeX documents.
COPY requirements.txt /tmp/requirements.txt
RUN pip3 install --no-cache-dir -r /tmp/requirements.txt && rm /tmp/requirements.txt

WORKDIR ${WORKSPACE}

# Copy the repository content into the container image so it is available without bind mounts.
COPY . ${WORKSPACE}

# Default command lets you drop into an interactive shell.
CMD ["/bin/bash"]
