import { MissingParamError } from '../errors/missing-param-error'
import { type HttpResponse, type HttpRequest } from '../protocols/http'
import { badRequest } from '../protocols/http-helper'

export class SignUpController {
  handle (httpRequest: HttpRequest): HttpResponse {
    if (!httpRequest.body.name) {
      return badRequest(new MissingParamError('name'))
    }
    if (!httpRequest.body.email) {
      return badRequest(new MissingParamError('email'))
    }

    return {
      statusCode: 200,
      body: {}
    }
  }
}
