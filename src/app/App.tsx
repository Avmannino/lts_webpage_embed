// src/app/App.tsx

// ✅ Branding
import logo from "../assets/wingslogo.png";

import { HeroCarousel } from "@/app/components/HeroCarousel";
import { InfoBox } from "@/app/components/InfoBox";
import { PriceCard } from "@/app/components/PriceCard";
import { ScheduleTable } from "@/app/components/ScheduleTable";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/app/components/ui/accordion";

import allAgesIcon from "../assets/icons/icons8-birth-date-100.png";
import calendarIcon from "../assets/icons/icons8-calendar-50.png";
import coachingIcon from "../assets/icons/icons8-coaching-100.png";
import skatesIcon from "../assets/icons/icons8-hockey-skates-50.png";
import fallQrCode from "../assets/fall_registration_qr_lts.png";


export default function App() {
  // ✅ Reusable shadow token
  const SHADOW = "shadow-[0_8px_20px_rgba(0,0,0,0.45)]";

  // ✅ Colors (kept from your design)
  const PAGE_BG = "bg-[#305774]";
  const CARD_OVERLAY = "bg-[#00335e]/85";
  const WINTER_BG = "bg-[#4b3d74]";

  // ✅ LINKS (from the site)
  const FALL_LTS_REG_URL =
    "https://tms.ezfacility.com/OnlineRegistrations/Register.aspx?CompanyID=8390&GroupID=4084755#SelectRegistrationType";

  const PRESCHOOL_LTS_REG_URL =
    "https://tms.ezfacility.com/OnlineRegistrations/Register.aspx?CompanyID=8390&GroupID=4104307";

  const WINTER_LTS_REG_URL =
    "https://tms.ezfacility.com/OnlineRegistrations/Register.aspx?CompanyID=8390&GroupID=4129085#SelectRegistrationType";

  const WINTER_PRESCHOOL_LTS_REG_URL =
    "https://tms.ezfacility.com/OnlineRegistrations/Register.aspx?CompanyID=8390&GroupID=4129499";

  // Winter 2026–27 — Sundays: Dec 6 through Feb 21, 12 weeks
  const WINTER_SUNDAY_DATES = [
    "Dec 6, 2026",
    "Dec 13, 2026",
    "Dec 20, 2026",
    "Dec 27, 2026",
    "Jan 3, 2027",
    "Jan 10, 2027",
    "Jan 17, 2027",
    "Jan 24, 2027",
    "Jan 31, 2027",
    "Feb 7, 2027",
    "Feb 14, 2027",
    "Feb 21, 2027",
  ];

  // Winter 2026–27 — Thursdays (Preschoolers): Dec 3 through Feb 4, 10 weeks
  const WINTER_THURSDAY_DATES = [
    "Dec 3, 2026",
    "Dec 10, 2026",
    "Dec 17, 2026",
    "Dec 24, 2026",
    "Dec 31, 2026",
    "Jan 7, 2027",
    "Jan 14, 2027",
    "Jan 21, 2027",
    "Jan 28, 2027",
    "Feb 4, 2027",
  ];

  const WINTER_SCHEDULE = [
    { label: "Sundays", time: "1:30 PM – 2:00 PM", dates: WINTER_SUNDAY_DATES },
    { label: "Sundays", time: "2:00 PM – 2:30 PM", dates: WINTER_SUNDAY_DATES },
    { label: "Thursdays (Preschoolers)", time: "1:45 PM – 2:15 PM", dates: WINTER_THURSDAY_DATES },
    { label: "Thursdays (Preschoolers)", time: "2:15 PM – 2:45 PM", dates: WINTER_THURSDAY_DATES },
  ];

  // Fall 2026 schedule — Sep 8 through Nov 13, 10 weeks
  const FALL_SCHEDULE = [
    {
      label: "Tuesdays",
      time: "3:20 PM – 3:50 PM",
      dates: [
        "Sep 8, 2026",
        "Sep 15, 2026",
        "Sep 22, 2026",
        "Sep 29, 2026",
        "Oct 6, 2026",
        "Oct 13, 2026",
        "Oct 20, 2026",
        "Oct 27, 2026",
        "Nov 3, 2026",
        "Nov 10, 2026",
      ],
    },
    {
      label: "Tuesdays",
      time: "3:50 PM – 4:20 PM",
      dates: [
        "Sep 8, 2026",
        "Sep 15, 2026",
        "Sep 22, 2026",
        "Sep 29, 2026",
        "Oct 6, 2026",
        "Oct 13, 2026",
        "Oct 20, 2026",
        "Oct 27, 2026",
        "Nov 3, 2026",
        "Nov 10, 2026",
      ],
    },
    {
      label: "Thursdays (Preschoolers)",
      time: "12:00 PM – 12:30 PM",
      dates: [
        "Sep 10, 2026",
        "Sep 17, 2026",
        "Sep 24, 2026",
        "Oct 1, 2026",
        "Oct 8, 2026",
        "Oct 15, 2026",
        "Oct 22, 2026",
        "Oct 29, 2026",
        "Nov 5, 2026",
        "Nov 12, 2026",
      ],
    },
    {
      label: "Thursdays (Preschoolers)",
      time: "12:30 PM – 1:00 PM",
      dates: [
        "Sep 10, 2026",
        "Sep 17, 2026",
        "Sep 24, 2026",
        "Oct 1, 2026",
        "Oct 8, 2026",
        "Oct 15, 2026",
        "Oct 22, 2026",
        "Oct 29, 2026",
        "Nov 5, 2026",
        "Nov 12, 2026",
      ],
    },
    {
      label: "Fridays",
      time: "3:55 PM – 4:25 PM",
      dates: [
        "Sep 11, 2026",
        "Sep 18, 2026",
        "Sep 25, 2026",
        "Oct 2, 2026",
        "Oct 9, 2026",
        "Oct 16, 2026",
        "Oct 23, 2026",
        "Oct 30, 2026",
        "Nov 6, 2026",
        "Nov 13, 2026",
      ],
    },
    {
      label: "Fridays",
      time: "4:25 PM – 4:55 PM",
      dates: [
        "Sep 11, 2026",
        "Sep 18, 2026",
        "Sep 25, 2026",
        "Oct 2, 2026",
        "Oct 9, 2026",
        "Oct 16, 2026",
        "Oct 23, 2026",
        "Oct 30, 2026",
        "Nov 6, 2026",
        "Nov 13, 2026",
      ],
    },
  ];

  return (
    <div className={`w-full min-w-0 min-h-0 h-auto ${PAGE_BG} flex flex-col sm:block`}>
      {/* Header */}
      <header className={`${PAGE_BG} border-b border-[#b2dbd7]/70`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 xl:px-8 py-4" />
      </header>

      {/* Hero */}
      <section className={`${PAGE_BG} border-b border-[#b2dbd7]/70`}>
        {/* ✅ CHANGE: slightly tighter padding on mobile, keep your desktop spacing */}
        <div className="max-w-7xl mx-auto px-4 sm:px-5 xl:px-0 pt-10 pb-12 sm:py-12">
          <div className="grid gap-y-8 items-center lg:grid-cols-[1.5fr_60px_1fr] xl:grid-cols-[1.5fr_80px_1fr]">
            {/* LEFT: text */}
            <div className="min-[1001px]:max-[1325px]:pr-5">
              <div className="flex flex-col items-center lg:items-center mb-5">
                <img
                  src={`${import.meta.env.BASE_URL}white-logo.png`}
                  alt=""
                  className="mx-auto w-[90px] sm:w-[110px] mb-3 h-auto relative -left-[16px] sm:-left-[21px]"
                />

                <img
                  src={logo}
                  alt="Wings Arena"
                  className="
                    mx-auto
                    w-[260px] xs:w-[285px] sm:w-[320px] lg:w-[355.04px]
                    mb-0
                    mr-0 lg:mr-8
                    ml-0 lg:ml-[10px]
                    min-[1001px]:max-[1325px]:ml-[28px]
                  "
                />

                <p
                  className="
                    text-[#b2dbd7] font-bold tracking-wide mt-2
                    text-center
                    mr-0 lg:mr-4
                    min-[1001px]:max-[1325px]:pl-[28px]
                  "
                >
               
                </p>

                <div className="mt-[15px] -mb-[10px] h-px w-full bg-gradient-to-r from-transparent via-[#b2dbd7]/50 to-transparent" />
              </div>

              <div
                className="
                  text-gray-200 mb-4
                  space-y-5
                  text-center lg:text-center
                  ml-0 sm:ml-1
                  min-[1001px]:max-[1325px]:ml-[28px]
                  text-[15px] sm:text-[16px] lg:text-[18px]
                  leading-relaxed
                  w-full max-w-none
                "
              >
                <p className="font-semibold text-gray-200">
                  A welcoming intro program for beginners — balance, glides, and safe
                  falls through fun games and guided practice.
                </p>

                <p>
                  Designed for kids (ages 3–10). No prior experience required — just
                  bring a smile and we’ll take care of the rest.
                </p>

                <p className="text-gray-300 font-semibold">
                  Skates, helmet &amp; mittens/gloves are required. Rental skates are available.
                </p>

                {/* ✅ FIX: center the CTA on mobile, keep same on desktop */}
                <div className="pt-2 flex flex-col sm:flex-row justify-center gap-3">
                  <a
                    href={WINTER_LTS_REG_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`
                      inline-flex items-center justify-center
                      rounded-lg
                      px-5 py-2.5
                      font-bold text-white text-base whitespace-nowrap
                      bg-white/15 hover:bg-white/20
                      border border-white/30
                      transition hover:-translate-y-1
                      ${SHADOW}
                      w-full max-w-[360px] sm:w-auto
                    `}
                  >
                    Register for Winter Learn to Skate
                  </a>

                  <a
                    href={WINTER_PRESCHOOL_LTS_REG_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`
                      inline-flex items-center justify-center
                      rounded-lg
                      px-5 py-2.5
                      font-bold text-white text-base whitespace-nowrap
                      bg-white/15 hover:bg-white/20
                      border border-white/30
                      transition hover:-translate-y-1
                      ${SHADOW}
                      w-full max-w-[360px] sm:w-auto
                    `}
                  >
                    Register Your Preschooler for Winter
                  </a>
                </div>
              </div>
            </div>

            {/* Spacer column (creates guaranteed gap on lg+) */}
            <div className="hidden lg:block" />

            {/* RIGHT: Hero Video */}
            <div
              className={`
                relative h-64 sm:h-80 lg:h-[360px]
                w-full
                lg:justify-self-end
                ${SHADOW}
                rounded-lg overflow-hidden
              `}
            >
              <HeroCarousel />
            </div>
          </div>
        </div>
      </section>

      {/* Info Boxes */}
      <section
        className="
          max-w-[calc(80rem*0.97+200px)]
          mx-auto
          px-0
          sm:px-6
          xl:px-8
          py-8
          max-[1000px]:pt-0
          max-[1000px]:mt-[18px]
          lg:mt-[25px]
        "
      >
        <div className="max-[640px]:w-[100vw] max-[640px]:ml-[calc(50%-50vw)] max-[640px]:px-3 max-[640px]:box-border">
          <div className="flex justify-center mb-[calc(1rem*1.0356)]">
            <div className={`w-full max-w-[760px] [&>*]:!w-full [&>*]:${SHADOW}`}>
              <InfoBox
                iconImage={allAgesIcon}
                title="Ages"
                description={
                  <>
                    Designed for <strong>kids ages 3–10</strong>. Beginner-friendly —
                    no prior skating experience required.
                  </>
                }
                iconSize="w-[35.35px] h-[35.35px]"
                iconOffset="-mt-[10px]"
                textOffset="-mt-[1.5px]"
                titleClassName="text-[15px] sm:text-[16px]"
                descriptionClassName="text-[11px] sm:text-[13px] leading-snug"
              />
            </div>
          </div>

          <div className="flex justify-center">
            <div className="grid w-full max-w-6xl grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-[20px] gap-y-[calc(1rem*1.0356)] justify-items-stretch">
              <div className={`w-full [&>*]:!w-full [&>*]:${SHADOW}`}>
                <InfoBox
                  iconImage={calendarIcon}
                  title="Class Options"
                  description="Tues. Thurs. Fri. (Fall) | Sundays. Thurs (WInter)"
                  iconSize="w-[40px] h-[40px]"
                  iconOffset="-mt-[6px]"
                  textOffset="-mt-[3.5px]"
                  titleClassName="text-[16px] sm:text-[16px]"
                  descriptionClassName="text-[11px] sm:text-[13px] leading-tight"
                />
              </div>

              <div className={`w-full [&>*]:!w-full [&>*]:${SHADOW}`}>
                <InfoBox
                  iconImage={coachingIcon}
                  title="Coaching"
                  description="Positive instruction with fun games and guided practice"
                  iconSize="w-[39px] h-[39px]"
                  iconOffset="-mt-[6px]"
                  textOffset="-mt-[3.5px]"
                  titleClassName="text-[16px] sm:text-[16px]"
                  descriptionClassName="text-[11px] sm:text-[13px] leading-tight"
                />
              </div>

              <div className={`w-full [&>*]:!w-full [&>*]:${SHADOW}`}>
                <InfoBox
                  iconImage={skatesIcon}
                  title="Required Gear"
                  description="Skates, helmet & mittens/gloves are required (rental skates available)"
                  iconSize="w-[39px] h-[39px]"
                  iconOffset="-mt-[6px]"
                  textOffset="-mt-[3.5px]"
                  titleClassName="text-[16px] sm:text-[16px]"
                  descriptionClassName="text-[11px] sm:text-[13px] leading-tight"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className={WINTER_BG}>
        {/* Winter 2026–27 Section */}
        <section className="py-10 pt-4">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 xl:px-8">
            <div className="my-5 h-px w-full bg-gradient-to-r from-transparent via-[#b2dbd7]/50 to-transparent" />

            <div className="flex flex-col items-center gap-3 mb-2">
              <h2 className="text-[1.7rem] sm:text-[2.15625rem] text-white text-center">
                Winter 2026–27 Learn to Skate
              </h2>

              <p className="text-[#b2dbd7] font-bold tracking-wide text-center">
                December 3rd – February 21st
              </p>
            </div>

            <div className="my-5 h-px w-full bg-gradient-to-r from-transparent via-[#b2dbd7]/50 to-transparent" />

            <div className="flex justify-center w-full">
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 items-stretch gap-6 sm:gap-x-10 lg:gap-x-6 w-full max-w-6xl">
                <div className={`h-full flex [&>*]:h-full [&>*]:w-full [&>*]:mx-0 [&>*]:${SHADOW}`}>
                  <PriceCard
                    title="30 Min Class"
                    price="$425"
                    description="One 30-min session per week"
                    features={[
                      "Sunday 1:30 or 2:00 PM slot",
                      "12-week session",
                    ]}
                  />
                </div>

                <div className={`h-full flex [&>*]:h-full [&>*]:w-full [&>*]:mx-0 [&>*]:${SHADOW}`}>
                  <PriceCard
                    title="Full Hour"
                    price="$625"
                    description="One 60-min session per week"
                    features={[
                      "Sunday 1:30 – 2:30 PM",
                      "12-week session",
                    ]}
                  />
                </div>

                <div className={`h-full flex [&>*]:h-full [&>*]:w-full [&>*]:mx-0 [&>*]:${SHADOW}`}>
                  <PriceCard
                    title="Preschool"
                    price="$360"
                    description="One 30-min session per week"
                    features={[
                      "Thursday 1:45 or 2:15 PM slot",
                      "10-week session",
                    ]}
                  />
                </div>

                <div className={`h-full flex [&>*]:h-full [&>*]:w-full [&>*]:mx-0 [&>*]:${SHADOW}`}>
                  <PriceCard
                    title="Drop-in"
                    price="$45"
                    description="Per session"
                    features={["No commitment required", "Pay as you go"]}
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Winter Schedule */}
        <section className="pt-2 pb-0">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 xl:px-8">
            <h2 className="text-[1.5625rem] sm:text-[2.2625rem] mb-0 sm:mb-5 text-white text-center">
              Winter 2026–27 Schedule
            </h2>

            <div className="my-5 h-px w-full bg-gradient-to-r from-transparent via-[#b2dbd7]/50 to-transparent" />
          </div>
        </section>

        <div className="w-[92%] sm:w-full max-w-6xl mx-auto my-8 mt-2">
          <div className={`relative overflow-hidden rounded-lg border border-white/20 p-4 sm:p-8 ${SHADOW}`}>
            <div className={`absolute inset-0 ${CARD_OVERLAY} backdrop-blur-[2px]`} />

            <div className="relative z-10">
              <ScheduleTable items={WINTER_SCHEDULE} />
            </div>
          </div>
        </div>

        {/* Winter Registration */}
        <section className="py-8 pb-10">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 xl:px-8">
            <h2 className="text-[1.5625rem] sm:text-[2.2625rem] mb-0 sm:mb-5 text-white text-center">
              Winter 2026–27 Registration
            </h2>

            <div className="my-5 h-px w-full bg-gradient-to-r from-transparent via-[#b2dbd7]/50 to-transparent" />

            <div className="w-[90%] sm:w-full max-w-5xl mx-auto my-8">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className={`relative overflow-hidden rounded-lg border border-white/20 p-4 sm:p-6 text-center ${SHADOW}`}>
                  <div className={`absolute inset-0 ${CARD_OVERLAY} backdrop-blur-[2px]`} />

                  <div className="relative z-10">
                    <h3 className="text-white text-[1.15rem] sm:text-[1.4rem] mb-2 -mt-[6px]">
                      Register for Winter
                    </h3>

                    <p className="text-white text-sm leading-relaxed">
                      Use the QR code or click the link below to register for Winter Learn
                      to Skate.
                    </p>

                    <img
                      src={`${import.meta.env.BASE_URL}winter-qr-code.png`}
                      alt="Winter Registration QR Code"
                      className="mx-auto mt-4 w-[100px] sm:w-[130px] h-auto rounded-md bg-white p-2"
                    />

                    <a
                      href={WINTER_LTS_REG_URL}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="mt-4 inline-block font-bold underline underline-offset-4 text-blue-600 hover:text-blue-700 transition text-base sm:text-xl lg:text-2xl"
                    >
                      Click Here to Register
                    </a>

                    <div className="my-4 h-px w-full bg-white/25" />

                    <h3 className="text-white text-[1.05rem] sm:text-[1.2rem] mb-2">
                      Questions?
                    </h3>

                    <p className="text-white text-sm">
                      Email:{" "}
                      <a
                        href="mailto:jwanderlingh@wingsarena.com"
                        className="font-semibold underline underline-offset-2 hover:text-gray-300 transition"
                      >
                        jwanderlingh@wingsarena.com
                      </a>
                    </p>

                    <div className="mt-3 text-white text-sm space-y-1">
                      <p className="font-semibold text-white">Wings Arena</p>
                      <p>5 Barry Place • Stamford, CT 06902</p>
                      <p>(203) 357-1055</p>
                    </div>
                  </div>
                </div>

                <div className={`relative overflow-hidden rounded-lg border border-white/20 p-4 sm:p-6 text-center ${SHADOW}`}>
                  <div className={`absolute inset-0 ${CARD_OVERLAY} backdrop-blur-[2px]`} />

                  <div className="relative z-10">
                    <h3 className="text-white text-[1.15rem] sm:text-[1.4rem] mb-2 -mt-[6px]">
                      Register Your Preschooler
                    </h3>

                    <p className="text-white text-sm leading-relaxed">
                      Use the QR code or click the link below to register your Preschooler for
                      Winter Learn to Skate.
                    </p>

                    <img
                      src={`${import.meta.env.BASE_URL}winter-preschool-qr.png`}
                      alt="Winter Preschooler Registration QR Code"
                      className="mx-auto mt-4 w-[100px] sm:w-[130px] h-auto rounded-md bg-white p-2"
                    />

                    <a
                      href={WINTER_PRESCHOOL_LTS_REG_URL}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="mt-4 inline-block font-bold underline underline-offset-4 text-blue-600 hover:text-blue-700 transition text-base sm:text-xl lg:text-2xl"
                    >
                      Click Here to Register
                    </a>

                    <div className="my-4 h-px w-full bg-white/25" />

                    <h3 className="text-white text-[1.05rem] sm:text-[1.2rem] mb-2">
                      Questions?
                    </h3>

                    <p className="text-white text-sm">
                      Email:{" "}
                      <a
                        href="mailto:jwanderlingh@wingsarena.com"
                        className="font-semibold underline underline-offset-2 hover:text-gray-300 transition"
                      >
                        jwanderlingh@wingsarena.com
                      </a>
                    </p>

                    <div className="mt-3 text-white text-sm space-y-1">
                      <p className="font-semibold text-white">Wings Arena</p>
                      <p>5 Barry Place • Stamford, CT 06902</p>
                      <p>(203) 357-1055</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>

      {/* Fall 2026 Section */}
      <section className={`${PAGE_BG} py-10 pt-4`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 xl:px-8">
          <div className="my-5 h-px w-full bg-gradient-to-r from-transparent via-[#b2dbd7]/50 to-transparent" />

          <div className="flex flex-col items-center gap-3 mb-2">
            <h2 className="text-[1.7rem] sm:text-[2.15625rem] text-white text-center">
              Fall 2026 Learn to Skate
            </h2>

            <p className="text-[#b2dbd7] font-bold tracking-wide text-center">
              September 8th – November 13th
            </p>
          </div>

          <div className="my-5 h-px w-full bg-gradient-to-r from-transparent via-[#b2dbd7]/50 to-transparent" />

          <div className="flex justify-center w-full">
            <div className="grid grid-cols-1 sm:grid-cols-3 items-stretch gap-6 sm:gap-x-10 w-full max-w-4xl">
              <div className={`h-full flex [&>*]:h-full [&>*]:w-full [&>*]:mx-0 [&>*]:${SHADOW}`}>
                <PriceCard
                  title="1 Class"
                  price="$350"
                  description="One 30-min session per week"
                  features={[
                    "Any single Tuesday, Thursday or Friday slot",
                    "10-week session",
                  ]}
                />
              </div>

              <div className={`h-full flex [&>*]:h-full [&>*]:w-full [&>*]:mx-0 [&>*]:${SHADOW}`}>
                <PriceCard
                  title="2 Classes"
                  price="$525"
                  description="Two 30-min sessions per week"
                  features={[
                    <>Same-day <strong>or</strong> Tue + Fri combo</>,
                    "10-week session",
                  ]}
                />
              </div>

              <div className={`h-full flex [&>*]:h-full [&>*]:w-full [&>*]:mx-0 [&>*]:${SHADOW}`}>
                <PriceCard
                  title="Drop-in"
                  price="$40"
                  description="Per session"
                  features={["No commitment required", "Pay as you go"]}
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Fall Schedule */}
      <section className={`${PAGE_BG} pt-2 pb-0`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 xl:px-8">
          <h2 className="text-[1.5625rem] sm:text-[2.2625rem] mb-0 sm:mb-5 text-white text-center">
            Fall 2026 Schedule
          </h2>

          <div className="my-5 h-px w-full bg-gradient-to-r from-transparent via-[#b2dbd7]/50 to-transparent" />
        </div>
      </section>

      <div className="w-[92%] sm:w-full max-w-6xl mx-auto my-8 mt-2">
        <div className={`relative overflow-hidden rounded-lg border border-white/20 p-4 sm:p-8 ${SHADOW}`}>
          <div className={`absolute inset-0 ${CARD_OVERLAY} backdrop-blur-[2px]`} />

          <div className="relative z-10">
            <ScheduleTable items={FALL_SCHEDULE} />
          </div>
        </div>
      </div>

      {/* Registration */}
      <section className={`${PAGE_BG} py-8 pb-10`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 xl:px-8">
          <h2 className="text-[1.5625rem] sm:text-[2.2625rem] mb-0 sm:mb-5 text-white text-center">
            2026 Registration
          </h2>

          <div className="my-5 h-px w-full bg-gradient-to-r from-transparent via-[#b2dbd7]/50 to-transparent" />

          <div className="w-[90%] sm:w-full max-w-5xl mx-auto my-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className={`relative overflow-hidden rounded-lg border border-white/20 p-4 sm:p-6 text-center ${SHADOW}`}>
                <div className={`absolute inset-0 ${CARD_OVERLAY} backdrop-blur-[2px]`} />

                <div className="relative z-10">
                  <h3 className="text-white text-[1.15rem] sm:text-[1.4rem] mb-2 -mt-[6px]">
                    Register for Fall
                  </h3>

                  <p className="text-white text-sm leading-relaxed">
                    Use the QR code or click the link below to register for Fall Learn
                    to Skate.
                  </p>

                  <img
                    src={fallQrCode}
                    alt="Fall Registration QR Code"
                    className="mx-auto mt-4 w-[100px] sm:w-[130px] h-auto rounded-md bg-white p-2"
                  />

                  <a
                    href={FALL_LTS_REG_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-4 inline-block font-bold underline underline-offset-4 text-blue-600 hover:text-blue-700 transition text-base sm:text-xl lg:text-2xl"
                  >
                    Click Here to Register
                  </a>

                  <div className="my-4 h-px w-full bg-white/25" />

                  <h3 className="text-white text-[1.05rem] sm:text-[1.2rem] mb-2">
                    Questions?
                  </h3>

                  <p className="text-white text-sm">
                    Email:{" "}
                    <a
                      href="mailto:jwanderlingh@wingsarena.com"
                      className="font-semibold underline underline-offset-2 hover:text-gray-300 transition"
                    >
                      jwanderlingh@wingsarena.com
                    </a>
                  </p>

                  <div className="mt-3 text-white text-sm space-y-1">
                    <p className="font-semibold text-white">Wings Arena</p>
                    <p>5 Barry Place • Stamford, CT 06902</p>
                    <p>(203) 357-1055</p>
                  </div>
                </div>
              </div>

              <div className={`relative overflow-hidden rounded-lg border border-white/20 p-4 sm:p-6 text-center ${SHADOW}`}>
                <div className={`absolute inset-0 ${CARD_OVERLAY} backdrop-blur-[2px]`} />

                <div className="relative z-10">
                  <h3 className="text-white text-[1.15rem] sm:text-[1.4rem] mb-2 -mt-[6px]">
                    Register Your Preschooler
                  </h3>

                  <p className="text-white text-sm leading-relaxed">
                    Use the QR code or click the link below to register your Preschooler for
                    Learn to Skate.
                  </p>

                  <img
                    src={`${import.meta.env.BASE_URL}qr-reg-preschool.png`}
                    alt="Preschooler Registration QR Code"
                    className="mx-auto mt-4 w-[100px] sm:w-[130px] h-auto rounded-md bg-white p-2"
                  />

                  <a
                    href={PRESCHOOL_LTS_REG_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-4 inline-block font-bold underline underline-offset-4 text-blue-600 hover:text-blue-700 transition text-base sm:text-xl lg:text-2xl"
                  >
                    Click Here to Register
                  </a>

                  <div className="my-4 h-px w-full bg-white/25" />

                  <h3 className="text-white text-[1.05rem] sm:text-[1.2rem] mb-2">
                    Questions?
                  </h3>

                  <p className="text-white text-sm">
                    Email:{" "}
                    <a
                      href="mailto:jwanderlingh@wingsarena.com"
                      className="font-semibold underline underline-offset-2 hover:text-gray-300 transition"
                    >
                      jwanderlingh@wingsarena.com
                    </a>
                  </p>

                  <div className="mt-3 text-white text-sm space-y-1">
                    <p className="font-semibold text-white">Wings Arena</p>
                    <p>5 Barry Place • Stamford, CT 06902</p>
                    <p>(203) 357-1055</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className={`${PAGE_BG} py-12 sm:py-12 pt-0 sm:pt-12 mt-[35px] sm:mt-0 -translate-y-[15px]`}>
        <div className="max-w-[58.08rem] mx-auto px-4 sm:px-6 xl:px-8">
          <h2 className="text-2xl sm:text-3xl mb-4 sm:mb-6 text-white text-center">
            Frequently Asked Questions
          </h2>

          <div className="my-4 h-px w-full bg-gradient-to-r from-transparent via-[#b2dbd7]/50 to-transparent" />

          <div className={`relative overflow-hidden rounded-lg border border-white/20 ${SHADOW}`}>
            <div className={`absolute inset-0 ${CARD_OVERLAY} backdrop-blur-[2px]`} />

            <div className="relative z-10">
              <Accordion
                type="single"
                collapsible
                className="bg-transparent px-4 sm:px-6"
              >
                <AccordionItem value="item-1">
                  <AccordionTrigger className="text-white">
                    Who is Learn to Skate for?
                  </AccordionTrigger>

                  <AccordionContent className="text-white">
                    It’s designed for beginner skaters (kids ages 3–10) and focuses on
                    building confidence through step-by-step instruction and fun games.
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="item-2">
                  <AccordionTrigger className="text-white">
                    What equipment is required?
                  </AccordionTrigger>

                  <AccordionContent className="text-white">
                    Skates, helmet & mittens/gloves are required. Rental skates are available.
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="item-3">
                  <AccordionTrigger className="text-white">
                    When are classes?
                  </AccordionTrigger>

                  <AccordionContent className="text-white space-y-3">
                    <p>
                      Winter Learn to Skate runs on Sundays from December 6, 2026 –
                      February 21, 2027, with classes from 1:30–2:00 PM and 2:00–2:30 PM.
                      Preschool Learn to Skate runs on Thursdays from December 3, 2026 –
                      February 4, 2027, with classes from 1:45–2:15 PM and 2:15–2:45 PM.
                    </p>

                    <p>
                      Fall Learn to Skate runs September 8 – November 13, 2026 with options on
                      Tuesdays or Fridays. See the Schedule sections above for
                      exact dates and times.
                    </p>
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="item-4">
                  <AccordionTrigger className="text-white">
                    How much does it cost?
                  </AccordionTrigger>

                  <AccordionContent className="text-white space-y-3">
                    <p>
                      Winter Learn to Skate is $425 for 12 weeks of one 30-minute class per
                      week, or $625 for a full hour (1:30–2:30 PM). Preschool Learn to Skate
                      is $360 for the 10-week session. Drop-ins are welcome at $45 per
                      session — no commitment required.
                    </p>

                    <p>
                      Fall Learn to Skate: one class per week is $350 for the 10-week session.
                      Two classes per week is $525. Drop-ins are welcome at $40 per session —
                      no commitment required.
                    </p>
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}