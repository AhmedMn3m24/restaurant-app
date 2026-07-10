"use client";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { toast } from "sonner";

const schema = z.object({
  name: z.string().min(3, "Name is required"),
  email: z.string().email("Invalid email"),
  phone: z.string().min(11, "Phone is required"),
  subject: z.string().min(3, "Subject is required"),
  message: z.string().min(10, "Message is too short"),
});

type FormData = z.infer<typeof schema>;

export default function ContactForm() {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<FormData>({
    resolver: zodResolver(schema),
  });

  async function onSubmit(data: FormData) {
    try {
      console.log(data);

      await new Promise((resolve) => setTimeout(resolve, 1500));

      toast.success("Message sent successfully!");

      reset();
    } catch {
      toast.error("Something went wrong. Please try again.");
    }
  }

  return (
    <div className="rounded-2xl bg-[#111]  p-8 shadow-lg text-white">
      <h2 className="mb-8 text-3xl font-bold">Send Message</h2>

      <form
        onSubmit={handleSubmit(onSubmit)}
        className="space-y-5"
      >
        <div className="grid gap-5 md:grid-cols-2">
          <div>
            <input
              {...register("name")}
              type="text"
              placeholder="Your Name"
              className="w-full rounded-lg border p-3 outline-none transition focus:border-orange-500"
            />
            <p className="mt-1 text-sm text-red-500">
              {errors.name?.message}
            </p>
          </div>

          <div>
            <input
              {...register("email")}
              type="email"
              placeholder="Your Email"
              className="w-full rounded-lg border p-3 outline-none transition focus:border-orange-500"
            />
            <p className="mt-1 text-sm text-red-500">
              {errors.email?.message}
            </p>
          </div>

          <div>
            <input
              {...register("phone")}
              type="tel"
              placeholder="Phone"
              className="w-full rounded-lg border p-3 outline-none transition focus:border-orange-500"
            />
            <p className="mt-1 text-sm text-red-500">
              {errors.phone?.message}
            </p>
          </div>

          <div>
            <input
              {...register("subject")}
              type="text"
              placeholder="Reservation, Feedback, Catering..."
              className="w-full rounded-lg border p-3 outline-none transition focus:border-orange-500"
            />
            <p className="mt-1 text-sm text-red-500">
              {errors.subject?.message}
            </p>
          </div>
        </div>

        <div>
          <textarea
            {...register("message")}
            rows={6}
            placeholder="Tell us how we can help you..."
            className="w-full rounded-lg border p-3 outline-none transition focus:border-orange-500"
          />
          <p className="mt-1 text-sm text-red-500">
            {errors.message?.message}
          </p>
        </div>

        <button
          type="submit"
          disabled={isSubmitting}
          className="w-full rounded-lg bg-orange-500 py-3 font-semibold text-white transition hover:bg-orange-600 disabled:cursor-not-allowed disabled:opacity-50"
        >
          {isSubmitting ? "Sending..." : "Send Message"}
        </button>
      </form>
    </div>
  );
}