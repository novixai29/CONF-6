"use strict";


/* =========================================================
   CONF-005 — SECTION / ELEVATION

   EDIT ALL CLIENT INFORMATION HERE ONLY
========================================================= */

const CONFERENCE = {

  name:
    "Architecture / Human Scale 2027",

  shortName:
    "A/HS 27",

  tagline:
    "Designing the spaces between people and cities.",

  organizer:
    "Urban Form Institute",


  startAt:
    "2027-09-18T09:00:00+03:00",

  endAt:
    "2027-09-18T17:30:00+03:00",

  timeZone:
    "Asia/Baghdad",


  venue:
    "Erbil Design Center",

  city:
    "Erbil",

  country:
    "Iraq",


  /*
    Leave empty to automatically build
    a Google Maps search URL.
  */
  mapsUrl:
    "",


  /*
    External registration URL.
    Leave empty to hide registration button.
  */
  registrationUrl:
    "https://example.com/register",


  websiteUrl:
    "https://example.com",


  /*
    Leave empty to use current invitation URL.
  */
  shareUrl:
    "",


  keynote: {

    name:
      "Lina Haddad",

    role:
      "Architect & Urban Researcher",

    organization:
      "Common Ground Studio",

    topic:
      "Designing at the Scale of Everyday Life"

  },


  markerSections: [

    {
      code:
        "SECTION / 01",

      title:
        "Human Scale",

      description:
        "A conference about architecture measured through everyday human experience."
    },

    {
      code:
        "SECTION / 02",

      title:
        "18 September",

      description:
        "One day of focused architectural discussion, beginning at 09:00 and closing at 17:30."
    },

    {
      code:
        "SECTION / 03",

      title:
        "Erbil Design Center",

      description:
        "The conference meets in Erbil, where architecture, urban growth and contemporary design intersect."
    },

    {
      code:
        "SECTION / 04",

      title:
        "Lina Haddad",

      description:
        "Opening keynote: Designing at the Scale of Everyday Life."
    }

  ],


  layers: [

    {
      level:
        "L01",

      time:
        "10:00",

      title:
        "Space",

      description:
        "How proportion, movement and everyday behavior shape architectural space."
    },

    {
      level:
        "L02",

      time:
        "12:30",

      title:
        "Material",

      description:
        "A discussion on material choices, climate, durability and local identity."
    },

    {
      level:
        "L03",

      time:
        "15:00",

      title:
        "City",

      description:
        "The relationship between individual buildings and the larger urban fabric."
    }

  ]

};



/* =========================================================
   DATES
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


  markerCode:
    document.getElementById(
      "markerCode"
    ),

  markerTitle:
    document.getElementById(
      "markerTitle"
    ),

  markerDescription:
    document.getElementById(
      "markerDescription"
    ),

  markerRange:
    document.getElementById(
      "markerRange"
    ),


  countdownDays:
    document.getElementById(
      "countdownDays"
    ),

  countdownHours:
    document.getElementById(
      "countdownHours"
    ),

  countdownMinutes:
    document.getElementById(
      "countdownMinutes"
    ),

  countdownSeconds:
    document.getElementById(
      "countdownSeconds"
    ),

  countdownProgress:
    document.getElementById(
      "countdownProgress"
    ),

  countdownMessage:
    document.getElementById(
      "countdownMessage"
    ),


  keynoteName:
    document.getElementById(
      "keynoteName"
    ),

  keynoteRole:
    document.getElementById(
      "keynoteRole"
    ),

  keynoteOrganization:
    document.getElementById(
      "keynoteOrganization"
    ),

  keynoteTopic:
    document.getElementById(
      "keynoteTopic"
    ),


  layerList:
    document.getElementById(
      "layerList"
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
    formatNumericDate(
      START_DATE
    );


  elements.heroTime.textContent =
    `${format24Time(START_DATE)} → ${format24Time(END_DATE)}`;


  elements.heroCity.textContent =
    `${CONFERENCE.city} / ${CONFERENCE.country}`;


  elements.keynoteName.textContent =
    CONFERENCE.keynote.name;


  elements.keynoteRole.textContent =
    CONFERENCE.keynote.role;


  elements.keynoteOrganization.textContent =
    CONFERENCE.keynote.organization;


  elements.keynoteTopic.textContent =
    CONFERENCE.keynote.topic;


  elements.venueCity.textContent =
    CONFERENCE.city.toUpperCase();


  elements.venueCountry.textContent =
    `${CONFERENCE.city} / ${CONFERENCE.country}`;


  elements.footerYear.textContent =
    START_DATE.getFullYear();


  configureLinks();

  updateMetadata();

  addStructuredData();

}



/* =========================================================
   DATE FORMAT
========================================================= */

