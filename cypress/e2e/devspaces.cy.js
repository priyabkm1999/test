describe('login to zamstar application', () => {
    let testData
    before(() => {
        cy.fixture('testdata').then((fdata) => {
            testData = fdata
        })
    })
    it('create application then check whether it is found or not', () => {
        cy.visit('/')
        cy.login(testData.login_id, testData.password)
        cy.origin('https://eyk.ey.io', {
            args: testData
        }, (testData) => {
            cy.get('a[href="/app/resources/devspaces"]').click()
            cy.get('a[href="/app/resources/add-devspaces"]').click()
            cy.get('select[class="form-control mb-2 "]').eq(0).select('Zamstars')
            cy.get('input[class="form-control mb-2 "]').eq(0).type(testData.devName)
            cy.get('select[class="form-control mb-2 "]').eq(1).select('ARM')
            cy.get('select[class="form-control mb-2 "]').eq(2).select('Europe (Ireland)')
            cy.get('input[class="form-control mb-2 "]').eq(1).type('priyabkm1999')
            cy.contains('Create DevSpace').click()
        })
    })
    it('delete data from devspace', () => {
        cy.visit('/')
        cy.login(testData.login_id, testData.password)
        cy.origin('https://eyk.ey.io', {
            args: testData
        }, (testData) => {
            cy.get('a[href="/app/resources/devspaces"]').click()
            const arrayText = [];
            const column = 1;
            cy.get('table tbody').find('tr').then((rows) => {
                const countRows = rows.length
                cy.get('table tbody').find('tr').eq(0).find('td').then((col) => {
                    const countColumns = col.length
                    for (let i = 0; i < countRows; i++) {
                        let isFound = false
                        cy.get('table tbody').find('tr').eq(i).find('td').eq(column).then(cell => {
                            console.log("cell.text()", cell.text())
                            if (testData.devName == cell.text().trim()) {
                                cy.get('table tbody').find('tr').eq(i).find('td > a > svg').click();
                                cy.get('button[class="btn btn-eyk-outline btn btn-primary"]').eq(0).click()
                                isFound = true;
                            }
                        });
                        if (isFound) {
                            break;
                        }
                    }

                })
            })
        })
    })
    // it('select another tab for devspace creation', () => {
    //     cy.visit('/')
    //     cy.login(testData.login_id, testData.password)
    //     cy.origin('https://eyk.ey.io', {
    //         args: testData
    //     }, (testData) => {
    //         cy.get('a[href="/app/resources/devspaces"]').click()
    //         // cy.get('a[href="/app/add_share_dev_space_user"]').click()
    //     })
    // })
})