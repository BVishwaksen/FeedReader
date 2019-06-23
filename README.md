# Feed Reader

## Table of Contents

-   [Project Overview](#ProjectOverview)
-   [Link to scratch file](#link-to-scratch-file)
-   [How to run the app on your system](#How-to-run-app-on-your-system)
-   [Why this Project?](#Why-this-Project?)
-   [What will I learn?](#What-will-I-learn?)
-   [How will this help my career?](#How-will-this-help-my-career?)
-   [Steps followed to complete the project](#Steps-to-complete-project)
-   [Contributing](#Contributing)

# Project Overview

In this project you are given a web-based application that reads RSS feeds. The original developer of this application clearly saw the value in testing, they've already included [Jasmine](http://jasmine.github.io/) and even started writing their first test suite! Unfortunately, they decided to move on to start their own company and we're now left with an application with an incomplete test suite. That's where you come in.

## Link to scratch file

github link : https://github.com/udacity/frontend-nanodegree-feedreader.git

# How to run the app on your system

1.  Download (or) Clone this repository.
2.  Click on index.html to run the app.
3.  Test whether all the functionalities are working or not.

## Why this Project?

Testing is an important part of the development process and many organizations practice a standard of development known as "test-driven development." This is when developers write tests first, before they ever start developing their application. All the tests initially fail and then they start writing application code to make these tests pass.

Whether you work in an organization that uses test-driven development or in an organization that uses tests to make sure future feature development doesn't break existing features, it's an important skill to have!

## What will I learn?

You will learn how to use Jasmine to write a number of tests against a pre-existing application. These will test the underlying business logic of the application as well as the event handling and DOM manipulation.

## How will this help my career?

Writing effective tests requires analyzing multiple aspects of an application including the HTML, CSS and JavaScript - an extremely important skill when changing teams or joining a new company.

Good tests give you the ability to quickly analyze whether new code breaks an existing feature within your codebase, without having to manually test all of the functionality.


# Steps followed to complete the project

Initially I have extracted the scratch project

The requirement of this project is to write test suits and testcases specified.
So I have written the following testcases.

1.  First testcase is to check if all the URLs are defined and non empty.
2.  Second testcase is to check if all the names are defined and non empty.
3.  Third testcase is to check if the menu element is hidden by default under "The Menu" test suite.
4.  Fourth testcase is to ensure that the menu changes visibility if the menu icon is clicked
5.  Fifth testcase is to ensure that if the loadFeed function is called and completes its work, there is  
    minimum one .entry element in the .feed container.
6.  Sixth testcase is to ensure that if a new feed is loaded by the loadFeed function then the content
    actually changes   

# Contributing

This repository is the starter code for _all_ Udacity students. Therefore, we most likely will not accept pull requests.
