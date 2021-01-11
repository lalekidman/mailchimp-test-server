import { IMailLogsBody } from "../../../domain/entity/mailchimps";
import http from 'axios'
import { MAILCHIMP_API_KEY } from "../../utils/constants";

// const mcData = JSON.stringify(mailData)

export default async (data: IMailLogsBody) => {
  try {
    const {
      recipients,
      senderEmail,
      senderName
    } = data
    const members = recipients.split(',').map((email) => {
      return {
        email_address: email.toString().trim(),
        status: 'pending'
      }
    })
    const mailData = {
      members: members,
    }
    const options = {
      method: 'POST',
      url: 'https://us7.api.mailchimp.com/3.0/lists/e8bd12c2a8',
      headers: {
        Authorization: `auth ${MAILCHIMP_API_KEY}`
      },
      data: mailData
    }
    const response = await http(options)
    // if (response.data.errors && Array.isArray(response.data.errors) && response.data.errors.length >= 1) {
    //   throw response.data.errors[0]
    // }
    return true
  } catch (error) {
    throw error
  }
}