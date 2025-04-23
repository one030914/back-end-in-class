# bun
FROM oven/bun:debian

WORKDIR /

# git
RUN apt-get update && \
    apt-get upgrade -y && \
    apt-get install git-all -y

# 預設啟動指令
CMD ["/bin/bash"]

EXPOSE 3000