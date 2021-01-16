import {ComponentFixture, TestBed} from '@angular/core/testing';

import {SignInLinkComponent} from './sign-in-link.component';

describe('SignInLinkComponent', () => {
    let component: SignInLinkComponent;
    let fixture: ComponentFixture<SignInLinkComponent>;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            declarations: [SignInLinkComponent]
        })
            .compileComponents();
    });

    beforeEach(() => {
        fixture = TestBed.createComponent(SignInLinkComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
