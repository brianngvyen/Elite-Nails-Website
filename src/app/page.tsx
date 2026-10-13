
"use client";

import { useState } from "react";

const services = [
  {
    name: "Manicure",
    description: "A classic manicure for clean, beautifully cared-for nails.",
    price: "$20",
  },
  {
    name: "Sugarcoat Manicure",
    description: "An elevated manicure experience with a special touch.",
    price: "$30",
  },
  {
    name: "Elite Manicure",
    description: "A premium manicure experience for polished, beautiful nails.",
    price: "$35",
  },
  {
    name: "Classic Pedicure",
    description: "A refreshing pedicure for beautifully cared-for feet.",
    price: "$30",
  },
  {
    name: "Sugarcoat Pedicure",
    description: "An enhanced pedicure experience with a special touch.",
    price: "$35",
  },
  {
    name: "Deluxe Pedicure",
    description: "An upgraded pedicure experience for extra relaxation.",
    price: "$45",
  },
  {
    name: "VIP Luxury Pedicure",
    description: "Our premium pedicure experience for a little extra indulgence.",
    price: "$65",
  },
];

const galleryPhotos = [
  { src: "/images/IMG_6733.jpg.webp", alt: "Nail design at Elite Nails" },
  { src: "/images/IMG_6734.jpg.webp", alt: "Manicure style" },
  { src: "/images/IMG_6735.jpg.webp", alt: "Nail art inspiration" },
  { src: "/images/IMG_6736.jpg.webp", alt: "Nail design detail" },
  { src: "/images/IMG_6737.jpg", alt: "Nail care and design" },
  { src: "/images/IMG_6738.jpg.webp", alt: "Manicure inspiration" },
];

const phoneLink = "tel:+17705210073";

const bookingLink =
  "https://book.squareup.com/appointments/0w4oocksbns6ps/location/LR7A6NWF93R0Z/services";

