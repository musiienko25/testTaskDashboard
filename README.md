Frontend Engineer Assignment
Create a React Application with a login page and a dashboard page. The dashboard should display the user’s profile information and a list of the user’s todos.
For authentication, user profile info You can use a JSON file or a static JavaScript object for mock username & password data.
Implement the following features in the application:

1. Implement user authentication using a secure token-based authentication such as JWT. Without login, the user should not be able to see the dashboard.
2. The app should use React Context API to store login user information. 3. Implement the logout functionality.
3. In the dashboard, add a button through which new Todos can be added, when creating a todo it can be stored in a global context.
4. Add a feature that allows the addition of Nested Todo, (Sub Task), It is entirely up to you how you design this feature. get inspiration from existing Todo apps
5. Make sure to sanitize and validate user inputs to prevent injection attacks.

6. Implement a route guard that requires the user to be successfully authenticated before they can view their dashboard. If the user is not authenticated, they should be redirected to the login page.
7. Implement proper error handling in the code.
8. Use your own creativity to make a better user experience.
9. The app can be hosted on any platform i.e Netlify, or Vercel. And source code should be publically accessible on any git repository to review.
10. The source code must be in Typescript.
    Candidates can take inspiration from this screenshot below to create their own dashboard experience.
