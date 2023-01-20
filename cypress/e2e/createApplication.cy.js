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
                // https://smart-ky-dash.zamstars.zamstars.ey.io/
                cy.origin('https://eyk.ey.io', {
                    args: testData
                }, (testData) => {
                    // cy.get('a[href="/app/apps/add-application"]').eq(0).click()
                    // cy.get('select').eq(0).select('zamstars (ap-southeast-2)')
                    // cy.get('input[type="text"]').eq(0).type(testData.cluster_name)
                    // cy.get('button[class="btn btn-eyk-outline mt-2"]').eq(0).click()
                    // cy.get('a[href="/app"]').eq(0).click()
                    let isFound = false
                    cy.get('div[class="row"]').eq(0).each($div => {
                        cy.wrap($div).within(() => {
                            if (!isFound) {
                                cy.get('div[class="col-md-9"]').eq(0).should(($data) => {
                                    if ($data.text().includes(testData.cluster_name)) {
                                        console.log("TEXT:", $data.text())
                                        isFound = true;
                                    }
                                });
                            }
                            if (isFound) {
                                console.log('the data already exists')
                            }
                        })
                    })
                })
            })
        })