package com.hectorortega.gradle_automated_tests.resources

import com.hectorortega.gradle_automated_tests.resources.NameResource
import com.hectorortega.gradle_automated_tests.service.NameService
import spock.lang.Specification

class NameResourceSpec extends Specification {

    NameService nameService = Mock()
    def subject = new NameResource(nameService)

    def "getName"() {
        when:
        def response = subject.getName()

        then:
        1 * nameService.getName() >> "name"
        response.getStatus() == 200
        response.getEntity() == "name"
    }


    def "setName"() {
        when:
        def response = subject.setName("newName")

        then:
        1 * nameService.setName("newName")
        response.getStatus() == 204
    }
}
