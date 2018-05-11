# RustConf Site
> The website for RustConf

## Prerequisites

This site is made with [Ruby] and the  static site framework, [Middleman].
You'll need [Ruby] and [Bundler] nstalled to build and run the site locally.

[Ruby]: https://www.ruby-lang.org/
[Bundler]: http://bundler.io/
[Middleman]: https://middlemanapp.com/

## Up and Running

To get the site running for local development:

1. Fork and clone this repository
2. `cd rustconf`
3. `bundle install`
4. `middleman`
5. Visit [`http://192.168.0.7:4567/`] in your browser

[`http://192.168.0.7:4567/`]: http://192.168.0.7:4567/

## Deploy

This site is hosted via GitHub pages, and is built with middleman.

For deployment, we used this off the shelf tool: https://github.com/edgecase/middleman-gh-pages

We also added a custom rake task, `rake deploy`, which builds and publishes together. You probably want `bundle exec rake deploy`.


## Troubleshooting

If your deploy fails with this message:
```error: src refspec gh-pages does not match any.
error: failed to push some refs to 'git@github.com:tildeio/rustconf.git'
```   

rerun your deploy with a custom build directory with this command:   
```bundle exec rake publish BUILD_DIR=/tmp/anything```
