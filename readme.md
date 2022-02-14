# ip6-web-ui-toolkit-business-components

Bachelor Thesis by Alexander Eser & Florian Thiévent.


## Kolibri

Kolibri is added as a gti submodule. To update Kolibri use 
```bash
git submodule update --init --recursive
git submodule update --recursive
```

To pull changes from Kolibri
```bash
git submodule update --remote --merge
```
If none of them works (why ever) do a direct clone of Kolibri to the src directory
```bash
cd src
git clone https://github.com/WebEngineering-FHNW/Kolibri.git
```

## Test
To run the Test, open the allTest.html file
```bash
./test/allTest.html
```
