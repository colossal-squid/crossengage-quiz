import { Injectable } from '@angular/core';
import { HttpClient }  from '@angular/common/http';
import { Observable } from 'rxjs/internal/Observable';
import { map, mergeMap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class QuestionsService {
  private readonly SERVICE_BASE_PATH = 'https://us-central1-quizengage.cloudfunctions.net';

  constructor(private http: HttpClient) { }

  private getQuestion():Observable<QuestionModel> {
    return <Observable<QuestionModel>>this.http.get(`${this.SERVICE_BASE_PATH}/getRandomQuestion`);
  }

  private getAnswers(question:QuestionModel):Observable<QuestionAndAnswerModel> {
    return <Observable<QuestionAndAnswerModel>> this.http.get(`${this.SERVICE_BASE_PATH}/getAnswers?cat=${question.category}`).pipe(map(response=>{
      return {
        question: question.text,
        answers: response,
        answerId: question.answerId
      };
    }))
  }
  
  public getQuestionAndAnswers():Observable<any> {
    return this.getQuestion().pipe(
      mergeMap((question:QuestionModel) => this.getAnswers(question))
    );
  }
}

export interface QuestionModel {
  answerId: string,
  category: string,
  id: string,
  text: string
}

export interface AnswerModel {
  id: string,
  label: string
}

export interface QuestionAndAnswerModel {
  answers:AnswerModel[],
  question: string,
  answerId: string
}