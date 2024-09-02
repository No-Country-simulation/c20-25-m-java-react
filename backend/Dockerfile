FROM openjdk:22-jdk
WORKDIR C:/no-country/backend/target
RUN mvn package
COPY target/backend-0.0.1.jar app_reforestart.jar
EXPOSE 8080

ENTRYPOINT ["java", "-jar", "/app_reforestart.jar"]