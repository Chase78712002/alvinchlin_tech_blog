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
- [x] Change post display date to updated_at date.
- [x] Set index posts in descending order.
- [x] Drawer auto-open on edge hover.
  - [x] Auto open sidebar on edge hover, and auto-close it on mouse leave.
  - [x] Add hint on the left edge to direct user to move mouse over.
  - [x] add mobile swipe gesture to open/close the sidebar.
  - [x] disable hover hotzone on touch.
- [x] Fix code block markdown overflowing horizontally in mobile view.
  - [x] Fix white gap when scroll to the bottom of the page in mobile view
- [x] Center Post index content
- [x] Polish paragraph width, markdown css, and line heights.
- [x] Change sidebar open/close swiping behavior to improve UX.
- [x] Improve post's "back to posts" and "edit post" buttons
- [x] Improve "new post" button position in Post Index.
- [] Add ability to draft and save the draft without publishing it right away.
  - [] Handle 'Save draft' and 'Published' button clicks in create and update actions
  - [] Add strong params for 'published_at'
  - [] Add 'drafts' action for admin to view the drafts.
