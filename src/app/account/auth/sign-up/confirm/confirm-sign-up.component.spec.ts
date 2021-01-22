import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import {ConfirmSignUpComponent} from './confirm-sign-up.component';
import {CommonTestingModules} from '../../../../tests/common-testing.modules';

describe('ConfirmComponent', () => {
    let component: ConfirmSignUpComponent;
    let fixture: ComponentFixture<ConfirmSignUpComponent>;

    beforeEach(waitForAsync(() => {
        TestBed.configureTestingModule({
            imports: [CommonTestingModules],
            declarations: [ConfirmSignUpComponent]
        })
            .compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(ConfirmSignUpComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
