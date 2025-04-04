import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { CountryModel } from 'src/app/models/country-model.model';

@Component({
  selector: 'app-country-details-popup',
  templateUrl: './country-details-popup.component.html',
  styleUrls: ['./country-details-popup.component.css']
})
export class CountryDetailsPopupComponent implements OnInit{

  constructor(@Inject(MAT_DIALOG_DATA) public data: CountryModel){}
  ngOnInit(): void {}

}
