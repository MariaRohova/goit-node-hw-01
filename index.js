import  {
    listContacts,
    getContactById,
    addContact,
    removeContact,
} from "./contacts.js";

import { program } from "commander";
program
  .option("-a, --action <type>", "choose action")
  .option("-i, --id <type>", "user id")
  .option("-n, --name <type>", "user name")
  .option("-e, --email <type>", "user email")
  .option("-p, --phone <type>", "user phone");

program.parse(process.argv);

const argv = program.opts();


async function invokeAction({ action, id, name, email, phone }) {
  switch (action) {
    case "list": {
      const contacts = await listContacts();
      console.table(
        "🚀 ~ file: index.js:20 ~ invokeAction ~ contacts",
        contacts);
      break;
    }

    case "get": {
      const getContacts = await getContactById();
      console.table(
        "🚀 ~ file: index.js:26 ~ invokeAction ~ getContacts",
        getContacts);
      break;
    }

    case "add": {
      const newContacts = await addContact(name, email, phone);
      console.table(
        "🚀 ~ file: index.js:32 ~ invokeAction ~ newContacts",
        newContacts);
      break;
    }

      case "remove": {
          const deleteContact = removeContact(id);
          console.table(
            "🚀 ~ file: index.js:49 ~ invokeAction ~ deleteContact",
            deleteContact
          );

          break;
    }
     

    default:
      console.warn("\x1B[31m Unknown action type!");
  }
}

invokeAction(argv);
