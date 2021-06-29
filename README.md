# DatagridFixFirstColumn

## Description
Datagrid with fixed first column and a horizontal scroll.

## Typical usage scenario
By default, a datagrid keeps al information inside the screen. Which is a good thing until there are so many columns in the screen that it becomes hard to read the data (even on a HD screen).

This is where a horizontal scroll comes in handy.


## Features and limitations

### Features
View more data than fits your screen while the first column stays fixed as you scroll through the datagrid.

### Limitations
Force the datagrid to become larger than your screen width by giving most columns a fixed width in pixels. This can best be a value that matches the amount of content inside for most situations. If the datagrid is kept in width units in percentages, not much will happen. Fixing the first column doesn't do anything without a scroll.


## Dependencies
Vertical scrolling is based on a Mendix default layout and placement inside the 'region-content' (which results in the used class: 'mx-scrollcontainer-center').

## Installation
Install the widget and place after the desired datagrid.

## Configuration
Add a class name to the datagrid and tell the widget to listen to this class.

## Bugs
none known at this moment.