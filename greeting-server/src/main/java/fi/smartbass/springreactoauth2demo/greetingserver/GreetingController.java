package fi.smartbass.springreactoauth2demo.greetingserver;

import jakarta.validation.constraints.NotEmpty;
import org.springframework.http.MediaType;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class GreetingController {
    private final GreetingService greetingService;

    public GreetingController(GreetingService greetingService) {
        this.greetingService = greetingService;
    }

    @GetMapping(path = "/greeting", produces = MediaType.APPLICATION_JSON_VALUE)
    @PreAuthorize("hasAuthority('NICE')")
    public GreetingDto getGreeting() {
        return new GreetingDto(greetingService.getGreeting());
    }

    static record GreetingDto(@NotEmpty String message) {
    }
}
