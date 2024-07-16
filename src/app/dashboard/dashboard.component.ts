import { Component } from "@angular/core";
import { ContactForm } from "../Model/form";
import { DashboardServiceService } from "./dashboard-service.service";
import { HttpClient } from "@angular/common/http";

@Component({
  selector: "app-dashboard",
  templateUrl: "./dashboard.component.html",
  styleUrls: ["./dashboard.component.css"],
})
export class DashboardComponent {
  data: ContactForm[] = [];

  constructor(private formService: DashboardServiceService, private http: HttpClient) {}

  ngOnInit() {
    this.getFormData();
  }

  getFormData() {
    this.formService.getFormData().subscribe((data) => {
      this.data = data;
      console.log(data);
    });
  }
  // Delete Form Data by ID
  showConfirmDialog = false;
  taskToDelete: string | undefined;

  toggleConfirmDialog(id: string | undefined) {
    this.taskToDelete = id;
    this.showConfirmDialog = !this.showConfirmDialog;
  }

  confirmDelete() {
    if (this.taskToDelete) {
      this.http
        .delete(
          "https://ecubamsfishexport-default-rtdb.firebaseio.com/contactForm/" +
            this.taskToDelete +
            ".json"
        )
        .subscribe(() => {
          this.data = this.data.filter(
            (form) => form.id !== this.taskToDelete
          );
          console.log(`Deleted task with id: ${this.taskToDelete}`);
          this.taskToDelete = undefined;
          this.formService.getFormData().subscribe((res) => {
            this.data = res;
          });
        });
    }
    if (this.taskToDelete) {
      this.http
        .delete(
          "https://africantropicalfish-default-rtdb.firebaseio.com/contactForm/" +
            this.taskToDelete +
            ".json"
        )
        .subscribe(() => {
          this.data = this.data.filter((form) => form.id !== this.taskToDelete);
          console.log(`Deleted task with id: ${this.taskToDelete}`);
          this.taskToDelete = undefined;
          this.formService.getFormData().subscribe((res) => {
            this.data = res;
          });
        });
    } else {
      console.log("Task id is undefined");
    }
    this.showConfirmDialog = false;
  }

  cancelDelete() {
    this.taskToDelete = undefined;
    this.showConfirmDialog = false;
  }
}
