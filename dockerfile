FROM node 
WORKDIR /app
COPY . .
COPY ./.env.example ./app/.env
RUN npm install --production
ENV MYSQL_HOST=${MYSQL_HOST}
ENV MYSQL_PORT=${MYSQL_PORT}
ENV MYSQL_USER=${MYSQL_USER}
ENV MYSQL_PASSWORD=${MYSQL_PASSWORD}
ENV MYSQL_DBNAME=${MYSQL_DBNAME}
CMD ["npm","run", "start"]
EXPOSE 3030