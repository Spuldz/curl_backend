import { CustomAPIError } from "./custom-error";
import StatusCodes from 'http-status-codes'

export class Unauthenticated extends CustomAPIError{
    statusCode:number
    constructor(message: string){
        super(message)
        this.statusCode = StatusCodes.UNAUTHORIZED
    }
}