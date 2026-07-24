'use client'

import { motion } from 'framer-motion'
import { Send } from 'lucide-react'
import { useRef, useState } from 'react'
import { toast } from 'sonner'
import emailjs from '@emailjs/browser'

export default function ContactForm() {
  const formRef = useRef<HTMLFormElement>(null)

  const [loading, setLoading] = useState(false)

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  })

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }))
  }

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    if (!formRef.current) return

    console.log('Environment Variables')
    console.log(process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID)
    console.log(process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID)
    console.log(process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY)

    try {
      setLoading(true)

      const response = await emailjs.send(
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID!,
        process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID!,
        {
          from_name: formData.name,
          from_email: formData.email,
          subject: formData.subject,
          message: formData.message,
        },
        process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY!,
      )

      console.log('SUCCESS', response)

      toast.success('Message sent successfully!', {
        description: 'Thank you for reaching out. I will get back to you soon.',
      })

      setFormData({
        name: '',
        email: '',
        subject: '',
        message: '',
      })
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
    } catch (error: any) {
      console.error('EMAILJS ERROR', error)

      toast.error('Failed to send message!', {
        description: error?.text || error?.message || 'Please try again later.',
      })
    } finally {
      setLoading(false)
    }
  }

  return (
    <motion.div
      initial={{
        opacity: 0,
        x: 40,
      }}
      whileInView={{
        opacity: 1,
        x: 0,
      }}
      viewport={{ once: true }}
      transition={{
        duration: 0.6,
      }}
      className='relative overflow-hidden rounded-3xl border border-white/10 bg-white/5 p-6 backdrop-blur-xl'
    >
      <div className='absolute -right-20 -bottom-20 h-52 w-52 rounded-full bg-cyan-500/20 blur-[100px]' />

      <div className='relative z-10'>
        <h3 className='mb-6 text-2xl font-bold text-white lg:text-3xl'>
          Send a Message
        </h3>

        <form ref={formRef} onSubmit={handleSubmit} className='space-y-5'>
          {/* Name + Email */}
          <div className='grid gap-4 md:grid-cols-2'>
            <InputField
              label='Full Name'
              name='name'
              type='text'
              value={formData.name}
              onChange={handleChange}
            />

            <InputField
              label='Email Address'
              name='email'
              type='email'
              value={formData.email}
              onChange={handleChange}
            />
          </div>

          {/* Subject */}
          <InputField
            label='Subject'
            name='subject'
            type='text'
            value={formData.subject}
            onChange={handleChange}
          />

          {/* Message */}
          <div>
            <label className='mb-2 block text-sm text-gray-300'>Message</label>

            <textarea
              name='message'
              rows={5}
              required
              value={formData.message}
              onChange={handleChange}
              placeholder='Write your message...'
              className='w-full resize-none rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-white placeholder:text-gray-500 outline-none transition focus:border-violet-500 focus:ring-2 focus:ring-violet-500/30'
            />
          </div>

          <button
            type='submit'
            disabled={loading}
            className='flex w-full items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-violet-600 to-cyan-500 px-6 py-3 font-semibold text-white transition hover:scale-[1.02] disabled:cursor-not-allowed disabled:opacity-60'
          >
            {loading ? (
              'Sending...'
            ) : (
              <>
                <Send size={18} />
                Send Message
              </>
            )}
          </button>
        </form>
      </div>
    </motion.div>
  )
}

type InputFieldProps = {
  label: string
  name: string
  type: string
  value: string
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void
}

function InputField({ label, name, type, value, onChange }: InputFieldProps) {
  return (
    <div>
      <label className='mb-2 block text-sm text-gray-300'>{label}</label>

      <input
        required
        type={type}
        name={name}
        value={value}
        onChange={onChange}
        className='h-11 w-full rounded-xl border border-white/10 bg-white/5 px-4 text-white placeholder:text-gray-500 outline-none transition focus:border-violet-500 focus:ring-2 focus:ring-violet-500/30'
      />
    </div>
  )
}
