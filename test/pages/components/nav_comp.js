class NavComponent{

    get navMenuLists() { 
        return $$('#primary-menu li[id*=menu]');
    }


    get firstNavMenuLink(){
        return $('(//a[@aria-current="page"])[2]');
    }

}

export default new NavComponent();