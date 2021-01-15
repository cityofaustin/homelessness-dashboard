# Homelessness Dashboard

[https://homelessness.dashboards.austintexas.gov/](https://homelessness.dashboards.austintexas.gov/)

The City of Austin's Office of Design and Delivery developed the Homelessness Dashboard to communicate homelessness initiatives to the public. This README is intended to centralize documents and resources related to the project.

## Table of Contents

* [Shared Terms](#shared-terms)
* [Links to resources](#links-to-documents-and-resources)
* [Technical Information](#technical-information)
* [Requirements and Justification](#project-requirements-justification)

## Shared Terms

It's helpful to have shared terms when talking about design and development, so that stakeholders can all stay on the same page when talking about project details. 

Stakeholders mentioned some terms makes sense to have working definitions of. This list is a living document, feel free to add to it as shared terms come up. 

* **Concise**: showing lots of data with the option to drill down for more text info
* **Flat**: content _may_ be grouped by category, esp without a popup or tooltip. We don't want to click onto a different page to get to more information, more like a single page app
* **Top rail**: the four visualiations that are essentially aggregate counts at the top of the dashboard.
* **Tooltip/info**: popup with general information about a dataset. Each layer also has its own tooltip. 
* **Flyout**: popup with specific information about a chart as you hover over it's elements.
* **Section**: a section is a part of the dashboard that has at least one embedded visualization
* **Layer**: a section is composed of layers, each of which is its own visualization

## Links to documents and resources

[Google Drive](https://drive.google.com/drive/u/1/folders/1JlueahWMpDeG2cFkQUVd14ccokbKq3AQ?ths=true)

[Dev version](https://cityofaustin.github.io/homelessness-dashboard/)

[User Research](https://teams.microsoft.com/_#/files/General?threadId=19%3A4206cc13ff6842bbb86553f4bd511a1d%40thread.skype&ctx=channel&context=User%2520Research)
     
  * [Usability Test](https://drive.google.com/drive/folders/1vFfIPVV7MSXGu2hZ-MWXrMYC9rfnx_ix?usp=sharing)

[Content](https://teams.microsoft.com/_#/files/General?threadId=19%3A4206cc13ff6842bbb86553f4bd511a1d%40thread.skype&ctx=channel&context=Content)

[Project Scope and Plan](https://teams.microsoft.com/_#/files/General?threadId=19%3A4206cc13ff6842bbb86553f4bd511a1d%40thread.skype&ctx=channel&context=Project%2520Scope%2520and%2520Plan)


## Technical information

The dashboard is an html file with embedded Tableau visualizations using the [Bootstrap](https://getbootstrap.com/) framework.

#### Changing which visualizations are on the page. 

The top rail components are written in the html directly. The sections of each are noted with code comments ([here](https://github.com/cityofaustin/homelessness-dashboard/blob/09ba7ef44398a5c643158e00b2ac5eeac29aed63/index.html#L158) is an example), and in general the content should be able to be easily updated without having to touch the html structure or class names. 

For the sections and layers, you can easily update which ones are fetched up updating the 'url' entry for each layer in `assets/vizList.js`

The visualizations themselves are made using Tableau. You will need access to the appropriate Tableau workbook to modify their behavior or data source. 

#### Changing content for a tooltip

If the tooltip is associated with a layer, the content is in the 'info' section of that layer's entry in `assets/vizList.js`

If the tooltip is for a top rail, those are current hardcoded into `index.html` under 'title' for a given tooltip. See [here](https://github.com/cityofaustin/homelessness-dashboard/blob/09ba7ef44398a5c643158e00b2ac5eeac29aed63/index.html#L201) for an example.

#### Deploying updates

This github repo is set up in [Netlify](https://app.netlify.com/sites/austin-homelessness-dashboard/settings/deploys) for continuous deployment, under the Office of Design and Delivery account. Any push to the master branch will trigger a rebuild. 


## Project requirements, justification
The project requirements are best thought of as falling into three distinct groups: 

*   Visualizations
    *   This consists of each visualization and its internal styling and functionality.
    *   For example, the [current prototype](https://www.figma.com/file/eot8AHPn65fcLNXvcjpyfd/Homelessness-Prototype?node-id=2%3A15) has at least **8** **separate** visualizations 
*   Website layout & informational content
    *   The dashboard is a collection of these visualizations, displayed on a single website page. 
*   Operations/data management/ETL (find a shared term for this)
    *   The process of managing the data and feeding it to the visualizations to be displayed on the website

_Finding a single tool that works well for even two, let alone all, of these groups will be challenging, and will inevitably entail compromises to all three along the way._
 
Separating out these requirements will make it much easier to evaluate and use the best tools suited for each task. A more modular approach also helps us maintain flexibility, so we can implement a solution iteratively and easily change things as we go and as the project matures.
 
This is why we're going with this flexible and modular combination: 

*   Visualizations: 
    *   **Tableau Public** for creating the initial visualizations
*   Website layout & informational content: 
    *   A **single page, static html website** that displays these embedded visualizations with additional informational content as popovers. This is being combined with other commoon tools and libraries,such as Bootstrap, for rapid development. 
*   Operations/data management/ETL:
    *   Data can remain stored in **Socrata**, although the process for transferring data to Tableau is partially manual at the moment. This may not be a large concern in the short term, especially since the data is currently updated on an annual basis. Current transformations are being docuemented so that we can review the best way to store or transform data for long term sustainability. 
    
### Longer term Data/Operational concerns

*   Data is currently updated **annually**, so a fully automated ETL process may be less of an initial priority. 
*   There are some overall concerns with data quality, data quality will need to be looked at as a separate issue in order to ensure that accurate insights can continue to be derived.
*   Someone with data expertise to make sure reports stay accurate. Long term the data needs to stay somewhere where the data can be managed effectively. 
*   Potentially ability to expand or integrate dashboard into other mediums/more narrative driven content



