# React Example
This project is meant to serve an example React Project with proper scaffolding and CI/CD.

## Setup
* Clone the repository
* Run `npm install`
* Copy `.env.dist` to `.env`
* Run `npm start`

## Deployment
* Opening a *PR* will automatically create a *Preview* deployment which will have a URL in the PR.
* Closing a *PR* will automatically delete the *Preview* deployment.
* Merging into *master* will automatically deploy to the *Production* url.

## Notes
* Redux is used for data management.
* React Router Dom is used for routing.
* Bootstrap framework is used for appearence.
