FROM openjdk:17-jdk-alpine
ARG ip
ARG JAR_FILE=build/libs/*.jar
COPY ./tic-tac-toe-backend-0.0.1-SNAPSHOT.jar app.jar
ENTRYPOINT ["java", "-jar", "/app.jar"]