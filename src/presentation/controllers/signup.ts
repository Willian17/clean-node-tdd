import { MissingParamError } from '../errors/missing-param-error'
import { type HttpResponse, type HttpRequest } from '../protocols/http'
import { badRequest } from '../protocols/http-helper'

export class SignUpController {
  handle (httpRequest: HttpRequest): HttpResponse {
    const requiredFields = ['name', 'email', 'password']

    for (const field of requiredFields) {
      if (!httpRequest.body[field]) {
        return badRequest(new MissingParamError(field))
      }
    }

    return {
      statusCode: 200,
      body: {}
    }
  }
}
