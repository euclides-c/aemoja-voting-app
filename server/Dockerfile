FROM node:lts-alpine3.15

# set working directory
WORKDIR /

# add `/app/node_modules/.bin` to $PATH
ENV PATH /node_modules/.bin:$PATH
ENV NODE_ENV production

# install app dependencies
COPY ./package.json ./
COPY ./yarn.lock ./
RUN yarn install --silent --production
RUN yarn add react-scripts@4.0.0 -g --silent

# add app
COPY . .

EXPOSE 5000
# start app
CMD ["yarn", "start"]
