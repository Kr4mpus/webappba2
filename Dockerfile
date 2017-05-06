FROM node:argon
RUN mkdir -p /usr/src/app
WORKDIR /usr/src/app
COPY /dist/package.json /usr/src/app
RUN npm install --production
COPY dist /usr/src/app
ENV NODE_ENV production
EXPOSE 8080
CMD ["node", "server/app.js"]
