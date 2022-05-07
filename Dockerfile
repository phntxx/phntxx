# Builder: Downloads dependencies, compiles the project,
# passes on the executable
FROM rust:alpine as build
RUN apk add --no-cache musl-dev

WORKDIR /app

ADD Cargo.* .
RUN mkdir .cargo
RUN cargo vendor > .cargo/config

ADD src src
RUN cargo build --release

# User: Get the executable and run it
FROM alpine:latest

WORKDIR /app
ADD docs docs
COPY --from=build --chmod=777 /app/target/release/phntxx ./

ENV RUST_LOG="phntxx"
ENV ADDRESS="0.0.0.0:3000"

ENTRYPOINT ["./phntxx"]
