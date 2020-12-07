'use strict'

const fp = require('fastify-plugin')

module.exports = fp(async function(app, opts) {
    app.decorate('generateHtml', (page, viewData) => `
    <!DOCTYPE html>
    <html lang="en">
      <head>
        <meta charset="utf-8" />
        <meta name="viewport" content="width=device-width,initial-scale=1" />
        
        <!-- Custom data -->
        <title>${viewData.title}</title>
     
        <!-- Your React, Vue or Svelte SPA -->
        <!-- <link rel="stylesheet" href="/build/bundle.css" /> -->
        <link href="../../client/public/fontawesome-free/css/all.min.css" rel="stylesheet">
        <link href="../../client/public/ionicons/css/ionicons.min.css" rel="stylesheet">
        <link href="../../client/public/typicons.font/typicons.css" rel="stylesheet">
        <link rel="stylesheet" href="../../client/public/azia.css" /> 
        <!-- <link rel="stylesheet" href="../../client/public/azia.min.css" /> -->
        <script defer type="module" src="../../client/public/bundle.js"></script>
      </head>
     
      <!-- The Inertia page object -->
      <body id="app" class="az-body az-body-sidebar" data-page='${JSON.stringify(page)}'>
        <script src="../../client/public/jquery/jquery.min.js"></script>
        <script src="../../client/public/bootstrap/js/bootstrap.bundle.min.js"></script>
        <script src="../../client/public/azia.js"></script>
        <script>
          $(function() {

              $('.az-sidebar .with-sub').on('click', function(e) {
                  e.preventDefault();
                  $(this).parent().toggleClass('show');
                  $(this).parent().siblings().removeClass('show');
              })

              $(document).on('click touchstart', function(e) {
                  e.stopPropagation();

                  // closing of sidebar menu when clicking outside of it
                  if (!$(e.target).closest('.az-header-menu-icon').length) {
                      var sidebarTarg = $(e.target).closest('.az-sidebar').length;
                      if (!sidebarTarg) {
                          $('body').removeClass('az-sidebar-show');
                      }
                  }
              });


              $('#azSidebarToggle').on('click', function(e) {
                  e.preventDefault();

                  if (window.matchMedia('(min-width: 992px)').matches) {
                      $('body').toggleClass('az-sidebar-hide');
                  } else {
                      $('body').toggleClass('az-sidebar-show');
                  }
              })

          });
        </script>
      </body>
    </html>
    `)
})