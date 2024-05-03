import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { AllService } from 'src/app/all.service';


@Component({
  selector: 'app-shop-deteils',
  templateUrl: './shop-deteils.component.html',
  styleUrls: ['./shop-deteils.component.css']
})
export class ShopDeteilsComponent implements OnInit{

  commentForm!: FormGroup;

  constructor(private fb: FormBuilder, private commentService: AllService) { }

  ngOnInit(): void {
    this.commentForm = this.fb.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      review: ['', Validators.required]
    });
  }

  submitForm() {
    if (this.commentForm.valid) {
      const formData = this.commentForm.value;
      this.commentService.postComment(formData).subscribe(
        (response) => {

          alert('Comment Successfully Post');
          this.commentForm.reset();
        },
        (error) => {
          console.error('Error posting comment:', error);
          alert('Error posting comment. Please try again later.');
        }
      );
    } else {
      alert('Please fill out all required fields correctly.');
    }
  }

}
