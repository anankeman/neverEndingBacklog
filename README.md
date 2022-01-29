# neverEndingBacklog
Burnout chart project for SummerHack

## Project Description

> Web-app to help students to check their knowledge by extracting information from slides (in PDF) and turn them in questionaries like Kahoot.

## Architecture

### React Frontend
Simple load and question show.

#### Features

- Document Upload
- Download ouput
- Loaded Icon
- Control panel with number of questions, type of questions
- Question screen
- Score system
- Refresh button


### Backend Rest API (FastAPI and Nginx)
Question generation model served with a Restful API.

#### Features

- Receive the document and optional arguments
- Parse the document 
- Identify parts and put them into dataset
- Pre-process
- Apply the library with arguments
- Output questions as JSON
- Output PDF doc
- Docker container 

## User's Stories

| User story                                                               | Area     | Check | 
| ------------------------------------------------------------------------ | -------- | ----- | 
| User can upload a PDF file                                               | Frontend |       |
| User can select a number of questions an types (yes/no, Multiple Choice) | Frontend |       |
| User can answer questions in series                                      | Frontend |       |
| User can see his score                                                   | Frontend |       |
| User can download the question as a PDF at the end of the questionary    | Frontend |       |   
| User Skip a question is not well formulated                              | Frontend |       |    
| User receive questions from the content of their slides                  | Backend  |       |    
| User receive questions of the type specified by them                     | Backend  |       |  
| User's slide document content is extracted to create the questions       | Backend  |       | 
| User receive a PDF file with all questions an answers                    | Backend  |       |



## Installation and dependencies

### Frontend:
 Install
```Shell
 node 14.17.4
```

Install dependencies: 
```
npm install -g yarn
yarn install
```
### Backend

Install
```
python 3.8
```
Install dependencies
```
pip install -r requirements.txt
```
## Testing

To test Frontend, type in Fronml folder:

```shell
npm test
```

To test Backend, type in Backend folder:

```
pytest
```

## Deployment

### Frontend:

- Heroku, Netlify or Github

### Backend:

- Heroku
- Docker
- Nginx

## Contributors

- James Rosling
- Felipe Ramos


## Brainstorming References:

https://www.myheritage.com/deep-nostalgia

https://www.rosebud.ai/

https://www.domestika.org/en/blog/8416-5-free-apps-for-restoring-and-animating-old-photos

## Wireframe

![wireframe-project drawio](https://user-images.githubusercontent.com/70134454/150734537-c378b2fa-4c30-41a6-81ad-ad566cfb652e.png)
