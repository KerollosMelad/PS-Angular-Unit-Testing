# PS-Angular-Unit-Testing

=> Isolated unit test
- pipe
- service
- simple component 

=> shallow integration test
- test component with its template
- compenent with injected service and fake child compenent 


=> deep integration test 
- test component with its template
- compenent with injected service and real child compenent 
- service with http 



=> mocking service using  jasmine


=> TestBed 
-  The TestBed is what allows us to test both the component and its template running together. And really what's going to happen is we're going to create a special module just for testing purposes. We do that again with the TestBed object
- testBed.createComponent(CPname) => call ngOnInit automatically

=> jasmine
- use jasmine to mock 
   jasmine.createSpyObj

=> ComponentFixture 
 - A ComponentFixture is basically a wrapper for a component that's used in testing and it has a few other properties, more than just what the component itself has

=> NO_ERRORS_SCHEMA
- This special setting will tell Angular that for this module do not error if you encounter an unknown attribute or an unknown element in your HTML of the template, just ignore it. 

=> debugElement
- debugElement is a pointer at the root of our template,
- debugElement is a wrapper around the actual DOM node. Similar to the way that the fixture is a wrapper around a component, a debugElement is a wrapper around a DOM node.
- like nativeElement but has more functionality and point at the root of the template 


=> httpTestingController
- which gives us access to a prebuilt set of mocks that Angular provides for testing services that use HTTP.

=> code coverage 
ng test --no-watch --code-coverage