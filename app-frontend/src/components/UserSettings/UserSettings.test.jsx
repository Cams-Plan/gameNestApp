/**
 * @jest-environment jsdom
 */

import React from 'react';
import { describe, it, expect, beforeEach, afterEach, vi } from 'vitest';
import { screen, render, cleanup } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import UserSettings from '.';

describe("UserSettings component", () => {

    
    beforeEach(() =>{

        const setState = vi.fn();
        vi
            .spyOn(React, 'useState')
            .mockImplementationOnce(initState => [initState, setState]);
            
        const [openSettings, setOpenSettings] = React.useState(true)
        render(<UserSettings openSettings={openSettings} setOpenSettings={setOpenSettings} />)
    })

    afterEach(() => {
        vi.clearAllMocks()
        cleanup();
    })

    it("exists in the DOM", async () => {
        
        const settingsList = screen.getByRole("list")

        expect(settingsList).toBeInTheDocument()
        expect(settingsList).toBeVisible()
    })

    it("Has the correct default values", () => {

        const listItems = screen.getAllByRole('listitem')
        const icon = screen.getByRole('img')

        const screenModeText = listItems[1].textContent
        const logoutText = listItems[2].textContent

        expect(listItems.length).toEqual(3)
        expect(screenModeText).toBe("Dark Mode")
        expect(icon).toBeVisible()
        expect(logoutText).toBe("Logout")

    })

    it("The theme icon and associated text toggles when clicked", async () => {

        const initialIcon = screen.getByRole('img', {description: "Dark Mode"})

        await userEvent.click(initialIcon)

        const listItems = screen.getAllByRole('listitem')
        const screenModeText = listItems[1].textContent
        expect(initialIcon).not.toBeInTheDocument()

        const newIcon = screen.getByRole('img', {description: "Light Mode"})
        // new icon and text should allude to switching to 'Light Mode'
        expect(newIcon).toBeVisible()
        expect(screenModeText).toBe("Light Mode")

    })
})
