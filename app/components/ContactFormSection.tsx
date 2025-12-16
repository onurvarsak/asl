"use client"

import { useState } from "react"

export default function ContactFormSection() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    phone: "",
    message: ""
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<{
    type: "success" | "error" | null
    message: string
  }>({ type: null, message: "" })

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    setSubmitStatus({ type: null, message: "" })

    try {
      // API'ye form verilerini gönder
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(formData)
      })

      if (response.ok) {
        // Email içeriğini hazırla
        const subject = `Kontaktformular: ${formData.name}`
        const body = `
Name: ${formData.name}
E-Mail: ${formData.email}
Firma: ${formData.company}
Telefon: ${formData.phone}

Nachricht:
${formData.message}
        `

        // mailto: linki ile email client'ını aç
        const mailtoLink = `mailto:info@als-aknurgmbh.com?subject=${encodeURIComponent(
          subject
        )}&body=${encodeURIComponent(body)}`

        window.location.href = mailtoLink

        setSubmitStatus({
          type: "success",
          message:
            "Ihr E-Mail-Client wird geöffnet. Bitte senden Sie die Nachricht."
        })

        // Form'u temizle
        setFormData({
          name: "",
          email: "",
          company: "",
          phone: "",
          message: ""
        })
      } else {
        setSubmitStatus({
          type: "error",
          message:
            "Es gab ein Problem beim Senden Ihrer Nachricht. Bitte versuchen Sie es erneut."
        })
      }
    } catch (error) {
      console.error("Error submitting form:", error)
      setSubmitStatus({
        type: "error",
        message:
          "Es gab ein Problem beim Senden Ihrer Nachricht. Bitte versuchen Sie es erneut."
      })
    } finally {
      setIsSubmitting(false)
    }
  }

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  return (
    <section className='w-full bg-white py-16 px-8'>
      <div className='max-w-5xl mx-auto'>
        {/* KONTAKT Header */}
        <div className='flex justify-center mb-12'>
          <div className='bg-black text-white px-8 py-3 text-[26px] font-black leading-none tracking-[0.28em] text-center'>
            KONTAKT
          </div>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className='space-y-8'>
          {/* Name and Company Row */}
          <div className='grid grid-cols-1 lg:grid-cols-2 gap-8'>
            <div>
              <label className='block text-[18px] leading-[41.23px] font-bold mb-2 uppercase text-[#000000]'>
                Name und Nachname
              </label>
              <input
                type='text'
                name='name'
                value={formData.name}
                onChange={handleChange}
                placeholder='Name Nachname'
                className='w-full border-b border-gray-300 py-2 focus:outline-none focus:border-black placeholder-gray-400 text-[#000000]'
              />
            </div>
            <div>
              <label className='block text-[18px] leading-[41.23px] font-bold mb-2 uppercase text-[#000000]'>
                Firmenname
              </label>
              <input
                type='text'
                name='company'
                value={formData.company}
                onChange={handleChange}
                placeholder='Ihr Unternehmen'
                className='w-full border-b border-gray-300 py-2 focus:outline-none focus:border-black placeholder-gray-400 text-[#000000]'
              />
            </div>
          </div>

          {/* Email and Phone Row */}
          <div className='grid grid-cols-1 lg:grid-cols-2 gap-8'>
            <div>
              <label className='block text-[18px] leading-[41.23px] font-bold mb-2 uppercase text-[#000000]'>
                E-Mail
              </label>
              <input
                type='email'
                name='email'
                value={formData.email}
                onChange={handleChange}
                placeholder='Ihr E-Mail'
                className='w-full border-b border-gray-300 py-2 focus:outline-none focus:border-black placeholder-gray-400 text-[#000000]'
              />
            </div>
            <div>
              <label className='block text-[18px] leading-[41.23px] font-bold mb-2 uppercase text-[#000000]'>
                Telefonnummer
              </label>
              <input
                type='tel'
                name='phone'
                value={formData.phone}
                onChange={handleChange}
                placeholder='+49330323245'
                className='w-full border-b border-gray-300 py-2 focus:outline-none focus:border-black placeholder-gray-400 text-[#000000]'
              />
            </div>
          </div>

          {/* Message */}
          <div>
            <label className='block text-sm font-bold mb-2 uppercase text-[#000000]'>
              Ihre Nachricht
            </label>
            <textarea
              name='message'
              value={formData.message}
              onChange={handleChange}
              placeholder='Ihre Nachricht'
              rows={6}
              className='w-full border-b border-gray-300 py-2 focus:outline-none focus:border-black placeholder-gray-400 resize-none text-[#000000]'
            />
          </div>

          {/* Status Message */}
          {submitStatus.type && (
            <div
              className={`text-center p-4 rounded-lg ${
                submitStatus.type === "success"
                  ? "bg-green-100 text-green-800"
                  : "bg-red-100 text-red-800"
              }`}
            >
              {submitStatus.message}
            </div>
          )}

          {/* Submit Button */}
          <div className='flex justify-center'>
            <button
              type='submit'
              disabled={isSubmitting}
              className='bg-gray-700 hover:bg-gray-800 disabled:bg-gray-400 disabled:cursor-not-allowed text-white font-bold py-4 px-16 rounded-full text-sm uppercase tracking-wide transition-colors'
            >
              {isSubmitting ? "Wird gesendet..." : "Nachricht Senden"}
            </button>
          </div>
        </form>

        {/* Contact Info */}
        <div className='mt-16 pt-8 border-t border-gray-300'>
          <div className='flex flex-col lg:flex-row justify-center items-center gap-8 lg:gap-16'>
            <a
              href='tel:+4920393311010'
              className='flex items-center gap-3 text-2xl lg:text-3xl font-bold text-[#000000] hover:opacity-70 transition-opacity'
            >
              <span>📞</span>
              <span>+49 203 933 11 010</span>
            </a>
            <div className='hidden lg:block w-px h-12 bg-gray-300'></div>
            <a
              href='mailto:info@als-aknurgmbh.com'
              className='flex items-center gap-3 text-2xl lg:text-3xl font-bold text-[#000000] hover:opacity-70 transition-opacity'
            >
              <span>✉️</span>
              <span>info@als-aknurgmbh.com</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
