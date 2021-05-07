FROM openjdk:8-jdk-alpine as runtime

EXPOSE 8080

ARG JAR_FILE=target/*.jar

COPY ${JAR_FILE} app.jar

ENTRYPOINT exec java -jar app.jar

