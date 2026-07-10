export default function ContactMap() {
  return (
    <section className="pb-20 mt-7 ">
      <div className="container mx-auto px-4">
        <div className="overflow-hidden rounded-2xl shadow-lg">
          <iframe
            title="Restaurant Location"
            src="https://www.google.com/maps?q=Alexandria,Egypt&output=embed"
            width="100%"
            height="450"
            loading="lazy"
          />
        </div>
      </div>
    </section>
  );
}