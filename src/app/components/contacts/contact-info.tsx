import { MapPin, Phone, Mail, Clock } from "lucide-react";

export default function ContactInfo() {
  return (
    <div className="space-y-8 bg-[#111] rounded-md text-white">
      <div>
        <h2 className="text-4xl font-bold">Get In Touch</h2>

        <p className="mt-4 text-gray-300 leading-7">
          Have a question, want to reserve a table, or need catering services?
          Our team is always ready to help.
        </p>
      </div>

      <div className="space-y-6">
        <div className="flex gap-4">
          <MapPin className="text-orange-500" />
          <div>
            <h3 className="font-semibold">Address</h3>

            <p className="text-gray-400">123 Food Street, Alexandria, Egypt</p>
          </div>
        </div>

        <div className="flex gap-4">
          <Phone className="text-orange-500" />
          <div>
            <h3 className="font-semibold">Phone</h3>

            <p className="text-gray-400">+20 100 123 4567</p>
          </div>
        </div>

        <div className="flex gap-4">
          <Mail className="text-orange-500" />
          <div>
            <h3 className="font-semibold">Email</h3>

            <p className="text-gray-600">info@restaurant.com</p>
          </div>
        </div>

        <div className="flex gap-4">
          <Clock className="text-orange-500" />
          <div>
            <h3 className="font-semibold">Opening Hours</h3>

            <p className="text-gray-400">Monday - Sunday</p>

            <p className="text-gray-400">10:00 AM - 11:00 PM</p>
          </div>
        </div>
      </div>
    </div>
  );
}
