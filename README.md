# moments Client

`moments` is developer Trevor J Alt’s love letter to Instagram,  a social media platform and passion project designed for ongoing development and personal educational growth in image processing and how to implement a heavily conditionally rendered environment which handles large amounts of data storage and retrieval.  

And really, who doesn’t love scrolling through photos attached with inspirational quotes and song lyrics?

`moments Client` is the frontend for `moments`.  To see `moments` in action, check out [moments](https://moments-live.vercel.app/ "moments").

The `moments` backend can be found at: [moments-api](https://github.com/trevorjalt/moments-api/ "moments Api")

`moments` supports the creation of your own user account.  If you'd like to experience moments before signing up, use the demo details below.

### demo credentials

* username: kakarot
* password: Kakarot1!

## table of contents.

* [demo credentials](#democredentials)
* [a quick look at our lewk](#a-quick-look-at-our-lewk)
* [the tech](#the-tech)
  * [frontend](#frontend)
  * [testing](#testing)
  * [production](#production)
* [release information](#release-information)
* [setup](#setup)
  * [local setup](#local-setup)
* [quick start](#quick-start-scripts)
* [component overview](#component-overview)
  * [LandingRoute](#LandingRoute)
  * [LoginRoute](#LoginRoute)
  * [RegistrationRoute](#RegistrationRoute)
  * [AccountRoute](#AccountRoute)
  * [FeedRoute](#FeedRoute)
  * [ProfileRoute](#ProfileRoute)
  * [ConnectionRoute](#ConnectionRoute)
  * [TheUploader](#The-Uploader)
  * [TheNav](#The-Nav)

## a quick look at our lewk.

![moment app profile overview](/images/moments-profile.png)

## the tech.

### frontend.

* React
  * Create React App
  * React Router
* HTML5
* CSS3

### testing.

* Jest

### production.

* Deployed via Vercel

## release information.

* In moments (release 1.0), users can:
  * Create a new account and join the moments community
  * Submit login credentials for authentication
  * View account information
  * Upload a personal Profile Picture
  * Update a personal Profile Picture
  * Create posts with an image and caption
  * View profile posts in a condensed gallery
  * View profile posts in an expanded gallery
  * View personal number of followers
  * View personal number of posts
  * View personal number of users they are following
  * View profiles of users who are following them
  * View profiles of users who they are following
  * View all moments users’ posts minus their own in a feed displayed in most recent order
  * View a moments user's profile by clicking on an individual post's header in the feed
  
## setup.

### local setup.

Clone this repository to your local machine 

````
git clone https://github.com/trevorjalt/moments-client benchmark-client
````

Change directory into the cloned repository

````
cd moments-client
````

Make a fresh start of the git history for this project

```` 
rm -rf .git && git init
````

Install the node dependencies 

````
npm install
````

Follow the [setup](https://github.com/trevorjalt/moments-api#setup "setup") instructions to get `moments Api` up and running.

## quick start scripts.

Run the benchmark tests

````
npm t
````

Start the application

````
npm start
````

## component overview.

### LandingRoute

![moments landing route](/images/moments-landing.png)

### LoginRoute

![moments login route](/images/moments-login.png)

### RegistrationRoute

![moments registration route](/images/moments-register.png)

### AccountRoute

![moments account route](/images/moments-account.png)

### FeedRoute

![moments feed route](/images/moments-feed.jpg)

### ProfileRoute

![moments profile route](/images/moments-profile-gogeta.png)

![moments profile expanded route](/images/moments-gallery-expanded.png)

![moments no pictures](/images/moments-no-posts.png)

### ConnectionRoute

![moments connection route](/images/moments-connections.png)

### The Uploader

![moments uploader photo](/images/moments-upload.png)

![moments uploader caption](/images/moments-caption.png)

### The Nav

![moments nav](/images/moments-nav.png)

## "it's all about the moments" 
