package com.anma.sb.gradlesbwebpackreact

import org.springframework.stereotype.Controller
import org.springframework.web.bind.annotation.GetMapping

@Controller
class HomeController {

    @GetMapping
    fun getHomePage(): String {
        return "home"
    }
}

