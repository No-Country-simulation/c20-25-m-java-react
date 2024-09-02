FROM openjdk:22-jdk

ARG JAR_FILE=target/backend-0.0.1.jar
RUN mvn package
COPY ${JAR_FILE} app_reforestart.jar
EXPOSE 8080

ENTRYPOINT ["java", "-jar", "/app_reforestart.jar"]