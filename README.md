# FAQ Accordion

## Description

This project is a FAQ (Frequently Asked Questions) component in accordion form, where users can expand or collapse answers to questions by clicking on them. The design is responsive and uses the BEM (Block Element Modifier) methodology to maintain code organization and clarity. This project is part of a challenge from Frontend Mentor.

## Features

- **Dynamic Expansion**: The card increases in size based on the number of answers displayed, providing a clean and functional interface.
- **Interactivity**: Icons change from "+" to "-" as questions are expanded or collapsed, clearly indicating the action to be taken.
- **Accessibility**: 
  - The `aria-expanded` attribute is used to indicate the current state of each question (whether it is expanded or collapsed).
  - The `card__answer--hidden` class controls the visibility of answers in an accessible manner.
- **BEM Methodology**: The project is structured using BEM, ensuring clear separation between blocks, elements, and modifiers, which enhances maintainability and scalability.

## Project Structure

### HTML

The HTML is organized based on the BEM methodology, where each block and element is clearly defined, facilitating maintenance and scalability of the code.

### CSS

The CSS uses a basic reset to ensure consistency across all browsers. Classes are styled to provide a good visual experience, with well-defined colors and spacing.

### JavaScript

JavaScript manipulates the display of answers when clicking on questions, altering the `aria-expanded` attribute and the visibility of the associated answer.

## How to Use

1. **Clone the Repository**: Use `git clone` to download the project.
2. **Open the `index.html` file** in a browser.
3. **Interact with the component** by clicking on the questions to expand or collapse the answers.

## Final Considerations

This project was developed with a focus on accessibility and usability, using best programming practices and modern methodologies in CSS and JavaScript. The BEM structure allows for easy maintenance and future extensibility.
