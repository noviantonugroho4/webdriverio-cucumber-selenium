import { WebdriverIO } from "@wdio/types/build/Options"
import {click} from "../../src/utils/commands"
import Page from "./page"

class ChaiRegister extends Page{

    private get header(){ return $('//h1') }

    private get fname(){ return $('[name=firstname]') }
    private get lname(){ return $('[name=lastname]') }

    private get gender_radio() { return $$('[name=sex]') }
    private get favchai_checkbox() { return $$('input[name*=Tea]') }

    private get continent_dropdown() { return $('#continents') }
    private get selcommands_dropdown() { return $('#continents') }

    private get submit_btn() {return  $('#submit') }



    getHeader() {
        return this.header
    }



    async selectDropdown(element:WebdriverIO.ElementArray, value:String) {
        for (let i = 0; i < element.length; i++){
            const elem = await (element[i]).getAttribute('value');
            if (elem === value) {
                await (element[i]).click()
                break;
            }
        }
    }

    async enterFirstName(firstname:string){
        await (await this.fname).setValue(firstname)
    }


    async selectGender(gender:string){
        await this.selectDropdown(await this.gender_radio, gender)
    }

    async selectFavchai(favchai:string){
        await this.selectDropdown(await this.favchai_checkbox, favchai)
    }

    async selectContinent(continent:string){
        await (await this.continent_dropdown).selectByVisibleText(continent)
    }

    async selectSelCommand(command:string){
        await (await this.selcommands_dropdown).selectByVisibleText(command)
    }

    async clickSubmitButton() {
        await click(this.submit_btn)
    }

}

export default new ChaiRegister()