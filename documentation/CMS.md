Testing
To set upp your own test envoirnment for the cms you need to host your own version of the website on netlify (https://www.netlify.com). After doing this you also need to change the identity settings so that you can log in to the cms page on the website. The cms page can be found under /admin on the webpage.

Path on website
To make the path on the website work with the cms generated pages you need to add a / att the end of the erlier path. In other words if you want to go from "home" to "home/blog" and blog is part of the cms. Then you need to make the path "home/".

General info
When you create a page on the CMS a md fiel will be created in the folder specified in the config.yml file with all the data. You can then use the asyncdata method to get the data from the md file to a webpage page.