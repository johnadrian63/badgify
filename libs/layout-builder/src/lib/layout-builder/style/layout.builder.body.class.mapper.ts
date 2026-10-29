export enum LayoutBodyBackgroundMode {
    WHITE = "WHITE",
    LIGHT = "LIGHT"
}

export const layoutBuilderBodyClassMapper: Map<LayoutBodyBackgroundMode, string> = new Map<LayoutBodyBackgroundMode, string>([
    [LayoutBodyBackgroundMode.WHITE, "body-white"],
    [LayoutBodyBackgroundMode.LIGHT, "bg-gray-200"]
]);
