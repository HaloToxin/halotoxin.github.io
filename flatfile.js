// 1. include the @flatfile/sdk  is installed with npm install @flatfile/sdk
import { Flatfile } from "@flatfile/sdk";

// 2. Pass in your EMBED_ID
const EMBED_ID = "8074403f-d214-4a77-bc45-b181631eb6db";

// 3. a function to trigger `Flatfile.requestDataFromUser` to launch a Portal
export function importData() {
  Flatfile.requestDataFromUser({
    // Development mode = embedId, user, org.
    embedId: EMBED_ID,
    user: { id: 99, name: "John Doe", email: "john@doe.com" },
    org: { id: 77, name: "Acme Inc." },
    // handle submitted data
    onData(chunk, next) {
      // do something with the data
      console.log(chunk);
      // call next() to proceed with the import
      next();
    },
    onComplete() {
      console.log(`Import complete`);
    },
    onError(error) {
      console.error(error);
    },
  });
}

// 4. A way for the user to initiate that import trigger
document.querySelector("#flatfile-button").addEventListener("click", async () => {
  console.log("click");
  await importData();
});
