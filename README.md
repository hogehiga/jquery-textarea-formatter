#jQuery textarea formatter
[![Build Status](https://travis-ci.org/hogehiga/jquery-textarea-formatter.png?branch=master)](https://travis-ci.org/hogehiga/jquery-textarea-formatter)
## What is it?
This is a plugin for jQuery, it makes textarea formatted.

##example
`cat index.html`

    <html>
      <head>
        <script src="jquery/jquery-1.8.0.min.js"></script>
        <script src="jquery.caret/dist/jquery.caret-1.5.2.min.js"></script>
        <script src="lib/jquery.textareaformatter.js"></script>
        <script>
          $(function() {
            $('#format').textareaformatter();
          });
        </script>
      </head>
      <body>
        <textarea id="format">aaaaa</textarea>
      </body>
    </html>

If you open `index.html` in your browser, you will see formatted textarea like below;

    aaa
    aa

You can see more examples in `test` directory.
