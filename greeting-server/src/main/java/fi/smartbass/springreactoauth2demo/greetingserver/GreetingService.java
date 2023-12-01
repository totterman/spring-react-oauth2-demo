package fi.smartbass.springreactoauth2demo.greetingserver;

import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.stereotype.Service;

@Service
public class GreetingService {
    @PreAuthorize("hasAuthority('NICE')")
    public String getGreeting() {
        final var auth = SecurityContextHolder.getContext().getAuthentication();
        return "Hello %s! You are granted with %s.".formatted(auth.getName(), auth.getAuthorities());
    }
}
