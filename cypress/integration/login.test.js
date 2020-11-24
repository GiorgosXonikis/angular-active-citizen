describe('Login page', () => {

    it('should contain correct welcome title', function () {
        cy.visit('/auth/login');
        cy.contains('Active Citizen');
    });

    it('should contain correct subtitle', function () {
        cy.visit('/auth/login');
        cy.contains('Sign In');
    });

    it('should login successfully', function () {
        cy.fixture('auth.json').as("authResponse");
        cy.server();
        cy.route('/auth/login', "@authResponse").as("response");
        cy.visit('/auth/login');

        // fill out a form field
        cy.get('input[name="email"]')
            .clear()
            .type('admin@gmail.com');

        cy.get('input[name="password"]')
            .clear()
            .type('admin');

        cy.get('button[name=submit]').click().then(response => console.log(response));
        cy.contains('Profile');
    });

    it('should POST login', () => {
        cy.request('POST', 'http://localhost:8000/auth/login/',
            {
                email: 'admin@gmail.com',
                password: 'admin'
            })
            .then((response) => {
                // response.body is automatically serialized into JSON
                expect(response.body).to.have.have.keys(['access_token', 'refresh_token', 'user'])
            })
    });


});

