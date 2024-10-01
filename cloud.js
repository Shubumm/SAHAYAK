const fitnessQA = {
    "What is cloud computing?": "Cloud computing is the delivery of computing services, including storage, processing, and software, over the internet (the cloud) rather than using local servers or personal devices.",
    
    "Name the three main types of cloud service models.":
    "The three main types of cloud service models are:Infrastructure as a Service (IaaS),Platform as a Service (PaaS),Software as a Service (SaaS)",
    
    "What are the benefits of using cloud computing?":
    "Benefits of cloud computing include cost savings, scalability, flexibility, disaster recovery, automatic updates, and the ability to access services from anywhere with an internet connection.",
    
    "Give an example of a popular SaaS application.":
    "Examples of popular SaaS applications include Google Workspace (formerly G Suite), Microsoft Office 365, and Salesforce.",
    
    "What is cloud storage?":
     "Cloud storage is a service that allows users to store data on remote servers accessed via the internet, often provided by cloud service providers like Google Drive, Dropbox, or Amazon S3.",
    
    "What does 'scalability' mean in cloud computing?":
    "Scalability in cloud computing refers to the ability to increase or decrease computing resources and services as needed to meet changing demand without affecting performance.",
    
    "What is the difference between IaaS, PaaS, and SaaS?":
    "IaaS (Infrastructure as a Service): Provides virtualized computing resources over the internet. Users manage the operating system, applications, and data, while the cloud provider manages the infrastructure. Examples include AWS EC2 and Google Compute Engine.PaaS (Platform as a Service): Provides a platform allowing customers to develop, run, and manage applications without the complexity of building and maintaining the underlying infrastructure. Examples include Google App Engine and Microsoft Azure App Services.SaaS (Software as a Service): Delivers software applications over the internet, on a subscription basis, without requiring installation or maintenance by the user. Examples include Google Workspace, Salesforce, and Microsoft 365."
    
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