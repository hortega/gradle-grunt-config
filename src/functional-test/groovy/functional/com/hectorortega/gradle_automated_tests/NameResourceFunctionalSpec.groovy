package functional.com.hectorortega.gradle_automated_tests

import com.github.restdriver.serverdriver.RestServerDriver
import spock.lang.Specification

import static com.github.restdriver.serverdriver.RestServerDriver.get
import static com.github.restdriver.serverdriver.RestServerDriver.put

class NameResourceFunctionalSpec extends Specification {

    String baseUrl = "http://localhost:8080/gradle-automated-tests"

    def "get and set Name - sets the name and returns it"() {
        when:
        def response = put(buildUri('/name?name=newName'))

        then:
        response.getStatusCode() == 204

        when:
        response = get(buildUri('/name'))

        then:
        response.getStatusCode() == 201
        response.asText() == "newName"
    }

    private String buildUri(String path) {
        baseUrl + path
    }
}
