describe('Login page', () => {

    it('should contain correct welcome title', function () {
        cy.visit('/auth/login');
        cy.contains('Welcome to Active Citizen');
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
            .type('gxo@gmail.com')
            .get('input[name="password"]')
            .clear()
            .type('gxo');

        cy.get('button[name=submit]').click().then(response => console.log(response));

        // cy.request('POST', 'http://localhost:8000/auth/login', { name: 'Jane' })
        //     .then((response) => {
        //         response.body is automatically serialized into JSON
                // expect(response.body).to.have.property('name', 'Jane') // true
            // })

    });


});
