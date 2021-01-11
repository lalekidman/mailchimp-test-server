export const DB_HOST = process.env.DB_HOST || 'localhost:27017'
export const DB_NAME = process.env.DB_NAME || 'mailchimps'
export const SERVER_PORT = process.env.DB_PORT || 6080
export const KAFKA_HOST = process.env.KAFKA_HOST || ''
export const DYNAMIC_LINK_API_KEY = process.env.DYNAMIC_LINK_API_KEY || ''
export const MAILCHIMP_API_KEY = process.env.MAILCHIMP_API_KEY || ''
export const SEARCH_VARIABLE_TYPES = {
  MOBILE_NUMBER: 3
}
export enum REQUEST_LOCATION_TYPES {
  BODY = 'body',
  PARAM ='param',
  QUERY = 'query',
  COOKIES = 'cookies',
  HEADERS = 'headers',
  SYSTEM = 'system',
  DATABASE = 'database'
}