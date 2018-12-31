# replace
`chttps` is a command line utility for replacing http links on package-lock JSON files. It is inspired by and initially based on https://www.npmjs.com/package/replace. It has fewer config options and dependencies; while it is intented to only change the first occurance of http links with https on each line i.e. without regular expression. Caution: the input package-lock.json file must have line-breaks for each item and should be stored in utf-8 format.

# Install
	npm install chttps --global

You can now use `chttps` from the command line.

## Examples

Replace all (i.e. first on every line) occurrences of "http://" with "https://" in the package-lock.json in the current directory:

```
chttps .
```

Replace all (i.e. first on every line) occurrences of "http://" with "https://" in the package-lock.json in another directory:

```
chttps "packageFolder"
```
