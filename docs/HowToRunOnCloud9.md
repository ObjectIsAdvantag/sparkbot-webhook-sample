# How to Guide: run your Cisco Spark bot on Cloud 9

[Cloud9](https://c9.io/) is a Cloud IDE where you can edit nodejs source code, but also run and debug your bots.

## Quick start:

### [Sign up](https://c9.io/signup) at Cloud9 

### Create a public Workspace

Clone https://github.com/ObjectIsAdvantag/sparkbot-webhook-samples 
and pick a nodejs template

![](../docs/img/cloud9-create-workspace.png)

### Install node modules

In the Cloud9 bash terminal, run "npm install" in your root folder

![](../docs/img/cloud9-npm-install.png)

### Choose a test or example

Pick a JS file and click run


### Customize your bot

In the Run execution page, set the ENV variables
- DEBUG => sparkbot*,samples*
- SPARK_TOKEN => paste your Spark token from https://developer.ciscospark.com/

![](../docs/img/cloud9-env-variables.png)


### Run or debug your bot

As you bot starts, it shows your bot public URL

ex: your code is running at https://sparkbot--samples-objectisadvantag.c9users.io


### Register your bot on Spark 

[Create a Webhook](https://developer.ciscospark.com/endpoint-webhooks-post.html)

note that you can either register a single webhook for all events, or several webhooks for each resource/event your bot listens to.

![](../docs/img/cloud9-create-webhook.png)





