// describe('login to zamstar application', () => {
//     let testData
//     before(() => {
//         cy.fixture('testdata').then((fdata) => {
//             testData = fdata
//         })
//     })

//     // it('visit to resources and select cloud storage create', () => {
//     //     cy.visit('/')
//     //     cy.login(testData.login_id, testData.password)
//     //     cy.origin('https://eyk.ey.io', {
//     //         args: testData
//     //     }, (testData) => {
//     //         cy.get('a[id="collasible-nav-dropdown"]').eq(0).click()
//     //         cy.get('a[href="/app/resources/cloud-storage"]').eq(0).click()
//     //         cy.get('a[href="/app/resources/add-cloud-storage"]').eq(0).click()
//     //         cy.get('select').should('be.visible').select('zamstars (https://eyk.zamstars.zamstars.ey.io)', {
//     //             force: true
//     //         })
//     //         // cy.get('input[class="form-control mb-2 "]').eq(0).type(testData.bucket_name)
//     //         // cy.get('button[class="btn btn-eyk-outline mt-2"]').click()
//     //         // cy.contains('Go to Cloud Storage (S3 Bucket)').click()
//     //     })
//     // })

//     const search = (column, searchText) => {
//         const arrayText = [];
//         cy.get('table tbody').find('tr').then((rows) => {
//             const countRows = rows.length
//             cy.get('table tbody').find('tr').eq(0).find('td').then((col) => {
//                 const countColumns = col.length
//                 for (let i = 0; i < countRows; i++) {
//                     cy.get('table tbody').find('tr').eq(i).find('td').eq(column).then(cell => {
//                         if (searchText === cell.text()) {
//                             rowNumber = i
//                         }
//                     });

//                 }
//             })
//         })
//     }
//     it('delete cloud storage', () => {
//         cy.visit('/')
//         cy.login(testData.login_id, testData.password)
//         cy.origin('https://eyk.ey.io', {
//             args: testData
//         }, (testData) => {
//             cy.get('a[id="collasible-nav-dropdown"]').eq(0).click()
//             cy.get('a[href="/app/resources/cloud-storage"]').eq(0).click()
//             search(0, 'redtest');
//             // cy.contains('redtest').should('exist').then(() => {
//                 // search(0, 'redtest');
//                 // cy.get('a[class="d-inline-block action-icons ml-2 mr-2 text-black-50 eyktooltip"]').eq(3).then(($ele) => {
//                 //     console.log('length', $ele.length)
//                 // }).click()
//                 //         cy.get('input[class="form-control mb-2"]').eq(0).type('Delete')
//                 //         cy.contains('button', 'Confirm').click()
//             })
//             cy.wait(1000).then(() => {
//                 cy.get('table tbody').find('tr').eq(rowNumber).find('td > a').click();

//             })
//         })
//     // })
// })


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
            cy.get('input[class="form-control mb-2 "]').eq(0).type(testData.bucket_name)
            cy.get('button[class="btn btn-eyk-outline mt-2"]').eq(0).click()
            // cy.contains('Go to Cloud Storage (S3 Bucket)').click()
        })
    })


    // it('delete cloud storage', () => {
    //     cy.visit('/')
    //     cy.login(testData.login_id, testData.password)
    //     cy.origin('https://eyk.ey.io', {
    //         args: testData
    //     }, (testData) => {
    //         cy.get('a[id="collasible-nav-dropdown"]').eq(0).click()
    //         cy.get('a[href="/app/resources/cloud-storage"]').eq(0).click()
    //         const arrayText = []; 
    //         const column = 1;
    //         cy.get('table tbody').find('tr').then((rows) => {
    //             const countRows = rows.length
    //             cy.get('table tbody').find('tr').eq(0).find('td').then((col) => {
    //                 const countColumns = col.length
    //                 for (let i = 0; i < countRows; i++) {
    //                     let isFound = false
    //                     cy.get('table tbody').find('tr').eq(i).find('td').eq(column).then(cell => {
    //                         console.log("cell.text()", cell.text())
    //                         if (testData.bucket_name == cell.text().trim()) {
    //                             cy.get('table tbody').find('tr').eq(i).find('td > a > svg').click();
    //                             cy.get('input[class="form-control mb-2"]').eq(0).type('Delete')
    //                             cy.contains('button', 'Confirm').click()
    //                             isFound = true;
    //                         }
    //                     });
    //                     if (isFound) {
    //                         break;
    //                     }
    //                 }

    //             })
    //         })

        // })
    // })
})