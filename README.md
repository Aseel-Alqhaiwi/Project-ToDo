# To-Do List Web Application

This is a simple To-Do List web application that allows users to add, view, and delete tasks with their start date. The application is built with HTML, CSS, and JavaScript, featuring a responsive design and a dark theme.

## Features

- **Add tasks**: Users can add tasks with a task name and a start date.
- **Delete tasks**: Each task has a delete button to remove it from the list.
- **Responsive design**: Works well on all screen sizes, from desktops to mobile devices.
- **Dark theme**: The application uses a modern dark color scheme with a background image.
- **Task completion**: Users can mark tasks as complete, which applies a line-through to the task text.

## Technologies Used

- **HTML**: For structuring the web page.
- **CSS**: For styling and layout, with a dark theme and background image.
- **JavaScript**: For adding interactivity (adding, deleting, and marking tasks as complete).

## Setup and Installation

1. Clone the repository to your local machine:

    ```bash
    git clone https://github.com/Aseel-Alqhaiwi/todo-list.git
    ```

2. Navigate into the project directory:

    ```bash
    cd todo-list
    ```

3. Open `index.html` in your browser to view the application.

## Usage

1. Enter a task name and select a start date.
2. Click the **Add** button to add the task to your to-do list.
3. You can mark a task as completed by checking the checkbox next to it.
4. Click the **Delete** button to remove a task.

## Customization

- **Background Image**: The background image is located at `./images/background.png`. You can replace this image with your own by updating this file.
- **Dark Theme**: The color scheme can be customized in the `style.css` file. Change the colors in the `rgba` values to suit your preferences.

## Project Structure

```perl
todo-list/
│
├── images/
│   ├── to-do-list.png      # Icon for the app
│   ├── background.png      # Background picture
|   ├── to-do.png           # Picture in headear
├── index.html              # Main HTML file
├── style.css               # CSS styles for the app
└── script.js               # JavaScript logic for the app
