import { IMenuItem } from "@org/navigation-builder";

import { UiLayoutHeaderNavigationHorizontalUtilityDisplayHandler } from "./horizontal/utility/display/ui.layout.header.navigation.horizontal.utility.display.handler.visitor";

export const profileNavigationData: IMenuItem[] = [
    {
        label: "profile",
        text: "Profile",
        handler: UiLayoutHeaderNavigationHorizontalUtilityDisplayHandler,
        children: [
            {
                label: "settings",
                text: "Settings",
            },
            {
                label: "logout",
                text: "Logout",
            }
        ]
    }
];