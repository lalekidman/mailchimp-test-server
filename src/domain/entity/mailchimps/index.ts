import {IMailChimpsEntity, IMailChimpsBody} from './interfaces'
import {
  IGeneralEntityDependencies
} from '../../interfaces'
export * from './interfaces'
interface IMCDeps extends IGeneralEntityDependencies {

}
export default ({generateId}: IMCDeps) => (
  class MailChimpsEntity implements IMailChimpsEntity {

    public readonly _id: string = ''
    private _email: string = ''
    private _firstName: string = ''
    private _lastname: string = ''
    public readonly createdAt!: number
    public readonly updatedAt!: number
    constructor (data: Partial<IMailChimpsEntity>) {
      let {
        _id = '',
        email = '',
        firstName = '',
        lastname= '',
        createdAt = Date.now(),
        updatedAt = Date.now()
      } = data
      if (!_id) {
        _id = generateId()
      }
      this._id = _id
      this.firstName = firstName
      this.lastname = lastname
      this.createdAt = createdAt
      this.updatedAt = updatedAt
      this.email = email
    }

    /**
     * Getter email
     * @return {string }
     */
	public get email(): string  {
		return this._email;
	}

    /**
     * Getter firstName
     * @return {string }
     */
	public get firstName(): string  {
		return this._firstName;
	}

    /**
     * Getter lastname
     * @return {string }
     */
	public get lastname(): string  {
		return this._lastname;
	}

    /**
     * Setter email
     * @param {string } value
     */
	public set email(value: string ) {
		this._email = value;
	}

    /**
     * Setter firstName
     * @param {string } value
     */
	public set firstName(value: string ) {
		this._firstName = value;
	}

    /**
     * Setter lastname
     * @param {string } value
     */
	public set lastname(value: string ) {
		this._lastname = value;
	}
  }
)