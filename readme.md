# ip6-web-ui-toolkit-business-components

Bachelor Thesis by Alexander Eser & Florian Thiévent.


## Kolibri

Kolibri is added as a gti submodule. To update Kolibri use 
```bash
git submodule update --remote --merge
```

To just fetch new commits use 
```bash
cd Kolibri
git fetch
```

## Tests
Do not forget to add the Test to Kolibri allTestsSuite.js with 
```javascript
import '../../../switch/test/switch-test.js';
```