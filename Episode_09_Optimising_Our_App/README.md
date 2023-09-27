# EPISODE 09 - OPTIMIZING OUR APP

* BUNDLER: The basic important job of bundler is to bundle our application. It takes all files make into one. In dist folder there is only one JS file which is loaded on the browser. Everything that is happening on your web application is happening through one js file and our bundler(parcel) made one file.

 - if we made one website with thousands of components abd there is only one js file and the size of this js file increases a lot. Your JS file size increases by how many components it holds. AND it takes a lot of time to load the page. It will slow the performance of our website.
 * HOW TO OPTIMIZE THIS?
 - Bundling is important because if we have thousands of components , we don't need thousands of files loading on our web page. 
 - And we do not want to put thousands of files into one JS file, because it will slow the performance of the website.
* SO WE WILL MAKE SMALL BUNDLES OF THESE FILES- this process is know as CHUNKING/CODE SPLITTING/LAZY LOADING/ DYNAMIC BUNDLING/ ON DEMAND LOADING/ DYNAMIC IMPORT
 

* we will import Grocery using lazy loading.
* when our app load initially it will not load - code for Grocery, when you click on Grocery it will load Grocery.
- const Grocery = lazy();
 - lazy() is a function which is given to us by React.
 - it is named export.
 - lazy() function will take call back function and and inside this function import function
 - lazy(() => import("./src/components/Grocery.js"))
 - Grocery has its own bundle
 - Suspense : placeholder=fallback