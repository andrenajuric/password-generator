# Password Generator

Homework 3 of UW Coding Bootcamp

## Task

My task was to take the code given to me and create a fully functioning password generator. 

When the page is opened, it must function as follows:

- When the "Generate Password" button is clicked, user is prompted to choose a password length between 8 and 128 characters
	- if user does not choose a number that meets the length criteria, they are alerted to do so & returned to the main page
- Once an acceptable length choice is made, user is asked a series of questions:
	1. Do you want to include numbers in new password?
	2. Special characters?
	3. Uppercase letters?
	4. Lowercase letters?
	- *If user clicks "cancel" for all options, they are alerted to choose at least one & returned to main page.*
- After user selects what characterists they'd like included in their new password, a random password is generated. 

## UserStory

AS AN employee with access to sensitive data
I WANT to randomly generate a password that meets certain criteria
SO THAT I can create a strong password that provides greater security

## Process

I started by psuedocoding. I knew I would first need to create my variables, so I created arrays for numbers, special characters, uppercase, and lowercase characters. I then created a function for generatePassword() that included all the prompts for the user. After I created each prompt for each characterstic, I made a section of code that would check that the user made at least one selection - if not, they would be alerted to make a choice, and returned to the main page to try again. Then, I created a passwordSelections variable & 'if' statements that would go through each prompt, record each response from the user, and combine the String with the original variables I made (number, special, uppercase, and lowercase). Lastly, I created a for loop that would go through each selection & randomly add each chosen characteristic to the newly generated password.


## Website Example

The website appears as follows: 

![screenshot of password generator main page](../assets/03-javascript-homework-demo)