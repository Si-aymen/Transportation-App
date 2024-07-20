import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FormsRoutingModule } from './forms-routing.module';
import { CustomFormsModule } from 'ngx-custom-validators';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { TagInputModule } from 'ngx-chips';


import { BasicFormComponent } from './basic-form/basic-form.component';
import { TagInputsComponent } from './tag-inputs/tag-inputs.component';
import { AppImgCropperComponent } from './img-cropper/img-cropper.component';
import { ImageCropperModule } from 'ngx-img-cropper';
import { WizardComponent } from './wizard/wizard.component';
import { SharedComponentsModule } from 'src/app/shared/components/shared-components.module';
import { FormWizardModule } from 'src/app/shared/components/form-wizard/form-wizard.module';
import { TextMaskModule } from 'angular2-text-mask';
import { InputMaskComponent } from './input-mask/input-mask.component';
import { InputGroupsComponent } from './input-groups/input-groups.component';
import { FormLayoutsComponent } from './form-layouts/form-layouts.component';
import {CreateQuizComponent} from './Quiz/create-quiz/create-quiz.component';
import { TakeQuizComponent } from './Quiz/take-quiz/take-quiz.component';
import { QuizResultComponent } from './Quiz/quiz-result/quiz-result.component';
@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    CustomFormsModule,
    SharedComponentsModule,
    NgbModule,
    TagInputModule,
    ImageCropperModule,
    TextMaskModule,
    FormWizardModule,
    FormsRoutingModule,


  ],


  declarations: [BasicFormComponent, TagInputsComponent, AppImgCropperComponent, WizardComponent, InputMaskComponent, InputGroupsComponent, FormLayoutsComponent, CreateQuizComponent, TakeQuizComponent, QuizResultComponent],
})
export class AppFormsModule { }
