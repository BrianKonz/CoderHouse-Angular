import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { StudentsComponent } from './components/students/students.component';
import { FooterComponent } from './components/footer/footer.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FormularioReactivoComponent } from './components/formulario-reactivo/formulario-reactivo.component';
import { RouterModule, Routes } from '@angular/router';
import { ContactoComponent } from './components/contacto/contacto.component';
import { HeaderComponent } from './components/header/header.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material.module';
import { CursosComponent } from './components/cursos/cursos.component';
import { BooleanToTextPipe } from './pipe/boolean-to-text.pipe';
import { BooleanStyleDirective } from './directives/boolean-style.directive';
import { FiltroCursosPipe } from './pipe/filtro-cursos.pipe';


const appRoutes:Routes=[
  {path:'', component:StudentsComponent},
  {path:'login', component:FormularioReactivoComponent},
  {path:'cursos', component:CursosComponent},
  {path:'contacto', component:ContactoComponent},
  ];

@NgModule({
  declarations: [
    AppComponent,
    StudentsComponent,
    FooterComponent,
    FormularioReactivoComponent,
    ContactoComponent,
    HeaderComponent,
    BooleanToTextPipe,
    BooleanStyleDirective,
    CursosComponent,
    FiltroCursosPipe
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forRoot(appRoutes),
    BrowserAnimationsModule,
    MaterialModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