function formatNumericDate(date) {

  const day =
    new Intl.DateTimeFormat(
      "en-GB",
      {
        timeZone:
          CONFERENCE.timeZone,

        day:
          "2-digit"
      }
    ).format(date);


  const month =
    new Intl.DateTimeFormat(
      "en-GB",
      {
        timeZone:
          CONFERENCE.timeZone,

        month:
          "2-digit"
      }
    ).format(date);


  const year =
    new Intl.DateTimeFormat(
      "en-GB",
      {
        timeZone:
          CONFERENCE.timeZone,

        year:
          "numeric"
      }
    ).format(date);


  return `${day}.${month}.${year}`;

}



function format24Time(date) {

  return new Intl.DateTimeFormat(
    "en-GB",
    {
      timeZone:
        CONFERENCE.timeZone,

      hour:
        "2-digit",

      minute:
        "2-digit",

      hour12:
        false
    }
  ).format(date);

}



/* =========================================================
   MARKER INTERACTION
========================================================= */

function setupMarkerInteraction() {

  const buttons =
    Array.from(
      document.querySelectorAll(
        ".marker-button"
      )
    );


  const positions =
    [
      7,
      34,
      66,
      93
    ];


  elements.markerRange
    .addEventListener(
      "input",
      () => {

        const value =
          Number(
            elements.markerRange.value
          );


        document
          .documentElement
          .style
          .setProperty(
            "--marker-position",
            `${value}%`
          );


        const index =
          getClosestMarkerIndex(
            value
          );


        updateMarkerContent(
          index,
          buttons,
          false
        );

      }
    );


  elements.markerRange
    .addEventListener(
      "change",
      () => {

        const value =
          Number(
            elements.markerRange.value
          );


        const index =
          getClosestMarkerIndex(
            value
          );


        elements.markerRange.value =
          positions[index];


        document
          .documentElement
          .style
          .setProperty(
            "--marker-position",
            `${positions[index]}%`
          );

      }
    );


  buttons.forEach(
    button => {

      button.addEventListener(
        "click",
        () => {

          const index =
            Number(
              button.dataset.markerIndex
            );


          elements.markerRange.value =
            positions[index];


          document
            .documentElement
            .style
            .setProperty(
              "--marker-position",
              `${positions[index]}%`
            );


          updateMarkerContent(
            index,
            buttons,
            true
          );

        }
      );

    }
  );


  document
    .documentElement
    .style
    .setProperty(
      "--marker-position",
      `${positions[0]}%`
    );

}



/* =========================================================
   CLOSEST MARKER
========================================================= */

function getClosestMarkerIndex(value) {

  if (value < 22) {
    return 0;
  }


  if (value < 50) {
    return 1;
  }


  if (value < 78) {
    return 2;
  }


  return 3;

}



/* =========================================================
   UPDATE MARKER CONTENT
========================================================= */

