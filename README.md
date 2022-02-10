# Tailwind-CSS-Projects

This repository have some basic Tailwind css starter projects.

## Steps to Setup Tailwind CSS Project

![](Assests/Readme%20Images/Tailwind%20CSS%20Setup.png)

## Mobile Landing Page

Use dist directory in Mobile_Landing for production ready bundle.

![](Assests/Readme%20Images/mobileLanding.png)

## Font and Sizing Concept

The image below shows the output for index.html utlizing some Font and Sizing utility classes of tailwind css.

![](Assests/Readme%20Images/font&sizing.png)

## Margins Borders and Padding Concepts

The image below shows the output for index.html utlizing some Margins, Borders, and Padding utility classes of tailwind css.

![](Assests/Readme%20Images/Margins_Borders_and_Padding_Concepts.png)

## Square Bracket Notation Concepts

The image below shows the output for index.html utlizing some Square Bracket Notation utility classes of tailwind css.

![](Assests/Readme%20Images/Square_Bracket_Notation.png)

## Apply Directive Concept

The image below shows the output for index.html utlizing some Apply Directive concept in tailwind css. <br />


This @apply directive is used for component which have to be used 
multiple time and that too with same style throughout the website, like button, etc.<br />

Note: Try to put the custom class before utility class in main.css as 
if we have to overwrite the custom class with utility class, we can do that easily. But if we want to override the utility classes then put custom style after @tailwind utilities; in main.css. Order for defining classes in css is important in tailwind.

![](Assests/Readme%20Images/Apply_Directive_Concept.png)

## Layer Directive Concept

Layer directive is used to tell tailwind that after which in-built class we have to use our custom class.<br />

Tailwind will automatically move any CSS within a @layer directive to the same place as the corresponding @tailwind rule, so you don’t have to worry about authoring your CSS in a specific order to avoid specificity issues.<br />

Any custom CSS added to a layer will only be included in the final build if that CSS is actually used in your HTML, just like all of the classes built in to Tailwind by default.<br />

Check out main.css in Layer Directive Concept directory.
