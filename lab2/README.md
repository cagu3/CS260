# Lab2: Calling APIs with JQuery

In this assignment I used JQuery to call APIs for the weather
and for Stack Overflow questions.

## Weather API

In `index.html`, I built a form that includes a text input and a submit button:

![weather form](images/weatherForm.png)

Then, in `scripts.js` I did the following:

Created a JavaScript event handler that triggers when the Submit
button is clicked. Inside this handler, I used the value of the input
field to send a request to the [OpenWeatherMap
API](https://openweathermap.org/api) to get the current weather for
that city. See
[the Wiki page on the Weather API](https://github.com/BYU-CS260-Winter-2018/lab2/wiki/Weather-API)
for helpful information.

Once this is done, I added some additional information from the returned
weather info.

## Stack Overflow

In `index.html`, I built a form that includes a text input and a submit
button, similar to the one for weather, but instead for querying Stack
Overflow.  Then, in `scripts.js` I did the following:

Created a JavaScript event handler that triggers when the Submit
button is clicked. Inside this handler, I used the value of the input
field to send a request to the <a
href="https://api.stackexchange.com/2.2/search?order=desc&sort=activity&site=stackoverflow&intitle=javascript">Stack
Overflow API</a> to get a list of matching questions. Click the link
above to see an example of searching for `JavaScript`.  You can view
the [API documentation](https://api.stackexchange.com/docs/search) for
guidance.
