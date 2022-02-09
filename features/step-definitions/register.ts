import {Given, When, Then} from '@wdio/cucumber-framework'
import chaiPage from '../pageobjects/register.page'

Given(/^I am on practice page \"([^\"]*)\"$/, async (appurl:string) => {
    await browser.url(appurl)
    await browser.maximizeWindow()
});

When(/^I enter firstname (.+) and lastname (.+)$/, async (fname, lname) => {
    // await (await chaiPage.fname).setValue(fname)
    // await (await chaiPage.lname).setValue(lname)
    await chaiPage.enterFirstName(fname)
});

Then(/^I validat page header \"([^\"]*)\"$/, async (headertext) => {
    await expect(chaiPage.getHeader()).toHaveText(headertext)
});

When(/^I select gender (.+) years (.+) favorite chai (.+) and reason (.+)$/, async (gender, yrs, favchai, reason) => {
    // const gender_radio = await $$('[name=sex]')
    // const favchai_checkbox = await $$('input[name*=Tea]')

    // for (let i = 0; i < gender_radio.length; i++){
    //     const element = await (gender_radio[i]).getAttribute('value');
    //     if (element === gender) {
    //         await (gender_radio[i]).click()
    //         break;
    //     }
    // }

    // for (let i = 0; i < favchai_checkbox.length; i++){
    //     const element = await (favchai_checkbox[i]).getAttribute('value');
    //     if (element === favchai) {
    //         await (favchai_checkbox[i]).click()
    //         break;
    //     }
    // }



    // await chaiPage.selectDropdown(await chaiPage.gender_radio,gender)
    // await chaiPage.selectDropdown(await chaiPage.favchai_checkbox,favchai)
    await chaiPage.selectGender(gender)
    await chaiPage.selectFavchai(favchai)

});

When(/^I select continent (.+) and commands (.+)$/, async (continent, command) => {
    // const continent_dropdown = $('#continents')
    // const selcommands_dropdown = $('#continents')

    // await (await chaiPage.continent_dropdown).selectByVisibleText(continent)
    // await (await chaiPage.selcommands_dropdown).selectByVisibleText(command)
    
    await chaiPage.selectContinent(continent)
    await chaiPage.selectSelCommand(command)
});

When(/^I click on submit button$/, async () => {
    // const submit_btn = await $('#submit')
    // await chaiPage.submit_btn.click()

    await chaiPage.clickSubmitButton()
});

