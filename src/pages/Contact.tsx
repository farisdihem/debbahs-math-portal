
import { useEffect } from 'react';
import Layout from '../components/layout/Layout';
import ContactForm from '../components/contact/ContactForm';
import ContactInfo from '../components/contact/ContactInfo';
import SectionAnimation from '../components/ui/SectionAnimation';

const Contact = () => {
  useEffect(() => {
    // Scroll to top when component mounts
    window.scrollTo(0, 0);
  }, []);

  return (
    <Layout>
      <div className="bg-gray-50 py-16">
        <div className="container mx-auto px-4">
          <SectionAnimation>
            <div className="text-center mb-12">
              <h1 className="text-4xl font-bold text-primary mb-4">اتصل بنا</h1>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                نحن هنا للإجابة على جميع استفساراتك. لا تتردد في التواصل معنا من خلال النموذج أدناه أو باستخدام معلومات الاتصال المتوفرة.
              </p>
            </div>
          </SectionAnimation>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <SectionAnimation animationType="right">
              <ContactInfo />
            </SectionAnimation>

            <SectionAnimation animationType="left">
              <div className="bg-white rounded-lg shadow-md p-6">
                <h2 className="text-2xl font-bold text-primary mb-6">أرسل لنا رسالة</h2>
                <ContactForm />
              </div>
            </SectionAnimation>
          </div>

          <SectionAnimation className="mt-12">
            <div className="bg-white rounded-lg shadow-md p-6 overflow-hidden">
              <h2 className="text-2xl font-bold text-primary mb-6">موقعنا</h2>
              <div className="aspect-video">
                <iframe 
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d12767.942906826317!2d3.0531497672645605!3d36.7534193417055!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x128fb3c5559705c7%3A0x6afb9f445e1ecd06!2sAlgiers%2C%20Algeria!5e0!3m2!1sen!2sus!4v1684433952127!5m2!1sen!2sus"
                  width="100%" 
                  height="100%" 
                  style={{ border: 0 }} 
                  allowFullScreen 
                  loading="lazy" 
                  referrerPolicy="no-referrer-when-downgrade"
                  title="خريطة الموقع"
                ></iframe>
              </div>
            </div>
          </SectionAnimation>
        </div>
      </div>
    </Layout>
  );
};

export default Contact;
