import { useMemo, useState } from 'react'

const initialValues = {
  name: '',
  email: '',
  message: '',
}

const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

function validate(values) {
  const nextErrors = {}

  if (!values.name.trim()) {
    nextErrors.name = 'Name is required.'
  }

  if (!values.email.trim()) {
    nextErrors.email = 'Email is required.'
  } else if (!emailPattern.test(values.email.trim())) {
    nextErrors.email = 'Please enter a valid email address.'
  }

  if (!values.message.trim()) {
    nextErrors.message = 'Project brief is required.'
  } else if (values.message.trim().length < 20) {
    nextErrors.message = 'Please share at least 20 characters so we can scope your project.'
  }

  return nextErrors
}

function useContactForm() {
  const [values, setValues] = useState(initialValues)
  const [errors, setErrors] = useState({})
  const [touched, setTouched] = useState({})
  const [status, setStatus] = useState('idle')

  const hasErrors = useMemo(() => Object.keys(errors).length > 0, [errors])

  const handleChange = (event) => {
    const { name, value } = event.target
    setValues((current) => ({ ...current, [name]: value }))

    if (status !== 'idle') {
      setStatus('idle')
    }

    setErrors((current) => {
      if (!current[name]) {
        return current
      }

      const nextValues = { ...values, [name]: value }
      return validate(nextValues)
    })
  }

  const handleBlur = (event) => {
    const { name } = event.target
    setTouched((current) => ({ ...current, [name]: true }))
    setErrors(validate(values))
  }

  const handleSubmit = async (event) => {
    event.preventDefault()

    const validation = validate(values)
    setTouched({ name: true, email: true, message: true })
    setErrors(validation)

    if (Object.keys(validation).length > 0) {
      setStatus('error')
      return
    }

    setStatus('submitting')
    await new Promise((resolve) => {
      setTimeout(resolve, 950)
    })

    setStatus('success')
    setValues(initialValues)
    setErrors({})
    setTouched({})
  }

  return {
    values,
    errors,
    touched,
    status,
    hasErrors,
    handleBlur,
    handleChange,
    handleSubmit,
  }
}

export default useContactForm
