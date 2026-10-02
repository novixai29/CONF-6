"use strict";


/* =========================================================
   CONF-006 — DECISION PATH
   مسار القرار

   جميع بيانات الزبون من هنا فقط
========================================================= */

const CONFERENCE = {

  name:
    "ملتقى القيادة وصناعة القرار 2027",

  shortName:
    "LDF 27",

  tagline:
    "حين تتحول الرؤية إلى قرار",

  organizer:
    "مركز القيادة والتطوير المؤسسي",


  startAt:
    "2027-11-16T09:00:00+03:00",

  endAt:
    "2027-11-16T17:00:00+03:00",

  timeZone:
    "Asia/Baghdad",


  venue:
    "مركز بغداد للمؤتمرات والقيادة",

  city:
    "بغداد",

  country:
    "العراق",


  /*
    اتركه فارغاً ليتم إنشاء رابط
    Google Maps تلقائياً.
  */
  mapsUrl:
    "",


  /*
    رابط التسجيل الخارجي.
    إذا تركته فارغاً يختفي زر التسجيل.
  */
  registrationUrl:
    "https://example.com/register",


  websiteUrl:
    "https://example.com",


  /*
    إذا ترك فارغاً يستخدم رابط
    الدعوة الحالي تلقائياً.
  */
  shareUrl:
    "",


  decisions: [

    {
      label:
        "الرؤية",

      title:
        "قبل القرار هناك رؤية.",

      description:
        "كيف يحوّل القائد الاتجاه العام إلى صورة واضحة يستطيع الفريق فهمها والعمل من خلالها."
    },

    {
      label:
        "الفريق",

      title:
        "القرار لا يتحرك وحده.",

      description:
        "كيف تُبنى الثقة وتُوزع المسؤوليات بحيث يصبح الفريق جزءاً من القرار وليس مجرد منفذ له."
    },

    {
      label:
        "التنفيذ",

      title:
        "القيمة تظهر عند التنفيذ.",

      description:
        "كيف يتحول القرار من فكرة جيدة إلى خطوات عملية قابلة للقياس والمتابعة والتطوير."
    }

  ],


  speakers: [

    {
      theme:
        "الرؤية",

      name:
        "د. سامر العلي",

      role:
        "مستشار في القيادة الاستراتيجية",

      organization:
        "معهد التطوير المؤسسي"
    },

    {
      theme:
        "الفريق",

      name:
        "أ. نور حسن",

      role:
        "خبيرة في بناء فرق العمل",

      organization:
        "مركز القيادة الحديثة"
    },

    {
      theme:
        "التنفيذ",

      name:
        "م. علي ياسين",

      role:
        "مدير التحول المؤسسي",

      organization:
        "مجموعة آفاق"
    }

  ],


  agenda: [

    {
      time:
        "10:00",

      type:
        "القرار الأول",

      title:
        "تحديد الاتجاه",

      description:
        "جلسة مركزة حول تحويل الرؤية العامة إلى أولويات واضحة وقابلة للفهم."
    },

    {
      time:
        "12:30",

      type:
        "القرار الثاني",

      title:
        "بناء المسؤولية",

      description:
        "نقاش حول دور الفريق في صناعة القرار وتوزيع الأدوار والثقة."
    },

    {
      time:
        "15:00",

      type:
        "القرار الثالث",

      title:
        "من القرار إلى التنفيذ",

      description:
        "كيف تتحول القرارات إلى إجراءات ومؤشرات متابعة ونتائج عملية."
    }

  ]

};



/* =========================================================
   DATE OBJECTS
========================================================= */

const START_DATE =
  new Date(
    CONFERENCE.startAt
  );


const END_DATE =
  new Date(
    CONFERENCE.endAt
  );


let countdownTimer =
  null;



/* =========================================================
   ELEMENTS
========================================================= */

