HOW TO PUBLISH ON INFINITYFREE
==============================
InfinityFree cannot run Java/JSP, so this folder is the same website
rewritten in PHP (looks and works the same). Upload ONLY the contents
of the "htdocs" folder.

1. Sign up at infinityfree.com and create a hosting account
   (choose a free subdomain, e.g. yourname.infinityfreeapp.com).
2. Open the Client Area -> your account -> "Control Panel",
   then open "Online File Manager" (or use an FTP program such as FileZilla;
   the FTP details are in the account page).
3. Open the folder named  htdocs  on the server.
   Delete the default index2.html / index.html file if it is there.
4. Upload everything that is INSIDE the local htdocs folder:
      index.php
      letter.php
      css/       (style.css)
      includes/  (config.php, util.php, header.php, footer.php)
   so that the server has  htdocs/index.php  directly.
5. Open your address in the browser. It can take a few minutes
   for a new subdomain to start working.

TO EDIT THE TEXT LATER
Change  includes/config.php  (set dueDate / dueDateMs, newDate / newDateMs),
save, and upload that one file again.
