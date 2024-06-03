# CLS is not a one-dimensional value

This is an example that showcases different scenarios that produce different CLS scores. There are two elements that cause layout shifts:

- The "Discover Orders" card that gets rendered only when the "dismiss" button hasn't been clicked
- The "Order Details" section that's not visible above the fold on smaller screens

These two scenarios produce different CLS scores:

- Users that dismissed the "Discover Orders" card will have a smaller CLS score than ones that didn't
- Mobile users will have a smaller CLS score than desktop users. Some will even have 0 if they dismissed the "Discover Orders" card.

This example is part of an article that how to measure CLS and how to make sense of RUM data in different scenarios. The article will be linked as soon as it's published.