const elements = {

  heroDate:
    document.getElementById(
      "heroDate"
    ),

  heroTime:
    document.getElementById(
      "heroTime"
    ),

  heroCity:
    document.getElementById(
      "heroCity"
    ),


  decisionIndex:
    document.getElementById(
      "decisionIndex"
    ),

  decisionTitle:
    document.getElementById(
      "decisionTitle"
    ),

  decisionDescription:
    document.getElementById(
      "decisionDescription"
    ),

  activeDecisionPath:
    document.getElementById(
      "activeDecisionPath"
    ),


  days:
    document.getElementById(
      "days"
    ),

  hours:
    document.getElementById(
      "hours"
    ),

  minutes:
    document.getElementById(
      "minutes"
    ),

  seconds:
    document.getElementById(
      "seconds"
    ),

  countdownProgress:
    document.getElementById(
      "countdownProgress"
    ),

  countdownMarker:
    document.getElementById(
      "countdownMarker"
    ),

  countdownMessage:
    document.getElementById(
      "countdownMessage"
    ),


  speakersList:
    document.getElementById(
      "speakersList"
    ),

  agendaList:
    document.getElementById(
      "agendaList"
    ),


  venueCity:
    document.getElementById(
      "venueCity"
    ),

  venueCountry:
    document.getElementById(
      "venueCountry"
    ),


  mapButton:
    document.getElementById(
      "mapButton"
    ),

  secondaryMapButton:
    document.getElementById(
      "secondaryMapButton"
    ),

  registerButton:
    document.getElementById(
      "registerButton"
    ),

  websiteButton:
    document.getElementById(
      "websiteButton"
    ),


  calendarButton:
    document.getElementById(
      "calendarButton"
    ),

  shareButton:
    document.getElementById(
      "shareButton"
    ),

  topShareButton:
    document.getElementById(
      "topShareButton"
    ),


  footerYear:
    document.getElementById(
      "footerYear"
    ),

  statusMessage:
    document.getElementById(
      "statusMessage"
    )

};



/* =========================================================
   POPULATE PAGE
========================================================= */

function populateConference() {

  document
    .querySelectorAll(
      "[data-field]"
    )
    .forEach(
      element => {

        const field =
          element.dataset.field;


        if (
          Object.prototype.hasOwnProperty.call(
            CONFERENCE,
            field
          )
        ) {

          element.textContent =
            CONFERENCE[field];

        }

      }
    );


  elements.heroDate.textContent =
    formatArabicDate(
      START_DATE
    );


  elements.heroTime.textContent =
    `${formatArabicTime(START_DATE)} — ${formatArabicTime(END_DATE)}`;


  elements.heroCity.textContent =
    `${CONFERENCE.city} — ${CONFERENCE.country}`;


  elements.venueCity.textContent =
    CONFERENCE.city;


  elements.venueCountry.textContent =
    CONFERENCE.country;


  elements.footerYear.textContent =
    new Intl.NumberFormat(
      "ar-IQ",
      {
        useGrouping: false
      }
    ).format(
      START_DATE.getFullYear()
    );


  configureLinks();

  updateMetadata();

  addStructuredData();

}



/* =========================================================
   DATE FORMAT
========================================================= */

function formatArabicDate(date) {

  return new Intl.DateTimeFormat(
    "ar-IQ",
    {
      timeZone:
        CONFERENCE.timeZone,

      day:
        "numeric",

      month:
        "long",

      year:
        "numeric"
    }
  ).format(date);

}



function formatArabicTime(date) {

  return new Intl.DateTimeFormat(
    "ar-IQ",
    {
      timeZone:
        CONFERENCE.timeZone,

      hour:
        "numeric",

      minute:
        "2-digit",

      hour12:
        true
    }
  ).format(date);

}



/* =========================================================
   DECISION INTERACTION
========================================================= */

function setupDecisionInteraction() {

  const buttons =
    Array.from(
      document.querySelectorAll(
        ".decision-button"
      )
    );


  const paths = [

    `
      M250 20
      L250 120
      C250 170 95 170 95 250
      L95 350
    `,

    `
      M250 20
      L250 350
    `,

    `
      M250 20
      L250 120
      C250 170 405 170 405 250
      L405 350
    `

  ];


  buttons.forEach(
    button => {

      button.addEventListener(
        "click",
        () => {

          const index =
            Number(
              button.dataset.decision
            );


          selectDecision(
            index,
            buttons,
            paths
          );

        }
      );

    }
  );


  buttons.forEach(
    (button, index) => {

      button.addEventListener(
        "keydown",
        event => {

          if (
            event.key !==
              "ArrowLeft" &&
            event.key !==
              "ArrowRight"
          ) {
            return;
          }


          event.preventDefault();


          const direction =
            event.key === "ArrowLeft"
              ? 1
              : -1;


          const nextIndex =
            (
              index +
              direction +
              buttons.length
            ) %
            buttons.length;


          buttons[
            nextIndex
          ].focus();


          selectDecision(
            nextIndex,
            buttons,
            paths
          );

        }
      );

    }
  );

}



