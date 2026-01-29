# README

<!--toc:start-->

- [README](#readme)
  - [To Run this](#to-run-this)
  - [Current Status](#current-status)
  <!--toc:end-->

This README would normally document whatever steps are necessary to get the
application up and running.

## To Run this

1. Clone to your local directory:

```bash
git clone https://github.com/Chase78712002/alvinchlin_tech_blog.git
```

2. Go into the project directory and run `bin/dev`
3. Go to your local host port, usually port 3000
   - [Local Host](http://127.0.0.1:3000)

## Deployment Notes

On Apple Silicon, uncheck "Use Rosetta for x86_64/amd64 emulation for Apple Silicon" option in Docker Desktop to avoid incorrect asset builds for amd64 images.

## Current Status

- [x] Simple home page done.
- [x] Posts scaffold working.
- [x] Posts validations and flash messages working.
- [x] Render post body as Markdown working.
- [x] Side navigation bar working.
- [x] Home page renders the latest posts.
- [x] Add active nav-link highlight in sidebar.
- [x] Improve Posts index scanability.
- [x] Deploy.
  - [x] Run `bundle exec kamal setup`
- [x] Debug asset builds issue with production CSS
- [x] Add basic authentication for admin user
- [x] Add Domain name + HTTPS
- [x] Ensure posts survive redeploys/restarts by persisting DB. - DB already persists by default with the new changes from Rails 8.
- [x] Improve post content UX minorly.
- [x] Increase textarea rows in edit mode.
- [x] Add Profile picture as logo and favicon icon.
- [x] Add authentication check to hide the destroy buttons if admin not logged in.
- [x] Add authentication check to replace the "New" post button with "Log in" if admin is not logged in.
- [] Add authentication check to hide the edit buttons if admin not logged in.
- [] Drawer auto-open on edge hover.
