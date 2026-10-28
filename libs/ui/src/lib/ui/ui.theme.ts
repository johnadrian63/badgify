export enum UiTheme {
    DEFAULT = "DEFAULT",
    DEFAULT_INVERTED = "DEFAULT_INVERTED",
    SUCCESS = "SUCCESS",
    SUCCESS_INVERTED = "SUCCESS_INVERTED",
    WARNING = "WARNING",
    WARNING_INVERTED = "WARNING_INVERTED",
    INFO = "INFO",
    INFO_INVERTED = "INFO_INVERTED",
    DANGER = "DANGER",
    DANGER_INVERTED = "DANGER_INVERTED",
    WHITE = "WHITE",
    WHITE_INVERTED = "WHITE_INVERTED",
    LIGHT = "LIGHT",
    LIGHT_INVERTED = "LIGHT_INVERTED",
    DARK = "DARK",
    DARK_INVERTED = "DARK_INVERTED",
};

export const theme: typeof UiTheme = UiTheme;

export const notificationClassMapper: Map<UiTheme, string> = new Map<UiTheme, string>([
    [UiTheme.DEFAULT, "ui-notification-default"],
    [UiTheme.SUCCESS, "ui-notification-success"],
    [UiTheme.INFO, "ui-notification-info"],
    [UiTheme.WARNING, "ui-notification-warning"],
    [UiTheme.DANGER, "ui-notification-danger"],
    [UiTheme.LIGHT, "ui-notification-white"],
    [UiTheme.WHITE, "ui-notification-light"],
    [UiTheme.DARK, "ui-notification-dark"]
]);

export const alertClassMapper: Map<keyof typeof UiTheme, string> = new Map<keyof typeof UiTheme, string>([
    [UiTheme.DEFAULT, "ui-alert-default"],
    [UiTheme.SUCCESS, "ui-alert-success"],
    [UiTheme.INFO, "ui-alert-info"],
    [UiTheme.WARNING, "ui-alert-warning"],
    [UiTheme.DANGER, "ui-alert-danger"],
    [UiTheme.WHITE, "ui-alert-white"],
    [UiTheme.WHITE, "ui-alert-light"],
    [UiTheme.DARK, "ui-alert-dark"]
]);

export const iconMapper: Map<keyof typeof UiTheme, string> = new Map<UiTheme, string>([
    [UiTheme.DEFAULT, ""],
    [UiTheme.SUCCESS, "fa-solid fa-check"],
    [UiTheme.INFO, "fa-solid fa-circle-info"],
    [UiTheme.WARNING, "fa-solid fa-triangle-exclamation"],
    [UiTheme.DANGER, "fa-solid fa-exclamation"],
    [UiTheme.WHITE, ""],
    [UiTheme.LIGHT, ""],
    [UiTheme.DARK, ""],
]);

export const buttonClassMapper: Map<keyof typeof UiTheme, string> = new Map<keyof typeof UiTheme, string>([
    [UiTheme.DEFAULT, "ui-button-default"],
    [UiTheme.SUCCESS, "ui-button-success"],
    [UiTheme.INFO, "ui-button-info"],
    [UiTheme.WARNING, "ui-button-warning"],
    [UiTheme.DANGER, "ui-button-danger"],
    [UiTheme.WHITE, "ui-button-white"],
    [UiTheme.LIGHT, "ui-button-light"],
    [UiTheme.DARK, "ui-button-dark"]
]);

export const linkClassMapper: Map<keyof typeof UiTheme, string> = new Map<keyof typeof UiTheme, string>([
    [UiTheme.DEFAULT, "ui-link-default"],
    [UiTheme.SUCCESS, "ui-link-success"],
    [UiTheme.INFO, "ui-link-info"],
    [UiTheme.WARNING, "ui-link-warning"],
    [UiTheme.DANGER, "ui-link-danger"],
    [UiTheme.WHITE, "ui-link-white"],
    [UiTheme.LIGHT, "ui-link-light"],
    [UiTheme.DARK, "ui-link-dark"]
]);

export const badgeClassMapper: Map<keyof typeof UiTheme, string> = new Map<keyof typeof UiTheme, string>([
    [UiTheme.DEFAULT, "ui-badge-default"],
    [UiTheme.DEFAULT_INVERTED, "ui-badge-default-inverted"],
    [UiTheme.SUCCESS, "ui-badge-success"],
    [UiTheme.SUCCESS_INVERTED, "ui-badge-success-inverted"],
    [UiTheme.INFO, "ui-badge-info"],
    [UiTheme.INFO_INVERTED, "ui-badge-info-inverted"],
    [UiTheme.WARNING, "ui-badge-warning"],
    [UiTheme.WARNING_INVERTED, "ui-badge-warning-inverted"],
    [UiTheme.DANGER, "ui-badge-danger"],
    [UiTheme.DANGER_INVERTED, "ui-badge-danger-inverted"],
    [UiTheme.WHITE, "ui-badge-white"],
    [UiTheme.WHITE_INVERTED, "ui-badge-white-inverted"],
    [UiTheme.WHITE, "ui-badge-light"],
    [UiTheme.WHITE_INVERTED, "ui-badge-light-inverted"],
    [UiTheme.DARK, "ui-badge-dark"],
    [UiTheme.DARK_INVERTED, "ui-badge-dark-inverted"]
]);