/* =========================================================
   SELECT DECISION
========================================================= */

function selectDecision(
  index,
  buttons,
  paths
) {

  const decision =
    CONFERENCE.decisions[index];


  if (!decision) {
    return;
  }


  buttons.forEach(
    (button, buttonIndex) => {

      const active =
        buttonIndex === index;


      button.classList.toggle(
        "is-active",
        active
      );


      button.setAttribute(
        "aria-selected",
        String(active)
      );

    }
  );


  elements.activeDecisionPath
    .setAttribute(
      "d",
      paths[index]
    );


  const applyContent =
    () => {

      elements.decisionIndex.textContent =
        `${formatNumber(index + 1)} / ${decision.label}`;


      elements.decisionTitle.textContent =
        decision.title;


      elements.decisionDescription.textContent =
        decision.description;

    };


  if (
    prefersReducedMotion()
  ) {

    applyContent();

    return;

  }


  const container =
    elements.decisionTitle
      .parentElement;


  const fade =
    container.animate(
      [
        {
          opacity: 1,
          transform:
            "translateY(0)"
        },

        {
          opacity: 0,
          transform:
            "translateY(7px)"
        }
      ],
      {
        duration:
          130,

        fill:
          "forwards",

        easing:
          "ease-in"
      }
    );


  fade.onfinish =
    () => {

      applyContent();


      container.animate(
        [
          {
            opacity: 0,
            transform:
              "translateY(7px)"
          },

          {
            opacity: 1,
            transform:
              "translateY(0)"
          }
        ],
        {
          duration:
            220,

          fill:
            "forwards",

          easing:
            "ease-out"
        }
      );

    };

}



/* =========================================================
   SPEAKERS
========================================================= */

function renderSpeakers() {

  elements.speakersList.innerHTML =
    "";


  CONFERENCE.speakers.forEach(
    (speaker, index) => {

      const article =
        document.createElement(
          "article"
        );


      article.className =
        "speaker reveal";


      article.innerHTML = `

        <span class="speaker__number">
          ${formatNumber(index + 1)}
        </span>


        <div>

          <p class="speaker__theme">
            ${escapeHTML(speaker.theme)}
          </p>

          <h3>
            ${escapeHTML(speaker.name)}
          </h3>

          <p class="speaker__role">
            ${escapeHTML(speaker.role)}
          </p>

          <p class="speaker__organization">
            ${escapeHTML(speaker.organization)}
          </p>

        </div>

      `;


      elements.speakersList
        .appendChild(
          article
        );

    }
  );

}



/* =========================================================
   AGENDA
========================================================= */

function renderAgenda() {

  elements.agendaList.innerHTML =
    "";


  CONFERENCE.agenda.forEach(
    item => {

      const article =
        document.createElement(
          "article"
        );


      article.className =
        "agenda-item reveal";


      article.innerHTML = `

        <time class="agenda-item__time">
          ${escapeHTML(item.time)}
        </time>

        <p class="agenda-item__type">
          ${escapeHTML(item.type)}
        </p>

        <h3>
          ${escapeHTML(item.title)}
        </h3>

        <p>
          ${escapeHTML(item.description)}
        </p>

      `;


      elements.agendaList
        .appendChild(
          article
        );

    }
  );

}



/* =========================================================
   COUNTDOWN
========================================================= */

function startCountdown() {

  updateCountdown();


  countdownTimer =
    window.setInterval(
      updateCountdown,
      1000
    );

}



