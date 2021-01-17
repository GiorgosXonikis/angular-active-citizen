import {async, ComponentFixture, TestBed} from '@angular/core/testing';
import {ConfirmPasswordResetComponent} from './confirm-password-reset.component';
import {CommonTestingModules} from '../../../../tests/common-testing.modules';


describe('ConfirmPasswordResetComponent', () => {
    let component: ConfirmPasswordResetComponent;
    let fixture: ComponentFixture<ConfirmPasswordResetComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            imports: [CommonTestingModules],
            declarations: [ConfirmPasswordResetComponent]
        })
            .compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(ConfirmPasswordResetComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
