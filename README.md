# Team Paradox 2102
[![Build Status](https://travis-ci.org/Paradox2102/paradox2102.github.io.svg?branch=master)](https://travis-ci.org/Paradox2102/paradox2102.github.io)

Jekyll Site for Team Paradox

Viewable [Here!](http://sdarobotics.org)

## Developer Instructions

It is recommended the you use [rbenv](https://github.com/rbenv/rbenv) to manage your rubies and related gems.  After installing `rbenv`, run the following in
Terminal to download and use version `2.1.5` in this project:

```
rbenv install 2.1.5
```

A `.ruby-version` file is included in the root directory to automatically set your environment to use 2.1.5 when you cd into the project directory.

To contribute to the project, run the following commands to download the project from github and install the necessary gems to get it running:

```
git clone git@github.com:Paradox2102/paradox2102.github.io.git
cd paradox2102.github.io/
bundle install
```

From here you should be able to run the jekyll web application locally via `http://localhost:4000` by running:

```
bundle exec jekyll serve
```

**Note**: Since we are using bundler to manage gem dependencies, you cannot run the web application by simply using `jekyll serve`.  Please refer
to to [this page](http://bundler.io/rationale.html) for information on the hows and whys of bundler.


---

##Todo List

-   Add Dynamic Reizing NavBar [Example](http://www.bootply.com/109943)
    - Add Image to Navbar
-   Finish Gallery implemitation
-   Finish Docs Implimentation
    - Docs Need to be fit in properly.
-   Update Photos on the Robot Page