function updateCountdown() {

  const now =
    new Date();


  const difference =
    START_DATE.getTime() -
    now.getTime();


  if (
    difference <= 0
  ) {

    handleConferenceStarted(
      now
    );

    return;

  }


  const totalSeconds =
    Math.floor(
      difference / 1000
    );


  const days =
    Math.floor(
      totalSeconds / 86400
    );


  const hours =
    Math.floor(
      (
        totalSeconds %
        86400
      ) /
      3600
    );


  const minutes =
    Math.floor(
      (
        totalSeconds %
        3600
      ) /
      60
    );


  const seconds =
    totalSeconds % 60;


  elements.days.textContent =
    formatNumber(days);


  elements.hours.textContent =
    formatTwoDigits(hours);


  elements.minutes.textContent =
    formatTwoDigits(minutes);


  elements.seconds.textContent =
    formatTwoDigits(seconds);


  updateCountdownPath(
    now
  );

}



/* =========================================================
   COUNTDOWN PATH
========================================================= */

function updateCountdownPath(now) {

  const ninetyDaysBefore =
    START_DATE.getTime() -
    90 * 24 * 60 * 60 * 1000;


  const total =
    START_DATE.getTime() -
    ninetyDaysBefore;


  const elapsed =
    now.getTime() -
    ninetyDaysBefore;


  const percentage =
    Math.max(
      0,
      Math.min(
        100,
        (elapsed / total) * 100
      )
    );


  elements.countdownProgress
    .style
    .width =
      `${percentage}%`;


  /*
    RTL progress:
    marker moves from right to left.
  */

  elements.countdownMarker
    .style
    .right =
      `${percentage}%`;

}



/* =========================================================
   CONFERENCE STARTED
========================================================= */

function handleConferenceStarted(now) {

  if (
    countdownTimer
  ) {

    clearInterval(
      countdownTimer
    );


    countdownTimer =
      null;

  }


  elements.days.textContent =
    "٠";


  elements.hours.textContent =
    "٠٠";


  elements.minutes.textContent =
    "٠٠";


  elements.seconds.textContent =
    "٠٠";


  elements.countdownProgress
    .style
    .width =
      "100%";


  elements.countdownMarker
    .style
    .right =
      "100%";


  if (
    now.getTime() <=
    END_DATE.getTime()
  ) {

    elements.countdownMessage.textContent =
      "الملتقى منعقد الآن.";

  } else {

    elements.countdownMessage.textContent =
      "انتهى موعد هذا الملتقى.";

  }

}



/* =========================================================
   MAP
========================================================= */

function getMapUrl() {

  const custom =
    CONFERENCE.mapsUrl?.trim();


  if (custom) {
    return custom;
  }


  const query =
    [
      CONFERENCE.venue,
      CONFERENCE.city,
      CONFERENCE.country
    ]
      .filter(Boolean)
      .join(", ");


  return (
    "https://www.google.com/maps/search/?api=1&query=" +
    encodeURIComponent(query)
  );

}



/* =========================================================
   LINKS
========================================================= */

function configureLinks() {

  const mapUrl =
    getMapUrl();


  elements.mapButton.href =
    mapUrl;


  elements.secondaryMapButton.href =
    mapUrl;


  const registration =
    CONFERENCE.registrationUrl?.trim();


  if (registration) {

    elements.registerButton.href =
      registration;

  } else {

    elements.registerButton.hidden =
      true;

  }


  const website =
    CONFERENCE.websiteUrl?.trim();


  if (website) {

    elements.websiteButton.href =
      website;

  } else {

    elements.websiteButton.hidden =
      true;

  }

}



/* =========================================================
   CALENDAR / ICS
========================================================= */

