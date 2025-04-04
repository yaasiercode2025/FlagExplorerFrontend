import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CountryDetailsPopupComponent } from './country-details-popup.component';
import { MatDialogModule, MatDialogRef } from '@angular/material/dialog';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { CountryModel } from 'src/app/models/country-model.model';

describe('CountryDetailsPopupComponent', () => {
  let component: CountryDetailsPopupComponent;
  let fixture: ComponentFixture<CountryDetailsPopupComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CountryDetailsPopupComponent ],      
      imports:[MatDialogModule],
      providers:[{
        provide: MatDialogRef,
        useValue: { close: jasmine.createSpy('close') } 
      },
        {
          provide: MAT_DIALOG_DATA,
          useValue: { name: "South Africa", population :"10", capital :"Cape Town", flag :"image"} 
        }
    ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CountryDetailsPopupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
