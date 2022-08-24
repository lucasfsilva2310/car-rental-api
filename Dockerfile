# default image
FROM node

# directory that image will be downloaded and saved
WORKDIR /usr/app

# Copying all depencies
COPY package.json ./

# installing all dependencies
RUN npm install

# Copying all data that was installed during last command
COPY . .

# exposing port that we're intend to use
EXPOSE 3333

# starting server
CMD ["npm", "run", "start"]

# building application
# docker build -t <app_name> <directory>
# ex: docker build -t car-rental .

# checking current running containers
#  docker ps

# to start a new container
# docker run -p 3333:3333