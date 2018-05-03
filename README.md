# netlify-functions-landingpage
A serverless-less landing page project on Netlify, including a Mailchimp mailing list signup via functions.

## Background
I read the interesting article on the [Serverless blog](https://serverless.com/blog/how-to-create-landing-page-with-serverless-components/) about how to create a landing page with Serverless Components, Netlify, AWS and Mailchimp. 

I wanted to test Netlify for a while now, but thought that the above example could still be stripped-down to a Netlify-only deployment. The Mailchimp API is still triggered via the included Lambda function for the signup.

## Setup

1. Fork the [project](https://github.com/tobilg/netlify-functions-landingpage) to your GitHub, GitLab or Bitbucket account
2. Sign up for Mailchimp (free account), for being able to create the mailing list funtionality
3. Sign up for Netlify (free account), using the OAuth integration to the repo provider you forked the project to.

### Mailchimp setup

#### Signup

Go to the [signup page](https://login.mailchimp.com/signup/) and fill in your info.

#### List creation

Go to Lists -> Create list and fill in your details:

**Step 1:**
<p align="center"><img alt="Mailchimp new list" src="docs/images/mailchimp_new_list.png" width="800"/></p>

**Step 2:**
<p align="center"><img alt="Mailchimp create list 1" src="docs/images/mailchimp_create_list_1.png" width="400"/></p>

**Step 3:**
<p align="center"><img alt="Mailchimp create list 2" src="docs/images/mailchimp_create_list_2.png" width="600"/></p>

Please note the `List ID`, because this is later needed as an environment variable for the Netlify builds as `MAILCHIMP_LIST_ID`.

#### API key creation

Go to Account (upper right dropdown) -> Extras -> API keys and create an API key as follows: 

**Step 1:**
<p align="center"><img alt="Mailchimp api key 1" src="docs/images/mailchimp_api_key_1.png" width="400"/></p>

**Step 2:**
<p align="center"><img alt="Mailchimp api key 2" src="docs/images/mailchimp_api_key_2.png" width="500"/></p>

Please note the (full) `API key`, because this is later needed as an environment variable for the Netlify builds as `MAILCHIMP_API_KEY`, as well as the region (after the dash), because this will be set as `MAILCHIMP_REGION`.

### Netlify setup

#### Signup

<p align="center"><img alt="Netlify signup" src="docs/images/netlify_signup.png" width="400"/></p>

#### Create new site

**Step 1:**
<p align="center"><img alt="Netlify new site" src="docs/images/netlify_new_site.png" width="500"/></p>

**Step 2:**
<p align="center"><img alt="Netlify authorize" src="docs/images/netlify_authorize.png" width="400"/></p>

**Step 3:**
<p align="center"><img alt="Netlify create site 1" src="docs/images/netlify_create_site_1.png" width="500"/></p>

**Step 4:**
<p align="center"><img alt="Netlify create site 2" src="docs/images/netlify_create_site_2.png" width="500"/></p>

**Step 5:**
<p align="center"><img alt="Netlify create site 3" src="docs/images/netlify_create_site_3.png" width="500"/></p>

After that, the site should trigger its first deployment automatically.

#### Set environment variables

**Step 1:**
<p align="center"><img alt="Netlify build variables 1" src="docs/images/netlify_build_variables_1.png" width="600"/></p>

**Step 2:**
<p align="center"><img alt="Netlify build variables 2" src="docs/images/netlify_build_variables_2.png" width="400"/></p>

#### Trigger deployment

After triggering a redeployment via

<p align="center"><img alt="Netlify trigger redeploy" src="docs/images/netlify_trigger_redeploy.png" width="600"/></p>

the site should be redeployed, and be using the provided environment variables for the Mailchimp integration.

#### Check function logs

You should then be able to check the function logs

<p align="center"><img alt="Netlify function logs" src="docs/images/netlify_function_logs.png" width="400"/></p>
