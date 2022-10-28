class ContactPage{

    open(){
        return browser.url('/contact');
    }

    get inputName(){
        return $('.contact-name input');
    }

    get inputEmail(){
        return $('.contact-email input');
    }

    get inputPhoneNum(){
        return $('.contact-phone input');
    }

    get txtMessageField(){
        return $('.contact-message textarea')
    }

    get submitButton(){
        return $('//button[@type="submit"]');
    }
     
    async submitForm(name, email, phone, text){
         await this.inputName.setValue(name);
         await this.inputEmail.setValue(email);
         await this.inputPhoneNum.setValue(phone);
         await this.txtMessageField.setValue(text);
         await this.submitButton.click();
    }

    get AlertMessage(){
        return $('.everest-forms');
    }
}

export default new ContactPage();