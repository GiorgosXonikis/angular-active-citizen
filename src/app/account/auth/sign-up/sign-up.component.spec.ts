import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import {SignUpComponent} from './sign-up.component';
import {CommonTestingModules} from '../../../tests/common-testing.modules';

describe('SignupComponent', () => {
    let component: SignUpComponent;
    let fixture: ComponentFixture<SignUpComponent>;

    beforeEach(waitForAsync(() => {
        TestBed.configureTestingModule({
            imports: [CommonTestingModules],
            declarations: [SignUpComponent]
        })
            .compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(SignUpComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
