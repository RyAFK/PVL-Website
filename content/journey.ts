export interface JourneyStage {
  step: number;
  title: string;
  whatHappens: string;
  whoYouMeet: string;
  whatToExpect: string;
  obligation: string;
}

export const journeyStages: JourneyStage[] = [
  {
    step: 1,
    title: "Suitability enquiry",
    whatHappens:
      "You share some initial information online or by phone, and can use the non-diagnostic suitability tool to explore which pathways may be worth discussing.",
    whoYouMeet: "A patient care coordinator",
    whatToExpect: "A short conversation about your vision, lifestyle and any previous eye history.",
    obligation: "No obligation to proceed — this step is exploratory only.",
  },
  {
    step: 2,
    title: "Diagnostic assessment",
    whatHappens:
      "A comprehensive set of diagnostic scans measures your prescription, corneal thickness, corneal shape and overall eye health.",
    whoYouMeet: "An optometrist and, typically, your consultant",
    whatToExpect: "Around 60–90 minutes at the clinic, with dilating drops that may temporarily affect your vision, so many patients prefer not to drive immediately afterwards.",
    obligation: "No obligation to proceed — results are explained fully before any recommendation is made.",
  },
  {
    step: 3,
    title: "Consultant recommendation",
    whatHappens:
      "Your consultant reviews your results with you and discusses which treatment pathways may be appropriate, including relevant alternatives and risks.",
    whoYouMeet: "Your named consultant ophthalmic surgeon",
    whatToExpect: "A detailed, unhurried conversation, with time for questions and written information to take away.",
    obligation: "You decide whether and when to proceed — there is no pressure to book treatment at this appointment.",
  },
  {
    step: 4,
    title: "Treatment day",
    whatHappens:
      "Your procedure is carried out at the clinic, typically under local anaesthetic drops, following the plan agreed at your consultation.",
    whoYouMeet: "Your consultant and the clinical theatre team",
    whatToExpect: "A short procedure time, followed by initial recovery checks before you are discharged with aftercare instructions.",
    obligation: "You will have confirmed your consent and understood the risks before this stage.",
  },
  {
    step: 5,
    title: "Follow-up and aftercare",
    whatHappens:
      "Scheduled reviews monitor healing and visual outcomes in the days and weeks following treatment.",
    whoYouMeet: "Your consultant and clinical team",
    whatToExpect: "A defined schedule of review appointments, with guidance on activity, eye drops and any temporary restrictions.",
    obligation: "Aftercare within the guarantee period is included as part of your treatment plan.",
  },
  {
    step: 6,
    title: "Ongoing support",
    whatHappens:
      "Beyond the initial aftercare period, the clinic remains a point of contact for any longer-term questions about your vision.",
    whoYouMeet: "The wider clinical team",
    whatToExpect: "Guidance on routine eye health monitoring appropriate to your treatment and age.",
    obligation: "No further obligation — ongoing check-ups are your choice.",
  },
];
