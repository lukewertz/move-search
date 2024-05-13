# Find a Flick...

This app will help you search for your next flick to watch. Search and then 
filter for related genre & cast to find something new to watch!


# Project Purpose
Key theoretical objective of the app is to enable fast searching and filtering
with the goal of surfacing new content adjacent to proactively-searched content.

This project is a learning project for me to learn about Algolia and it's
configurations and settings, as well as Tailwind, which I've not used
before.

The sample dataset was provided by Algolia. My key objective in configuring
Aloglia's Relevance Settings was to ensure quality results that aligned with
my (human) expectations. A few of the key configurations included:
- Limiting the searchable attributes
- Configuring index-specific Synonyms
- Configuring Facets (to allow for filtration)

I specifically did not configure pagination, as I was going for more of a
firehose-style display.

## Project Observations
Given more time, I'd love to spend time working further with the `Menu` and `CustomRefinement` objects as they could really elevate the user experience if configured further.

I can also see the possibility of extending such an application to include both 
personalization and a/b testing, given enough data & usage. 