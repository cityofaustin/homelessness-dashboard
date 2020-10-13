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
    * link: this was the original link to the viz on tableau if it was't being embedded somewhere
    * url: this is the link we actually need to embed a viz on our page
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
   <p>
This count includes anyone who:
</p>
<ul type="A">

<li>Hasn’t received homelessness services in the last 2 years, including those who have previously been homeless or are experiencing homelessness for the first time.

<li>Anyone who is seeking service for the first time in Austin or Travis County, though they have received services elsewhere.
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
<ul type="A">

<li>Hasn’t received homelessness services in the last 2 years, including those who have previously been homeless or are experiencing homelessness for the first time.

<li>Anyone who is seeking homelessness services for the first time in Austin or Travis County.
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
    info: `<p>
Federally funded shelter types included in this count:
</p>
<ul>

<li>Safe Haven - A program that provides temporary shelter to veterans experiencing homelessness who live with mental illness.

<li>Emergency Shelter - A program that provides people with immediate temporary shelter.

<li>Transitional Housing - A program that provides a supportive longer term shelter that is meant to bridge the gap from homelessness to permanent housing by offering structure, support, life skills, education, etc.`,
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
    info: `<p>
While data has been collected for 2019, it is still being analyzed. New information will be added as it becomes available.
</p>`,
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
    info: `<p>
Children represent a smaller percentage of those sheltered than newly homeless. This is likely due to the fact that children, especially unaccompanied children enter into other systems like the child protective services, foster care, or into the care of family.
</p>`,
    link:
      "https://public.tableau.com/profile/sarah.rodriguez#!/vizhome/ShelteredDashboard/Shelter?publish=yes",
    url:
      "https://public.tableau.com/views/ShelteredDashboard/Shelter?:language=en&:display_count=y&publish=yes&:origin=viz_share_link",
  },
  {
    section: 3,
    section_title: "Housing",
    layer: 1,
    visualization_description: "Change in the total number of beds for housing",
    info: `
      <p>
This visualization shows the beds available in housing programs funded by the Continuum of Care, including:
</p>
<ul>

<li>Rapid Rehousing (RRH) - Rental assistance for periods of time up to 24 months. The goals of this program is to help people get housed quickly and without preconditions (such as income, absence of a criminal record, or sobriety).

<li>Permanent Supportive Housing (PSH) -Long-term housing and supportive services for families and people with disabilities.

<li>Other Permanent Housing (OPH) - A federally funded program that provides long-term housing, without supportive services.
      `,
    link:
      "https://public.tableau.com/profile/sarah.rodriguez#!/vizhome/Changeinthetotalnumberofbedsusedtohousepeople/HousingandShelter3",
    url:
      "https://public.tableau.com/views/Changeinthetotalnumberofbedsusedtohousepeople/HousingandShelter3?:language=en&:display_count=y&:origin=viz_share_link",
  },
  {
    section: 3,
    section_title: "Housing",
    layer: 2,
    info: `<p>
This yearly count includes individuals that have been housed for 6 months or more as well as people who are newly housed. This number does not account for individuals who manage to get housed in non-Continuum of Care housing. 
</p>`,
    visualization_description:
      "Change in the total number of people who exit to homelessness to housing",
    link:
      "https://public.tableau.com/profile/sarah.rodriguez#!/vizhome/Individualswhoreceivehousing/Sheet1?publish=yes",
    url:
      "https://public.tableau.com/views/Individualswhoreceivehousing/Sheet1?:language=en&:display_count=y&publish=yes&:origin=viz_share_link",
  },
  {
    section: 3,
    section_title: "Housing",
    layer: 3,
    visualization_description:
      "Comparison of the demographics of people who are housed and sheltered",
    info: `<p>
Sometimes the number of people who exit to housing is higher than the number of people who stayed in a shelter. An example of this is the veteran population. A higher exit number means that a portion of the exits to housing are happening from the street. A shelter stay is not required to qualify for housing assistance. Veterans have received focused attention and funding from multiple agencies since 2016, which accounts for the high housing rate amongst this demographic. 
</p>`,
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
<strong>What does this data tell us? What does it not tell us?</strong>
</p>
<p>
Not returning to homelessness services in Austin’s Continuum of Care does not necessarily indicate that an individual is no longer experiencing homelessness. These individuals may be seeking services in a different area or avoiding services altogether. 
</p>
<p>
<strong>Comparing Austin to other major Continuums of Care.</strong>
</p>
<p>
2019 data shows that 17% of individuals that received homelessness services in Austin returned to homelessness within 2 years. The national median for major cities is 18%.
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
    info: `<p>
<strong>Three barrier types that contribute to homelessness:</strong>
</p>
<p>
<strong>Structural<br><br></strong>Lack of affordable housing, and lack of support for those struggling with disability, employment, mental health, substance abuse, etc.
</p>
<p>
<strong>Institutional</strong>
</p>
<p>
Government institutions often discharge people without helping them secure stable housing, including<strong> </strong>the foster care system, military, hospitals, prisons, and other justice facilities.
</p>
<p>
<strong>Relationship </strong>
</p>
<p>
The loss of a close relationship impacts mental health. A person who depended on a street community for emotional and physical safety, may have difficulty transitioning to housing. 
</p>`,
    link:
      "https://public.tableau.com/profile/sarah.rodriguez#!/vizhome/ReturnsDashboard_15958669451740/Return?publish=yes",
    url:
      "https://public.tableau.com/views/ReturnsDashboard_15958669451740/Return?:language=en&:display_count=y&publish=yes&:origin=viz_share_link",
  },
];
