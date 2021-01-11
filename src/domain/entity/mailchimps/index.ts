import {IMailLogsEntity, IMailLogsBody} from './interfaces'
import {
  IGeneralEntityDependencies
} from '../../interfaces'
export * from './interfaces'
export * from './repository-gateway-interfaces'
interface IMCDeps extends IGeneralEntityDependencies {

}
export default ({generateId}: IMCDeps) => (
  class MailChimpsEntity implements IMailLogsEntity {

    public readonly _id: string = ''
    private _recipients: string = ''
    private _senderEmail: string = ''
    private _senderName: string = ''
    public readonly createdAt!: number
    public readonly updatedAt!: number
    constructor (data: Partial<IMailLogsEntity>) {
      let {
        _id = '',
        recipients = '',
        senderEmail = '',
        senderName= '',
        createdAt = Date.now(),
        updatedAt = Date.now()
      } = data
      if (!_id) {
        _id = generateId()
      }
      this._id = _id
      this.senderEmail = senderEmail
      this.senderName = senderName
      this.createdAt = createdAt
      this.updatedAt = updatedAt
      this.recipients = recipients
    }

    /**
     * Getter email
     * @return {string }
     */
	public get recipients(): string  {
		return this._recipients;
	}

    /**
     * Getter senderEmail
     * @return {string }
     */
	public get senderEmail(): string  {
		return this._senderEmail;
	}

    /**
     * Getter senderName
     * @return {string }
     */
	public get senderName(): string  {
		return this._senderName;
	}

    /**
     * Setter email
     * @param {string } value
     */
	public set recipients(value: string ) {
		this._recipients = value;
	}

    /**
     * Setter senderEmail
     * @param {string } value
     */
	public set senderEmail(value: string ) {
		this._senderEmail = value;
	}

    /**
     * Setter senderName
     * @param {string } value
     */
	public set senderName(value: string ) {
		this._senderName = value;
	}

  }
)