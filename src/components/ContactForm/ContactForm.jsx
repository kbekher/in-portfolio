import { useRef, useState } from 'react';
import { useTranslation } from 'react-i18next';
import emailjs from '@emailjs/browser';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import './ContactForm.scss';

export const ContactForm = () => {
  const { t } = useTranslation();
  const form = useRef(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [email, setEmail] = useState('');

  const handleInputChange = (e) => {
    setEmail(e.target.value);
  };

  const handleEnterKey = (e) => {
    if (e.key === 'Enter') {
      e.preventDefault();
      if (email) {
        handleSubmit(e);
      }
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    if (!email) {
      return;
    }

    if (form.current) {
      setIsSubmitting(true);
      emailjs.sendForm(
        process.env.REACT_APP_SERVICE_ID,
        process.env.REACT_APP_TEMPLATE_ID,
        form.current, process.env.REACT_APP_PUBLIC_KEY
      ).then(() => {
        setEmail('');
        toast.success(t("footerSuccessToast"));
      }, (error) => {
        toast.error(t("footerErrorToast"));
      })
        .finally(() => setIsSubmitting(false));
    }
  };

  return (
    <div className="ContactForm">
      <form
        className="ContactForm__form"
        ref={form}
        onSubmit={handleSubmit}
      >
        <input
          type="text"
          name="email"
          className="ContactForm__input"
          value={email}
          onChange={handleInputChange}
          onKeyDown={(e) => handleEnterKey(e)}
          placeholder={t("footerPlaceholder")}
        />
        <button
          type="submit"
          className="ContactForm__button"
          disabled={isSubmitting}
        >
          <span>{t("footerButton")}</span>
        </button>
      </form>

      <ToastContainer
        position="bottom-center"
        autoClose={200}
        hideProgressBar={true}
        rtl={false}
        theme="dark"
        transition="Bounce"
      />


    </div>
  );
};