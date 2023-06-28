/////////////////////////////////////////////////
// This is a Cypress automatuion suite for NN //
///////////////////////////////////////////////


//Definition for cypress object cy
/// <reference types="Cypress" />

//Webpage Under Test
const TEST_URL = 'http://www.uitestingplayground.com';

//Functional Tests
describe('UI Testing Playground Webpage Testing', () => {

    //Execute before each test case has been run
    beforeEach(() => {
        //Load the JSON data
        cy.fixture('data').then(function(data) {
            globalThis.data = data;
        })
        //Go to Test webpage
        cy.visit(TEST_URL);
        //Validate the title displays UI Test Automation Playground
        cy.get('#title')
            .should('be.visible')
            .should('contain', 'UI Test AutomationPlayground');
    });
    
    //Execute after each test case has been run
    afterEach(() => {
        //Clear page cookies
        cy.clearCookies();
        //Clear storage
        cy.clearLocalStorage();
    });

    //Validate that the UITAP tab is clickable and navigates to the main page
    it('Validate that the UITAP tab is clickable and navigates to the main page', () => {
        //Click on UITAP tab
        cy.get('.navbar-brand')
            .should('be.visible')
            .should('contain', 'UITAP')
            .click();
        //Validate the page is displayed
        cy.contains('UI Test AutomationPlayground').should('be.visible');
        //Validate the image is displayed
        cy.get('.img-fluid').should('be.visible');
        //Validate the page displays specific text
        cy.get('.mb-0').should('have.text', 'Quality is not an act, it is a habit.');
        cy.get('.alert > span').should('have.text', 'The purpose of this website is to provide a platform for sharpening UI test automation skills. Use it to practice with your test automation tool. Use it to learn test automation techniques.');
        cy.get('.row > :nth-child(1) > :nth-child(4)').should('have.text', 'Different automation pitfalls appearing in modern web applications are described and emulated below.');
    });

    //Validate that the Home tab is clickable and navigates to the main page
    it('Validate that the Home tab is clickable and navigates to the main page', () => {
        //Click on Home tab
        cy.get('.active > .nav-link')
            .should('be.visible')
            .contains('Home')
            .click();
        //Validate the page is displayed
        cy.contains('UI Test AutomationPlayground').should('be.visible');
        //Validate the image is displayed
        cy.get('.img-fluid').should('be.visible');
        //Validate the page displays specific text
        cy.get('.mb-0').should('have.text', 'Quality is not an act, it is a habit.');
        cy.get('.alert > span').should('have.text', 'The purpose of this website is to provide a platform for sharpening UI test automation skills. Use it to practice with your test automation tool. Use it to learn test automation techniques.');
        cy.get('.row > :nth-child(1) > :nth-child(4)').should('have.text', 'Different automation pitfalls appearing in modern web applications are described and emulated below.');
    });

    //Validate that the Resources tab is clickable and navigates to the resource page
    it('Validate that the Resources tab is clickable and navigates to the resource page', () => {
        //Click on Resources tab
        cy.get(':nth-child(2) > .nav-link')
            .should('be.visible')
            .contains('Resources')
            .click();
        //Validate Resources title is displayed
        cy.get('h3')
            .should('be.visible')
            .contains('Resources');
        //Validate that specific headers are displayed
        cy.get('.container > :nth-child(2)').should('have.text', 'Learning')
        cy.get('.container > :nth-child(4)').should('have.text', 'Standards')
        cy.get('.container > :nth-child(6)').should('have.text', 'Articles')
        cy.get('.container > :nth-child(8)').should('have.text', 'Community');
    });

    //Validate that the Dynamic ID link is clickable, that it navigates to the Dynamic ID page and that the button is clickable
    it('Validate that the Dynamic ID link is clickable, that it navigates to the Dynamic ID page and that the button is clickable', () => {
        //Validate that Dynamic ID header is displayed
        cy.get(':nth-child(1) > :nth-child(1) > h3 > a')
            .should('be.visible')
            .contains('Dynamic ID');
        //Validate that Dynamic ID header description is displayed
        cy.get('#overview > .container > :nth-child(1) > :nth-child(1) > p').should('have.text', 'Make sure you are not recording dynamic IDs of elements');
        //Click on Dynamic ID header
        cy.get(':nth-child(1) > :nth-child(1) > h3 > a').click();
        //Validate that Dynamic ID title is displayed
        cy.get('h3')
            .should('be.visible')
            .contains('Dynamic ID')
        //Validate that the description is displayed
        cy.get('p').should('have.text', 'Modern applications often generate dynamic IDs for elements. In this case ID is not a reliable attribute for using in element selector. By default many UI automation tools record IDs and this results in tests broken from the very beginning. An automation tool needs a way to instruct it to skip dynamic IDs when XPath is generated for an element.');
        //Validate that the Scenario header is displayed
        cy.get('.container > :nth-child(3)').should('have.text', 'Scenario');
        //Validate the Scenario headers two bullet points
        cy.get('.container > ul > :nth-child(1)').should('have.text', 'Record button click.')
        cy.get('.container > ul > :nth-child(2)').should('have.text', 'Then execute your test to make sure that ID is not used for button identification.');
        //Validate that the Playground header is displayed
        cy.get('.container > :nth-child(5)').should('have.text', 'Playground');
        //Validate the button
        cy.contains('button', 'Button with Dynamic ID')
            .should('be.visible')
            .should('be.enabled')
            .click();
    });

    //Validate that the Text Input link is clickable, that it navigates to the Text Input page and that the button text can be changed to something new
    it('Validate that the Text Input link is clickable, that it navigates to the Text Input page and that the button text can be changed to something new', () => {
        ////Validate that Text Input header is displayed
        cy.get(':nth-child(2) > :nth-child(4) > h3 > a')
            .should('be.visible')
            .contains('Text Input');
        //Validate that Text Input header description is displayed
        cy.get(':nth-child(2) > :nth-child(4) > p').should('have.text', 'Entering text into an edit field may not have effect');
        //Click on Text Input header
        cy.get(':nth-child(2) > :nth-child(4) > h3 > a').click();
        //Validate that Text Input title description is displayed
        cy.get('h3')
            .should('be.visible')
            .contains('Text Input')
        //Validate that the description is displayed
        cy.get('p').should('have.text', 'Entering text with physical keyboard can be different from sending DOM events to an element. This page is specifically desined to illustrate this problem. There are cases when attempts to set a text via DOM events lead to nowhere and the only way to proceed is to emulate real keyboard input at OS level.');
        //Validate that the Scenario header is displayed
        cy.get('.container > :nth-child(3)').should('have.text', 'Scenario');
        //Validate the Scenario headers two bullet points
        cy.get('.container > ul > :nth-child(1)').should('have.text', 'Record setting text into the input field and pressing the button.');
        cy.get('.container > ul > :nth-child(2)').should('have.text', 'Then execute your test to make sure that the button name is changing.');
        //Validate that the Playground header is displayed
        cy.get('.container > :nth-child(5)').should('have.text', 'Playground');
        //Validate that the Playground text box description is displayed
        cy.get('label').should('have.text', 'Set New Button Name');
        //Enter dynamic text into the textbox
        cy.get('#newButtonName').type(data.dynamicButtonName);
        //Validate the button
        cy.get('#updatingButton')
            .should('be.visible')
            .should('be.enabled')
            .click();
        //Validate the button
        cy.get('#updatingButton')
            .should('have.text', data.dynamicButtonName)
            .should('be.visible')
            .should('be.enabled');
    });
});