function downloadCalendar() {

  const location =
    [
      CONFERENCE.venue,
      CONFERENCE.city,
      CONFERENCE.country
    ]
      .filter(Boolean)
      .join(", ");


  const invitationUrl =
    getShareUrl();


  const description =
    [
      CONFERENCE.tagline,

      CONFERENCE.websiteUrl
        ? `الموقع الرسمي: ${CONFERENCE.websiteUrl}`
        : "",

      invitationUrl
        ? `رابط الدعوة: ${invitationUrl}`
        : ""
    ]
      .filter(Boolean)
      .join("\\n");


  const content =
`BEGIN:VCALENDAR
VERSION:2.0
PRODID:-//Decision Path Invitation//AR
CALSCALE:GREGORIAN
METHOD:PUBLISH
BEGIN:VEVENT
UID:${createUID()}
DTSTAMP:${formatICSDate(new Date())}
DTSTART:${formatICSDate(START_DATE)}
DTEND:${formatICSDate(END_DATE)}
SUMMARY:${escapeICS(CONFERENCE.name)}
DESCRIPTION:${escapeICS(description)}
LOCATION:${escapeICS(location)}
URL:${escapeICS(CONFERENCE.websiteUrl || invitationUrl)}
END:VEVENT
END:VCALENDAR`;


  const blob =
    new Blob(
      [content],
      {
        type:
          "text/calendar;charset=utf-8"
      }
    );


  const url =
    URL.createObjectURL(
      blob
    );


  const link =
    document.createElement(
      "a"
    );


  link.href =
    url;


  link.download =
    `${slugify(CONFERENCE.shortName)}.ics`;


  document.body.appendChild(
    link
  );


  link.click();

  link.remove();


  URL.revokeObjectURL(
    url
  );


  announce(
    "تم تنزيل ملف التقويم."
  );

}



/* =========================================================
   ICS HELPERS
========================================================= */

function formatICSDate(date) {

  return date
    .toISOString()
    .replace(
      /[-:]/g,
      ""
    )
    .replace(
      /\.\d{3}Z$/,
      "Z"
    );

}



function createUID() {

  return (
    `${slugify(CONFERENCE.shortName)}` +
    `-${START_DATE.getTime()}` +
    "@decision-path"
  );

}



function escapeICS(value = "") {

  return String(value)

    .replace(
      /\\/g,
      "\\\\"
    )

    .replace(
      /\n/g,
      "\\n"
    )

    .replace(
      /,/g,
      "\\,"
    )

    .replace(
      /;/g,
      "\\;"
    );

}



/* =========================================================
   SHARE
========================================================= */

async function shareInvitation() {

  const data = {

    title:
      CONFERENCE.name,

    text:
      `${CONFERENCE.name} — ${CONFERENCE.tagline}`,

    url:
      getShareUrl()

  };


  if (
    navigator.share
  ) {

    try {

      await navigator.share(
        data
      );


      announce(
        "تمت مشاركة الدعوة."
      );


      return;

    } catch (error) {

      if (
        error.name ===
        "AbortError"
      ) {
        return;
      }

    }

  }


  await copyInvitationLink();

}



/* =========================================================
   COPY
========================================================= */

async function copyInvitationLink() {

  const url =
    getShareUrl();


  try {

    await navigator.clipboard
      .writeText(
        url
      );


    announce(
      "تم نسخ رابط الدعوة."
    );

  } catch (error) {

    fallbackCopy(
      url
    );

  }

}



function fallbackCopy(text) {

  const textarea =
    document.createElement(
      "textarea"
    );


  textarea.value =
    text;


  textarea.setAttribute(
    "readonly",
    ""
  );


  textarea.style.position =
    "fixed";

  textarea.style.opacity =
    "0";


  document.body.appendChild(
    textarea
  );


  textarea.select();


  try {

    document.execCommand(
      "copy"
    );


    announce(
      "تم نسخ رابط الدعوة."
    );

  } catch (error) {

    announce(
      "تعذر نسخ الرابط تلقائياً."
    );

  }


  textarea.remove();

}



/* =========================================================
   SHARE URL
========================================================= */

function getShareUrl() {

  const custom =
    CONFERENCE.shareUrl?.trim();


  if (custom) {
    return custom;
  }


  return window.location.href;

}



/* =========================================================
   ACTIONS
========================================================= */

function setupActions() {

  elements.calendarButton
    .addEventListener(
      "click",
      downloadCalendar
    );


  elements.shareButton
    .addEventListener(
      "click",
      shareInvitation
    );


  elements.topShareButton
    .addEventListener(
      "click",
      shareInvitation
    );

}



/* =========================================================
   REVEAL
========================================================= */

