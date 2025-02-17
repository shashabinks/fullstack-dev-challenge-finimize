## How you approached the challenge?
- The aim of the challenge was to enable users to calculate their savings over 50 years given their initial savings, monthly deposits and interest rate.
- First of all, I approached the problem with modularity in mind; when the structure of a component begins to become long and convoluted, it is important to break it down further into smaller re-usable components. I achieved this with creating subcomponents such as `GraphSection` which acts as a container for the line chart, or creating `LabeledSliderInput` which helps with creating labeled sliders with their own styling. This approach improves not only readability of the components and overall flow, but also creates room for testing each individual component.
- Secondly, usability. It was important to understand the people or users who would make use of this website, and question what small additions could one add to make the website a little bit more 'fluid'. I achieved this, and quite simply, by enlisting `Slider` components provided by ChakraUI. This prevents the user needing to even type their costs and instead just drag (and approximate) their savings/interest rate etc. Another yet small feature that I did add was a `TipsPanel`. Not everyone is a financial expert who will understand terms such as "interest rate", so adding a small tip box to the side ensures that everyone has an understanding of what each feature is.
- For dealing with the backend side of things, I created an api util file to allow me to create a centralised asynchronous API utility. This allowed me to make calls to the server to get the data that needs to be plotted as well as other data such as `totalSavings`. I added in a new route called `/api/savings` into `server.ts` to enable me to get this data.

## What bits of your solution you like
- Regarding the parts of the solution I liked, some of the features i.e. `Sliders` and `TipsPanel` listed above were simple yet intuitive features that create the biggest impact.
- I also tried to make use of `Wrap` to adhere to window dimensions to enable support for mobile view.

## What bits of your solution you’d like to improve upon or would develop next
- More testing as I didn't have time to cover everything (both back-end and front-end).
- From a front-end perspective, playwright tests could do a solid job at ensuring components are functional.
- An AI chatbot that performs speech-to-text and text-to-speech to allow users to actually speak the input values as well.
- More dynamic/fluid components, support for mobile view (better than how its done at the moment).
- Format the text, for example, the total amount to make it look more "friendly".

## Screenshots
![image](https://github.com/user-attachments/assets/d571d5c8-c65d-48aa-b122-e20d3ac9c9b4)

# Finimize Frontend Development Challenge
This repo is intended to be forked and uploaded to your own Github account in
order to form the submission for the challenge. Once cloned, it will give you a basic server with a React app, so you don't have to spend time writing boilerplate code. Feel free to make any changes you wish - the existing code is purely intended to get you going faster.

## Run Instructions

To run the app, `cd` into the project root directory and run `yarn install` & `yarn start`
(install Yarn [here](https://yarnpkg.com/en/docs/install)).

Depending on your environment, you might need to install concurrently / Typescript globally.

There is one basic test written in the client, which you can run by performing
`cd client` and then `yarn test`. If you want to add new client tests you can use Jest.

Mocha has been installed on the server to allow you to create server tests if you wish,
although none have been written yet.

## The challenge

Create a web-app that shows how much you can expect to make from your savings over time.

The app must satisfy the following Acceptance Criteria (ACs):

- It should allow the user to vary the initial savings amount, monthly deposit and interest rate through the UI
- It should display how much the user's initial savings amount will be worth over the next 50 years.
- You can just return mock/dummy data over the simple Node server that has been set-up for you. You don't have to write any "calculations" for the backend, just return mock data to give whatever functionality you want in the frontend. You won't be scored on any server-side code!

### Our Guidance

The challenge should not take any more than 2-3 hours. You do not need to complete the challenge in one go.

These are some qualities we value:

- Well-modularised, robust and clearly-written code
- Maintainability. Another team member should be able to easily work with your code after you've finished.
- Single Responsibility Principle
- A well-organised codebase. You should think about how your codebase might grow as the project becomes more complex.
- Simple, elegant but fun UX

The UI has been started, as well as some simple setup logic on the server. How you connect these and structure logic is up to you! Feel free to make changes to any of the code provided (including the UI) if you wish.

We have chosen to include a basic design system on the client, to give you an idea of how we like to build UIs. For this challenge we have used [Chakra JS](https://chakra-ui.com/docs/getting-started).

Other than the above AC, feel free to take the challenge in any direction you feel best showcase your strengths!

**Once complete**, please drop us a brief note (either an email, or in the readme somewhere) explaining:

- How you approached the challenge
- What bits of your solution you like
- What bits of your solution you’d like to improve upon or would develop next

Any images/gifs of the finished product would be helpful too!

### Using AI

We believe a modern developer workflow should make use of the best tools available, so we would encourage you to use AI tools for this challenge - hopefully it saves you some time!

At the time of writing we are using [CursorAI](https://www.cursor.com/). It has a free trial so you're welcome to give it a go if you haven't already tried it.

Bear in mind that when using AI, you are still responsibility for the quality of the output. The same principles mentioned above still apply. And we will still expect to be able to discuss the end solution, so please ensure you're familiar with what's been committed.

### Tooling

The frontend contains some tooling you might be familiar with

#### Typescript

If you like to use Typescript in your workflow, you should get any client warnings/errors appear in your terminal after running `yarn start`.

You can also run the server types using `yarn types`.

We believe strong TS typing will make your code much more robust.

#### Prettier

We believe Prettier makes your life easier! There is an example .prettierrc included in the `frontend` directory - feel free to tweak the settings if you'd prefer.

You might need to give your IDE a nudge to pick the settings up - [here's an example](https://stackoverflow.com/a/58669550/4388938) of how to do that with VS Code


