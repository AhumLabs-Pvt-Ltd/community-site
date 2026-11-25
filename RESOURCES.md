# Resources for maritime developers

A short, annotated list of open data, standards and tools that are useful when building
maritime software. Primary sources first. Last checked: 2026-11-25. Spot a dead link or a
missing gem? Open an issue or a pull request.

## Open data

- [Danish Maritime Authority: AIS data](https://www.dma.dk/safety-at-sea/navigational-information/ais-data):
  free historical AIS for Danish waters as CSV files. A good first dataset: dense traffic, simple format.
- [MarineCadastre.gov data hub](https://hub.marinecadastre.gov/): US AIS from NOAA and
  BOEM, by date and area or in bulk. The
  [ais-vessel-traffic repo](https://github.com/ocm-marinecadastre/ais-vessel-traffic) documents
  the files (recent years as GeoParquet; CC0 licence).
- [AISHub](https://www.aishub.net/): a data-sharing network. Feed in your own AIS receiver and
  you get access to the combined feed.
- [Global Fishing Watch APIs](https://globalfishingwatch.org/our-apis/): vessel identity,
  events (port visits, encounters) and fishing activity derived from AIS. Free API key,
  non-commercial use only; results are "apparent" estimates, not ground truth.
- [Norwegian Coastal Administration: access to AIS data](https://www.kystverket.no/en/sea-transport-and-ports/ais/access-to-ais-data/):
  open real-time AIS for Norwegian waters, with history searchable in
  [Kystdatahuset](https://kystdatahuset.kystverket.no/). Free under the Norwegian open
  government licence (NLOD); the open feed leaves out small fishing and leisure craft.
- [EMODnet Human Activities: vessel density](https://emodnet.ec.europa.eu/en/human-activities):
  monthly maps of ship hours per square kilometre in EU waters, by ship type, built from AIS.
  Handy for heatmaps without handling raw tracks. CC BY 4.0; gridded totals only.

## Standards

- [IHO S-100 based product specifications](https://iho.int/en/s-100-based-product-specifications):
  the official list of S-100 family specs (S-101 ENCs, S-102 bathymetry, S-104 water levels,
  S-111 currents, S-124 navigational warnings and more). S-100 is replacing S-57.
- [IHO on GitHub](https://github.com/iho-ohi): working repos for S-100 and its product
  specifications, feature catalogues and validation checks. Not the published editions, but
  the best place to see how the standards are built and discussed.
- [NOAA S-100 developer page](https://marinenavigation.noaa.gov/developer.html): NOAA's notes
  and sample data for building S-100 products.
- [IMO Compendium on Facilitation and Electronic Business](https://www.imo.org/en/OurWork/Facilitation/Pages/IMOCompendium.aspx):
  the IMO Data Set and Reference Data Model behind electronic ship-to-port reporting (FAL
  forms, crew and passenger lists, and more). Start here for port-call data models.
- NMEA 0183 / IEC 61162-1 define the sentences ships' instruments talk in (AIS arrives as
  `!AIVDM` sentences). The specs are paid; the open tools below implement them.

## Regulations going digital

- [IMO FAL.5/Circ.39/Rev.2: Guidelines for the use of electronic certificates](https://wwwcdn.imo.org/localresources/en/OurWork/IIIS/Documents/FAL.5-Circ.39-Rev.2%20-%20Guidelines%20For%20The%20Use%20Of%20Electronic%20Certificates.pdf):
  what an electronic ship certificate must have (a unique tracking number, a way to verify it
  online) to count as "on board". Still cited by many flag states.
- [IMO FAL 49 (March 2025)](https://www.imo.org/en/MediaCentre/MeetingSummaries/Pages/FAL-49th-session.aspx):
  approved new joint FAL-LEG-MEPC-MSC guidelines on electronic certificates (ship and
  seafarer), sent to the other committees for approval. Check IMO for the adopted text.
- [IMO FAL 50 (March 2026)](https://www.imo.org/en/MediaCentre/MeetingSummaries/Pages/FAL-50th-session.aspx):
  approved an IMO Strategy on Maritime Digitalization and cyber security measures for
  maritime single windows, plus a new IMO Compendium version.
- [IMO: Maritime Single Window](https://www.imo.org/en/OurWork/Facilitation/Pages/MaritimeSingleWindow-default.aspx):
  since 1 January 2024 the FAL Convention requires ports to take ship clearance data through a
  single window. This page links the guidelines; read it before building port-call software.
- [Sagar Setu / National Logistics Portal (Marine)](https://nlpmarine.gov.in/): India's
  digital platform for port and shipping services. Useful to see what Indian port processes
  look like online; no public developer API that we could find.
- [Ministry of Ports, Shipping and Waterways: Vision and Mission](https://shipmin.gov.in/en/content/vision-mission):
  where India publishes Maritime India Vision 2030 and Maritime Amrit Kaal Vision 2047, the
  long-term plans that include digitalising ports and shipping services.

## Open-source tools

- [pyais](https://github.com/M0r13n/pyais): pure Python AIS decoder for single messages,
  files and TCP/UDP streams.
- [Signal K](https://signalk.org/) ([server](https://github.com/SignalK/signalk-server)): an
  open data format and server for marine data, bridging NMEA 0183/2000 to JSON over WebSockets.
- [OpenCPN](https://github.com/OpenCPN/OpenCPN): open chart plotter and navigation software,
  with a large plugin ecosystem.
- [gpsd: AIVDM/AIVDO protocol decoding](https://gpsd.gitlab.io/gpsd/AIVDM.html): the best free,
  bit-by-bit guide to AIS messages. Read it alongside a decoder.
- [AIS-catcher](https://github.com/jvde-github/AIS-catcher): turns a cheap software-defined
  radio (RTL-SDR and others) into an AIS receiver with NMEA and JSON output (GPL-3.0).
- [canboat](https://github.com/canboat/canboat): the main open decoder and reference for
  NMEA 2000 messages (Apache-2.0).
- [MovingPandas](https://movingpandas.org/): Python library for trajectories: split voyages,
  find stops, smooth tracks. A good fit for AIS analysis (BSD-3-Clause).

## Papers and benchmarks

- [TrAISformer](https://arxiv.org/abs/2109.03958) ([code](https://github.com/CIA-Oceanix/TrAISformer)):
  a transformer for predicting ship tracks from AIS. The repo ships a preprocessed Danish AIS
  dataset, so it doubles as a ready-made benchmark (CeCILL-C licence).

## From Ahum

- [maritime-context-pack](https://github.com/AhumLabs-Pvt-Ltd/maritime-context-pack):
  certificate knowledge cards, schemas, a synthetic fleet and an MCP server.
