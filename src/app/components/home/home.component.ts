import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { CountryService } from 'src/app/service/country.service';
import { CountryDetailsPopupComponent } from '../country-details-popup/country-details-popup.component';
import { CountryModel } from 'src/app/models/country-model.model';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  countries: any[] = [];
  countryDetails : CountryModel[];
  isModalOpen = false;

  constructor(private countryService : CountryService, private dialog: MatDialog) { }

  ngOnInit(): void {
      this.countryService.getAllCountryFlags().subscribe(data => {
        this.countries = data;
      }, error => {
          console.error('Error fetching countries', error);
    });
  }

  onImageClick(name : string) {
    this.countryService.getCountryDetailsByName(name).subscribe(data => {
      this.countryDetails = data;
      this.openPopup();
    }, error => {
        console.error('Error fetching country details', error);
  });


  }

  openPopup() {
    const dialogConfig = new MatDialogConfig();
    dialogConfig.width = "300px";
    dialogConfig.data = this.countryDetails;
    this.dialog.open(CountryDetailsPopupComponent,dialogConfig);
  }

}
