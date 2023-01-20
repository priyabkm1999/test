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
            cy.get('a[href="/app/resources/redis"]').eq(0).click()
            cy.get('a[href="/app/resources/add-redis-cache"]').eq(0).click()
            cy.get('select').should('be.visible').select('zamstars (https://eyk.zamstars.zamstars.ey.io)', {
                force: true
            })
            cy.get('input[class="form-control mb-2 "]').eq(0).type(testData.redis_name)
            cy.get('button[class="btn btn-eyk-outline mt-2"]').eq(0).click()
            cy.contains('Go to Redis Cache').eq(0).click()
        })
    })

    it('delete cloud storage', () => {
        cy.visit('/')
        cy.login(testData.login_id, testData.password)
        cy.origin('https://eyk.ey.io', {
            args: testData
        }, (testData) => {
            cy.get('a[id="collasible-nav-dropdown"]').eq(0).click()
            cy.get('a[href="/app/resources/redis"]').eq(0).click()
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
                            if (testData.redis_name == cell.text().trim()) {
                                cy.get('table tbody').find('tr').eq(i).find('td > a > svg').click();
                                cy.get('input[class="form-control mb-2"]').eq(0).type('Delete')
                                cy.contains('button', 'Confirm').click()
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
})