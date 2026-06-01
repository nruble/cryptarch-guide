# Cryptarch Guide

A web application that packages and presents data about the items and rewards present in the original DESTINY video game from 2014. Data is a mix of archival copies of API-sourced Destiny Manifest files, and manually collated information from community sources (contemporary and old) or personal observation.

## Open Source License

Included with this repo and any duplicates of it should be a LICENSE and/or COPYING file detailing the Open Source license of this software. If not, see https://www.gnu.org/licenses/. This license applies to all source files of the project even if not further specified in those individual files, unless those files specify thier own licensing. By using, downloading, or installing this project you agree to abide by this license.

Most included media is copyright Bungie, and copied from their CDN for archival purpose. Any other media is either derivative of Bungie copyright (such as recreations of iconography), or copyright Cryptarch Guide and distributed as part of the Open Source license for this software.

In short, you can do almost anything with this project other than distributing closed source versions. You don't own the images, or any of the Manifest files. I'm not anticipating anyone actively redistributing or modifying the project, but I wanted to explicitly make it open source in the event that I am unable to host this application for any reason, and another person sees value in updating/correcting it's information and extending it's life.

## About

Upon returning to DESTINY after almost a decade away, I found the experience very opaque. Unclear on what rewards I could acquire from most sources until I was already acquiring them. Item-viewing tools from a decade ago were either no longer present or broken. Existing Wiki's for the game all faced a combination of outdated, incomplete, or innaccurate information on items and rewards. Some had site performance issues, obligating a user to fallback on archive.org snapshots of the site. All of them had difficulty finding the relevant information if it existed at all, with redundant pages or incomplete categories.

Cryptarch Guide is intended to fill that gap, to provide information on: activity rewards, available items, and item perk variations. At launch it includes an Acquisition Source Index serving as a directory of loot sources (activities, vendors, etc.) and an Item Database for basic searching.

This web application utilizes Vite, React, React Router, and other dependencies listed in the package.json file. Item data is primarily sourced from D1 Manifest files, archival copied JSON files built from API information. Because the game itself is no longer updated, the relevant information is static and live communication with the actual API was deemed unnecessary. This also serves to keep the site functional should the API ever go down, to preserve access to information.

Other data has been manually collated into JSON files for constructing the relevant pages. Information for this process was sourced from too many community sources across a decade or more of time, and could not all be reasonably attributed. Special thanks to RiseofBacon for foundational reprised raid loot table information, to Heli for opening over 100 Shaxx bounties on camera, 

## Future Development

Continued improvement of the application, should it occur, will add a browsable Collection akin to the Collection tab of Destiny 2. This will require further collation of data into correct sub-categories and sets, but would allow users to browse through items in a hopefully more digestable manner. This will still not communicate with live game data, and so will not track personally collected items.

Paired with this would be comprehensive Source links directly on Item pages, looping back to the relevant sources from the Acquisition Source Index. By combining these two, it will allow for a complete browing loop. A user can think "What hand cannons could I get?", browse for Hand Cannons in the Collection, and on any they like see the Source or click through to it for further information and other available rewards.