FROM node:14

WORKDIR /app

COPY package.json .
RUN npm install

COPY . .

# Use shell form CMD to see more detailed output
CMD npm start