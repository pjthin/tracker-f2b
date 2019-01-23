package fr.procap.trackerf2b.controller;

import java.time.LocalDateTime;

import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;

@Controller
public class AppController {

    @GetMapping("/")
    public String startApp(Model model) {
        model.addAttribute("time", LocalDateTime.now());
        return "index";
    }

}
