import Link from "next/link";

const phoneLink = "tel:+17705210073";

export default function CareersPage() {
  return (
    <main className="min-h-screen bg-[#faf7f3] text-[#382a25]">
      <header className="border-b border-[#e8ded5] bg-white">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-5">
          <Link href="/" className="text-xl font-semibold tracking-wide">
            ELITE NAILS
          </Link>

          <Link href="/" className="text-sm text-[#725347] hover:underline">
            Back to Home
          </Link>
        </div>
      </header>

      <section className="mx-auto max-w-5xl px-6 py-20 text-center sm:py-28">
        <p className="mb-4 text-sm font-semibold uppercase tracking-[0.25em] text-[#947466]">
          Careers at Elite Nails
        </p>

        <h1 className="mx-auto max-w-3xl text-4xl font-semibold leading-tight sm:text-6xl">
          Your talent deserves a place to shine.
        </h1>

        <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-[#74645b]">
          Are you passionate about nail care, creativity, and making
          clients feel their best? We would love to hear from you.
          Explore an opportunity to join Elite Nails in Alpharetta, Georgia.
        </p>

        <div className="mt-9 flex justify-center">
          <a
            href={phoneLink}
            className="rounded-full bg-[#725347] px-8 py-4 font-medium text-white transition hover:bg-[#5b4036]"
          >
            Call the Salon
          </a>
        </div>
      </section>

      <section className="bg-white px-6 py-16 sm:py-20">
        <div className="mx-auto max-w-5xl">
          <div className="mb-10 text-center">
            <p className="text-sm font-semibold uppercase tracking-widest text-[#947466]">
              What We're Looking For
            </p>
            <h2 className="mt-3 text-3xl font-semibold sm:text-4xl">
              Nail Technician Requirements
            </h2>
          </div>

          <div className="grid gap-5 sm:grid-cols-2">
            {[
              {
                title: "Georgia Licensing",
                description:
                  "Must hold the appropriate current Georgia nail technician license or registration for the services performed.",
              },
              {
                title: "Nail Care Skills",
                description:
                  "Ability to perform quality manicures and pedicures. Experience with gel, acrylics, or nail art is a plus.",
              },
              {
                title: "Cleanliness & Safety",
                description:
                  "Follow applicable sanitation, disinfection, and client-safety procedures.",
              },
              {
                title: "Client Experience",
                description:
                  "Friendly communication, professionalism, attention to detail, and a welcoming attitude.",
              },
              {
                title: "Reliability",
                description:
                  "Dependable, organized, and committed to providing consistent service to clients.",
              },
              {
                title: "Portfolio",
                description:
                  "Applicants are welcome to share photos of their nail work when discussing opportunities with the salon.",
              },
            ].map((item) => (
              <article
                key={item.title}
                className="rounded-2xl border border-[#e8ded5] bg-[#faf7f3] p-6"
              >
                <h3 className="text-lg font-semibold">{item.title}</h3>
                <p className="mt-3 leading-7 text-[#74645b]">
                  {item.description}
                </p>
              </article>
            ))}
          </div>

          <p className="mx-auto mt-8 max-w-3xl text-center text-sm leading-6 text-[#74645b]">
            Applicants should verify their licensing status and
            requirements with the Georgia State Board of Cosmetology
            and Barbers.{" "}
            <a
              href="https://sos.ga.gov/how-to-guide/how-guide-nail-technician-nail-tech-instructor"
              target="_blank"
              rel="noreferrer"
              className="font-medium text-[#725347] underline"
            >
              View official licensing guidance
            </a>
          </p>
        </div>
      </section>

      <section className="px-6 py-20 text-center">
        <h2 className="text-3xl font-semibold sm:text-4xl">
          Interested in joining our team?
        </h2>

        <p className="mx-auto mt-4 max-w-xl leading-7 text-[#74645b]">
          Call Elite Nails to introduce yourself, discuss your experience,
          and learn about current opportunities.
        </p>

        <a
          href={phoneLink}
          className="mt-8 inline-block rounded-full bg-[#725347] px-8 py-4 font-medium text-white transition hover:bg-[#5b4036]"
        >
          Call to Apply
        </a>

        <p className="mt-5 text-sm text-[#74645b]">
          Alpharetta, GA 30004 · (770) 521-0073
        </p>
      </section>

      <footer className="border-t border-[#e8ded5] bg-white px-6 py-6 text-center text-sm text-[#74645b]">
        © 2026 Elite Nails. All rights reserved.
      </footer>
    </main>
  );
}

