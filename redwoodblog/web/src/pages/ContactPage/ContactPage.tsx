import { Link, routes } from '@redwoodjs/router'
import { MetaTags } from '@redwoodjs/web'
import { Form, Submit, TextAreaField } from '@redwoodjs/forms'

const ContactPage = () => {
  return (
    <>
      <MetaTags title="Contact" description="Contact page" />

      <Form>
        <label>name</label>
        <TextAreaField name='name' />
        <label>email</label>
        <TextAreaField name='email' />
        <label>message</label>
        <TextAreaField name='message' />
        <Submit>Send message</Submit>
      </Form>
    </>
  )
}

export default ContactPage
