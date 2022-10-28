import NavComponent from "./components/nav_comp";

class HomePage{

      open() {
        return browser.url('/'); //base_url('https://practice.automationbro.com/');
     
    }

    get getStartedButton() {
        return $('#get-started');

    }

    get logoImage(){
        return $('//a[@class="custom-logo-link"]');
    }

    get headingText() {
        return $('(//div[@class="elementor-widget-container"]//h1)[2]');

    }

    // get getHeadingTxt(){
    //     return $('(//div[@class="elementor-widget-container"]//h1)[2]').getText();
    // }

    get NavComponent() {
        return NavComponent;
    }


}

export default new HomePage();