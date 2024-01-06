
# Object Detection and Recognition in Videos Using Deep Learning

Web App in React for Object Detection in Videos and Images. This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).


## Available Scripts
In the project directory, you can run:
## npm install
To install all the dependent node modules.
## npm start
To start the server and view the webpage.
## Problem Statement
With the rapid development of modern technology and the popularization of social media, a large amount of visual information has followed. Images and videos have become important carriers of a vast network of information. However, it’s difficult for us to classify and recognize the gathered information directly. Hence, the use of the computer to classify and recognize data or objects in these images and videos has gained significant prominence
## Dataset
The COCO dataset was used in the training of the model for object detection and recognition in videos and images. The COCO dataset contains images in 80 different categories, with a total of more than 330,000 images, including 200,000 labeled images. 

## Tools and Technology Used
1. Platforms: Google Colab for model creation and collaboration, and Git and GitHub for version control and team collaboration.
   
2. Programming Language and Frameworks:
- Python: Used for creating the machine learning algorithm and scripts.
- JavaScript/TypeScript: Implemented the front end of the website and some backend capabilities.
- HTML/CSS/Bootstrap: Used for creating a responsive website interface.
- Angular: Employed for developing the frontend of the website and integrating it with the backend.
- Node.js: Utilized for creating the backend of the website.
  
3. Python modules: Keras for working with the deep learning model, TensorFlow for working with neural network, Numpy for working with array data, OpenCV for working with images, and Matplotlib, Plotly, Pillow for creating charts and graphs.
Operating system: The entire application along with the website and the python code machine learning model will be running on a machine with windows 10 as its operating system.

## Data Design
![image](https://github.com/VachanPatil30/SJCE_FY_project/assets/79377852/8ea978e1-613d-47e6-9452-907ffe47db3d)

1. Module Import:
Begin by importing necessary modules like OpenCV, TensorFlow, Node JS, and React.

2. Front-end Application Creation:
Utilize the imported modules to create a standalone React-based front-end web application. This application allows access to camera footage, displays predicted information, and ensures usability across different devices.

3. Camera Feed Integration with Model:
Feed live video footage from the camera into the model. The model, based on its confidence value, attempts to detect multiple objects within the frame.

4. Detection with TensorFlow.js Model:
Train and convert a machine learning model using TensorFlow.js. This model directly detects objects in the camera feed, leveraging TensorFlow.js for deployment in Node.js or web browsers.

5. Display of Detected Objects:
Following object detection, display the identified objects with colored squares and corresponding labels in the left corner of each square.
## System Architecture
![image](https://github.com/VachanPatil30/SJCE_FY_project/assets/79377852/d96817f8-95fe-4c80-ba66-d5017271a97b)

1. Frontend Interaction with React:
Utilizing React, a JavaScript library, for building user-friendly interfaces, addressing issues with partial content updates in one-page applications. React's modular structure ensures easy maintenance and flexibility, saving significant development time.

2. Frontend-Backend Connection with Node.js:
Connecting React frontend to a Node.js backend, known for non-blocking, event-driven servers. Node.js is ideal for traditional websites and real-time, push-based architectures. Establishing connection by fetching data from the backend server's port.

3. Backend Integration with TensorFlow.js Model:
Deploying a TensorFlow.js model using Node.js, leveraging TensorFlow.js as a JavaScript ML library. This facilitates the deployment of machine learning models directly into Node.js or web browsers.

4. Fetching TensorFlow.js Machine Learning Model:
Training a custom object-detection model using TensorFlow in Python, deploying it for real-time inferences in the browser through TensorFlow.js.

5. Processing User Requests with TensorFlow.js Model:
Utilizing TensorFlow.js functionality for saving and loading models, with direct access to the filesystem on Node.js. Ensuring seamless processing of user requests in alignment with the TensorFlow.js model.

6. Obtaining Required Output:
Processing the video feed through the TensorFlow.js model, which identifies objects and generates colored boxes with labels for each detected object.
## Implementation
The implementation of the object detection system involved the use of various platforms and programming languages. The project was developed using Google Colab for collaboration and model creation, Amazon Web Services for training, testing, and hosting the website, and Git and Github for version control and collaboration. The programming languages and frameworks used included Python for creating the machine learning algorithm and scripts, JavaScript and TypeScript for implementing the website's front end and some backend capabilities, HTML, CSS, and Bootstrap for creating a responsive website, Angular for making the frontend of the website and integrating it with the backend, and Node for creating the backend of the website
.

The system was implemented using a Convolutional Neural Network (CNN) and a Recurrent Neural Network (RNN) for deep feature learning. A new residual module, ResNet, was constructed based on the idea of ResNet's skip convolution layer. The COCO dataset was passed through all different stages of the algorithm and was verified by the same dataset. The parameters of the created machine learning model, which comprises the algorithm and neural network, could be changed based on the accuracy rate of the object recognition
.

A web application was created to provide an abstraction of the model and algorithm. Users could upload an unidentified object in an image or video to the application. The image or video was passed through the machine learning model for the identification of different objects present in it. The model processed and highlighted different objects present in it and labeled them, based on the trained neural network and machine learning model. The image or video having classified objects in it could be downloaded from the application
.
## Results

   
![image](https://github.com/VachanPatil30/SJCE_FY_project/assets/79377852/a025156d-c21d-4456-8e9c-871356c25d40)

![image](https://github.com/VachanPatil30/SJCE_FY_project/assets/79377852/99b964c4-f66b-4fce-89e0-29b5fcfaaaf5)

                                              Interface testing on image and video

The system was designed to be available 24x7 and deliver services as intended despite unpredictable interruptions. It was designed to be user-friendly and easy to use without compromising on the requirements. The system permits everyone with a mobile phone or a computer to access the website, thus assisting people who are hard of hearing. The revenue generated from the model could further be utilized to enhance the dataset by collecting large amounts of data on which the model is trained, thus making the model more accurate and robust.

The system was able to detect and classify different objects in images and videos, identify different characteristics of the uploaded files, reduce the training time and improve the accuracy rate of classification using the concepts of deep residual networks. After the image or video was uploaded, the file was classified and labeled with objects in it.

![image](https://github.com/VachanPatil30/SJCE_FY_project/assets/79377852/fa418096-bebb-4a91-ba70-f8881f726429)

The project achieved significant results in terms of model performance. The loss was successfully reduced to 0.36, and a training accuracy of 0.96 was attained after running the model for 5 epochs. Subsequently, when tested with random data, the model achieved an accuracy of 91%
