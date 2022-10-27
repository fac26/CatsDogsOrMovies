## Niete, Karol & Gal web mashup project

[Cats, places or movies?](https://fac26.github.io/CatsDogsOrMovies/)

#### Our task  

To build an app that queries at least two APIs and uses the results to update the DOM. There should be a way for the user to search, filter, sort or otherwise affect what is displayed.

#### Cats, Movies or Places?

For this project we decided to build a website that invites the user to effect the data they receive ✨

#### Information for code review.

 1. Our latest changes have been merged into our main branch.
 2. Our main branch has been deployed using github pages https://fac26.github.io/CatsDogsOrMovies/
 3. Please feel free to clone our repo down to your local machine and open it in your prefered code editor.
 4. To view the website I personally use the vscode extension Live Server by Ritwick Dey which can be installed using the extensions panel in vscode.

#### Acceptance Criteria

* [x] Query at least two APIs using fetch
* [x] Dynamic content generated with JS
* [x] A clearly defined user journey, documented in your readme
* [ ] A responsive, mobile-first design 👷
* [x] Ensure your app is accessible to as many different users as possible

#### API's
[The Movie DB](https://www.themoviedb.org/)<br>
[The Cat API](https://thecatapi.com/)<br>
[The Postcode API](https://api.postcodes.io/)<br>

#### User Journey's
* [x] Plan Project
* [x] Get Cat API Data - User should be able to look for GIFs and pictures for different breeds of cats.
* [x] Get Movie API Data - Users should be able look at the most popular films at the moment and make an informed decision about what to watch.
* [X] Get Postcode API Data - Users should be able to generate a random postcode and what can be found at that postcode to help plan a trip there.  
* [x] Plan Structure
* [x] Complete Project

Our user is someone with some leisure time to fill and is looking for entertainment and inspiration, think young profesional in the evening. Our idea was to create a website that can be entertaining, informative and humourous the idea being that the user returns to the site more than once for more than one reason. 

#### From Dogs to Postcodes. 

Initially Gal was going to use the Dog API https://dog.ceo/dog-api but after looking at the documentation they decided that the data would be to limited and although Dog API provided many different endpoints Gal felt data that was more ambigous would allow for a more entertaiing narative. 

The decision to use the Postcode & Geo-location API for the UK https://postcodes.io/ was made as they offer many endpoints and the data is more complex, enabling a user experience that is hopefully engaging, humorous and informative.

Adding in the https://data.police.uk/docs/method/neighbourhood-locate/ API to return information about the local police force of the area the user is searching provides the user with more in depth information about their chosen destination.
