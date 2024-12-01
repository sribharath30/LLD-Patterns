import { Document } from './context/document';
const document = new Document();

document.edit(); // Editing the document in draft.
document.publish(); // Document is sent for moderation.
document.publish(); // Document is published.
document.edit();
