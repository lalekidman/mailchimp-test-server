import {IGeneralEntityProperties} from '../../interfaces'
export interface IMailChimpsBody {
  email: string
  firstName: string
  lastname: string
}
export interface IMailChimpsEntity extends IGeneralEntityProperties, IMailChimpsBody {
}