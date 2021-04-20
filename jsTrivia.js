/*


What is Big O notation, and why is it useful?
- Big O describes the complexity of your code using algebraic terms
    - Describes the limiting behavior of a function 
- Time complexity: how much time it takes for a program to complete the task 
- Space complexity: how much memory the program will use to complete the task
- Complexity can be analyzed as best case, worst case, average case, and expected case (depending on the input of the problem)
- Why?: Big O tells you the complexity of an algorithm in terms of the size of its inputs
    - This is essential if you want to know how algorithms will scale
    - Big O fives you a high level sense of which algorithms are fast, which are slow, and what the tradeoffs are

What is the DOM?
- The data representation of the objects that comprise the structure and content of a document of the web 
    - represents the page so that programs can change the document structure, style, and content
    - Document is represented as nodes and objects so that programming languages can connect to the page 
    - An object oriented representations of a web page (a document that can either be displayed in the browser or as the HTML source) that can be modified with a scripting language(ex. JavaScript)
- Methods available for creating and manipulating web pages are organized into objects (ex. document, table, etc.)


What is the event loop?
- Responsible for executing the code, collecting and processing events, and executing queued sub-tasks
- Event loop makes every browser process isolated to avoid a web page with infinite loops or heavy processing that would block your entire browser
    - Instead, the environment manages ultiple concurrent event loops 
    - This is why JS is based so much on callbacks, and promises & async/await : these prevent the browser getting blocked
- The event loop gives priority to the call stack, then, once empty, moves onto the message queue

- Call stack: for all function calls in the browser/tab
    - LIFO (last in, first out)
    - Event loops continuously checks the call stack to see if there's any function that needs to run 
    - Functions calls are added to the call stack and executed in order (from last added to first added)

- Message queue: any time an event occurs that has an event listener attached to it 
    - setTimeout starts the timer, the given time is the minimum time until the function is executed 
    - when the timer expires, the callback function is put into the message queue
    - also queues user initiated events (click/keyboard events) or fetch responses or DOM events 

What is a closure?
- combination of a function bundled together with references to its surrounding state
- gives you access to an outer function's scope from an inner function 
- only available inside the outer function
- allow you to associate data with a function that operates on that data
- emulate private methods with closures

What is a callback?
- a function passed as an argument to another function
- this allows a function to call another function

What is an anonymous function?
- a function without a name
- often not accessible after its initial creation

How does prototypal inheritance work, and how is it different from classical inheritance? 


What is event bubbling and how does it work? 


Describe a few ways to communicate between a server and a client. Describe how a few network protocols work at a high level (IP, TCP, HTTP/S/2, UDP, RTC, DNS, etc.)


What is REST, and why do people use it?


My website is slow. Walk me through diagnosing and fixing it. What are some performance optimizations people use, and when should they be used?


What frameworks have you used? What are the pros and cons of each? Why do people use frameworks? What kinds of problems do frameworks solve?
*/