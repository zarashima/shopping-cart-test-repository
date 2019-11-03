const I = actor();

export default signInPage = {

    fields: {
        email: '//input[@id="email"]',
        password: '//input[@id="password"]',
    },

    signInButton: '//button[@type="submit"]',

    signIn(email, password) {
        I.fillField(this.fields.email, email);
        I.fillField(this.fields.password, password);
        I.click(this.signInButton);
    },
};
