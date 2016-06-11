package com.hectorortega.gradle_automated_tests.resources;

import com.hectorortega.gradle_automated_tests.service.NameService;

import javax.inject.Inject;
import javax.inject.Named;
import javax.ws.rs.*;
import javax.ws.rs.core.MediaType;
import javax.ws.rs.core.Response;

@Named
@Path("name")
public class NameResource {

    private NameService nameService;

    @Inject
    public NameResource(NameService nameService) {
        this.nameService = nameService;
    }

    @GET
    @Produces(MediaType.TEXT_PLAIN)
    public Response getName() {
        String name = nameService.getName();
        return Response.ok(name).build();
    }

    @PUT
    public Response setName(@QueryParam("name") String name) {
        nameService.setName(name);
        return Response.noContent().build();
    }
}
