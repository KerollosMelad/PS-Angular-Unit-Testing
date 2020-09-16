import { TestBed, inject } from "@angular/core/testing";
import { HeroService } from "./hero.service";
import { MessageService } from "./message.service";
import { HttpClientTestingModule, HttpTestingController } from "@angular/common/http/testing";

describe('HeroService', () => {
  let mockMessageService;
  let httpTestingController: HttpTestingController;
  let service: HeroService;

  beforeEach(() => {
    mockMessageService = jasmine.createSpyObj(['add']);

    TestBed.configureTestingModule({
      imports: [ HttpClientTestingModule ],
      providers: [
        HeroService,
        {provide: MessageService, useValue: mockMessageService}
      ]
    });

    httpTestingController = TestBed.get(HttpTestingController);             // resolve the imported sevice
    service = TestBed.get(HeroService);                                     // resolve the provide service
  });

  describe('getHero', () => {

    it('should call get with the correct URL', () => { 
            
      service.getHero(4).subscribe(console.log);

      //Expect that a single request has been made which matches the given URL, and return its mock.
      const req = httpTestingController.expectOne('api/heroes/4');
      //Resolve the request by returning a body plus additional HTTP information (such as response headers) if provided.
      req.flush({id: 4, name: 'SuperDude', strength: 100});
      //Verify that no unmatched requests are outstanding.
      httpTestingController.verify();
    });
  })
})