describe('login to zamstar application and create cluster', () => {
    let testData
    before(() => {
        cy.fixture('testdata').then((fdata) => {
            testData = fdata
        })
    })
    it('create application then check whether it is found or not', () => {
        cy.visit('/')
        cy.login(testData.login_id, testData.password)
        // https://smart-ky-dash.zamstars.zamstars.ey.io/
        cy.origin('https://eyk.ey.io', {
            args: testData
        }, (testData) => {
            cy.get('a[href="/app/clusters"]').eq(0).click()
            cy.get('a[href="/app/clusters/add-cluster"]').eq(0).click()
            // cy.get('input[class="form-control mb-2 "]').eq(0).type(testData.cluster_name)
            // cy.get('select[class="form-control mb-2 "]').eq(0).select('Europe (Ireland)')
            // cy.get('select[class="form-control mb-2 "]').eq(1).select('Zamstars')
            // cy.get('button[class="btn btn-eyk-outline mt-2"]').eq(0).click()
            // cy.contains('Go to Clusters').click()
        })
    })
})