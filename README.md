# chttps
`chttps` is a minimal command line utility for replacing resolved http links on package-lock JSON files with https.
Chttps (Change http to https) was inspired by and initially based on https://www.npmjs.com/package/replace code. It has fewer config options and no dependency; whereas it is intented to only change the very first occurance of http links with https on each line i.e. without regular expression.
Caution: the input package-lock.json file must have line-breaks for each item and should be stored in utf-8 format.

# Install globally as a command line utility

```
  npm install chttps --global
```
Then in the package folder you could use the command below to test the package-lock.json file & replace resolved http links with https.
```
	chttps .
```

# Install as a development dependency

```
  npm install chttps --save-dev
```
Then add the following line to the scripts tag within the package.json file of the desired module.
```
"scripts": {
	"postshrinkwrap": "chttps ."
}
```

## Examples

Replace all occurrences (i.e. the first ones on every line) of 'resolved": "http://' with 'resolved": "https://' in the package-lock.json in the current directory:
```
chttps .
```

Replace all occurrences (i.e. the first ones on every line) of 'resolved": "http://' with 'resolved": "https://' in the package-lock.json in another directory:
```
chttps "packageFolder"
```
