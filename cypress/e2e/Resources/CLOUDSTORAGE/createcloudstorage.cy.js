describe('login to zamstar application', () => {
    let testData
    before(() => {
        cy.fixture('testdata').then((fdata) => {
            testData = fdata
        })
    })
    it('visit to resources and select cloud storage create', () => {
        cy.visit('/')
        cy.login(testData.login_id, testData.password)
        cy.origin('https://eyk.ey.io', {
            args: testData
        }, (testData) => {
            cy.get('a[id="collasible-nav-dropdown"]').eq(0).click()
            cy.get('a[href="/app/resources/cloud-storage"]').eq(0).click()
            cy.get('a[href="/app/resources/add-cloud-storage"]').eq(0).click()
            cy.get('select').should('be.visible').select('zamstars (https://eyk.zamstars.zamstars.ey.io)', {
                force: true
            })
            // cy.get('input[class="form-control mb-2 "]').eq(0).type(testData.bucket_name)
            // cy.get('button[class="btn btn-eyk-outline mt-2"]').click()
            // cy.contains('Go to Cloud Storage (S3 Bucket)').click()
        })
    })
})