const { rawListeners } = require("node:process");

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
- ONLY a closure if it uses outside variable, otherwise it is a callback,

What is a callback?
- a function passed as an argument to another function
- this allows a function to call another function

What is an anonymous function?
- a function without a name
- often not accessible after its initial creation

How does prototypal inheritance work, and how is it different from classical inheritance? 

PROTOTYPE CHAIN
- prototype is a property of the constructor function that is an empty object
- each prototype has the function as a property 
- when an instance method is called, it first checks the instance to see if the function exists there
- if method not on the instance, JS goes up the prototype chain and checks the prototype for the method 
- next step of the prototype chain is to check the prototype of the constructor that made the prototype (the object class)

CLASSICAL INHERITANCE: classes inherit from classes and create subclass relationships (ex. super)
- creates tight coupling => inflexible hierarchy, instead of getting sub class you get the parent class as well

PROTOTYPAL INHERITANCE: objects inherit directly from other objects (ex. __proto__)
- one class inherits from another class (ex. dog class inherits from animal class)
- make the dog class's proto point to the prototype of the animal class constructor 
- do this by creating an instance of the constructor function
    - instance sets __proto__ as the protoype of the constructor function
- make a surrogate class 
    - empty function, but set the prototype from the blank object it used to be to the animal prototype 
    - then an instance of surrogate will point to the animal prototype 
-replace the dog prototype with the __proto__ property of the surrogate instance 

- establish base constructor
- make a surrogate: an empty function with a prototype
- reset the surrogate prototype to the parent class (Surrogate.prototype = Animal.prototype)
- reset child class prototype to the surrogate proto (Dog.prototype = new Surrogate())

- OR could do Object.create: takes any object as an argument, and the return value is a new object who's proto points to whatever we pass as the argument
    - ex: Dog.prototype = Object.create(Animal.prototype)
    - then need Dog.prototype.constructor = Dog or else dog instances will have an animal constructor
    - will need to use call or apply to put the animal this attributes in the dog class (Animal.call(this, name))
    - Syntactic sugar for this: class Dog extends Animal

- access a parent class's overwritten functions with super
    - in child constructor, call super with parameters for the base class's constructor



What is event bubbling and how does it work? 
- when an event happens on an element, it first runs the handlers on it, then on its parent, then all the way up on other ancestors
- event.target shows you the most deeply nested element that caused the event
- event.stopPropogation stops bubbling at the current level


Describe a few ways to communicate between a server and a client. Describe how a few network protocols work at a high level (IP, TCP, HTTP/S/2, UDP, RTC, DNS, etc.)


What is REST, and why do people use it?
- REpresentational State Transfer: an architectural style for providing standards between computer systems on the web
    - makes it easier for systems to communicate with each other
- Stateless: server does not need to know anything about what state the client is in and vice versa
    both the client and server can understand any messages received, even without seeing previous messages
- Separation of Client and Server: implementation of client (frontend) and server (backend) can be done independently as lon as each side knows what format of messages to send the other
    - improves the flexibility of interface across platforms and improves scalability by simplifying the server components
- REST request consists of 
    - HTTP verb: defines what kind of operation to perform
        - GET: retrievve specific resource or collection of resources
        - POST: create a new resource
        - PUT/PATCH: update a specific resource
        - DELETE: remove a specific resource
    - Header: allows client to pass along info about the request
        - Accept field: exusres that the server doe3s not send data that cannot be understood or processed by the client
    - path to a resource the operation should be performed on
        - ex. url in your ajax call
    - optional message body containing data



My website is slow. Walk me through diagnosing and fixing it. What are some performance optimizations people use, and when should they be used?


What frameworks have you used? What are the pros and cons of each? Why do people use frameworks? What kinds of problems do frameworks solve?
- backend: Rails
- frontend: React
- a framework is a software developed and used by developers to build applications
- we use them becasue developers can take control of most of software development process from a single platform
    - keeps code DRY
    - assists in establishing better programming practices
    - keeps consistent developing code with fewer bugs
    - several code segments and functionalities are pre-built and pre-tested
    - reduces time to develop an application

*/