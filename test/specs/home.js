import HomePage from'../pages/home_page';

//title: Practice E-Commerce Site – Automation Bro
//URL: https://practice.automationbro.com/

describe('Home', () => {
    it('Open URL & Assert title',async() => {
        //Open URL
        //await browser.url('https://practice.automationbro.com/');
        await HomePage.open();

        //Assert title
        await expect(browser).toHaveTitle('Practice E-Commerce Site – Automation Bro');
    });


    it('Open About page & Assert URL', async() => {
        // first way to open About page
        await browser.url('https://practice.automationbro.com/about');

        //Second way: open home page--> click on About Link from home page
        //await HomePage.open();
        //await $('#menu-item-491').click();

        //Assert URL
        await expect(browser).toHaveUrl('https://practice.automationbro.com/about/');
    });

    it('Click on GET STARTED button & Assert URL contains get-started text', async() => {
        // open home page
        await HomePage.open();

        //click on GET STARTED button
        //await $('#get-started').click();
         await (await HomePage.getStartedButton).click();

        //Assert URL contains get-started text
        await expect(browser).toHaveUrlContaining('get-started');
    });

    it('Click on website logo & Assert URL does not contains get-started text', async() => {
        // open home page
        await HomePage.open();

        //click on web logo
        //await $('//a[@class="custom-logo-link"]').click();
        await (await HomePage.logoImage).click();

        //Assert URL does not contains get-started text
        await expect(browser).not.toHaveUrlContaining('get-started');
    });

    it('Get heading element & Assert the text', async() => {
        // open home page
        await HomePage.open();

        //Find heading element
        //const headingEl=await $('(//div[@class="elementor-widget-container"]//h1)[2]');
        const headingEl= await HomePage.headingText;

        //Get the text
       const headingText=await headingEl.getText();
     

        //Assert the text
        //await expect(headingEl).toHaveText('Think different. Make different.');
        await expect(headingText).toEqual('Think different. Make different.');
    });
});