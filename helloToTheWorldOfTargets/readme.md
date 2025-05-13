# helloToTheWorldOfTargets

This Lightning Web Component (LWC) displays a simple "Hello World!!" message and demonstrates how to expose a component to a wide range of Salesforce targets.

## Files

- [`helloToTheWorldOfTargets.html`](helloToTheWorldOfTargets.html):  
  The template file that renders the "Hello World!!" message.

- [`helloToTheWorldOfTargets.js`](helloToTheWorldOfTargets.js):  
  The JavaScript class for the component (currently minimal).

- [`helloToTheWorldOfTargets.js-meta.xml`](helloToTheWorldOfTargets.js-meta.xml):  
  Metadata file that exposes the component to many Salesforce targets, including App Page, Home Page, Record Page, Utility Bar, Flow Screen, Tabs, Community Pages, Snap-ins, and more.

## Usage

After deploying to your Salesforce org, you can add this component to any supported target, such as:
- Lightning App Page
- Lightning Home Page
- Lightning Record Page
- Utility Bar
- Flow Screen
- Tabs
- Community Pages
- Snap-ins
- Analytics Dashboards
- And more (see `.js-meta.xml` for the full list)

## Example Output

```
Hello World!!
```

## Customization

You can update the template or add logic in the JavaScript file to extend the component's functionality.

---