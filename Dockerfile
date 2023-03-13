FROM node:18.14.2
EXPOSE 4200

RUN mkdir prj/
WORKDIR prj/

COPY package.json package-lock.json angular.json ts* .
RUN npm install

CMD npm run start
