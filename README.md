# CrossengageQuiz

The assignment was initially available view[https://bitbucket.org/crossengage/quizengage-code-challenge-fe](https://bitbucket.org/crossengage/quizengage-code-challenge-fe)

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 7.0.2.

## assignment text:
# The "QuizEngage" Code Challenge

This code challenge requires you to build **QuizEngage**, a simple multiple choice quiz application.

The questions and answers for the quiz are stored separately on an external server which you can access via a very limited REST API.

To retrieve a random question from the server, make a request to:
```
https://us-central1-quizengage.cloudfunctions.net/getRandomQuestion
```


To get all possible answers for a question category from the server, make a request to: 
```
https://us-central1-quizengage.cloudfunctions.net/getAnswers?cat={category}
```

## Requirements

Your application should allow the user to request a random question and present him with a selection of possible answers from the respective category of that question.

The amount of possible answers the user has to chose from should depend on a difficulty setting that the user can select in the app.

*For example, show 3 possible answers on â€œeasyâ€, 4 on â€œmediumâ€ and 5 on â€œhardâ€ difficulty.
Make sure that the correct answer is among them and that there are no duplicate answers.*

When the user selects an answer, give him visual feedback whether the answer is correct or wrong and allow him to request the next question.

## Technology

The tech stack you use to run and build the application is up to you, whether you build a custom taskrunner or you use tools like the Angular CLI or stackblitz.io (Which we would recommend).  
The only requirement we have, is to write your code in **TypeScript**.  
We also recommend creating your application with the **Angular** (6) framework, since this is what we use at CrossEngage.
Also you are free to chose any UI library or framework to create a visually appealing application but of course we would like to recommend
our internal [Design System CSS Library](https://crossengage.bitbucket.io/ "CrossEngage Design System"), which is available as a npm package (`xng-styleguide`).

## General Suggestions

Please make your code as readable, efficient and performant as possible and consider the asynchronous nature of the requests when creating the UI.

While the data format of the REST API is reliable, there are multiple scenarios where a correct response payload from the server might cause problems in your app.
Please try to consider as many as possible.

Please consider adding at least one additional features. Here are some suggestions what you could add:  
- A score for the user to keep track of his correct and incorrect answers.  
- Showing the user the correct answer if he chose the wrong one.  
- Adding an http request interceptor to take care of the base API url.  
- Store the users quiz performance persistently so he can compare to earlier quiz sessions.  
- Proper error handling in case of lost connection.  
- Anything else you can think of :)  

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.
I've checked AOT build to actually work. WindowRef injection is a lot simpler than it was in ng4
## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).
except i didn't write any

## Further notes

If you guys want to share your feedback with me, and not just leave it burried in your internal recruiting proccess (it happened to all of us) - cc me, or forward it to guivanrv@gmail.com 

Thanks for reading