const I = actor();

export default homePage = {

    menuButton: '//*[@id="bs-example-navbar-collapse-1"]/ul/li[2]/a',
    signInButton: '//a[@href="user/signin"]',
    signUpButton:'//a[@href="user/signup"]',

    goToSignInPage() {
        I.click(this.menuButton);
        I.click(signInButton)
    }
};
