import React from 'react';
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import { GoogleOAuthProvider } from "@react-oauth/google";
import App from "../App.jsx";

test("renders navbar links and buttons", () => {
    render(
        <React.StrictMode>
            <GoogleOAuthProvider clientId="455740199105-no6hntm3m4aknhjpidr52ms8ti2vib49.apps.googleusercontent.com">
                <App />
            </GoogleOAuthProvider>
        </React.StrictMode>
    );

    // Example: Check if the navigation links are present
    const homeLink = screen.getByRole('link', { name: /home/i });
    const aboutLink = screen.getByRole('link', { name: /about/i });

    // Example: Check if a button is present
    const loginButton = screen.getByRole('button', { name: /login/i });

    // Make assertions about the presence or behavior of the elements
    expect(homeLink).toBeInTheDocument();
    expect(aboutLink).toBeInTheDocument();
    expect(loginButton).toBeInTheDocument();
});
