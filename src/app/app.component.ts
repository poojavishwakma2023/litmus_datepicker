import { Component, inject, TemplateRef, OnInit } from '@angular/core';
import * as moment from 'moment';  // Import moment library
import { MatDialog } from '@angular/material/dialog';
import { ModalDismissReasons, NgbDatepickerModule, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { StartDate } from 'ngx-daterangepicker-material/daterangepicker.component';

interface DateRange {
  label: string;
  dates: [moment.Moment, moment.Moment];
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})



export class AppComponent implements OnInit {
  title = 'ngx-anCalender';
  showModal: boolean = false;
  selected !: { startDate: moment.Moment, endDate: moment.Moment };
  select: any;
  selectedRange!: string;





  // constructor() {}
  constructor(private modalService: NgbModal) { }
  //  ngOnInit(): void {
  //   // Replace this with your actual StartDate
  //   setTimeout(() => {
  //     console.log('start_date:', this.selected);
  //   },5000);
  // }



  ngOnInit(): void {
    // Replace this with your actual StartDate
    setTimeout(() => {
      // Convert Dayjs objects to Date objects with the end of the day
      // const startDate: Date = this.selected.startDate.toDate();

      // // Set the end time to the end of the selected day
      // const endDate: Date = this.selected.endDate.endOf('day').toDate();

      console.log('start_date:', moment().subtract(6, 'days'),);
    }, 5000);
  }



  onModalClick(event: Event): void {
    const target = event.target as HTMLElement;
  
    // Check if the click occurred outside the modal content and not inside the datepicker input or its container
    const isOutsideModal = target.classList.contains('modal') && !this.isInsideDatepicker(target);
  
    if (isOutsideModal) {
      // Click is outside the modal content and not inside the datepicker input or its container, close the modal
      this.closeModal();
    }
  }
  
  isInsideDatepicker(target: HTMLElement): boolean {
    // Check if the click target is the datepicker input or its container
    const datepickerInput = document.querySelector('.calender-input');
    return !!datepickerInput && (datepickerInput === target || datepickerInput.contains(target));
  }
  
  

  closeModal(): void {
    this.showModal = false;
   
  }
  openModal(): void {
    this.showModal = true

  }

  choosedDate(event: any) {
    console.log('date chaged+++++',event)
   
  }

  datesUpdated(event: any) {
  }

  rangeClicked(): void {
  }
  openDatepicker() {
    // Access the directive and open the datepicker
    const datepickerDirective: any = document.querySelector('input[ngxDaterangepickerMd]');
    if (datepickerDirective) {
      datepickerDirective.click();
    }
  }


  ranges: any = {
    Today: [moment(), moment()],
    Yesterday: [moment().subtract(1, 'days'), moment().subtract(1, 'days')],
    'This Week': [moment().subtract(6, 'days'), moment()],
    'This Month': [moment().startOf('month'), moment().endOf('month')],
    'This Year': [moment().startOf('year'), moment().endOf('year')],
    'This Quarter': [
      moment().subtract(3, 'months').startOf('quarter'),
      moment().subtract(1, 'months').endOf('quarter')
    ],
  };

  updateSelectedRange(rangeName: string): void {
    if (rangeName === 'This Week') {
      this.selectedRange = 'This Week';
      this.selected = {
        startDate: moment().subtract(6, 'days'),
        endDate: moment()
      };
    }
    else if (rangeName === 'This Month') {
      this.selected = {
        startDate: moment().startOf('month'),
        endDate: moment().endOf('month')
      };
    }
    else if (rangeName === 'This Year') {
      this.selected = {
        startDate: moment().startOf('year'),
        endDate: moment().endOf('year')
      };
    }
    else if (rangeName === 'This Quarter') {
      this.selected = {
        startDate: moment().subtract(3, 'months').startOf('quarter'),
        endDate: moment().endOf('month')
      };
    }
    console.log("selected--time---", this.select)

  }

  applyCustomRange() {
    // Handle the selected range
    if (this.selectedRange) {
      this.select = this.ranges[this.selectedRange];
    }
  }



  closeResult = '';

  openBackDropCustomClass(content: TemplateRef<any>) {
    this.modalService.open(content, { backdropClass: 'light' });
  }



  selectedColor: string = ''; // Add this line to define the selectedColor variable

  radioStyles = {
    'background-color': 'black',
    'color': 'black'
  };
}
