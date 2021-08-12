// Business Logic for AddressBook ---------
function AddressBook() {
  this.contacts = {};
  this.currentId = 0;
}

AddressBook.prototype.assignId = function() {
  this.currentId += 1;
  return this.currentId;
}

AddressBook.prototype.deleteContact = function(id) {
  if (this.contacts[id] === undefined) {
    return false;
  }
  delete this.contacts[id];
  return true;
}

AddressBook.prototype.addContact = function(contact) {
  contact.id = this.assignId();
  this.contacts[contact.id] = contact;
}

AddressBook.prototype.findContact = function(id) {
  if (this.contacts[id] != undefined) {
    return this.contacts[id];
  }
  return false;
}

// Business Logic for Contacts ---------
function Contact(firstName, lastName, phoneNumber) {
  this.firstName = firstName;
  this.lastName = lastName;
  this.phoneNumber = phoneNumber;
}

let addressBook = new AddressBook();
let contact = new Contact("Ada", "Lovelace", "503-555-1111");
let contact2 = new Contact("Grace", "Hopper", "503-555-0199");
addressBook.addContact(contact);
addressBook.addContact(contact2);
addressBook.deleteContact(contact);

Contact.prototype.fullName = function() {
  return this.firstName + " " + this.lastName;
}