import { Component, OnInit } from '@angular/core';

import { FormModel } from '../../models/FormModel'
import { TableService } from './table.service';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent implements OnInit {

  data: string = ''

  forms: any[] = []

  constructor(private tableService: TableService) { }

  ngOnInit(): void {
   this.getFormData()
  }

  getFormData(): any {
    this.tableService.getForms().subscribe((res: FormModel[]) => {
       this.forms = res
    })
  }

  deleteForm(id: number) {
    this.tableService.deleteForm(id).subscribe(() => {
      this.getFormData()
      console.log('form deleted')
    })
  }

}
