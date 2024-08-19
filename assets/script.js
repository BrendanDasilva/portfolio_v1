// Model for Projects
// Get the modal
var modal = document.getElementById("projectModal");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close-button")[0];

// When the user clicks on <span> (x), close the modal
span.onclick = function () {
  modal.style.display = "none";
};

// When the user clicks anywhere outside of the modal, close it
window.onclick = function (event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
};

function openModal(projectCard) {
  var projectId = projectCard.getAttribute("data-project-id");
  var projectInfo = projectDetails[projectId];

  // Set image, title, and description
  // var image = document.getElementById("modalImage");
  // image.src = projectInfo.imgSrc;
  var title = document.getElementById("modalTitle");
  title.innerText = projectInfo.title;
  var description = document.getElementById("modalDescription");
  description.innerText = projectInfo.description;

  // GitHub Link Button: Only display if githubLink is provided
  var githubLinkButton = document.getElementById("modalGithubLink");
  if (projectInfo.githubLink) {
    githubLinkButton.style.display = "inline"; // Show the button
    githubLinkButton.href = projectInfo.githubLink;
    githubLinkButton.innerText = "View on GitHub"; // Default text
  } else {
    githubLinkButton.style.display = "none"; // Hide the button if no link
  }

  // Live Site Link Button: Only display if liveSiteLink is provided
  var liveSiteLinkButton = document.getElementById("modalLiveSiteLink"); // Adjust the ID accordingly
  if (projectInfo.liveSiteLink) {
    liveSiteLinkButton.style.display = "inline"; // Show the button
    liveSiteLinkButton.href = projectInfo.liveSiteLink;
    liveSiteLinkButton.innerText = projectInfo.buttonText || "Visit Live Site"; // Use buttonText if provided
  } else {
    liveSiteLinkButton.style.display = "none"; // Hide the button if no link
  }

  // More About This Project Link
  var moreLinkButton = document.getElementById("modalMoreLink");
  if (projectInfo.pageLink) {
    moreLinkButton.style.display = "inline"; // Show the button
    moreLinkButton.href = projectInfo.pageLink; // Set the link to the project's page
    moreLinkButton.innerText = "More About This Project"; // Default text
  } else {
    moreLinkButton.style.display = "none"; // Hide the button if no link
  }

  // Show the modal
  modal.style.display = "block";
}

// Updated event listener setup
document.querySelectorAll(".project-card").forEach((item) => {
  item.addEventListener("click", function () {
    openModal(item);
  });
});