const directionsLink =
  "https://www.google.com/maps/search/?api=1&query=5665+Atlanta+Hwy+Ste+109+Alpharetta+GA+30004";

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);

  const closeMenu = () => setMenuOpen(false);

  return (
    <main className="min-h-screen bg-[#faf8f5] text-[#302822]">
      <div className="bg-[#302822] px-4 py-2 text-center text-xs tracking-[0.18em] text-white">
        YOUR MOMENT OF BEAUTY STARTS HERE
      </div>

      <header className="sticky top-0 z-40 border-b border-[#e8e0d7] bg-[#faf8f5]/95 backdrop-blur">
        <nav className="relative mx-auto flex max-w-7xl items-center justify-between px-5 py-4 sm:px-6">
          <a href="/" onClick={closeMenu} className="text-xl font-semibold tracking-[0.16em]">
            ELITE NAILS
            <span className="mt-1 block text-center text-[9px] tracking-[0.38em] text-[#927b65]">
              BEAUTY • CARE • YOU
            </span>
          </a>

          <button
            type="button"
            className="rounded border border-[#cfc2b4] px-4 py-3 text-xs font-semibold tracking-widest transition hover:bg-[#eee7df] md:hidden"
            onClick={() => setMenuOpen((open) => !open)}
            aria-label={menuOpen ? "Close navigation menu" : "Open navigation menu"}
            aria-expanded={menuOpen}
            aria-controls="main-navigation"
          >
            {menuOpen ? "CLOSE ✕" : "MENU ☰"}
          </button>

          <div
            id="main-navigation"
            className={`${
              menuOpen ? "flex" : "hidden"
            } absolute left-0 right-0 top-full z-50 max-h-[calc(100vh-100px)] flex-col gap-1 overflow-y-auto border-b border-[#e8e0d7] bg-[#faf8f5] p-5 shadow-xl md:static md:flex md:max-h-none md:flex-row md:items-center md:gap-5 md:overflow-visible md:border-0 md:bg-transparent md:p-0 md:shadow-none`}
          >
            <a
              href="#services"
              onClick={closeMenu}
              className="rounded px-3 py-3 text-sm transition hover:bg-[#eee7df] hover:text-[#C75B7A] md:py-2"
            >
              Services
            </a>
            <a
              href="#gallery"
              onClick={closeMenu}
              className="rounded px-3 py-3 text-sm transition hover:bg-[#eee7df] hover:text-[#C75B7A] md:py-2"
            >
              Gallery
            </a>
            <a
              href="#about"
              onClick={closeMenu}
              className="rounded px-3 py-3 text-sm transition hover:bg-[#eee7df] hover:text-[#C75B7A] md:py-2"
            >
              Our Story
            </a>
            <a
              href="#contact"
              onClick={closeMenu}
              className="rounded px-3 py-3 text-sm transition hover:bg-[#eee7df] hover:text-[#C75B7A] md:py-2"
            >
              Contact
            </a>

            <a
              href="/careers"
              onClick={closeMenu}
              className="rounded border border-[#e8ded7] bg-white px-3 py-3 text-sm font-semibold text-[#C75B7A] transition hover:bg-[#f8e8ed] md:border-0 md:bg-transparent md:py-2"
            >
              Careers &amp; Jobs
            </a>

            <a
              href={bookingLink}
              target="_blank"
              rel="noopener noreferrer"
              onClick={closeMenu}
              className="mt-2 rounded-sm bg-[#C75B7A] px-5 py-3 text-center text-sm text-white transition hover:bg-[#A94764] md:mt-0"
            >
              Book an Appointment
            </a>
          </div>
        </nav>
      </header>

      {/* Hero */}
      <section className="px-6 py-12 sm:px-10 sm:py-16 lg:px-16 lg:py-20">
        <div className="mx-auto grid max-w-7xl items-center gap-10 md:grid-cols-2 md:gap-12 lg:gap-16">
          <div className="flex flex-col items-start justify-center">
            <p className="mb-5 text-xs tracking-[0.3em] text-[#C75B7A]">
              A LITTLE LUXURY, JUST FOR YOU
            </p>

            <h1 className="max-w-xl text-5xl leading-[1.12] tracking-tight sm:text-6xl lg:text-7xl">
              Beauty is in the{" "}
              <span className="font-serif italic text-[#C75B7A]">
                details.
              </span>
            </h1>

            <p className="mt-6 max-w-md text-base leading-8 text-[#776b61]">
              Take a moment for yourself. Discover thoughtful nail care,
              beautiful finishes, and a welcoming space designed around you.
            </p>

            <div className="mt-8 flex flex-wrap gap-3">
              <a
                href={bookingLink}
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-sm bg-[#C75B7A] px-6 py-4 text-sm text-white transition hover:bg-[#A94764]"
              >
                Book an Appointment
              </a>

              <a
                href="#services"
                className="rounded-sm border border-[#cfc2b4] px-6 py-4 text-sm transition hover:bg-[#eee7df]"
              >
                Explore Services
              </a>
            </div>

            <p className="mt-8 text-xs tracking-[0.12em] text-[#927b65]">
              YOUR BEAUTY. YOUR MOMENT. YOUR WAY.
            </p>
          </div>

          <div className="relative mx-auto w-full max-w-md">
            <div className="overflow-hidden rounded-2xl bg-[#e7ddd1] shadow-xl">
              <img
                src="/images/IMG_6733.jpg.webp"
                alt="Nail design at Elite Nails"
                className="h-[300px] w-full object-cover sm:h-[360px] md:h-[400px] lg:h-[440px]"
              />
            </div>

            <div className="relative mx-4 -mt-7 rounded-sm border border-[#e8e0d7] bg-[#faf8f5] px-5 py-4 shadow-md sm:mx-8">
              <p className="text-xs tracking-[0.2em] text-[#C75B7A]">
                THE ELITE EXPERIENCE
              </p>
              <p className="mt-1 font-serif text-xl italic">
                Made for your moment.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Services */}
      <section
        id="services"
        className="scroll-mt-24 px-6 py-24 sm:px-12 lg:px-20"
      >
        <div className="mx-auto max-w-7xl">
          <div className="text-center">
            <p className="text-xs tracking-[0.3em] text-[#C75B7A]">
              THOUGHTFULLY CURATED
            </p>
            <h2 className="mt-4 font-serif text-4xl sm:text-5xl">
              Our Services
            </h2>
            <p className="mx-auto mt-5 max-w-lg leading-7 text-[#776b61]">
              From your everyday manicure to a little extra indulgence, find
              the treatment that feels right for you.
            </p>
          </div>

          <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {services.map((service, index) => (
              <article
                key={service.name}
                className="group flex flex-col border border-[#e8e0d7] bg-white p-7 transition duration-300 hover:-translate-y-1 hover:border-[#C75B7A]/50 hover:shadow-lg"
              >
                <div className="mb-7 flex h-12 w-12 items-center justify-center rounded-full bg-[#f8e8ed] font-serif text-xl text-[#C75B7A]">
                  {String(index + 1).padStart(2, "0")}
                </div>
                <h3 className="font-serif text-xl">{service.name}</h3>
                <p className="mt-3 min-h-20 text-sm leading-6 text-[#776b61]">
                  {service.description}
                </p>
                <p className="mt-5 border-t border-[#eee6de] pt-4 text-sm font-medium">
                  {service.price}
                </p>
                <a
                  href={bookingLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-auto pt-6 text-xs tracking-[0.12em] text-[#C75B7A] underline underline-offset-4 transition hover:text-[#A94764]"
                >
                  BOOK AN APPOINTMENT
                </a>
              </article>
            ))}
          </div>

          <div className="mx-auto mt-10 max-w-2xl border border-[#e8e0d7] bg-white p-7 text-center">
            <p className="text-xs tracking-[0.25em] text-[#C75B7A]">
              ENHANCE YOUR PEDICURE
            </p>
            <h3 className="mt-3 font-serif text-2xl">
              Sugar Scrub &amp; Mask
            </h3>
            <p className="mx-auto mt-3 max-w-md text-sm leading-6 text-[#776b61]">
              Add a little extra care to your pedicure with our sugar scrub
              and mask treatment.
            </p>
            <p className="mt-4 text-lg font-medium">$40 add-on</p>
            <p className="mt-2 text-xs text-[#927b65]">
              Available as an add-on to a pedicure.
            </p>
          </div>
        </div>
      </section>

      {/* Gallery */}
      <section
        id="gallery"
        className="scroll-mt-24 bg-white px-6 py-24 sm:px-12 lg:px-20"
      >
        <div className="mx-auto max-w-7xl">
          <div className="text-center">
            <p className="text-xs tracking-[0.3em] text-[#C75B7A]">
              A CLOSER LOOK
            </p>
            <h2 className="mt-4 font-serif text-4xl sm:text-5xl">
              Our Nail Gallery
            </h2>
            <p className="mx-auto mt-5 max-w-lg leading-7 text-[#776b61]">
              Discover nail styles and details to inspire your next visit.
            </p>
          </div>

          <div className="mt-12 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {galleryPhotos.map((photo) => (
              <div
                key={photo.src}
                className="group overflow-hidden bg-[#eee7df]"
              >
                <img
                  src={photo.src}
                  alt={photo.alt}
                  loading="lazy"
                  className="h-80 w-full object-cover transition duration-500 group-hover:scale-105"
                />
              </div>
            ))}
          </div>

          <div className="mt-10 text-center">
            <a
              href={bookingLink}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block rounded-sm bg-[#C75B7A] px-8 py-4 text-sm text-white transition hover:bg-[#A94764]"
            >
              Book Your Visit
            </a>
          </div>
        </div>
      </section>

      {/* About */}
      <section
        id="about"
        className="scroll-mt-24 bg-[#eee7df] px-6 py-24 sm:px-12 lg:px-20"
      >
        <div className="mx-auto grid max-w-6xl items-center gap-12 md:grid-cols-2">
          <div>
            <p className="text-xs tracking-[0.3em] text-[#C75B7A]">
              MORE THAN A MANICURE
            </p>
            <h2 className="mt-5 font-serif text-4xl leading-tight sm:text-5xl">
              A space to slow down and feel your best.
            </h2>
          </div>
          <div>
            <p className="leading-8 text-[#65584d]">
              At Elite Nails, your visit should feel like time well spent. We
              want every guest to feel welcome, cared for, and confident
              walking out the door.
            </p>
            <p className="mt-5 leading-8 text-[#65584d]">
              We believe the little details make all the difference—from
              attentive service to the finishing touch on every set.
            </p>
            <a
              href="#contact"
              className="mt-7 inline-block border-b border-[#C75B7A] pb-2 text-sm transition hover:text-[#C75B7A]"
            >
              Get to know us
            </a>
          </div>
        </div>
      </section>

      {/* Booking */}
      <section id="booking" className="scroll-mt-24 px-6 py-24 sm:px-12">
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-xs tracking-[0.3em] text-[#C75B7A]">
            YOUR NEXT VISIT
          </p>
          <h2 className="mt-4 font-serif text-4xl sm:text-5xl">
            A little time for you.
          </h2>
          <p className="mx-auto mt-5 max-w-xl leading-7 text-[#776b61]">
            Ready for your next appointment? Explore available services and
            appointment times through our online booking page, or call us if
            you have questions.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <a
              href={bookingLink}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-sm bg-[#C75B7A] px-8 py-4 text-sm text-white transition hover:bg-[#A94764]"
            >
              Book Online
            </a>
            <a
              href={phoneLink}
              className="rounded-sm border border-[#cfc2b4] px-8 py-4 text-sm transition hover:bg-[#eee7df]"
            >
              Call (770) 521-0073
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer
        id="contact"
        className="scroll-mt-24 bg-[#302822] px-6 py-14 text-white sm:px-12"
      >
        <div className="mx-auto grid max-w-7xl gap-10 sm:grid-cols-3">
          <div>
            <h2 className="font-serif text-2xl tracking-widest">
              ELITE NAILS
            </h2>
            <p className="mt-3 text-sm leading-6 text-[#d4c6b8]">
              A thoughtful approach to nail care and everyday beauty.
            </p>
          </div>
          <div>
            <h3 className="text-xs tracking-[0.2em] text-[#c7ac91]">
              VISIT US
            </h3>
            <p className="mt-4 text-sm leading-7 text-[#e3d9cf]">
              5665 Atlanta Hwy, Ste 109
              <br />
              Alpharetta, GA 30004
            </p>
            <a
              href={directionsLink}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-3 inline-block text-sm text-[#e3d9cf] underline underline-offset-4 transition hover:text-white"
            >
              Get Directions
            </a>
          </div>
          <div>
            <h3 className="text-xs tracking-[0.2em] text-[#c7ac91]">
              GET IN TOUCH
            </h3>
            <p className="mt-4 text-sm leading-7 text-[#e3d9cf]">
              <a
                href={phoneLink}
                className="underline underline-offset-4 transition hover:text-white"
              >
                (770) 521-0073
              </a>
            </p>
            <a
              href={bookingLink}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-4 inline-block border border-[#C75B7A] px-5 py-3 text-xs tracking-[0.12em] transition hover:bg-[#C75B7A]"
            >
              BOOK ONLINE
            </a>
          </div>
        </div>
        <div className="mx-auto mt-12 max-w-7xl border-t border-white/15 pt-6 text-xs text-[#c7ac91]">
          © 2026 Elite Nails. All rights reserved.
        </div>
      </footer>
    </main>
  );
}


