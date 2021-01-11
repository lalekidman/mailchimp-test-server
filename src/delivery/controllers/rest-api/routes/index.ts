import {Request, Response, NextFunction, Router} from 'express'
import * as HttpStatus from 'http-status-codes'
import http from 'axios'
import {MAILCHIMP_API_KEY} from '../../../utils/constants'
// import { requestParamsValidatorMiddleware } from '../../helpers'
// import { IndexPostValidationPipeline } from '../../validator'
const ROOT_DIR = `/../../../../..`
export default class _Router {
  /**
   * @class initiate router class
   */
  private readonly router: Router
  constructor () {
    this.router = Router({mergeParams: true})
  }
  private viewRoute = (req: Request, res: Response, next: NextFunction) => {
    res.render(__dirname.concat(`${ROOT_DIR}/success`))
  }
  private sendEmail = async (req: Request, res: Response, next: NextFunction) => {
    res.end()
    try {
      const {email} = req.body
      const mailData = {
        members: [
          {
            email_address: 'darryl@leisue.com',
            status: 'pending',
            update_existing:true
          }
        ],
        update_existing:true
      }
      // const mcData = JSON.stringify(mailData)
  
      const options = {
        method: 'POST',
        url: 'https://us7.api.mailchimp.com/3.0/lists/e8bd12c2a8',
        headers: {
          Authorization: `auth ${MAILCHIMP_API_KEY}`
        },
        data: mailData
      }
      const response = await http(options)
    } catch (error) {
      console.error('error :>> ', error);
    }
  }
  public expose () {
    this.router.post('/',
      this.sendEmail
    )
    this.router.get('/',
      this.viewRoute
    )
    return this.router
  }
}