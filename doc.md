#### 27 Oct 2022
Added read me file.
Trying to run this code after 2 months. 
The website https://beta.unipilot.io/ is closed new link is https://unipilot-dev.surge.sh/, had to comment ```auth``` from C:\Users\XORD\Cypress\Unipilot V2 Automation\tests\integration\specs\1.wallet.spec.js.
Trying to run ```npm run test```, ```npx cypress open```, ```yarn cypress run``` nothing is working.
Just deleted node modules :') now running ```yarn``` 
```yarn run cypress open``` works but I have to make same changes in C:\Users\XORD\Cypress\Unipilot V2 Automation\cypress\e2e\1.wallet.cy.js comment ```auth``` 
I don't like this error ```npm ERR! Unexpected token '.'```
So far I've found https://stackoverflow.com/questions/70852727/unknown-error-on-npm-install-npm-err-unexpected-token-on-using-nvm-window and https://github.com/npm/cli/issues/4234that many other people are facing this issue 
Upgrading to nvm-window 1.1.9 from 1.1.7
Downgrding npm from 16.17.0 to 16.14.0
## IT WORKEDDDDDDD 
```npm run test```
### BUT 
it failed to load Metamask, lets see what the problem is... 
![Alt](C:\Users\XORD\Cypress\Unipilot V2 Automation\doc image\Capture.PNG) fixed this by running ```npx browserslist@latest --update-db```
ran ```npm run test``` and 
## it worked 
only 1 test failed 
> 'Should change network to rinkeby' 
bcoz rinkeby has ended :"/ and website does not support it anyore
Commit for today bcoz 2 baje rahy hain.