import {DefaultRestRequest} from "../../../../src/api/DefaultRestRequest"

describe('The Home Page', () => {
  console.log(DefaultRestRequest);
  it('successfully loads', () => {
    cy.visit('http:/')
  })
})
