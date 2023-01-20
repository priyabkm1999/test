describe('login to zamstar application', () => {
    let testData
    before(() => {
        cy.fixture('testdata').then((fdata) => {
            testData = fdata
        })
    })
    it('login and signup', () => {
        cy.visit('/')
        cy.login(testData.login_id, testData.password)
        // cy.go('https://smart-ky-dash.zamstars.zamstars.ey.io/')
        // .url('/', { args : testData }).then(() => {
        //     cy.wait(30000)
        //     cy.get('div[class="m-auto text-uppercase navbar-nav"]').eq(0)
        // }) 
            
        
        // .then(()=>{
        //     cy.visit('/').wait(30000).then(()=>{
        //         cy.get('a[href="/app/clusters"]').eq(0).click()
        //     })
            
        // })
        // cy.get('a[href="/app"]').eq(0).click()
        // cy.url().should('eq', Cypress.config().newUrl)
        // cy.url().should('eq','https://smart-ky-dash.zamstars.zamstars.ey.io/')
        // https://smart-ky-dash.zamstars.zamstars.ey.io/
        // cy.origin('https://smart-ky-dash.zamstars.zamstars.ey.io/', {
        //     args: testData
        // } , function (testData, force = true) {
        //         cy.go()
        //     })
    })
})