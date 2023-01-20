describe('login to zamstar application', () => {
    let testData
    before(() => {
        cy.fixture('testdata').then((fdata) => {
            testData = fdata
        })
    })
    it('create system user', () => {
        cy.visit('/')
        cy.login(testData.login_id, testData.password)
        cy.origin('https://eyk.ey.io', {
            args: testData
        }, (testData) => {
            cy.get('a[id="collasible-nav-dropdown"]').eq(0).click()
            cy.get('a[href="/app/system-users"]').eq(0).click()
            cy.get('a[href="/app/add-system-user"]').eq(0).click()
            cy.get('input[type="checkbox"]').eq(1).check({ force: true })
            cy.get('input[type="text"]').type(testData.system_user_name)
            cy.get('textarea[class="form-control"]').type('ssh-rsa AAAAB3NzaC1yc2EAAAADAQABAAABgQDNsUqtvPI8p0qPJiTtYoqyiN67jnoGYB9pF8CCvLQ06nL244DW1TwOw7+wWXmv6Eiet3q7Yzq3n1ZdpExEj79ifwROZZQMjfGn/xzvz9ELIXnH4KK9763r//i4xPI3epsvXH97XjpZ5UXkmuAHfzmvoOrTKReps8g+C4QY9+P18QlnEa536G+b1H+gt97S1YF//qXo7rlGTf0+/NwHZFnf+Os0ovuJPcCW26Zcun9YRz6+p+C/a/bMhz6WjUgCPcUrioz4KY6LfVNUN0352xJEGo/ilzZCzUeF5m4u+uan/GYta+FEElkaHC+GdKSq9oKMu6ItUTl/Tj2tKMjEWMEwR3yS4SLdJEYbVRWLNyrUpDwD8ZsWdKKy39IUJMLlGrJg93+enGsvtZNOOiIUe6xL0upFFfXaDzSjAZR6o2szxAWBcfCqmrm7ZN4LvOn+qsP4PbnTMr0MRHaNnoFJpA5WvW3pGLFlnH1XZMwxcenvQu71lIZ5S34X8b4fN1kx1L0= geogo@Geogos-Air')
            cy.get('button[class="btn btn-eyk-outline mt-2"]').eq(0).click()
            cy.get('a[href="/app"]').eq(0).click()
        })
    })
})