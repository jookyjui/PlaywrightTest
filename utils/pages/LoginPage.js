import selector from '../../pageSelectors.json' with {type: 'json' };
import host from '../../config/hostUrl.json' with {type: 'json'};
import endpoint from '../../config/endpoints.json' with {type: 'json'};
export class LoginPage {
	constructor(page) {
		this.page = page;
		this.usernameInput = selector.login.usernameInp;
		this.passwordInput = selector.login.passwordInp;
		this.submitButton = selector.login.submitBtn;
	}

	async navigate(){
		await this.page.goto(host.protocol+"://"+host.baseURL+endpoint.login.home);
	}

	async testLogin(username,password){
		await this.page.fill(this.usernameInput,username);
		await this.page.fill(this.passwordInput,password);
		await this.page.click(this.submitButton);
	}
}