function updateMarkerContent(
  index,
  buttons,
  animate = true
) {

  const data =
    CONFERENCE.markerSections[index];


  if (!data) {
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


  const applyContent =
    () => {

      elements.markerCode.textContent =
        data.code;


      elements.markerTitle.textContent =
        data.title;


      elements.markerDescription.textContent =
        data.description;

    };


  if (
    !animate ||
    prefersReducedMotion()
  ) {

    applyContent();

    return;

  }


  const readout =
    elements.markerTitle.parentElement;


  const fadeOut =
    readout.animate(
      [
        {
          opacity: 1,
          transform:
            "translateY(0)"
        },

        {
          opacity: 0,
          transform:
            "translateY(6px)"
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


  fadeOut.onfinish =
    () => {

      applyContent();


      readout.animate(
        [
          {
            opacity: 0,
            transform:
              "translateY(6px)"
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
   LAYERS
========================================================= */

function renderLayers() {

  elements.layerList.innerHTML =
    "";


  CONFERENCE.layers.forEach(
    layer => {

      const article =
        document.createElement(
          "article"
        );


      article.className =
        "layer-item reveal";


      article.innerHTML = `

        <span class="layer-item__level">
          ${escapeHTML(layer.level)}
        </span>


        <div>

          <p class="layer-item__meta">
            ${escapeHTML(layer.time)} / PROGRAM LAYER
          </p>

          <h3>
            ${escapeHTML(layer.title)}
          </h3>

          <p>
            ${escapeHTML(layer.description)}
          </p>

        </div>

      `;


      elements.layerList
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


  if (difference <= 0) {

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
      (totalSeconds % 86400) /
      3600
    );


  const minutes =
    Math.floor(
      (totalSeconds % 3600) /
      60
    );


  const seconds =
    totalSeconds % 60;


  elements.countdownDays.textContent =
    pad(days);


  elements.countdownHours.textContent =
    pad(hours);


  elements.countdownMinutes.textContent =
    pad(minutes);


  elements.countdownSeconds.textContent =
    pad(seconds);


  updateCountdownProgress(
    now
  );

}



/* =========================================================
   COUNTDOWN PROGRESS
========================================================= */

function updateCountdownProgress(now) {

  const ninetyDaysBefore =
    START_DATE.getTime() -
    90 * 24 * 60 * 60 * 1000;


  const total =
    START_DATE.getTime() -
    ninetyDaysBefore;


  const elapsed =
    now.getTime() -
    ninetyDaysBefore;


  const progress =
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
      `${progress}%`;

}



/* =========================================================
   EVENT STARTED
========================================================= */

function handleConferenceStarted(now) {

  if (countdownTimer) {

    clearInterval(
      countdownTimer
    );


    countdownTimer =
      null;

  }


  elements.countdownDays.textContent =
    "00";


  elements.countdownHours.textContent =
    "00";


  elements.countdownMinutes.textContent =
    "00";


  elements.countdownSeconds.textContent =
    "00";


  elements.countdownProgress
    .style
    .width =
      "100%";


  if (
    now.getTime() <=
    END_DATE.getTime()
  ) {

    elements.countdownMessage.textContent =
      "Conference is currently in session.";

  } else {

    elements.countdownMessage.textContent =
      "This conference has concluded.";

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
        ? `Website: ${CONFERENCE.websiteUrl}`
        : "",

      invitationUrl
        ? `Invitation: ${invitationUrl}`
        : ""
    ]
      .filter(Boolean)
      .join("\\n");


  const content =
`BEGIN:VCALENDAR
VERSION:2.0
PRODID:-//Section Elevation Invitation//EN
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
    "Calendar file downloaded."
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
    "@section-elevation"
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


  if (navigator.share) {

    try {

      await navigator.share(
        data
      );


      announce(
        "Invitation shared."
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
   COPY FALLBACK
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
      "Invitation link copied."
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
      "Invitation link copied."
    );

  } catch (error) {

    announce(
      "Unable to copy the link automatically."
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

  const meta =
    document.querySelector(
      selector
    );


  if (!meta) {
    return;
  }


  meta.setAttribute(
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

function pad(number) {

  return String(number)
    .padStart(
      2,
      "0"
    );

}



function slugify(value = "") {

  return String(value)

    .toLowerCase()

    .trim()

    .replace(
      /[^a-z0-9]+/g,
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

  renderLayers();

  setupMarkerInteraction();

  setupActions();

  setupRevealObserver();

  startCountdown();

}



document.addEventListener(
  "DOMContentLoaded",
  init
);
