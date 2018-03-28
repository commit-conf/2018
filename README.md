The source code of Commit Conf. This project contains the source code of a website based on [hugo](https://github.com/gohugoio) and [node-sass](https://github.com/sass/node-sass). 

```bash
# Install hugo
snap install hugo
# do not use apt-get - it has an old version of hugo

# Install node depenedencies
npm i

# Run the server. This does not write the hugo output to disk. 
npm run watch

# Launch the tests (build, run server and search for broken links)
npm run test

# Build the documentation and save the generated HTML and CSS into /_build
npm run build
```

To deploy, we use the contents located on `/_build`

```bash
# Install and config Firebase CLI
npm install -g firebase-tools
firebase login

# Deploy on Firebase
bin/deploy
```