
import ContactForm from "../components/contacts/contact-form";
import ContactInfo from "../components/contacts/contact-info";
import ContactMap from "../components/contacts/contact-map";
export default function ContactPage() {
  return (
    <main className="bg-[#161616]">
      {/* Hero */}
      <section className="py-20 text-white">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-5xl font-bold">Contact Us</h1>
          <p className="mt-4 text-lg text-orange-100">
            We'd love to hear from you. Feel free to contact us anytime.
          </p>
        </div>
      </section>

      {/* Contact */}
      <section className="container mx-auto bg-[#111] px-4 py-10">
        <div className="grid gap-10 lg:grid-cols-2">
          <ContactInfo />
          <ContactForm />
        </div>
      </section>
      {/* Map */}
      <ContactMap />
    </main>
  );
}