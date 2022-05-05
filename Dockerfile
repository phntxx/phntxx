# Builder: Downloads dependencies, compiles the project,
# passes on the executable
FROM rust:alpine as build

WORKDIR /app
COPY . .
RUN apk add --no-cache musl-dev
RUN cargo build --release

# User: Get the executable and run it
FROM alpine:latest

RUN addgroup -g 1000 phntxx
RUN adduser -D -s /bin/sh -u 1000 -G phntxx phntxx

WORKDIR /app
COPY --from=build --chmod=777 --chown=phntxx:phntxx /app/target/release/phntxx ./
USER minidash

ENV RUST_LOG="phntxx"
ENV ADDRESS="0.0.0.0:3000"

ENTRYPOINT ["./phntxx"]