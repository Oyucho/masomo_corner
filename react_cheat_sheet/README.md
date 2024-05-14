## Baic Concepts
JSX - JavaScript XML allowes writing HTML structures in javascript files using XML-like syntax
Components - independent , reusable pieces of UI. Can be functionsl or class-based
Props - short for properties , these are read-onnly inputs to components that define attributes or configuration.
State - Holds data that might change over the lifecycle of an component. Used in class components and functional components via useState hook. 


## Components
Functional components and class components are two ways to bild components in React, each with distict characteristics:
     - Class Components : Before the introduction of Hooks in react 16.8, this was the only way to create components with state and access lifecycle methods. 
        They required using the class keyword to extend 'React.Component' and after a more verbose syntax
        [text](components/class_component.jsx)
     - Functional Components : initially used for stateless components (preseentational coponents), the introduction fo hooks has enabled the use of local state , side effects  and otherReact features , making functional components almoxt universally preferred for their concise syntax and ease of maintenance. 
        [text](components/functional_components.jsx)
        
While class componets provide all React features via an object-oriented syntax, functional components with Hooks are now favoured for their simplicity and expressiveness.


