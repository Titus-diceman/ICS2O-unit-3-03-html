//
// Created by: Titus Diceman
// Created on: Sep 2020
// This file contains the JS functions for index.html

'use strict'
/**
 * This function calculates area of a circle.
 */
function calculate () {
  // input
  const radius = parseFloat(document.getElementById('radius').value)

  // process
  
  const volume = ( 4/3 * Math.PI * radius * radius * radius )

  // output
  document.getElementById('volume').innerHTML = 'Volume is: ' + volume.toFixed(2) + ' cm³'
}
