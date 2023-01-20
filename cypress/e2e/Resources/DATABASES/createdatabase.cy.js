describe('login to zamstar application', () => {
    let testData
    before(() => {
        cy.fixture('testdata').then((fdata) => {
            testData = fdata
        })
    })
    it('create redis', () => {
        cy.visit('/')
        cy.login(testData.login_id, testData.password)
        cy.origin('https://eyk.ey.io', {
            args: testData
        }, (testData) => {
            cy.get('a[id="collasible-nav-dropdown"]').eq(0).click()
            cy.get('a[href="/app/databases"]').eq(0).click()
            cy.get('a[href="/app/databases/add-database"]').eq(0).click()
            cy.get('select').eq(0).select('zamstars (https://eyk.zamstars.zamstars.ey.io)')
            cy.get('input[class="form-control mb-2"]').eq(0).type(testData.database_name_1)
            cy.get('input[class="form-control mb-2"]').eq(1).type(testData.database_name_2)
            cy.get('select').eq(1).select('postgres')
            cy.get('select').eq(2).select('9.6')
            cy.get('input[class="form-control mb-2 "]').eq(0).type('34')
            cy.get('select').eq(3).select('Small (2 GiB memory)')
            cy.get('button[class="btn btn-eyk-outline mt-2"]').eq(0).click()
        })
    })
})