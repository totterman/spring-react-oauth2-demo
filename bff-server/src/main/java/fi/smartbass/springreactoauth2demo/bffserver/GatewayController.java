package fi.smartbass.springreactoauth2demo.bffserver;

import io.micrometer.observation.annotation.Observed;
import jakarta.validation.constraints.NotEmpty;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.boot.autoconfigure.security.oauth2.client.OAuth2ClientProperties;
import org.springframework.security.core.Authentication;
import org.springframework.security.oauth2.client.authentication.OAuth2AuthenticationToken;
import org.springframework.security.oauth2.client.registration.ReactiveClientRegistrationRepository;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;
import reactor.core.publisher.Mono;

import java.net.URI;
import java.net.URISyntaxException;
import java.util.List;

@RestController
@Observed(name = "GatewayController")
public class GatewayController {
    private final List<LoginOptionDto> loginOptions;

    public GatewayController(
            OAuth2ClientProperties clientProps,
            ReactiveClientRegistrationRepository clientRegistrationRepository,
            @Value("${gateway-uri}") URI gatewayUri) {
        this.loginOptions = clientProps.getRegistration().entrySet().stream().filter(e -> "authorization_code".equals(e.getValue().getAuthorizationGrantType()))
                .map(
                        e -> new LoginOptionDto(
                                e.getValue().getProvider(),
                                "%s/oauth2/authorization/%s".formatted(gatewayUri, e.getKey())))
                .toList();
    }

    @GetMapping(path = "/login-options", produces = "application/json")
    public Mono<List<LoginOptionDto>> getLoginOptions(Authentication auth) throws URISyntaxException {
        final boolean isAuthenticated = auth instanceof OAuth2AuthenticationToken;
        return Mono.just(isAuthenticated ? List.of() : this.loginOptions);
    }

    static record LoginOptionDto(@NotEmpty String label, @NotEmpty String loginUri) {
    }

}
