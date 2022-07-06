# Object Orieted Programming in Typescript

> it is a programming technique where objects becoming the building block of solving a problem. Each object has two parts.

## Object

> it consists of a state and operations. It is a unit that contains some data represented by properties and operations represented by methods
>
> > e.g. A person can object and we represent the properties of a person with name, address, email etc
> > we then have fuctions like talk() and dance() which become Methods to the Person object. Each method performs a single task

<u> **_ Classes _** </u>

> this are blueprints of creating an objects.

<u> Constructor </u>

> Each class will have constructor and a constructor will have initialisation parameters

**_ Method _**

> each constructor will have a method

### Creating an Object

> > use the new() operators to creat an oject out of a class

> > let <objectname> = new <Objectname(para1, para2, etc );>
> >
> > > this.para1 = 1;

**_ Read Only and Optional Properties _**

> prefix the property with the read-only modifier

> a ? can be append to property to make it optional

**_ Access Control Keywords _**

- public
- private
- protected

> > All properties are public by default,
> >
> > > the private property is prefixed by an \_

**_ Getters and Setters_**

> > The getters and setters allow you to control the access to the properties of a class.

> For each property:
>
> > A getter method returns the value of the property’s value. A getter is also called an accessor.
> >
> > > A setter method updates the property’s value. A setter is also known as a **_ mutator_**.
> > > A getter method starts with the keyword **_get_** and a setter method starts with the keyword **_set_**

**_ Index Signatures _**

> > The idea of the index signatures is to type objects of unknown structure when you only know the key and value types.

**_Static Members_**

> > is shared among all instances of a class.

**_ Inheritance _**

> reuse the properties and methods of another class.
> use the **_ super _** to call a base class
> each clas must be in a separate file as a best practice

**_ Method Overriding _**

> is a process of overthrowing a method of super class by method of same name and parameters in sub class.

**_ Polymorphism _**

> is the ability to create a class that has more than one form
> or classes have the same methods but different implementations.

**_ Private vs Protected Members _**

> A private member cannot be accessed outside of its containing class and a Protected members cannot be accessed outside of its containing class

**_ Abstract Classes and Methods _**

> An abstract class is a class which may have some unimplemented methods

**_ Interfaces _**

> define the contracts within the code

**_ Interfaces vs Types _**

> both can be used to describe the shape of an object
