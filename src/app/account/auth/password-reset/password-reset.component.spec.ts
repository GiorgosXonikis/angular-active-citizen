import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import {PasswordResetComponent} from './password-reset.component';
import {CommonTestingModules} from '../../../tests/common-testing.modules';

describe('PasswordResetComponent', () => {
    let component: PasswordResetComponent;
    let fixture: ComponentFixture<PasswordResetComponent>;

    beforeEach(waitForAsync(() => {
        TestBed.configureTestingModule({
            imports: [CommonTestingModules],

            declarations: [PasswordResetComponent]
        })
            .compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(PasswordResetComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
