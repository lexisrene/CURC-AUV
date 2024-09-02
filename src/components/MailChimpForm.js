import React from 'react';

const MailchimpForm = () => {
  const mailchimpHtml = `
    <div id="mc_embed_shell">
      <link href="//cdn-images.mailchimp.com/embedcode/classic-061523.css" rel="stylesheet" type="text/css">
      <style type="text/css">
        #mc_embed_signup {
          background: #fff;
          false;
          clear: left;
          font: 14px Helvetica, Arial, sans-serif;
          width: px;
        }
      </style>
      <div id="mc_embed_signup">
        <form action="https://columbiaroboticsclub.us20.list-manage.com/subscribe/post?u=1ed0de62e880121923b32c126&amp;id=fa7fa67bb9&amp;f_id=000acdedf0" method="post" id="mc-embedded-subscribe-form" name="mc-embedded-subscribe-form" class="validate" target="_blank">
          <div id="mc_embed_signup_scroll">
            <h2>Robotics Club Mailing List</h2>
            <div class="indicates-required"><span class="asterisk">*</span> indicates required</div>
            <div class="mc-field-group">
              <label for="mce-EMAIL">Email Address <span class="asterisk">*</span></label>
              <input type="email" name="EMAIL" class="required email" id="mce-EMAIL" required="" value="">
              <span id="mce-EMAIL-HELPERTEXT" class="helper_text">Columbia/Barnard Email</span>
            </div>
            <div class="mc-field-group">
              <label for="mce-FNAME">First Name </label>
              <input type="text" name="FNAME" class=" text" id="mce-FNAME" value="">
            </div>
            <div class="mc-field-group">
              <label for="mce-LNAME">Last Name </label>
              <input type="text" name="LNAME" class=" text" id="mce-LNAME" value="">
            </div>
            <div class="mc-field-group">
              <label for="mce-MMERGE3">Expected Year of Graduation </label>
              <input type="text" name="MMERGE3" class=" text" id="mce-MMERGE3" value="">
            </div>
            <div id="mce-responses" class="clear">
              <div class="response" id="mce-error-response" style="display: none;"></div>
              <div class="response" id="mce-success-response" style="display: none;"></div>
            </div>
            <div aria-hidden="true" style="position: absolute; left: -5000px;">
              <input type="text" name="b_1ed0de62e880121923b32c126_fa7fa67bb9" tabindex="-1" value="">
            </div>
            <div class="clear">
              <input type="submit" name="subscribe" id="mc-embedded-subscribe" class="button" value="Subscribe">
            </div>
          </div>
        </form>
      </div>
      <script type="text/javascript" src="//s3.amazonaws.com/downloads.mailchimp.com/js/mc-validate.js"></script>
      <script type="text/javascript">
        (function($) {
          window.fnames = new Array(); 
          window.ftypes = new Array();
          fnames[0]='EMAIL'; ftypes[0]='email'; 
          fnames[1]='FNAME'; ftypes[1]='text'; 
          fnames[2]='LNAME'; ftypes[2]='text'; 
          fnames[3]='MMERGE3'; ftypes[3]='text';
        }(jQuery));
        var $mcj = jQuery.noConflict(true);
      </script>
    </div>
  `;

  return (
    <div
      dangerouslySetInnerHTML={{ __html: mailchimpHtml }}
    />
  );
};

export default MailchimpForm;
