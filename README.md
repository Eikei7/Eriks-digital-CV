# Project Overview

## Introduction
This project is a Single Page Application (SPA) designed to showcase my profile, recent projects, and provide a means for contacting me. Leveraging modern web technologies and design principles, the SPA offers a seamless user experience.

## Views
### Home
The Home view provides visitors with a brief introduction to who I am. It encapsulates my personality and professional ethos in a concise manner, creating an engaging starting point for users.

### Projects
The Projects view dynamically fetches and displays my latest five projects directly from my GitHub repository using the GitHub API. Each project is presented with relevant details and links for further exploration.

### Contact
The Contact view serves as a direct communication channel between visitors and myself. It features a user-friendly contact form where users can input their name, email address, and message. Currently the form isn't functional, meaning it won't send an email upon submission, it only logs the submitted name, email address and message to the console.

## Technology Stack
- **Frontend Framework:** Utilizes a modern frontend framework (React) for building a responsive and interactive user interface. It also includes a button for switching between two background images, which utilizes React Redux.
- **API Integration:** Integrates with the GitHub API to retrieve and display project data dynamically.
- **Material Design Icons:** Enhances the user experience by incorporating Material Design Icons, providing intuitive visual cues and enhancing the aesthetic appeal.

## Design Principles
- **User-Centric Design:** Prioritizes user experience and engagement by adopting a user-centric design approach.
- **Consistency:** Maintains visual and functional consistency across all views and components, contributing to a cohesive and intuitive user experience.
 
### To run the project locally, follow these steps:

1. Clone the repository to your local machine.
2. Navigate to the project directory.
3. Install necessary dependencies using "npm install" and "npm install @mdi/react".
4. Start the development server using npm run dev.
5. Access the application in your web browser at the specified localhost address.
