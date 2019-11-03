const { homePage, signInPage, I } = inject();
// Add in your custom step files

Given('/I am at Sign In page/', () => {
    homePage.goToSignInPage();
    I.see('Log in');
});

When('/I sign in into the system/', () => {
    signInPage.signIn("npvinh140589@gmail.com","12345678");
});

Then('/I should be able to sign in/', () => {
    I.see('User Profile');
});

