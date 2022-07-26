import { HttpClient, HttpErrorResponse } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { catchError, Subject, tap, throwError } from "rxjs";
import { User } from "../models/user.model";

export interface AuthResponseData {
    kind: string,
    idToken: string,
    email: string,
    refreshToke: string,
    expiresIn: string,
    localId: string,
    registered?: boolean
}

@Injectable({ providedIn: 'root' })
export class AuthService {
    user = new Subject<User>()

    constructor(private http: HttpClient) {

    }

    signUp(email: string, password: string) {
        return this.http.post<AuthResponseData>('https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=[API_KEY]', {
            email: email,
            password: password,
            returnSecureToken: true
        })
            .pipe(
                catchError(this.handleErrorResponse),
                tap(responseData => {
                    this.handleAuthentication(
                        responseData.email,
                        responseData.localId,
                        responseData.idToken,
                        +responseData.expiresIn
                    )
                })
            );
    }

    login(email: string, password: string) {
        return this.http.post<AuthResponseData>('https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=[API_KEY]', {
            email: email,
            password: password,
            returnSecureToken: true
        })
            .pipe(catchError(this.handleErrorResponse),
                tap(responseData => {
                    this.handleAuthentication(
                        responseData.email,
                        responseData.localId,
                        responseData.idToken,
                        +responseData.expiresIn
                    )
                })
            );
    }

    private handleAuthentication(
        email: string,
        userId: string,
        token: string,
        expiresIn: number
    ) {
        const expirationDate = new Date(new Date().getTime() + expiresIn * 1000);
        const user = new User(email, userId, token, expirationDate);
        this.user.next(user);
    }

    private handleErrorResponse(errorRes: HttpErrorResponse) {
        let errorMessage = 'An unknown error ocurred!'
        if (!errorRes.error || !errorRes.error.error) {
            return throwError(errorMessage);
        }
        switch (errorRes.error.error.message) {
            case 'EMAIL_EXISTS':
                errorMessage = 'This email already exists!'
                break;
            case 'EMAIL_NOT_FOUND':
                errorMessage = 'This email does not exist';
                break;
            case 'INVALID_PASSWORD':
                errorMessage = 'This password is not correct';
                break
            default:
                break;
        }
        return throwError(errorMessage);
    }
}