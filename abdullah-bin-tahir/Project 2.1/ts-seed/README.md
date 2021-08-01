ts-seed
=======

Bootcamp 2021 - Project 2.1: TypeScript Boilerplate Code Generator

[![oclif](https://img.shields.io/badge/cli-oclif-brightgreen.svg)](https://oclif.io)
[![Version](https://img.shields.io/npm/v/ts-seed.svg)](https://npmjs.org/package/ts-seed)
[![Downloads/week](https://img.shields.io/npm/dw/ts-seed.svg)](https://npmjs.org/package/ts-seed)
[![License](https://img.shields.io/npm/l/ts-seed.svg)](https://github.com/shy-tan/ts-seed/blob/master/package.json)

<!-- toc -->
* [Usage](#usage)
* [Commands](#commands)
<!-- tocstop -->
# Usage
<!-- usage -->
```sh-session
$ npm install -g ts-seed
$ ts-seed COMMAND
running command...
$ ts-seed (-v|--version|version)
ts-seed/1.0.4 win32-x64 node-v16.4.2
$ ts-seed --help [COMMAND]
USAGE
  $ ts-seed COMMAND
...
```
<!-- usagestop -->
# Commands
<!-- commands -->
* [`ts-seed hello [FILE]`](#ts-seed-hello-file)
* [`ts-seed help [COMMAND]`](#ts-seed-help-command)
* [`ts-seed name [DIRECTORY]`](#ts-seed-name-directory)

## `ts-seed hello [FILE]`

describe the command here

```
USAGE
  $ ts-seed hello [FILE]

OPTIONS
  -f, --force
  -h, --help       show CLI help
  -n, --name=name  name to print

EXAMPLE
  $ ts-seed hello
  hello world from ./src/hello.ts!
```

_See code: [src/commands/hello.ts](https://github.com/shy-tan/ts-seed/blob/v1.0.4/src/commands/hello.ts)_

## `ts-seed help [COMMAND]`

display help for ts-seed

```
USAGE
  $ ts-seed help [COMMAND]

ARGUMENTS
  COMMAND  command to show help for

OPTIONS
  --all  see all commands in CLI
```

_See code: [@oclif/plugin-help](https://github.com/oclif/plugin-help/blob/v3.2.2/src/commands/help.ts)_

## `ts-seed name [DIRECTORY]`

Name of your project directory to be created

```
USAGE
  $ ts-seed name [DIRECTORY]
```

_See code: [src/commands/name.ts](https://github.com/shy-tan/ts-seed/blob/v1.0.4/src/commands/name.ts)_
<!-- commandsstop -->
