# Frontend Mentor - Results summary component solution

This is a solution to the [Results summary component challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/results-summary-component-CE_K6s0maV). Frontend Mentor challenges help you improve your coding skills by building realistic projects. 

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Continued development](#continued-development)
  - [Useful resources](#useful-resources)
- [Author](#author)
- [Acknowledgments](#acknowledgments)

## Overview

Responsive design of a Score Table

### The challenge

Users should be able to:

- View the optimal layout for the interface depending on their device's screen size
- See hover and focus states for all interactive elements on the page
- Use the local JSON data to dynamically populate the content

### Screenshot

![](https://github.com/JohnnySegway/results-summary-component-main/blob/main/screenshot1080.png)

### Links

- Live Site URL: https://johnnysegway.github.io/results-summary-component-main/)

## My process

Mobile first development.
New use of Javascript and JSON

### Built with

- Semantic HTML5 markup
- CSS custom properties
- Flexbox
- CSS Grid
- Mobile-first workflow
- Javascript
- JSON

### What I learned

Use this section to recap over some of your major learnings while working through this project. Writing these out and providing code samples of areas you want to highlight is a great way to reinforce your own knowledge.

This is still not perfect, especially with styling on mobile and the javascript & json is causing some preloading issues that would need looking into.

To see how you can add code snippets, see below:

```html
    <section class = "container">

      <div class = "result-container">
       
        <h2 class="result-header">Your Result</h2>

        <div class="result-circle">
          <p class="text-circle result-score">76</p>
          <p class="text-circle result-sub-score">of 100</p>
        </div>

        <h2 class="result-great-header">Great</h2>

        <p class="result-text">You scored higher than 65% of the people who have taken these tests.</p>
      </div>
```
```css
    .result-circle {
      margin: 0 auto;
      background: linear-gradient(to bottom right, hsla(256, 72%, 46%, 1), hsla(241, 72%, 46%, 0));
      border-radius: 50%;
      width: 120px;
      height: 120px;

      display: flex;
      justify-content: center;
      align-items: center;
      flex-direction: column;
    }

    @media (min-width: 700px) {

      .result-circle {
        width: 180px;
        height: 180px;
      }

    }
```

```




