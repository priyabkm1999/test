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
                            cy.get('a[href="/app/resources/ssl-certificate"]').eq(0).click()
                            cy.get('a[href="/app/resources/add-ssl-certificate"]').eq(0).click()
                            cy.get('input[type="checkbox"]').eq(0).click()
                            cy.get('input[class="form-control mb-2"]').eq(0).type(testData.certificate_name)
                            cy.get('textarea[class="form-control"]').eq(0).type('MIIDszCCApugAwIBAgIUCcS7YAYoa/lymIjCtPQUI1y5wuUwDQYJKoZIhvcNAQELBQAwaTELMAkGA1UEBhMCSU4xFDASBgNVBAgMC1dlc3QgYmVuZ2FsMRAwDgYDVQQH DAdLb2xrYXRhMQ4wDAYDVQQKDAVHZW9nbzELMAkGA1UECwwCSVQxFTATBgNVBAMM DHByb3RlZ2VyLnh5ejAeFw0yMzAxMTkwNzI3MTlaFw0yNDAxMTkwNzI3MTlaMGkx CzAJBgNVBAYTAklOMRQwEgYDVQQIDAtXZXN0IGJlbmdhbDEQMA4GA1UEBwwHS29s a2F0YTEOMAwGA1UECgwFR2VvZ28xCzAJBgNVBAsMAklUMRUwEwYDVQQDDAxwcm90 ZWdlci54eXowggEiMA0GCSqGSIb3DQEBAQUAA4IBDwAwggEKAoIBAQC6qpOcOUo8 NprbaLSwq73HVLDsDdbbBJzxvaX3Q / 2 awsef6dQZZJCUfEuGFDE5dVec4YnGReoc gQr1y + YWBsxu / mRAOcw9grkE4qlRfxoEsiH5O6SlsEXKJ32ON5yRmHuKkC5AE95y GUToAynLoXcHUGq + JwBfNWyZrFM2aLzX75yrSZ4mwkjZzlaTe8RHDtlM3GLlkwDn GmgYPYZSVf8 / ILW4kZR0haauOm9wJay5N7G7azf0JyEaIp5iQaZW9eYK2IwZhCBD HzXj7lCy1 + tXN7T5TvzqcCJ74w9R6CeLVRu5dpDDbhPXMRc6d2VS4Kh9oexP1qKT v3XPitQub6WlAgMBAAGjUzBRMB0GA1UdDgQWBBSp8mVgSYhirgnsdNuqGvXYgcK8 kzAfBgNVHSMEGDAWgBSp8mVgSYhirgnsdNuqGvXYgcK8kzAPBgNVHRMBAf8EBTAD AQH / MA0GCSqGSIb3DQEBCwUAA4IBAQCIMCfsjwQcbR6dksQC6NtD91A20x13ck53 IVEP5d / y + GJQ5E4UPW + 4 ZjBkIeftiNlYF + sR5gaOKeAgRk9b5 / trXjBmcZnxXzGm OebEWgBEBzqm6EDyfKms44FR3ZWFzVbFpXABcfISNFOhc3Jer1Y9zUWgNynzw5Fw ccWelBWg9duzj0 + y3VSE05H2x8Umbuzxttt3mMEEDg4M1IJTkGb5oVkOfhj + mCtz 8 c2VjIIF2Dyau4Ir4x8R3Syklo28xeiUz49v8yOmV1vzuoBpNKrIV7ZLLcCP + Er5 CcRd / SR + Peyk9oqnGzyznkRvSvS6L6Mt + oJ5cdC3bv4VGYKMkoE3 ')
                            cy.get('textarea[class="form-control"]').eq(1).type('MIIEvwIBADANBgkqhkiG9w0BAQEFAASCBKkwggSlAgEAAoIBAQC6qpOcOUo8NprbaLSwq73HVLDsDdbbBJzxvaX3Q / 2 awsef6dQZZJCUfEuGFDE5dVec4YnGReocgQr1 y + YWBsxu / mRAOcw9grkE4qlRfxoEsiH5O6SlsEXKJ32ON5yRmHuKkC5AE95yGUTo AynLoXcHUGq + JwBfNWyZrFM2aLzX75yrSZ4mwkjZzlaTe8RHDtlM3GLlkwDnGmgY PYZSVf8 / ILW4kZR0haauOm9wJay5N7G7azf0JyEaIp5iQaZW9eYK2IwZhCBDHzXj 7 lCy1 + tXN7T5TvzqcCJ74w9R6CeLVRu5dpDDbhPXMRc6d2VS4Kh9oexP1qKTv3XP itQub6WlAgMBAAECggEAUATbbjbo6dMGo1PJUYrtuctGZIqyNgVOOhrwUIUm6 / bf mF + mepQvnleCEKILT / RLcIcGhqZl634t8pxLr9mOPW50D0w3j47APaXkq3ju8GBk S / ETbauY30X6fsK8LXXOT + Hq0bEyxHqsnUDt48r9uXbxqz4Q3L + MJHxI16Qif / YM i5awfI72Q / ViRfsE / su6 / 1 szXp7oo9mkjI6gDP6ic + ffLQjY2 + MKaIGXMMWurPBn bLEkScT44qTYkXP7liDNInxAeFBrBTzDYygbmRBaraGFTUADeUeV7QlirLgS8btt 0 jKWXyMvstOpxl3hMmyii4 / 6 MVvzL7rsVHAOjKy0qQKBgQC / tZucMlp9Lr0DdU1J vLg1rSsqCUfwpmGt0pWQF6hWayxdpLxuAt7CvYUbPEosphBFfjGsojghAW3wU1ID hbErsgnxpx4RNIYBfOzkXjprlJZVSJNxqT09Wv0tss7TAT9ej2rNO + uwyWqmGi2W brBjbVB4CpU46wo5JPtcA0zBpwKBgQD5RAQG2II7W6X65hMdYNWl1liI8NRpCSuv MJPtcs29XLCvSrTbdid / i6KUIYP9ujCyHsjfCQYjup1uvlxDUeTIUDqX2pSJlWzu fmkT0k9tcduAZXi1QB0pEFs7Ulk / Ke3LeVGmUWLxJn5SauJso + AurqXtV5aNgnQj blx8hHrP0wKBgQClgiCqJT7CPIuqZKcpNejDTpGpZQHa3YoPC3NcR1Bp63UOE58q SwgOkJhN / yr6iRQbKuuv4w0aUaWcihKQP + fJlZfILUNkDzhyKGxMbJ17K3jugA3r XvUj914FCg5NVRJkjOTj8wt0QS / 13 zvkWAOok0OZn2ldDm5xD2CC + 8 ZUmQKBgQCj +zTS9BgoyJAW0Mj + aLfkk3BHFngGaXwNkl2etgnXa2TozLLSNZaid9AKt0nH33ct lsb6w0sAskHjmuPDfdqOVQlW4Psaz + yLsSmbWp3aGC8Y9qhERNtqKlJ6YiBIR2Mi mrs2ORBoKLStr5cpdV2EGG0cCKUIjyusK2w4lkbc9QKBgQCrMUHM1eWla3xZqsAx VWSOCaDhAIFRbb9mBCBr3Fru6LJ381jBNFSZXIDOku2R / rfXAr + iYTttVyTJsH9k le9Msx40GhG28zWzg + VbyihF / GBSg0rKkYhywg0PovX / 9 / kcFhB3iQRfbiKAdMVS DYE2NJ + CE5OjvKUJ65DoI / xEBw == ') 
                            cy.get('button[class="btn btn-eyk-outline mt-2"]').eq(0).click()
                            })
                    })
            })