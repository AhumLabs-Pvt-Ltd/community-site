// All page text lives here so it is easy to change without touching layout.

export const ORG_URL = "https://github.com/AhumLabs-Pvt-Ltd";
export const GOOD_FIRST_ISSUES_URL = `${ORG_URL}`;

export const hero = {
  title: "Ahum",
  tagline: "An open developer community for maritime software, started by Ahum Labs.",
  body: "Shipping moves most of the world's trade, but it runs on legacy software and spreadsheets, and it has almost no developers. Ahum is where developers, students and maritime professionals build the open foundation the industry is missing.",
  cta: { label: "See the code on GitHub", href: ORG_URL },
};

export const building = {
  title: "What we're building",
  intro:
    "The slowest part of building maritime software isn't the code. It's understanding the industry: which certificates a ship needs, how surveys work, who does what between ship and office. We're turning that knowledge into open tools that any developer, or any AI agent, can use from day one.",
  items: [
    {
      title: "Maritime knowledge, ready to use.",
      body: "Plain-English cards on certificates, roles and workflows, each with sources and expert review.",
    },
    {
      title: "Open data schemas.",
      body: "A shared structure for vessels, certificates and surveys, so tools built by different teams work together.",
    },
    {
      title: "A synthetic sandbox fleet.",
      body: "Realistic fake ships and certificates to build and test on, with no real data.",
    },
    {
      title: "Agent-ready setup.",
      body: "Every repo includes instructions for Claude Code and Codex, and an MCP server, so setup takes one line.",
    },
  ],
  outro:
    "Free to build on. Built for an industry that India's Maritime Amrit Kaal Vision 2047 is pushing to digitise.",
};

export const repos = {
  title: "Repositories",
  items: [
    {
      name: "maritime-context-pack",
      description: "Certificate knowledge cards, schemas, a synthetic fleet and an MCP server.",
    },
    {
      name: "repo-template",
      description: "The secure starter every new Ahum tool begins from.",
    },
    { name: "community-site", description: "This website." },
    { name: ".github", description: "Code of conduct, contributing guide and templates." },
  ],
};

export const buildDays = {
  title: "Build days",
  paragraphs: [
    "Build days are short, hands-on events where developers solve real problems brought by maritime companies, using Ahum's open tools and the sandbox fleet. You work in a team, get guidance from our team and industry experts, and the best solutions go back to the company that set the problem, sometimes as a paid pilot.",
    "No maritime background needed. If you can code and want to learn, you're welcome.",
    "Upcoming dates are announced in the community and on GitHub.",
  ],
};

export const join = {
  title: "Join the community",
  steps: [
    {
      title: "Start on GitHub.",
      body: "Star the repos, read the quickstart, and pick up a good first issue.",
    },
    {
      title: "Join the conversation.",
      body: "Our community lives on WhatsApp. Ask us on GitHub Discussions for an invite.",
    },
    {
      title: "Bring what you know.",
      body: "Seafarers, surveyors and maritime professionals can contribute without code by correcting or adding knowledge cards.",
    },
  ],
  cta: { label: "Find a good first issue", href: GOOD_FIRST_ISSUES_URL },
};

export const footer = {
  contributorsTitle: "Contributors",
  credit: "Ahum is run by",
  creditLink: { label: "Ahum Labs", href: ORG_URL },
  licence: "Code licensed under Apache-2.0. Knowledge content licensed under CC BY 4.0.",
};

// Add yourself here in your pull request: { name: "Name or handle", url: "https://..." }.
// Use only the name or handle you want to be public. No emails, ages, schools or locations.
export const contributors = [];
