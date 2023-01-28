Once the site loads, we have a login screen setup using a higher order component that checks if the user is currently logged in. If the user it not logged in, they will get directed to the login screen.

Once the user types in their name and clicks on submit, the all users in history will be fetched from the api and checked against the name the user tried to log in as. If the user currently exists the previous translations will be loaded and displayed on the profile screen and subsequent translations will be put here also.

If the user does not exist in the api, a new user will be created and subsequent translations will be put under this name. On the profile there is a clear history button which will remove the data locally and whenever another translation is submitted only the newest translation will exist in the api.
