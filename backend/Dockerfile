FROM openjdk:22-jdk
WORKDIR https://github.com/No-Country-simulation/c20-25-m-java-react/tree/main/backend/target
RUN mvn package
COPY target/backend-0.0.1.jar app_reforestart.jar
EXPOSE 8080

ENTRYPOINT ["java", "-jar", "/app_reforestart.jar"]