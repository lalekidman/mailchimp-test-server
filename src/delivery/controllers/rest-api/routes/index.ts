import {Request, Response, NextFunction, Router} from 'express'
import * as HttpStatus from 'http-status-codes'
// import { requestParamsValidatorMiddleware } from '../../helpers'
// import { IndexPostValidationPipeline } from '../../validator'
const ROOT_DIR = `/../../../../..`
// import MailLogsModel, {IMailChimpsCollectionModel} from '../../../../app-plugins/persistence/repositories/models/mailer'
import {
  mailLogs
} from '../../services-configuration/mail-logs'
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
      console.log('req.body :>> ', req.body);
      const q = await mailLogs()
        .sendMail(req.body)
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