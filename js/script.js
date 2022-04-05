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
  
  const area = ( 1.333 * Math.PI * radius * radius * radius )

  // output
  document.getElementById('area').innerHTML = 'Volume is: ' + area.toFixed(2) + ' cm³'
}
