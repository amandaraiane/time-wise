FROM maven:3.8.5-openjdk-17 AS builder
WORKDIR /app/
COPY ./backend/pom.xml ./
RUN mvn clean install -DskipTests

FROM openjdk:17-jdk
WORKDIR /app/
COPY --from=builder /app/target/*.jar ./
CMD ["java", "-jar", "*.jar"]

# -----------------------------------------------------------------------------

# FROM openjdk:17
# FROM maven:alpine

# COPY ./backend/ /app/

# WORKDIR /app/

# RUN mvn clean install

# COPY target/BeerStop-0.0.1-SNAPSHOT.jar /app/spring-app.jar

# EXPOSE 8080

# ENTRYPOINT ["java", "-jar", "spring-app.jar"]

# -----------------------------------------------------------------------------

# FROM java:alpine

# FROM maven:alpine

# WORKDIR /app/

# ADD ./backend/pom.xml /app/

# RUN mvn verify clean --fail-never

# COPY ./ /app/

# RUN mvn -v

# RUN mvn clean install -DskipTests

# ADD ./backend/target/BeerStop-0.0.1-SNAPSHOT.jar /app/spring-app.jar

# EXPOSE 8080

# ENTRYPOINT [ "java", "-jar", "/app/spring-app.jar" ]
