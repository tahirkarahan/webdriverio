import ContactPage from"../pages/contact_page";

describe('Contact page', () => {
    it('Fill all contact field, submit form & Assert submit successful', async() => {
        //Open Contact page
        //await browser.url('https://practice.automationbro.com/contact/');
        //Or
        //await browser.url('/contact');
        await ContactPage.open();

        //**** addValue--> add value or text into the input field
        //**** setValue--> clear the input field first and add value or text into the input field
        //await $('.contact-name input').addValue('Test Name');
        //await $('.contact-name input').setValue('Test Name');
        //await $('.contact-email input').setValue('test@gmail.com');
        //await $('.contact-phone input').setValue('123456789');
        //await $('.contact-message textarea').setValue('This is for test');
        //await $('//button[@type="submit"]').click();

        await ContactPage.submitForm('Test Name', 'test@gmail.com', '123456789', 'This is for test');
        
        //Assert the success message
        //const successMessage=await $('.everest-forms').getText();
        const successMessage=await (await ContactPage.AlertMessage).getText();
        await expect(successMessage).toEqual('Thanks for contacting us! We will be in touch with you shortly');
    });
});