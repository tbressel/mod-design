/**
 * Component describe the structure of a component sent to the createComponent function
 * the first string is the source of the template
 * the second string is the destination of the template
 */
export type Component = [string, string];





/**
 * ComponentsId lists all the components that can be injected into the DOM
 */
export interface ComponentsId {
header: Component;
footer: Component;
main: Component;
article: Component;
productcardcat: Component;
navigation: Component;
text: Component;
categories: Component;
category: Component;
productcat: Component;
pagination: Component;
find: Component;
results: Component;
resultcard: Component;
}