Tropirc
=======

A small node.js application that works as a telephony Mailbox and displays a new messages on IRC when a new voicemail is received. It uses Tropo as the telephony provider.

The required modules (Jerk and Formidable) are included. An example Tropo application is also included in the file tropo.rb.

Installation
------------
Edit the variables in tropirc.js to suitable values.

Configure the tropo.rb file to point to your node.js webserver.
Create a new application on Tropo and upload tropo.rb as the scriptfile.

Run it
------

node tropirc.js

License
-------

This application and source code is (c) David Verhasselt 2011 and licensed under the MIT license.
