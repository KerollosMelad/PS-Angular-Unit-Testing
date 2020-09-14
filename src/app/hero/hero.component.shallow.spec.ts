import { NO_ERRORS_SCHEMA } from "@angular/core";
import { TestBed, ComponentFixture } from "@angular/core/testing";
import { HeroComponent } from "./hero.component";

describe('HeroComponent (shallow Tests)', () => {
    let fixture: ComponentFixture<HeroComponent>;

    beforeEach(() => {
        TestBed.configureTestingModule({
            declarations: [HeroComponent],
            schemas: [NO_ERRORS_SCHEMA]
        });
        fixture = TestBed.createComponent(HeroComponent);
    });

    it('should have the correct hero', () => {
        fixture.componentInstance.hero = { id: 1, name: 'SupperHero', strength: 3 };

        expect(fixture.componentInstance.hero.name).toEqual('SupperHero');
    });

    it('should render the hero name in an anchor tag', () => {
        fixture.componentInstance.hero = { id: 1, name: 'SupperHero', strength: 3};
        fixture.detectChanges();
    
        // let deA = fixture.debugElement.query(By.css('a'));
        // expect(deA.nativeElement.textContent).toContain('SupperHero');
    
        expect(fixture.nativeElement.querySelector('a').textContent).toContain('SupperHero');
      })
});