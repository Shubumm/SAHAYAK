const fitnessQA = {
    "What is HTML, and why is it important in web development?":
   "HTML: HyperText Markup Language structures content on the web. It forms the backbone of all web pages, defining elements like headings, paragraphs, and links.",
   
   "Explain the difference between HTML, CSS, and JavaScript. How do they interact on a webpage?":
   "HTML vs. CSS vs. JavaScript: HTML structures content, CSS styles it, and JavaScript adds interactivity. Together, they create functional, visually appealing, and interactive web pages.",
   
   "What are the key differences between a static website and a dynamic website?":
   "Static vs. Dynamic Website: Static websites have fixed content; dynamic websites generate content dynamically based on user interaction or data, often using databases and scripts.",
   
   "How does the concept of responsive design work, and why is it essential for modern websites?":
   "Responsive Design: Responsive design ensures websites adapt to various screen sizes, providing an optimal viewing experience on desktops, tablets, and smartphones.",
   
   "What is the purpose of the <div> tag in HTML, and how is it commonly used?":
   "<div> Tag: <div> is a block-level HTML element used to group and organize content, often for styling or layout purposes in web design.",
   
   "What are classes and IDs in CSS, and how do you select elements using them?":
   "Classes and IDs in CSS: Classes style multiple elements, while IDs uniquely style a single element. Select with .class for classes and #id for IDs.",
   
   "Explain the role of the DOM (Document Object Model) in web development.":
   "DOM: The Document Object Model (DOM) represents a webpage’s structure as a tree of objects, allowing JavaScript to manipulate HTML and CSS dynamically.",
   
   "What is the difference between inline, internal, and external CSS? When would you use each?":
   "Inline, Internal, External CSS: Inline CSS styles specific elements; internal CSS applies styles within the HTML file; external CSS links to a separate stylesheet for consistent styling.",
   
   "What is a frontend framework (e.g., Bootstrap), and how does it simplify web development?":
   "Frontend Framework: A frontend framework like Bootstrap offers pre-designed components and a grid system, simplifying responsive and aesthetically pleasing web development.",
   
   "Describe the process of making an HTTP request. What is the purpose of GET and POST methods":
   "HTTP Request (GET vs. POST): GET requests data from a server; POST sends data to a server. Both are fundamental for data exchange in web applications.",
   
   "What is the difference between HTML5 semantic elements and non-semantic elements? Why should semantic elements be used?":
   "HTML5 Semantic vs. Non-Semantic Elements: Semantic elements like <header> and <article> provide meaningful structure, improving accessibility and SEO. Non-semantic elements like <div> don’t convey meaning.",
   
   "Explain how CSS Flexbox and CSS Grid differ in terms of layout design. When would you choose one over the other?":
   "CSS Flexbox vs. Grid: Flexbox handles one-dimensional layouts (row/column), while Grid is for two-dimensional layouts (rows and columns). Use Flexbox for simple, Grid for complex layouts.",
   
   "How does JavaScript handle asynchronous operations? Explain with examples like callbacks, promises, and async/await.":
   "Asynchronous JavaScript: JavaScript handles async operations with callbacks (functions called after tasks), promises (objects representing future values), and async/await (syntax for writing async code like synchronous).",
   
   "What are CSS preprocessors (e.g., Sass, LESS), and how do they enhance the efficiency of writing CSS?":
   "CSS Preprocessors: Preprocessors like Sass and LESS extend CSS with variables, nesting, and functions, making CSS more maintainable and easier to write."
   
   };
   
   const chatIcon = document.getElementById('chat-icon');
   const chatContainer = document.getElementById('chat-container');
   const iconImage = document.getElementById('icon-image');
   
   chatIcon.addEventListener('click', function() {
       if (chatContainer.classList.contains('hidden')) {
           chatContainer.classList.remove('hidden');
           chatContainer.classList.add('visible');
           iconImage.src = 'cancel.png'; // Change to cancel icon
       } else {
           chatContainer.classList.remove('visible');
           chatContainer.classList.add('hidden');
           iconImage.src = 'chatbox.png'; // Change back to message icon
       }
   });
   
   document.getElementById('send-btn').addEventListener('click', function() {
       const selectField = document.getElementById('question-select');
       const question = selectField.value;
   
       if (question) {
           addMessageToChat('user', question);
           selectField.selectedIndex = 0; // Reset the dropdown
   
           setTimeout(() => {
               const answer = fitnessQA[question] || "Sorry, I don't know the answer to that question.";
               addMessageToChat('bot', answer);
           }, 500);
       }
   });
   
   function addMessageToChat(sender, message) {
       const chatBox = document.getElementById('chat-box');
       const messageElement = document.createElement('div');
       messageElement.classList.add('chat-message', sender);
       messageElement.textContent = message;
       chatBox.appendChild(messageElement);
   
       chatBox.scrollTop = chatBox.scrollHeight;
   }