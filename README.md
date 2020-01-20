# Web Package Template

- [Setup](#setup)
- [How to Publish](#how-to-publish)

## Setup

### Step 1: Create a new repo using this template

**Option 1: via new repo page**
<img width="731" alt="Screen Shot 2020-01-07 at 18 58 28" src="https://user-images.githubusercontent.com/4465644/71894053-cbeaed00-317f-11ea-80ad-8f783d767a4d.png">

**Option 2: via this repo**
<img width="991" alt="Screen Shot 2020-01-09 at 13 59 08" src="https://user-images.githubusercontent.com/4465644/72045306-5cdcd800-32e8-11ea-8f42-dad44be0e451.png">

### Step 2: Clone your new repo

```bash
$ git clone git@github.com:traveloka/<repo_name>.git
& cd <repo_name>
```

### Step 3: Setup your new repo

```bash
$ yarn setup
```

That's it! Have fun 😉

## How to Publish

### Step 1: Register NPM publish token

_Note: you only need to do this once._

In order for us to automate the publishing process, you will need to register the NPM publish token to the repo. Since access to this token is limited to certain group of people only, please ask **@web-infra** team on Slack to register it for you using the following template:

```
Hi @web-infra, please help register NPM publish token to our repo (https://github.com/traveloka/<your-repo-name>) for automatic publishing.

Repo purpose: (provide some details about the repo).
```

How to register NPM publish token (for **@web-infra**):
<img width="899" alt="Screen Shot 2020-01-13 at 17 04 17" src="https://user-images.githubusercontent.com/4465644/72248207-3214bb80-3629-11ea-8614-16e206201361.png">
Key: `NPM_AUTH_TOKEN`

### Step 2: Cut a tag

```bash
$ yarn prepare-release
$ git push --follow-tags
```

Under the hood, the `yarn prepare-release` command uses [standard-version](https://github.com/conventional-changelog/standard-version) utility to do the following tasks (simplified):

- NPM package version bump
- Changelog generation (if your commit message follows the [Conventional Commits](https://www.conventionalcommits.org/en/v1.0.0/) standard)
- Git tagging

Finally, the second command will push your newly created `tag` to your remote & trigger the automated publishing process. To see the progress, just click on the "Actions" tab on your Github repo page.

<img width="961" alt="Screen Shot 2020-01-13 at 17 37 28" src="https://user-images.githubusercontent.com/4465644/72249193-6d17ee80-362b-11ea-9c28-8d371e9a8ef0.png">
