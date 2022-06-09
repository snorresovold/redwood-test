import { Link, routes } from '@redwoodjs/router'
import { MetaTags } from '@redwoodjs/web'
import { Form, Submit, TextAreaField, FieldError } from '@redwoodjs/forms'

const ContactPage = () => {
  const onSubmit = (data) => {
    console.log(data)
  }
  return (
    <>
      <MetaTags title="Contact" description="Contact page" />

      <Form onSubmit={onSubmit}>
        <label>name</label>
        <TextAreaField name='name' />
        <FieldError name="name"/>

        <label>email</label>
        <TextAreaField name='email' />
        <FieldError name="email"/>

        <label>message</label>
        <TextAreaField name='message' />
        <FieldError name="message"/>
        
        <Submit>Send message</Submit>
      </Form>
    </>
  )
}

export default ContactPage
