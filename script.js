const quotes = [
  { text: "Programming isn't about what you know; it's about what you can figure out.", author: "Chris Pine" },
  { text: "Code is like humor. When you have to explain it, it’s bad.", author: "Cory House" },
  { text: "First, solve the problem. Then, write the code.", author: "John Johnson" },
  { text: "The only way to go fast is to go well.", author: "Robert C. Martin" },
  { text: "Simplicity is the soul of efficiency.", author: "Austin Freeman" },
  { text: "The best way to predict the future is to invent it.", author: "Alan Kay" },
  { text: "It’s not a bug, it’s an undocumented feature.", author: "Anonymous" },
  { text: "Programs must be written for people to read, and only incidentally for machines to execute.", author: "Harold Abelson" },
  { text: "The code you write makes you a developer, the code you refactor makes you a better one.", author: "Anonymous" },
  { text: "Any fool can write code that a computer can understand. Good programmers write code that humans can understand.", author: "Martin Fowler" },
  { text: "In programming, the hard part isn’t solving problems, but deciding what problems to solve.", author: "Paul Graham" },
  { text: "If you think good architecture is expensive, try bad architecture.", author: "Brian Foote" },
  { text: "The best error message is the one that never shows up.", author: "Thomas Fuchs" },
  { text: "I’m not a great programmer; I’m just a good programmer with great habits.", author: "Kent Beck" },
  { text: "Clean code always looks like it was written by someone who cares.", author: "Robert C. Martin" },
  { text: "The most disastrous thing that you can ever learn is your first programming language.", author: "Alan Kay" },
  { text: "There are only two hard things in computer science: cache invalidation and naming things.", author: "Phil Karlton" },
  { text: "If you can't explain it simply, you don't understand it well enough.", author: "Albert Einstein" },
  { text: "Code never lies, comments sometimes do.", author: "Ron Jeffries" },
  { text: "It's not a matter of learning to code, it's learning to solve problems.", author: "Anonymous" }
];
const quoteText=document.getElementById("quote-text");
const quoteAuthor = document.getElementById("author");
const generateButton = document.querySelector(".generate");
const linkButton = document.querySelector(".copy");
const originalText= document.querySelector(".copy").textContent;
function renderQuote(){
    let randomQuote=quotes[Math.floor(Math.random()*quotes.length)];
    quoteText.textContent= randomQuote.text;
    quoteAuthor.textContent=randomQuote.author;

}
generateButton.addEventListener("click", renderQuote);
if (linkButton) {
  linkButton.addEventListener('click', () => {
      navigator.clipboard.writeText(`${quoteText.textContent} — ${quoteAuthor.textContent}`);
      alert("Copied to clipboard!");
      linkButton.textContent="Copied!";
      setTimeout(()=>{linkButton.textContent= originalText}, 1500);
  });
}