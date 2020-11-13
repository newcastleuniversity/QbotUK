export const environment = {
    production: false,
    apiBaseUrl: "https://newcastlequestionbot.azurewebsites.net/api/Request/",

    authConfig: {
        instance: "https://login.microsoftonline.com/",
        tenantId: "9c5012c9-b616-44c2-a917-66814fbe3e87",
        clientId: "e976602e-4e43-4d96-ab82-fc98742bc4d0",
        redirectUri: "/app-silent-end",
        cacheLocation: "localStorage",
        navigateToLoginRequestUrl: false,
        extraQueryParameters: "",
        popUp: true,
        popUpUri: "/app-silent-start",
        popUpWidth: 600,
        popUpHeight: 535
    },

    // do not populate the following:
    upn: "",
    tid: "",
};
