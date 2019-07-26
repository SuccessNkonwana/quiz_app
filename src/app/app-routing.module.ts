import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', loadChildren: './home/home.module#HomePageModule' },
  { path: 'quiz', loadChildren: './quiz/quiz.module#QuizPageModule' },
  { path: 'category1', loadChildren: './pages/category1/category1.module#Category1PageModule' },
  { path: 'category2', loadChildren: './pages/category2/category2.module#Category2PageModule' },
  { path: 'category3', loadChildren: './pages/category3/category3.module#Category3PageModule' },
  { path: 'results', loadChildren: './pages/results/results.module#ResultsPageModule' },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
