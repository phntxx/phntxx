FROM node:lts AS build

WORKDIR /app
COPY package.json yarn.lock ./
RUN yarn install --prod

COPY . ./
RUN yarn build

FROM ratisbonacoding/nginx-cloudflare-cache
COPY --from=build /app/build /usr/share/nginx/html
COPY nginx.conf /etc/nginx/nginx.conf