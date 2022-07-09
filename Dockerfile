FROM ubuntu:18.04 as bun-develop-stage

WORKDIR /app

RUN curl https://bun.sh/install | bash && \
    echo 'BUN_INSTALL="/root/.bun"' > .bashrc && \
    echo 'PATH="/root/.bun/bin:$PATH"' >> .bashrc

# USER bun
# RUN chown bun:bun /app

COPY package.json .
COPY bun.lockb .

# for non Next.js: RUN bun bun
RUN bun bun  --use next

COPY . .