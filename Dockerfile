FROM maven:3.8-openjdk-11
WORKDIR /tx-challenge
COPY . .
RUN mvn clean install -DskipTests
CMD mvn spring-boot:run