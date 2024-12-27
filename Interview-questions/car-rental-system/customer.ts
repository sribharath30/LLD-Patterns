export class Customer {
  private name: string;
  private contactDetails: string;
  private license_no: string;

  constructor(name: string, contactDetails: string, license_no: string) {
    this.name = name;
    this.contactDetails = contactDetails;
    this.license_no = license_no;
  }

  getName(): string {
    return this.name;
  }

  getContactDetails(): string {
    return this.contactDetails;
  }

  getLicenseNo(): string {
    return this.license_no;
  }
}
