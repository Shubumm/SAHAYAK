const fitnessQA = {
   "How can I use the Quiz Bot?"
    : "The Quiz Bot generates quizzes based on the content in the Resource Library. You can take quizzes to test your knowledge and track your progress.",
    "What is the Roadmaps Corner?"
    : "The Roadmaps Corner is a section where students can find detailed learning paths, resources, and guidance to help them with their educational journey.",
    "What can the Chat Bot help me with?"
    : "The Chat Bot can assist you with queries, provide guidance, and offer support based on the resources available on Sahayak.",
    "What are different roadmaps available ?"
    :"Available roadmaps include Computer Science, Web Development, Data Science, App Development, Digital Marketing, Business, Graphic Design, and more. Each roadmap provides a structured learning path for different career goals.",
    "How do I choose the right roadmap for me?"
    : "Choose a roadmap based on your career interests and goals. Each roadmap is designed to guide you through essential skills and knowledge for specific fields.",
    "Can I switch between roadmaps?"
    :"Yes, you can switch between roadmaps if your interests or career goals change. Each roadmap offers a flexible approach to learning",
    "Are the roadmaps updated regularly?"
    :"Yes, roadmaps are updated regularly to include the latest industry trends and technologies, ensuring you have current and relevant information.",
    "Do roadmaps include practical projects or assignments?"
    :"Yes, most roadmaps include practical projects and assignments to help you apply what you've learned and build real-world skills.",
    "How can I track my progress on a roadmap?"
    :"You can track your progress through the roadmap dashboard, which provides an overview of completed modules, ongoing projects, and upcoming tasks.",
    "Are there any prerequisites for starting a roadmap?"
    :"Some roadmaps may have prerequisites, while others are designed for beginners. Check the specific roadmap details for any required knowledge or skills.",
    "How do I search for specific videos or resources?"
    :"Use the search bar located at the top of the page to find specific videos, documents, or other learning materials. You can search by topic, subject, or contributor.",
    "Can I download videos or notes?"
    :"Currently, videos are stream-only to protect intellectual property. However, notes linked to videos can be downloaded for offline use.",
    "How can I access content on Sahayak?"
    :"Log in with your institute-provided credentials. Once logged in, you can explore various sections such as Topper Videos, Quiz Bot, Alumni Talks, and more.",
    "How do I leave comments or feedback on videos?"
    :"Scroll down to the video’s feedback section and type your comment in the provided text box. Click Submit to share your thoughts or ask questions.",
    "What is Sahayak?"
    : "Sahayak is an educational platform that connects students with content uploaded by their own institute. It includes features like Topper Videos,Quiz Bot, Alumni Talks, and more to enhance learning and provide valuable resources.",
    "Why we use Sahayak ?"
    :"Because it builds a Connected learning community with real time Support and mentorship and offers cost-effective learning tools.",
    "Do we get any reward for uploading videos ?"
    :"Yes you definitely get rewards which You can use for getting good Surprise.", 
    "Do there is any Crieteria for uploading video in Toppers video Section ?"
    :" Yes, your Semester Cgpa must have 9"
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