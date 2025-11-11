


// Name:  
// Course: ITSE-1311.002
// Date: February 26, 2025
// Assignment: Part 0.30 -- IN Class Assignment 6


"use strict";

// console.clear()
// console.log(console);
// console.log('%cProgram Start!', `
//     background: white;
//     border: 3px solid red;
//     color: red;
//     font-size: 20px;
//     margin: 10px;
//     padding: 10px;
//   `);

var $ = function (id) { return document.getElementById(id); };
// console.log("'$' is defined to get Elements");



// the event handler for the click event of each h2 element
var toggle = function () {
    var h2 = this;                    // clicked h2 tag  
    console.log(this);
    var div = h2.nextElementSibling;  // h2 tag's sibling div tag
    console.log("internal toggle called");

    // toggle plus and minus image in h2 elements by adding or removing a class
    if (h2.hasAttribute("class")) {
        h2.removeAttribute("class");
    } else {
        h2.setAttribute("class", "minus");
    }
    // toggle div visibility by adding or removing a class
    if (div.hasAttribute("class")) {
        div.removeAttribute("class");
    } else {
        div.setAttribute("class", "open");
    }
};

window.onload = function () {
    // get the h2 tags
    var faqs = $("faqs");
    var h2Elements = faqs.getElementsByTagName("h2");

    // console.log("Number of items in list:", h2Elements.length);
    // console.log(this);
    // attach event handler for each h2 tag    
    for (var i = 0; i < h2Elements.length; i++) {
        console.log("'i' counter: ", i);
        h2Elements[i].onclick = toggle;
 
    }
    // set focus on first h2 tag's <a> tag
    h2Elements[0].firstChild.focus();
};