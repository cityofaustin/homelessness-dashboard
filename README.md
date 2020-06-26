# homelessness-dashboard
The City of Austin's Office of Design and Delivery is in the process of developing a platform to communicate homelessness initiatives to the public known as the Homelessness Dashboard. This README is intended to centralize documents and resources related to the project.

## Shared Terms

It's helpful to have shared terms when talking about design and development, so that stakeholders can all stay on the same page when talking about project details. 

Stakeholders mentioned some terms makes sense to have working definitions of. This list is a living document, feel free to add to it as shared terms come up. 

* **Concise**: showing lots of data with the option to drill down for more text info
* **Flat**: content _may _be grouped by category, esp without a popup or tooltip. We don't want to click onto a different page to get to more information, more like a single page app
* **Top rail**: the four visualiations that are essentially aggregate counts at the top of the dashboard.
* **Tooltip/info**: popup with general information about a dataset
* **Flyout**: popup with specific information about a chart as you hover over it's elements.

## Links to project resources 

[Teams Channel](https://teams.microsoft.com/l/team/19%3a4206cc13ff6842bbb86553f4bd511a1d%40thread.skype/conversations?groupId=03e35b8c-00f9-44ac-8c62-880483932e59&tenantId=5c5e19f6-a6ab-4b45-b1d0-be4608a9a67f)

[Google Drive](https://drive.google.com/drive/u/1/folders/1JlueahWMpDeG2cFkQUVd14ccokbKq3AQ?ths=true)

## Documents

[Project Scope and Plan](https://teams.microsoft.com/_#/files/General?threadId=19%3A4206cc13ff6842bbb86553f4bd511a1d%40thread.skype&ctx=channel&context=Project%2520Scope%2520and%2520Plan)

[Project Status Reports](https://teams.microsoft.com/_#/files/General?threadId=19%3A4206cc13ff6842bbb86553f4bd511a1d%40thread.skype&ctx=channel&context=Project%2520Status%2520Reports)

[User Research](https://teams.microsoft.com/_#/files/General?threadId=19%3A4206cc13ff6842bbb86553f4bd511a1d%40thread.skype&ctx=channel&context=User%2520Research)

[Content](https://teams.microsoft.com/_#/files/General?threadId=19%3A4206cc13ff6842bbb86553f4bd511a1d%40thread.skype&ctx=channel&context=Content)

[Visualizations](https://teams.microsoft.com/_#/files/General?threadId=19%3A4206cc13ff6842bbb86553f4bd511a1d%40thread.skype&ctx=channel&context=Various%2520Documents)

[Sprint Planning](https://teams.microsoft.com/_#/files/General?threadId=19%3A4206cc13ff6842bbb86553f4bd511a1d%40thread.skype&ctx=channel&context=Sprint%2520Planning)

## Project requirements
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
