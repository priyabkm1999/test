describe('login to zamstar application', () => {
    let testData
    before(() => {
        cy.fixture('testdata').then((fdata) => {
            testData = fdata
        })
    })
    it('delete cloud storage', () => {
        cy.visit('/')
        cy.login(testData.login_id, testData.password)
        cy.origin('https://eyk.ey.io', {
            args: testData
        }, (testData) => {
            cy.get('a[id="collasible-nav-dropdown"]').eq(0).click()
            cy.get('a[href="/app/resources/cloud-storage"]').eq(0).click()
            //         cy.get('a[class="d-inline-block action-icons ml-2 mr-2 text-black-50 eyktooltip"]').eq(3).then(($ele) => {
            //             console.log('length', $ele.length)
            //         }).click()
            //         cy.get('input[class="form-control mb-2"]').eq(0).type('Delete')
            //         cy.contains('button', 'Confirm').click()
        })
    })
})