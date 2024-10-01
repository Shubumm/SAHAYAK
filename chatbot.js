const fitnessQA = {
    "What is data analysis?"
    : "Data analysis is the process of inspecting, cleaning, transforming, and modeling data with the goal of discovering useful information, drawing conclusions, and supporting decision-making.",
    
     "What is a dataset?"
    : "A dataset is a collection of data, often presented in a table, that includes rows (each representing a record or observation) and columns (each representing a variable or attribute of the data.",
     "What is the difference between qualitative and quantitative data?"    
    :"Qualitative data is descriptive and non-numerical, such as colors, names, or labels.Quantitative data is numerical and can be measured, such as height, weight, or age.",
    
    "What is a histogram?"
    :"A histogram is a graphical representation of the distribution of numerical data, where the data is divided into bins, and the frequency of data points in each bin is represented by the height of the bars.",
    
    "What is correlation?"
   :"Correlation is a statistical measure that describes the extent to which two variables are related. A positive correlation means that as one variable increases, the other tends to increase; a negative correlation means that as one variable increases, the other tends to decrease.",
    
    "What is the purpose of data visualization?"
    :"The purpose of data visualization is to present data in a visual context, such as charts or graphs, making it easier to identify patterns, trends, and outliers in the data.These questions should help you get a basic understanding of data analysis concepts.",
    
    "What are the key differences between supervised and unsupervised learning in the context of data analysis?"
   
    :"Supervised Learning:In supervised learning, the model is trained on labeled data, meaning the output (dependent variable) is known. The goal is to learn a mapping from inputs to outputs that can be used to predict outcomes for new, unseen data. Examples include regression and classification.Unsupervised Learning: In unsupervised learning, the model is trained on unlabeled data, where the output is unknown. The goal is to identify patterns or structures within the data. Examples include clustering and dimensionality reduction techniques.",
    
   "Explain the concept of p-value in hypothesis testing":
    "The p-value is a measure that helps determine the significance of the results in a hypothesis test. It represents the probability of obtaining test results at least as extreme as the ones observed during the test, assuming that the null hypothesis is true.Low p-value (typically ≤ 0.05): Strong evidence against the null hypothesis, so you reject the null hypothesis.High p-value (> 0.05): Weak evidence against the null hypothesis, so you fail to reject the null hypothesis.",

    "Question: How do you handle missing data in a dataset?":
     "Handling missing data depends on the nature of the data and the analysis. Common methods include:Removing Rows: Delete rows with missing values, but this can lead to loss of data.Imputation: Replace missing values with a statistical measure like mean, median, or mode.predictive Imputation: Use algorithms to predict the missing values based on other features.Using a Placeholder: Fill missing values with a specific value like 0 or -1 if it makes sense in the context of the data.",
    
     "What is the purpose of cross-validation in model evaluation?"
    : "Cross-validation is a technique used to assess the generalizability of a model. It involves dividing the data into multiple subsets (folds) and then training the model on some of these subsets while testing it on the remaining ones. This process is repeated multiple times, and the results are averaged to provide a more accurate measure of the model's performance, reducing the likelihood of overfitting.",
    
     "What is the difference between R-squared and Adjusted R-squared in linear regression?":
    "R-squared: It measures the proportion of the variance in the dependent variable that is predictable from the independent variables. However, it tends to increase with the addition of more predictors, regardless of their significance.Adjusted R-squared: It adjusts the R-squared value based on the number of predictors in the model. It only increases if the new predictor improves the model more than would be expected by chance, making it a better metric for comparing models with a different number of predictors.",
    
    "Explain how Principal Component Analysis (PCA) works and its purpose in data analysis."
   :"PCA is a dimensionality reduction technique that transforms a large set of variables into a smaller set of uncorrelated variables called principal components. These components capture the maximum variance in the data with the fewest number of components.",
    
    "How it works": "PCA identifies the directions (principal components) where the data varies the most and projects the data onto these directions. The first principal component accounts for the most variance, and each subsequent component accounts for the remaining variance under the constraint that it is orthogonal to the preceding components.Purpose: PCA is used to reduce the dimensionality of the data, which can improve the efficiency of the analysis and visualization, especially when dealing with a large number of variables.",
    
   "What is the purpose of a confusion matrix in classification tasks?"
    :"A confusion matrix is a table used to evaluate the performance of a classification model. It provides a summary of the prediction results on a classification problem, showing the number of correct and incorrect predictions, broken down by each class. The matrix helps in understanding the types of errors made by the classifier:True Positives (TP): Correctly predicted positive cases.True Negatives (TN): Correctly predicted negative cases.False Positives (FP): Incorrectly predicted positive cases (Type I error).False Negatives (FN): Incorrectly predicted negative cases (Type II error).",
    
    "How do you interpret the coefficients in a logistic regression model?":
    "In logistic regression, the coefficients represent the change in the log-odds of the dependent variable for a one-unit change in the independent variable, holding all other variables constant. Positive Coefficient: Increases the log-odds of the outcome occurring, implying a higher probability of the outcome.   Negative Coefficient: Decreases the log-odds of the outcome occurring, implying a lower probability of the outcome.    Exponentiation of the coefficient (e^β): Gives the odds ratio, which indicates how the odds of the outcome increase (if > 1) or decrease (if < 1) with a one-unit change in the predictor.",
    
   "What is the difference between bias-variance tradeoff in the context of model performance, and how can it affect the performance of your model?":
    "The bias-variance tradeoff is a fundamental concept in machine learning that describes the balance between the error introduced by the bias (error due to overly simplistic assumptions in the model) and the variance (error due to too much complexity in the model).    Bias refers to the error due to the model being too simple and failing to capture the underlying patterns in the data. High bias can lead to underfitting.    Variance refers to the error due to the model being too complex and capturing noise in the data rather than the underlying pattern. High variance can lead to overfitting.    The tradeoff is about finding the right balance: a model too simple may not capture the complexity of the data (high bias), while a model too complex may overfit to the training data and perform poorly on unseen data (high variance). Regularization techniques, cross-validation, and choosing the right model complexity are ways to manage this tradeoff.",
    
    "Explain how Principal Component Analysis (PCA) works and describe a situation where it might be used.":
   "Principal Component Analysis (PCA) is a dimensionality reduction technique that transforms a large set of variables into a smaller one that still contains most of the information in the large set. PCA works by finding the principal components, which are directions in the data that maximize variance, and then projecting the data onto these components.  Steps in PCA:    Standardize the data.    Compute the covariance matrix.    Calculate the eigenvectors and eigenvalues of the covariance matrix.    Sort the eigenvectors by decreasing eigenvalues and choose the top k eigenvectors.    Transform the data onto the new feature space.    Use Case: PCA is often used in image compression, where the number of pixels (features) is reduced while retaining as much image information as possible. It can also be used to speed up machine learning algorithms by reducing the number of features.",
    
    "How would you handle missing data in a dataset?":"There are several strategies to handle missing data, depending on the nature of the data and the percentage of missing values:    Deletion:    Listwise Deletion: Remove entire rows with missing values. This is suitable when the missing data is relatively small.   Pairwise Deletion: Only remove missing data in specific analyses, retaining as much data as possible.    Imputation:    Mean/Median/Mode Imputation: Replace missing values with the mean, median, or mode of the column. Simple and effective for numerical data with small amounts of missing data.    K-Nearest Neighbors (KNN) Imputation: Use the k-nearest neighbor algorithm to estimate missing values.    Regression Imputation: Use regression techniques to predict and fill missing values based on other variables.    Multiple Imputation: Create multiple datasets with different imputed values, analyze each one, and average the results.    Using Algorithms that Handle Missing Data: Some algorithms, like decision trees, can handle missing values natively.    The choice of method depends on the dataset and the potential impact of the missing data on the analysis.",
    
    "What is cross-validation, and why is it important in data analysis?":
     "Cross-validation is a statistical method used to evaluate the performance of a machine learning model. It involves dividing the dataset into multiple subsets (or folds), training the model on some folds, and testing it on the remaining fold(s). This process is repeated multiple times, and the results are averaged to give a more reliable estimate of the model’s performance.Importance:Reduces Overfitting: By validating the model on different subsets, cross-validation helps to ensure that the model does not overfit to the training data.  Provides More Reliable Metrics: It gives a better estimate of model performance on unseen data.   Helps in Hyperparameter Tuning: Cross-validation is commonly used in hyperparameter tuning to find the best model parameters. The most common form is k-fold cross-validation, where the data is divided into k subsets, and the model is trained and validated k times, each time using a different fold as the validation set.",
    
     "What is a mean in data analysis?"
    :"The mean is the average of a set of numbers, calculated by adding all the numbers together and then dividing by the count of numbers.",
    
    "What is a median?":
   "The median is the middle value in a list of numbers ordered from smallest to largest. If the list has an even number of observations, the median is the average of the two middle numbers.",
    
    "What is the mode?":
    "The mode is the value that appears most frequently in a dataset. A dataset can have more than one mode if multiple values appear with the same highest frequency."
    
    
    

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