function setupRevealObserver() {

  const items =
    document.querySelectorAll(
      ".reveal"
    );


  if (
    prefersReducedMotion()
  ) {

    items.forEach(
      item =>
        item.classList.add(
          "is-visible"
        )
    );

    return;

  }


  const observer =
    new IntersectionObserver(
      entries => {

        entries.forEach(
          entry => {

            if (
              !entry.isIntersecting
            ) {
              return;
            }


            entry.target
              .classList
              .add(
                "is-visible"
              );


            observer.unobserve(
              entry.target
            );

          }
        );

      },
      {
        threshold:
          0.12,

        rootMargin:
          "0px 0px -7% 0px"
      }
    );


  items.forEach(
    item =>
      observer.observe(
        item
      )
  );

}



/* =========================================================
   METADATA
========================================================= */

function updateMetadata() {

  document.title =
    CONFERENCE.name;


  const description =
    `${CONFERENCE.name} — ${CONFERENCE.tagline}`;


  updateMeta(
    'meta[name="description"]',
    description
  );


  updateMeta(
    'meta[property="og:title"]',
    CONFERENCE.name
  );


  updateMeta(
    'meta[property="og:description"]',
    CONFERENCE.tagline
  );


  updateMeta(
    'meta[property="og:url"]',
    getShareUrl()
  );


  updateMeta(
    'meta[name="twitter:title"]',
    CONFERENCE.name
  );


  updateMeta(
    'meta[name="twitter:description"]',
    CONFERENCE.tagline
  );

}



function updateMeta(
  selector,
  content
) {

  const element =
    document.querySelector(
      selector
    );


  if (!element) {
    return;
  }


  element.setAttribute(
    "content",
    content
  );

}



/* =========================================================
   STRUCTURED DATA
========================================================= */

function addStructuredData() {

  const data = {

    "@context":
      "https://schema.org",

    "@type":
      "Event",

    name:
      CONFERENCE.name,

    description:
      CONFERENCE.tagline,

    startDate:
      CONFERENCE.startAt,

    endDate:
      CONFERENCE.endAt,

    eventStatus:
      "https://schema.org/EventScheduled",

    eventAttendanceMode:
      "https://schema.org/OfflineEventAttendanceMode",

    location: {

      "@type":
        "Place",

      name:
        CONFERENCE.venue,

      address: {

        "@type":
          "PostalAddress",

        addressLocality:
          CONFERENCE.city,

        addressCountry:
          CONFERENCE.country

      }

    },

    organizer: {

      "@type":
        "Organization",

      name:
        CONFERENCE.organizer,

      url:
        CONFERENCE.websiteUrl ||
        undefined

    },

    url:
      getShareUrl()

  };


  const script =
    document.createElement(
      "script"
    );


  script.type =
    "application/ld+json";


  script.textContent =
    JSON.stringify(
      data
    );


  document.head.appendChild(
    script
  );

}



/* =========================================================
   HELPERS
========================================================= */

function formatNumber(number) {

  return new Intl.NumberFormat(
    "ar-IQ",
    {
      useGrouping: false
    }
  ).format(number);

}



function formatTwoDigits(number) {

  return formatNumber(
    String(number)
      .padStart(
        2,
        "0"
      )
  );

}



function slugify(value = "") {

  return String(value)

    .toLowerCase()

    .trim()

    .replace(
      /[^a-z0-9\u0600-\u06ff]+/g,
      "-"
    )

    .replace(
      /^-+|-+$/g,
      ""
    );

}



function escapeHTML(value = "") {

  return String(value)

    .replace(
      /&/g,
      "&amp;"
    )

    .replace(
      /</g,
      "&lt;"
    )

    .replace(
      />/g,
      "&gt;"
    )

    .replace(
      /"/g,
      "&quot;"
    )

    .replace(
      /'/g,
      "&#039;"
    );

}



function announce(message) {

  elements.statusMessage.textContent =
    "";


  window.setTimeout(
    () => {

      elements.statusMessage.textContent =
        message;

    },
    30
  );

}



function prefersReducedMotion() {

  return window
    .matchMedia(
      "(prefers-reduced-motion: reduce)"
    )
    .matches;

}



/* =========================================================
   INIT
========================================================= */

function init() {

  populateConference();

  renderSpeakers();

  renderAgenda();

  setupDecisionInteraction();

  setupActions();

  setupRevealObserver();

  startCountdown();

}



document.addEventListener(
  "DOMContentLoaded",
  init
);
