import {ComponentFixture, TestBed} from '@angular/core/testing';

import {PasswordValidationComponent} from './password-validation.component';
import {CommonTestingModules} from '../../../tests/common-testing.modules';
import {ReactiveFormsModule} from '@angular/forms';

xdescribe('PasswordValidationComponent', () => {
    let component: PasswordValidationComponent;
    let fixture: ComponentFixture<PasswordValidationComponent>;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            imports: [ReactiveFormsModule],
            declarations: [PasswordValidationComponent]
        })
            .compileComponents();
    });

    beforeEach(() => {
        fixture = TestBed.createComponent(PasswordValidationComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
