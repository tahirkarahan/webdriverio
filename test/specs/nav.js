import HomePage from "../pages/home_page";


describe('Navigation Menu', () => {
    it('Get the text of all menu items & Assert them', async() =>{
        // Open home page
        //await browser.url('/');
        //or
        await HomePage.open();

        const expectedLinks=["Home", "About", "Shop", "Blog", "Contact", "My account"];

        const actualLinks=[];

       // const navLinks=await $('#primary-menu').$$('li[id*=menu]');
        //Or
       // const navLinks=await $$('#primary-menu li[id*=menu]');
       const navLinks=await HomePage.NavComponent.navMenuLists;

        // push element to actualLinks array 
        for(const link of navLinks){
            actualLinks.push(await link.getText());
        }

        //Assertion
        await expect(expectedLinks).toEqual(actualLinks);
    });

    it('Get the text of all menu items & Assert them--using wait commands', async() =>{
        // Open home page
        await HomePage.open();

        const expectedLinks=["Home", "About", "Shop", "Blog", "Contact", "My account"];

        const actualLinks=[];

        //wait until The Home text is displayed on the navigation menu
 await browser.waitUntil(async function() {
    //const homeText=await $('(//a[@aria-current="page"])[2]').getText(); //Home
    const homeText=await (await HomePage.NavComponent.firstNavMenuLink).getText();
    return homeText==="Home";
}, {
    timeout: 5000,
    timeoutMsg: 'Could not verify the Home text from Navigation list links'
});

        const navLinks=await HomePage.NavComponent.navMenuLists;

        // push element to actualLinks array 
        for(const link of navLinks){
            actualLinks.push(await link.getText());
        }
        //Assertion
        await expect(expectedLinks).toEqual(actualLinks);
    });

});

