---
title: "Contact"
date: 2024-01-01
draft: false
description: "Get in touch with us."
---

<form name="contact" method="POST" data-netlify="true" netlify-honeypot="bot-field">
  
  <!-- The hidden input is required for Netlify forms -->
  <input type="hidden" name="form-name" value="contact" />
  
  <!-- A hidden field for bot detection (honeypot) -->
  <p style="display:none;">
    <label>Don’t fill this out if you’re human: <input name="bot-field" /></label>
  </p>

  <label for="name">Name</label>
  <input type="text" name="name" required />

  <label for="email">Email</label>
  <input type="email" name="email" required />

  <label for="message">Message</label>
  <textarea name="message" rows="5" required></textarea>

  <button type="submit">Send</button>
</form>