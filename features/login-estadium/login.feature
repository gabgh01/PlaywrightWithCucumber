Feature: login in estadium enerbit
    Scenario: fail login in stadium web
        Given I was opened estium enerbit web
        When ingress login credential with username "usuario173628@yopmail.com" and password "123456"
        Then should see error message "Credenciales inválidas, inténtelo nuevamente"