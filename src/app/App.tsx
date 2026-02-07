// src/app/App.tsx

// ✅ Branding
import logo from "../assets/wingslogo.png";

// ✅ Hero video should be served from /public/videos for GH Pages reliability
// Put the file here: public/videos/learn-to-skate-hero.mp4
import { VideoHero } from "@/app/components/VideoHero";
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
import practiceIcon from "../assets/icons/icons8-practice-64.png";
import coachingIcon from "../assets/icons/icons8-coaching-100.png";
import qrCode from "../assets/Registration_QR.png";

// ✅ IMPORTANT: Use BASE_URL so the video resolves under /lts_webpage_embed/ on GH Pages
// ✅ CHANGE: make the URL ABSOLUTE (origin + base) + cache-buster.
// Bump v= whenever you re-upload/re-encode.
const HERO_VIDEO_SRC =
  typeof window !== "undefined"
    ? `${window.location.origin}${import.meta.env.BASE_URL}videos/learn-to-skate-hero.mp4?v=4`
    : `${import.meta.env.BASE_URL}videos/learn-to-skate-hero.mp4?v=4`;

export default function App() {
  // ✅ Reusable shadow token
  const SHADOW = "shadow-[0_8px_20px_rgba(0,0,0,0.45)]";

  // ✅ Colors (kept from your design)
  const PAGE_BG = "bg-[#305774]";
  const CARD_OVERLAY = "bg-[#00335e]/85";

  // ✅ LINKS (from the site)
  const SPRING_LTS_REG_URL =
    "https://tms.ezfacility.com/OnlineRegistrations/Register.aspx?CompanyID=8390&GroupID=3995941";

  // ✅ Spring 2026 schedule (from EZFacility registration page)
  const SPRING_SCHEDULE = [
    {
      label: "Mondays (Preschoolers)",
      price: "$425",
      time: "1:20 PM – 2:05 PM",
      dates: [
        "Mar 16, 2026",
        "Mar 23, 2026",
        "Mar 30, 2026",
        "Apr 6, 2026",
        "Apr 13, 2026",
        "Apr 20, 2026",
        "Apr 27, 2026",
        "May 4, 2026",
        "May 11, 2026",
        "May 18, 2026",
        "Jun 1, 2026",
        "Jun 8, 2026",
      ],
    },
    {
      label: "Fridays",
      price: "$490",
      time: "3:15 PM – 4:00 PM",
      dates: [
        "Mar 13, 2026",
        "Mar 20, 2026",
        "Mar 27, 2026",
        "Apr 10, 2026",
        "Apr 17, 2026",
        "Apr 24, 2026",
        "May 1, 2026",
        "May 8, 2026",
        "May 15, 2026",
        "May 29, 2026",
        "Jun 5, 2026",
        "Jun 12, 2026",
      ],
    },
    {
      label: "Saturdays",
      price: "$490",
      time: "1:20 PM – 2:05 PM",
      dates: [
        "Mar 14, 2026",
        "Mar 21, 2026",
        "Mar 28, 2026",
        "Apr 11, 2026",
        "Apr 18, 2026",
        "Apr 25, 2026",
        "May 2, 2026",
        "May 9, 2026",
        "May 16, 2026",
        "May 30, 2026",
        "Jun 6, 2026",
        "Jun 13, 2026",
      ],
    },
  ];

  return (
    <div className={`min-h-screen ${PAGE_BG} flex flex-col sm:block`}>
      {/* ✅ CHANGE: encourage early fetch */}
      <link rel="preload" as="video" href={HERO_VIDEO_SRC} />

      {/* Header */}
      <header className={`${PAGE_BG} border-b border-[#b2dbd7]/70`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 xl:px-8 py-4" />
      </header>

      {/* Hero */}
      <section className={`${PAGE_BG} border-b border-[#b2dbd7]/70`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-5 xl:px-0 py-12">
          {/*
            ✅ much larger gap between the text column and the video:
            - explicit spacer column on lg+
          */}
          <div className="grid gap-y-8 items-center lg:grid-cols-[1fr_110px_1.2fr] xl:grid-cols-[1fr_140px_1.25fr]">
            {/* LEFT: text */}
            <div className="min-[1001px]:max-[1325px]:pr-5">
              <div className="flex flex-col items-center lg:items-center mb-5">
                <img
                  src={logo}
                  alt="Wings Arena"
                  className="w-[355.04px] mb-0 ml-0 mr-8 lg:ml-[10px] min-[1001px]:max-[1325px]:ml-[28px]"
                />

                <p className="text-[#b2dbd7] font-bold tracking-wide mt-2 mr-4 text-center min-[1001px]:max-[1325px]:pl-[28px]">
                  March 13th - June 13th
                </p>

                <div className="mt-[15px] -mb-[10px] h-px w-full bg-gradient-to-r from-transparent via-[#b2dbd7]/50 to-transparent" />
              </div>

              <div
                className="
                  text-gray-200 mb-4 ml-1 space-y-5
                  lg:text-center
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
                  Designed for kids (ages 3–8). No prior experience required — just
                  bring a smile and we’ll take care of the rest.
                </p>

                <p className="text-gray-300 font-semibold">
                  Skates &amp; helmet are required. Rental skates are available.
                </p>

                <div className="pt-2">
                  <a
                    href={SPRING_LTS_REG_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`inline-flex items-center justify-center rounded-lg px-6 py-3 font-bold text-white bg-white/15 hover:bg-white/20 border border-white/30 transition ${SHADOW}`}
                  >
                    Register for Spring Learn to Skate
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
              {/* ✅ CHANGE: key forces remount so GH Pages/cache doesn’t leave a “stuck” media element */}
              <VideoHero key={HERO_VIDEO_SRC} src={HERO_VIDEO_SRC} />
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
                    Designed for <strong>kids ages 3–8</strong>. Beginner-friendly —
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
                  iconImage={practiceIcon}
                  title="Class Options"
                  description="Mondays (Preschoolers), Fridays, or Saturdays"
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
                  iconImage={practiceIcon}
                  title="Required Gear"
                  description="Skates & helmet required (rental skates available)"
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

      {/* Pricing */}
      <section className={`${PAGE_BG} py-10`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 xl:px-8">
          <h2 className="text-[1.7rem] sm:text-[2.15625rem] mb-2 text-white text-center">
            Pricing Options
          </h2>

          <div className="my-5 h-px w-full bg-gradient-to-r from-transparent via-[#b2dbd7]/50 to-transparent" />

          <p className="text-center text-gray-200 mb-6 font-semibold">
            Learn To Skate Spring 2026
          </p>

          <div className="flex justify-center w-full">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 items-stretch gap-6 sm:gap-x-10 w-full max-w-6xl">
              <div className={`h-full flex [&>*]:h-full [&>*]:w-full [&>*]:mx-0 [&>*]:${SHADOW}`}>
                <PriceCard
                  title="Mondays"
                  price="$425"
                  description="Preschoolers"
                  features={["1:20 PM – 2:05 PM"]}
                />
              </div>

              <div className={`h-full flex [&>*]:h-full [&>*]:w-full [&>*]:mx-0 [&>*]:${SHADOW}`}>
                <PriceCard
                  title="Fridays"
                  price="$490"
                  description="Spring Learn to Skate"
                  features={["3:15 PM – 4:00 PM"]}
                />
              </div>

              <div className={`h-full flex [&>*]:h-full [&>*]:w-full [&>*]:mx-0 [&>*]:${SHADOW}`}>
                <PriceCard
                  title="Saturdays"
                  price="$490"
                  description="Spring Learn to Skate"
                  features={["1:20 PM – 2:05 PM"]}
                />
              </div>

              <div className={`h-full flex [&>*]:h-full [&>*]:w-full [&>*]:mx-0 [&>*]:${SHADOW}`}>
                <PriceCard
                  title="Fridays & Saturdays"
                  price="$735"
                  description="2-day bundle"
                />
              </div>
            </div>
          </div>

          <div className="text-center mt-8">
            <a
              href={SPRING_LTS_REG_URL}
              target="_blank"
              rel="noopener noreferrer"
              className={`inline-flex items-center justify-center rounded-lg px-6 py-3 font-bold text-white bg-white/15 hover:bg-white/20 border border-white/30 transition ${SHADOW}`}
            >
              Register Now
            </a>
          </div>
        </div>
      </section>

      {/* Schedule */}
      <section className={`${PAGE_BG} pt-2 pb-0`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 xl:px-8">
          <h2 className="text-[1.5625rem] sm:text-[2.2625rem] mb-0 sm:mb-5 text-white text-center">
            Spring 2026 Schedule
          </h2>
          <div className="my-5 h-px w-full bg-gradient-to-r from-transparent via-[#b2dbd7]/50 to-transparent" />
        </div>
      </section>

      <div className="w-[92%] sm:w-full max-w-6xl mx-auto my-8 mt-2">
        <div className={`relative overflow-hidden rounded-lg border border-white/20 p-6 sm:p-8 ${SHADOW}`}>
          <div className={`absolute inset-0 ${CARD_OVERLAY} backdrop-blur-[2px]`} />
          <div className="relative z-10">
            <ScheduleTable items={SPRING_SCHEDULE} />
            <div className="mt-6 text-center" />
          </div>
        </div>
      </div>

      {/* Registration / Contact */}
      <section className={`${PAGE_BG} py-8 pb-10`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 xl:px-8">
          <h2 className="text-[1.5625rem] sm:text-[2.2625rem] mb-0 sm:mb-5 text-white text-center">
            Registration
          </h2>
          <div className="my-5 h-px w-full bg-gradient-to-r from-transparent via-[#b2dbd7]/50 to-transparent" />

          <div className="w-[90%] sm:w-full max-w-3xl mx-auto my-8">
            <div className={`relative overflow-hidden rounded-lg border border-white/20 p-6 sm:p-8 text-center ${SHADOW}`}>
              <div className={`absolute inset-0 ${CARD_OVERLAY} backdrop-blur-[2px]`} />
              <div className="relative z-10">
                <h3 className="text-white text-[1.35rem] sm:text-[1.65rem] mb-2 -mt-[10px]">
                  Register Today!
                </h3>

                <p className="text-white leading-relaxed">
                  Use the QR code or click the link below to register for Spring Learn
                  to Skate.
                </p>

                <img
                  src={qrCode}
                  alt="Registration QR Code"
                  className="mx-auto mt-5 w-[120px] sm:w-[160px] h-auto rounded-md bg-white p-2"
                />

                <a
                  href={SPRING_LTS_REG_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-6 inline-block font-bold underline underline-offset-4 text-blue-600 hover:text-blue-700 transition text-lg md:text-3xl lg:text-3xl xl:text-4xl"
                >
                  Click Here to Register
                </a>

                <div className="my-6 h-px w-full bg-white/25" />

                <h3 className="text-white text-[1.35rem] sm:text-[1.65rem] mb-3">
                  Questions?
                </h3>

                <p className="text-white">
                  Email: <span className="font-semibold">info@wingsarena.com</span>
                </p>

                <div className="mt-4 text-white space-y-1">
                  <p className="font-semibold text-white">Wings Arena</p>
                  <p>5 Barry Place • Stamford, CT 06902</p>
                  <p>(203) 357-1055</p>
                </div>

                <div className="mt-6" />
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
              <Accordion type="single" collapsible className="bg-transparent px-4 sm:px-6">
                <AccordionItem value="item-1">
                  <AccordionTrigger className="text-white">
                    Who is Learn to Skate for?
                  </AccordionTrigger>
                  <AccordionContent className="text-white">
                    It’s designed for beginner skaters (kids ages 3–8) and focuses on
                    building confidence through step-by-step instruction and fun games.
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="item-2">
                  <AccordionTrigger className="text-white">
                    What equipment is required?
                  </AccordionTrigger>
                  <AccordionContent className="text-white">
                    Skates and a helmet are required. Rental skates are available.
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="item-3">
                  <AccordionTrigger className="text-white">
                    When are classes?
                  </AccordionTrigger>
                  <AccordionContent className="text-white">
                    Spring Learn to Skate runs March 13 – June 13, 2026 with options on
                    Mondays (Preschoolers), Fridays, or Saturdays. See the Schedule section above for
                    exact dates and times.
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="item-4">
                  <AccordionTrigger className="text-white">
                    How much does it cost?
                  </AccordionTrigger>
                  <AccordionContent className="text-white">
                    Spring options are $425 (Mondays - Preschool) or $490 (Fridays/Saturdays). A
                    2-day Friday &amp; Saturday bundle is $735.
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
