# ip6-web-ui-toolkit-business-components

Bachelor Thesis by Alexander Eser & Florian Thiévent.

## Developer Documentation


### Run Application on localhost
To run the application on the localhost there are two possibilities:
* Open the Project in your IDE and start the index.html from the root folder
* Open your command line, change to the root directory of the Project and run ```npx http-server -c-1``` (needs npm installed). Then follow the instructions printed by the http-server on commandline. Usually open http://1270.0.1:8080 in your Browser.

:exclamation: It is not possible to directly open the index.html File in a Browser, because of CORS Restrictions applied to the JavaScript Modules.


### Deployed Application on Netlify
The Masterbranch of the Project will be builded and deployed to Netlify on every push or merge.

> The Netlify Application is suspended. You can Setup it easy by yourself.
> Create an account on netlify.com and follow the steps to deploy an application. 
> When deployed, the links are working for /demo/switch-demo.html, /demo/monolog-demo.html, /demo/workinghours/workinghours, /demo/usability-test/usability-test.html, /test/alltests

~~[![Netlify Status](https://api.netlify.com/api/v1/badges/6ef025d1-1f8f-4299-992c-c0b72d136236/deploy-status)](https://app.netlify.com/sites/ip6-web-ui-toolkit-business-components/deploys)~~

~~https://ip6-web-ui-toolkit-business-components.netlify.app/~~

### Components on Netlify
#### Switch
~~https://ip6-web-ui-toolkit-business-components.netlify.app/demo/switch/switch-demo.html~~
#### Monolog
~~https://ip6-web-ui-toolkit-business-components.netlify.app/demo/monolog/monolog-demo.html~~
#### Workday UseCase
~~https://ip6-web-ui-toolkit-business-components.netlify.app/demo/workinghours/workinghours~~
### Usability Tests
~~https://ip6-web-ui-toolkit-business-components.netlify.app/demo/usability-test/usability-test.html~~


## Tests
To run the Test, open the allTest.html file
```bash
./test/allTest.html
```

~~or you can check the Tests on Netlify https://ip6-web-ui-toolkit-business-components.netlify.app/test/alltests~~



