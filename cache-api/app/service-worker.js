/*
Copyright 2016 Google Inc.

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

    http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.
*/

(function() {
  'use strict';

  var filesToCache = [
    '.',
    'style/main.css',
    'https://fonts.googleapis.com/css?family=Roboto:300,400,500,700',
    'images/still_life-1600_large_2x.jpg',
    'images/still_life-800_large_1x.jpg',
    'images/still_life_small.jpg',
    'images/still_life_medium.jpg',
    'index.html',
    'pages/offline.html',
    'pages/404.html'
  ];

  const staticCacheName = 'pages-cache-v1';

  self.addEventListener('install', function(event) {
    console.log('Attempting to install service worker and cache static assets');
    event.waitUntil(
      caches.open(staticCacheName)
        .then((cache) => cache.addAll(filesToCache))
    );
  });

  // TODO 3 - intercept network requests

  // TODO 7 - delete unused caches

})();