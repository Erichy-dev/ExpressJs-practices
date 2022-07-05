# Express Production

## What is a Production environment

The environment includes:

- Computer hardware on which the website runs
- Operating system.
- Programming language runtime & framework libraries on top of which your website is written
- Web server infrastructure, possibly including a web server, rever proxy, load balancer
- Databases on which your website is dependent.

Infrastructure as a Service (Iaas)
Platform as a Serice (PaaS)

## Getting your website ready to publish

- set NODE_ENV to 'production'
- Log appropriately. Use a module like ***debug.***
- Use gzip/deflaet compression for responses. ***`npm i compression`***
- Use ***Helmet*** to protect against well known vulnerabilities.

## Production best practices performance and reliability

### Things to do in your code

- Use gzip compression
- Don't use synchronous functions.
- Do logging correctly. Use ***debug*** and ***Winston or Bunyan***
- Handle exceptions properly. Use ***try-catch*** & ***promises***
- What not to do. Listen for uncaughtException

### Things to do in your environment/setup

- Set NODE_ENV to "production"
- Ensure your app automatically restarts. Ensure your app handles exceptions properly. ***StrongLoop Process Manager, PM2, Forever.*** Use an init system e.g. ***systemd & Upstart***
- Run your app in a cluster. Use Node's ***cluster module, StrongLoop PM, PM2.***
- Cache request results. Use a caching server e.g. ***Varnish or Nginx***
- Use a load balancer. Use ***Nginx or HAProxy.***
- Use a reverse proxy. Use ***Nginx or HAProxy.***
