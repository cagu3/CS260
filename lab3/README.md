# Lab 3: Creating a Vue XKCD Browser

In this assignment, I used Vue to build an application that uses
an API to browse XKCD comics and leave comments.

## Tutorial

Use the [tutorial](https://github.com/BYU-CS260-Winter-2018/lab3/wiki)
in the Wiki to create the application. This will help you create most
of the functionality. Once you are done, your lab should look like this:

![xkcd](images/xkcd.png)

## Additional Functionality

I also added a few more pieces:

### More navigation buttons

Added buttons to navigate to the first comic and the last comic.

### Date and time for comments

Added the current date and time to every comment that is created, then
showed the current date and time after or below the author's name.

### Star rating

Added the ability for people to rate the cartoon. Display the average
rating accumulated so far.

Used this [star rating library for
Vue](https://github.com/craigh411/vue-star-rating). Used the CDN method
for loading the libary:

```
<script src="https://unpkg.com/vue-star-rating/dist/star-rating.min.js"></script>
```


along with the suggestion for creating a Vue component:

```
Vue.component('star-rating', VueStarRating.default);
```

Once this was done, just needed to create a star rating element in
`index.html` and needed to create the appropriate backing code in `script.js`.

Changed the options on the star rating library so that it increments in
steps of 0.5, does not show the current rating, and uses red stars.

It should look like this:

![rating](images/rating.png)
