package com.reforestart.backend.configuration;

import io.swagger.v3.oas.annotations.OpenAPIDefinition;
import io.swagger.v3.oas.annotations.enums.SecuritySchemeIn;
import io.swagger.v3.oas.annotations.enums.SecuritySchemeType;
import io.swagger.v3.oas.annotations.info.Contact;
import io.swagger.v3.oas.annotations.info.Info;
import io.swagger.v3.oas.annotations.info.License;
import io.swagger.v3.oas.annotations.security.SecurityRequirement;
import io.swagger.v3.oas.annotations.security.SecurityScheme;
import io.swagger.v3.oas.annotations.servers.Server;
import org.springframework.context.annotation.Configuration;
import org.springframework.http.HttpHeaders;

@OpenAPIDefinition(
        info = @Info(
                title = "API REFORESTART",
                description = " Plataforma para comprar árboles " +
                        "de diversas especies, a partir de un catálogo y al finalizar " +
                        "la transacción se asigna un certificado de propiedad PDF",
                termsOfService = "www.reforstart.com/terminos_y_servicios",
                version = "1.0.0",
                contact = @Contact(
                        name = "Xavier\nAnthony\nCarlos\nCristhian\nMussanni\nDaniel\nBryan",
                        url = "www.reforestart.com/contact",
                        email = "reforestart@gmail.com"
                ),
                license = @License(
                        name = "Standard Software Use License for Reforestart",
                        url = "www.reforstart.com/license"
                )
        ),
        servers = {
                @Server(
                        description = "DEV SERVER",
                        url = "http://localhost:8080"
                ),
                @Server(
                        description = "PROD SERVER",
                        url = "http://reforstart.com"
                )
        },
        security = @SecurityRequirement(
                name = "Security Token"
        )
)
@SecurityScheme(
        name = "Security Token",
        description = "Access Token For My API",
        type = SecuritySchemeType.HTTP,
        paramName = HttpHeaders.AUTHORIZATION,
        in = SecuritySchemeIn.HEADER,
        bearerFormat = "JWT"
)
@Configuration
public class SwaggerConfig {
}
