Execution context is a special environment created by the JS engine in the browser
or the v8 engine that node.js uses.

When created, the global execution context is created, when a function is created,
a function context is created, for the duration of that function

JS is a single threaded language.
Code is executed line by line

It is also synchronous, at it's core.

Memory creation phase is one swoop through before code is run, which does a few things:

1. creates the global object called window
2. creates the this object and binds it to the global object
3. sets up the memory head to store variables and function refs. (all the code also is stored for the function)
4. sets the value of all of those to undefined

Execution phase.

1. Execute code line by line
2. Creates func execution context when it comes across a function
