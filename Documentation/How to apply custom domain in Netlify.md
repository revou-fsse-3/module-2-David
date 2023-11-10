# How to apply custom domain in Netlify?

### Set up in Web Hosting

- First of all you need to buy your own custom domain. For example i bought my own domain on niagahoster.co.id .
  ![niagahosterimage1](Images/Niaga%20Hoster%201.png)

- Check your desired domain and choose what you want.
  ![niagahosterimage2](Images/Niaga%20Hoster%202.png)

- I already have my own domain, but for example i choose this domain for my website.
  ![niagahosterimage3](Images/Niaga%20Hoster%203.png)

- Finish payment and create your account.
  ![niagahosterimage4](Images/Niaga%20Hoster%204.png)

- After finishing payment you will redirected to this dashboard.
  ![niagahosterimage5](Images/Niaga%20hoster%205.png)
  and when you scroll down there is a dns record like this.
  ![niagahosterimage6](Images/Niaga%20hoster%206.png)
  We just need the first one, and you need to delete the other records.

- Now you need to add another DNS record, Choose `CNAME` type, input `@` for name field, for target field input **your netlify website**. in TTL field input `300` or anything. Then press `Add Record`
  ![niagahosterimage 8](Images/Niaga%20hoster%208.png)

- And we need to edit the `www` DNS record, just fill the target field **your netlify website**. Then press `Update` button
  ![niagahosterimage9](Images/Niaga%20hoster%209.png)

- After this your dashboard shouldve look like this.
  ![niagahosterimage7](Images/Niaga%20hoster%207.png)

### Set up in Netlify

- Open your netlify account, select the site you want to use the custom domain. Open the domain management, then click on `Add Domain` Button
  ![Netlifyimage1](Images/Netlify%201.png)

- type in your domain you just bought, and press `Verify` Button.
  ![Netlifyimage2](Images/Netlify%202.png)
  Netlify will verify this domain is registered, but just ignore it (because you're the who bought the domain) and press `Add Domain`

- If you followed the instructions above correctly, you will see this in your Netlify Dashboard on Domain Management
  ![Netlifyimage3](Images/Netlify%203.png)
  If it works well it will be appeared `✅Netlify DNS`

- After that you need to scroll down and see this section
  ![Netlifyimage4](Images/Netlify%204.png)
  In this image, I already have the SSL/TLS Certificate. In your screen supposed to be appeared `Verify Certificate` Button to create the SSL/TLS Certificate.

- And thats it, your custom domain supposed to be worked by now. If your website still cant be accessed, you can repeat the step above and recheck the missed step. If you already did that you just need to wait another minutes until the domain working.
