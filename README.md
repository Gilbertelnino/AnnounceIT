# test result and badge

[![Build Status](https://travis-ci.org/Gilbertelnino/AnnounceIT.svg?branch=develop)](https://travis-ci.org/Gilbertelnino/AnnounceIT)
[![Coverage Status](https://coveralls.io/repos/github/Gilbertelnino/AnnounceIT/badge.svg?branch=develop)](https://coveralls.io/github/Gilbertelnino/AnnounceIT?branch=develop)
[![Maintainability](https://api.codeclimate.com/v1/badges/a528e2bedb812f7a73d5/maintainability)](https://codeclimate.com/github/Gilbertelnino/AnnounceIT/maintainability)

## AnnounceIT

Since the rise of the internet, more people have switched their attention from spending hours watching TV and listening to the radio or even reading newspapers to scrolling and tapping on their phones and laptops. Businesses can now reach more eyeballs online than the more traditional approaches. AnnounceIT comes in as a solution to broadcasting agencies which will will allow them to be able to receive and manage announcements.

## How our endpoint work

First and foremost clone repository in your local machine:
**git clone <https://github.com/Gilbertelnino/AnnounceIT.git>**

## Installation

Navigate in the cloned folder:

### in the terminal

- type `cd AnnounceIT`
- type `npm i` Or `npm install` to install package
- type `npm run test` to run application tests
- type `npm start` to start our server

## Open postman and start to test our end Point

### create an account or signin

- signup `POST /api/v1/auth/signup`
- signin `POST /api/v1/auth/signin`

### create ,update, view and delete announcement

- create new announcement `POST /api/v1/announcement`
- update announcement `PATCH /api/v1/announcement/id`
- update announcement and add new information `PATCH /api/v1/announcement/id/sold`
- delete announcement `DELETE /api/v1/announcement/id`
- view all announcement `GET /api/v1/announcement`
- view all announcement with specific status `GET /api/v1/announcement?status='some status value'`
- view single announcement `GET api/v1/announcement/id`