// Expanded Project Details
const projectDetails = {
  tutorBookingProject: {
    imgSrc: "assets/images/apollostutoringsmall.png",
    title: "Tutor Booking Project",
    description:
      "Apollo's On-Call Tutoring was a second year Advanced Web Development project. We were tasked with designing and building a functional tutoring website using HTML, CSS, JavaScript, PHP, and SQL. This site features the ability for tutors to sign up and create a profile, as well as a feature that triggers their availability along with providing a video chat link to prospective students. Students can visit the site, see what tutors are available and fill out a quick form to request a session.",
    githubLink: "https://github.com/BrendanDasilva/TutorBooking",
    pageLink: "projects/apollosoncall.html",
  },
  forumProject: {
    imgSrc: "assets/images/placeholder.png",
    title: "Forum Project",
    description:
      "This project involved creating a comprehensive forum platform from scratch, focusing on PHP and MySQL for the backend, with a responsive front-end design using HTML, CSS, and JavaScript. Features include user registration/login, thread creation, commenting, and an admin panel for user and content management.",
    githubLink: "https://github.com/BrendanDasilva",
  },
  doughev: {
    imgSrc: "assets/images/doughevtile.png",
    title: "Dough EV",
    description:
      "In this collaborative project, our goal was to transfer the design of the clients previously built Squarespace website to a more business suitable platform with Sociavore.",
    pageLink: "projects/doughev.html",
  },
  // doughev: {
  //   imgSrc: "assets/images/milknhoney.png",
  //   title: "Dough EV",
  //   description: "In this collaborative project, our goal was to create an online presence for a small personal business, focusing on selling handcrafted items. We chose Squarespace for its ease of use and its built-in ecommerce capabilities. My role was particularly focused on customizing the website to align with TheCastleRose's creative vision, involving a mix of Squarespace's native functionalities and supplimental coding in CSS to tailor the site's aesthetics and user interaction. \n\n The challenge with this project was in seamlessly incorporating these custom designs into Squarespace's framework, ensuring the website remained responsive and user-friendly across all devices. This required detailed testing and tweaking to get everything just right. The site is designed to be engaging and intuitive, featuring a visually appealing homepage, an extensive catalog of products with detailed descriptions and images, and a straightforward navigation system to enhance the shopping experience. \n\nThis project has been a valuable opportunity to demonstrate my skills in working with CMS platforms and applying custom design elements in a team setting, aiming for a balance between visual appeal and functional efficiency. \n\nThis site is still currently a work in progress and a live view is unavailable.",
  //   pageLink: "projects/milknhoney.html",
  // },
  csharpWebApp: {
    imgSrc: "assets/images/aspnet1.png",
    title: "C# Web App",
    description:
      "Developed for Web Application Development class, this project is a fully functional travel booking website built using ASP.NET. It demonstrates my skills in C#, .NET frameworks, and SQL Server, incorporating functionalities like flight and hotel bookings. Part 2 of this assignment will see us implement user accounts, API and further optimization.",
    githubLink: "https://github.com/BrendanDasilva/Travel-Booking-Project",
    pageLink: "projects/aspnet1.html",
  },
  javaFlightBookingApp: {
    imgSrc: "assets/images/javaflightapp.png",
    title: "Java Flight Booking Application",
    description:
      "The Flight Reservation App, was developed as part of a JavaFX project for our second year Application Development using Java class. It's built around three main parts: Flight, Passenger, and Booking. The Flight class handles all the flight details like where it's going, when, and how much it costs. It makes sure all this information is correct and makes sense, like making sure the flight date is in the future. The Passenger class keeps track of the people flying, including important details like their name and passport number, and checks to make sure this information is properly filled out.",
    githubLink: "https://github.com/BrendanDasilva/JavaFX-FlightApp",
    pageLink: "projects/javaflightapp.html",
  },
  pythonProject: {
    imgSrc: "assets/images/placeholder.png",
    title: "Python Data Analysis Project",
    description:
      "This project involved developing a Python application for data analysis, demonstrating proficiency in Python programming, data manipulation and analysis libraries like Pandas and NumPy, and data visualization with Matplotlib. The application provides insights into datasets through various analytical techniques.",
    githubLink: "https://github.com/BrendanDasilva",
  },
  quizGameAPI: {
    imgSrc: "assets/images/quizgame.png",
    title: "Quiz Game Utilizing API",
    description:
      "API Quiz Game is a dynamic, web-based trivia quiz application designed to challenge users with a wide range of questions across various categories and difficulties. Utilizing the Open Trivia Database API, this interactive game fetches real-time questions to ensure a fresh and engaging experience every time.",
    githubLink: "https://github.com/BrendanDasilva/Games",
    // liveSiteLink:
    //   "https://brendandasilva.github.io/Games/APIQuizGame/index.html",
    pageLink: "projects/apiquizgame.html",
  },
  game: {
    imgSrc: "assets/images/simon.png",
    title: "Simon Says Game",
    description:
      "The Simon Game project is a web-based adaptation of the classic memory game, designed to test and enhance memory skills through a sequence of lights and sounds. Built using HTML, CSS, and JavaScript, including jQuery for interactive elements, this project demonstrates my ability to create engaging and intuitive user interfaces. The game starts at level zero and progressively increases in difficulty by extending the sequence of lights and sounds the player must memorize and replicate.",
    githubLink: "https://github.com/BrendanDasilva/Games",
    // liveSiteLink: "https://brendandasilva.github.io/Games/SimonGame/index.html",
    pageLink: "projects/simon.html",
  },
};

// Function to open the modal and display the clicked image
function openImageModal(src) {
  // Create modal element dynamically
  var modal = document.createElement("div");
  modal.classList.add("image-modal");

  // Add image inside modal
  var modalImg = document.createElement("img");
  modalImg.classList.add("image-modal-content");
  modalImg.src = src;
  modal.appendChild(modalImg);

  // Add close button
  var closeButton = document.createElement("span");
  closeButton.classList.add("close");
  closeButton.innerHTML = "&times;";
  closeButton.onclick = function () {
    modal.style.display = "none";
    document.body.removeChild(modal);
  };
  modal.appendChild(closeButton);

  // Append modal to body and display it
  document.body.appendChild(modal);
  modal.style.display = "block";

  // Close modal on outside click
  window.onclick = function (event) {
    if (event.target == modal) {
      modal.style.display = "none";
      document.body.removeChild(modal);
    }
  };
}
