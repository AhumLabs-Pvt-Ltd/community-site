# Resources for maritime developers

A short, annotated list of open data, standards and tools that are useful when building
maritime software. Primary sources first. Last checked: 2026-11-10. Spot a dead link or a
missing gem? Open an issue or a pull request.

## Open data

- [Danish Maritime Authority: AIS data](https://www.dma.dk/safety-at-sea/navigational-information/ais-data):
  free historical AIS for Danish waters as CSV files. A good first dataset: dense traffic, simple format.
- [MarineCadastre.gov data registry](https://marinecadastre.gov/data): US AIS from NOAA and
  BOEM, by date and area or in bulk. The
  [ais-vessel-traffic repo](https://github.com/ocm-marinecadastre/ais-vessel-traffic) documents
  the files (recent years as GeoParquet; CC0 licence).
- [AISHub](https://www.aishub.net/): a data-sharing network. Feed in your own AIS receiver and
  you get access to the combined feed.
- [Global Fishing Watch APIs](https://globalfishingwatch.org/our-apis/): vessel identity,
  events (port visits, encounters) and fishing activity derived from AIS. Free API key,
  non-commercial use only; results are "apparent" estimates, not ground truth.

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

## From Ahum

- [maritime-context-pack](https://github.com/AhumLabs-Pvt-Ltd/maritime-context-pack):
  certificate knowledge cards, schemas, a synthetic fleet and an MCP server.
