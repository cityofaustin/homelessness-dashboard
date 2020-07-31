/*
here we have some essential data for the dashboard, kept seperate from the code. 
this makes both easier to read and maintain.
this was initially created by by converting the google sheet for the project
tech debt/notes:
    * visualization_description is copied from the sheet but not used in the app
    * given the length of the tooltip content, it might make sense to split some of the content out into
      seperate similar files
    * for 'info', the backticks are important. be sure to paste your html inside the backticks
    * make sure each item in the list is seperated by a comma
    * make sure each object is enclosed in brackets and each object is comma seperated
    * ask a dev or a tech savvy person if you're having trouble! <3
*/
const vizList = [
  {
    section: 1,
    section_title: "Newly Homeless",
    layer: 1,

    visualization_description:
      "Change in the number of people who are newly homeless",
    info: `
    <p>
    This count includes anyone who
    </p>
    <ol>
    
    <li>Hasn’t received homelessness services in the last 2 years, including those who have previously been homeless or are experiencing homelessness for the first time
    
    <li>Anyone who is seeking service for the first time in Austin’s CoC, though they have received services elsewhere.
    `,
    link:
      "https://public.tableau.com/profile/sarah.rodriguez#!/vizhome/Changeinthenumberofpeoplewhoarenewlyhomeless/Sheet1?publish=yes",
    url:
      "https://public.tableau.com/views/Changeinthenumberofpeoplewhoarenewlyhomeless/Sheet1?:language=en&:display_count=y&publish=yes&:origin=viz_share_link",
  },
  {
    section: 1,
    section_title: "Newly Homeless",
    layer: 2,
    visualization_description:
      "Comparison of the demographics of people who are newly homeless and people who live in Travis County ",
    info: `<p>
    This count includes anyone who:
    </p>
    <ol>
    
    <li>Hasn’t received homelessness services in the last 2 years, including those who have previously been homeless or are experiencing homelessness for the first time
    
    <li>Anyone who is seeking service for the first time in Austin’s CoC, though they have received services elsewhere.
    `,
    link:
      "https://public.tableau.com/profile/sarah.rodriguez#!/vizhome/NewlyHomelessDashboard/Newly?publish=yes",
    url:
      "https://public.tableau.com/views/NewlyHomelessDashboard/Newly?:language=en&:display_count=y&publish=yes&:origin=viz_share_link",
  },
  {
    section: 2,
    section_title: "Shelter",
    layer: 1,
    visualization_description: "Change in the total number of beds for shelter",
    info: `you need to put stuff here`,
    link:
      "https://public.tableau.com/profile/sarah.rodriguez#!/vizhome/Changeinthetotalnumberofbedsusedtoshelterpeople/HousingandShelter2",
    url:
      "https://public.tableau.com/views/Changeinthetotalnumberofbedsusedtoshelterpeople/HousingandShelter2?:language=en&:display_count=y&:origin=viz_share_link",
  },
  {
    section: 2,
    section_title: "Shelter",
    layer: 2,
    visualization_description:
      "Change in the total number of people who receive shelter",
    info: `you need to put stuff here`,
    link:
      "https://public.tableau.com/profile/sarah.rodriguez#!/vizhome/Changeinthetotalnumberofpeoplewhoreceiveshelter/Sheet1?publish=yes",
    url:
      "https://public.tableau.com/views/Changeinthetotalnumberofpeoplewhoreceiveshelter/Sheet1?:language=en&:display_count=y&publish=yes&:origin=viz_share_link",
  },
  {
    section: 2,
    section_title: "Shelter",
    layer: 3,
    visualization_description:
      "Comparison of the demographics of people who are sheltered and newly homeless",
    info: `you need to put stuff here`,
    link:
      "https://public.tableau.com/profile/sarah.rodriguez#!/vizhome/ReturnsDashboard_15958669451740/Shelter?publish=yes",
    url:
      "https://public.tableau.com/views/ReturnsDashboard_15958669451740/Shelter?:language=en&:display_count=y&publish=yes&:origin=viz_share_link",
  },
  {
    section: 3,
    section_title: "Housing",
    layer: 1,
    visualization_description: "Change in the total number of beds for housing",
    info: `
      <p>
      This visualization shows the count of beds available in housing programs, including:
      </p>
      <ul>
      
      <li>Rapid Rehousing (RRH) - Provides rental assistance and services for short or medium-term periods of time (up to 24 months). The goals of this program is to help people obtain housing quickly, increase self- sufficiency, and stay housed. It is offered without preconditions (such as employment, income, absence of a criminal record, or sobriety).
      
      <li>Permanent Supportive Housing (PSH) - Provides long-term housing subsidies and supportive services. This program is available to families and people with disabilities.
      `,
    link:
      "https://public.tableau.com/profile/sarah.rodriguez#!/vizhome/Changeinthetotalnumberofbedsusedtohousepeople/HousingandShelter3?publish=yes",
    url:
      "https://public.tableau.com/views/Changeinthetotalnumberofbedsusedtohousepeople/HousingandShelter3?:language=en&:display_count=y&publish=yes&:origin=viz_share_link",
  },
  {
    section: 3,
    section_title: "Housing",
    layer: 2,
    info: `you need to put stuff here`,
    visualization_description:
      "Change in the total number of people who exit to homelessness to housing",
    link:
      "https://public.tableau.com/profile/sarah.rodriguez#!/vizhome/Exits_15930134501040/Exits?publish=yes",
    url:
      "https://public.tableau.com/views/Exits_15930134501040/Exits?:language=en&:display_count=y&publish=yes&:origin=viz_share_link",
  },
  {
    section: 3,
    section_title: "Housing",
    layer: 3,
    visualization_description:
      "Comparison of the demographics of people who are housed and sheltered",
    info: `you need to put stuff here`,
    link:
      "https://public.tableau.com/profile/sarah.rodriguez#!/vizhome/HousingDashboard_15958669097400/Housing?publish=yes",
    url:
      "https://public.tableau.com/views/HousingDashboard_15958669097400/Housing?:language=en&:display_count=y&publish=yes&:origin=viz_share_link",
  },
  {
    section: 4,
    section_title: "Returns to Homelessness",
    layer: 1,
    visualization_description:
      "Change in the total number of people who return to homelessness",
    info: `

    <p>
    <strong>Structural barriers contributing to homelessness include increasing cost of living</strong>
    </p>
    <p>
    Affordable housing becomes more scarce and increases housing instability for vulnerable populations.
    </p>
    <p>
    <strong>Institutional barriers contributing to homelessness include discharging people from government institutions without helping them secure stable housing. This includes:</strong>
    </p>
    <ul>
    
    <li>Foster care system
    
    <li>Military
    
    <li>Hospitals
    
    <li>Prisons, jails, and juvenile justice facilities
    </li>
    </ul>
    <p>
    These barriers affect Black and African American people disproportionately, and may explain the high number of returns to homelessness in this demographic.
    </p>
    <p>
    <strong>Relationship Barriers Contributing to Homelessness</strong>
    </p>
    <p>
    The deterioration or loss of a close relationship impacts mental health, but can also lead to loss of housing, money, and social support as well.  <del>A history of traumatic relationships can also increase the risk of becoming homeless. </del>
    </p>
    <p>
    A person, who depended on a street community for emotional and physical safety, may have difficulty transitioning to housing. A successful permanent transition may mean a loss of social support, which can contribute to recurring homelessness.
    </p>
    <p>
    <strong>Personal Barriers Contributing to Homelessness</strong>
    </p>
    <p>
    Substance abuse, mental health issues, and disabilities can contribute to financial instability and homelessness.
    </p>
    <p>
    For someone who is struggling to remain housed, it can be difficult to hold down a job while still receiving necessary services. <del>For example, many of these services are offered during workday hours. This conflict can make it difficult to remain stably housed.</del>
    </p>`,
    link:
      "https://public.tableau.com/profile/sarah.rodriguez#!/vizhome/ReturnstoHomelessness_15919382098890/Returns-total?publish=yes",
    url:
      "https://public.tableau.com/views/ReturnstoHomelessness_15919382098890/Returns-total?:language=en&:display_count=y&publish=yes&:origin=viz_share_link",
  },
  {
    section: 4,
    section_title: "Returns to Homelessness",
    layer: 2,
    visualization_description:
      "Comparison of the demographics of people who return to homelessness and people who are housed",
    info: `you need to put stuff here`,
    link:
      "https://public.tableau.com/profile/sarah.rodriguez#!/vizhome/ReturnsDashboard_15958669451740/Return?publish=yes",
    url:
      "https://public.tableau.com/views/ReturnsDashboard_15958669451740/Return?:language=en&:display_count=y&publish=yes&:origin=viz_share_link",
  },
];
