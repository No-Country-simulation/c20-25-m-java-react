FROM amazoncorretto:22-alpine-jdk

ARG JAR_FILE=target/backend-0.0.1.jar
COPY ${JAR_FILE} app_reforestart.jar
EXPOSE 8080

ENTRYPOINT ["java", "-jar", "app_reforestart.jar"]