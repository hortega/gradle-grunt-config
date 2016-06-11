package com.hectorortega.gradle_automated_tests.service;

import javax.inject.Named;

@Named
public class NameService {

    private volatile String name;

    public void setName(String name) {
        this.name = name;
    }

    public String getName() {
        return name;
    }
}
