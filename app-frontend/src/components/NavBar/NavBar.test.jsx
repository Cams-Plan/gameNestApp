/**
 * @jest-environment jsdom
 */
import React from 'react';
import { describe, it, expect, beforeEach, afterEach } from 'vitest';
import { screen, render, cleanup } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { BrowserRouter } from 'react-router-dom';

import NavBar from '.';
import '../../assets/styles/NavBar.css'

describe("Header component", () => {

    beforeEach(() => {
        render(
        <BrowserRouter>
            <NavBar>
                
            </NavBar>
        </BrowserRouter>);
    });

    afterEach(() => {
        cleanup();
    });

      
    it('The NavBar component exists with the correct amount of list items', () => {
        const navigation = screen.getByRole('navigation')
        const links = screen.getAllByRole('link')

        expect(navigation).toBeInTheDocument();
        expect(navigation.children.length).toBe(2)
        expect(links.length).toEqual(3)
    });

    it('renders the Home link', async () => {
        const homeLink = screen.getByRole('link', { name: /home/i });
        expect(homeLink).toBeInTheDocument();
        await userEvent.click(homeLink);
        expect(window.location.href).toEqual('http://localhost:3000/');
    });

    it('renders the Login link', async () => {
        const loginLink = screen.getByRole('link', { name: /login/i });
        expect(loginLink).toBeInTheDocument();
        await userEvent.click(loginLink);
        expect(window.location.href).toEqual('http://localhost:3000/login');
    });

    it('renders the My Lists link', async () => {
        const myListsLink = screen.getByRole('link', { name: /my lists/i });
        expect(myListsLink).toBeInTheDocument();
        await userEvent.click(myListsLink);
        expect(window.location.href).toEqual('http://localhost:3000/mylists');
    });
    it('toggles the settings dropdown when user icon is clicked', async () => {

        const userIcon = screen.getByRole('img', {name: /nav-user-icon/i})
        expect(userIcon).toBeVisible()

        // toggle open the settings dropdown
        await userEvent.click(userIcon)
        const settingsDropdown = await screen.findByTestId("nav-user-settings-component") // test id has to be used here
        expect (settingsDropdown).toBeVisible()

        // toggle close the settings dropdown
        await userEvent.click(userIcon)
        expect(settingsDropdown).not.toBeVisible()
        
    })

    it('the useOutsideHeaderClick only closes the settings dropdown when a user clicks on outlet elements', async () => {

        const userIcon = screen.getByRole('img', {name: /nav-user-icon/i})
        expect(userIcon).toBeVisible()

        // open the settings dropdown
        await userEvent.click(userIcon)
        const settingsDropdown = await screen.findByTestId("nav-user-settings-component") // test id has to be used here
        expect (settingsDropdown).toBeVisible()

        // click on the nav title - it shouldn't close the settings bar
        const navTitle = screen.getByText(/foolproof shopping/i)
        await userEvent.click(navTitle)
        expect(settingsDropdown).toBeVisible()

        // close the settings dropdown
        const outlet = screen.getByTestId("nav-outlet-container")
        await userEvent.click(outlet)
        expect(settingsDropdown).not.toBeVisible()
        
    })

    // test the screen resize - need to find out how to get CSS styles to register with testing library/vitest
});
